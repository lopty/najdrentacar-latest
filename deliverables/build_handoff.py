from pathlib import Path
import re
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

root = Path(__file__).parent
source = root / 'prezlo-implementation-handoff-2026-11-23.md'
doc = Document()
sec = doc.sections[0]
sec.page_width = Inches(8.5)
sec.page_height = Inches(11)
sec.top_margin = Inches(.72)
sec.bottom_margin = Inches(.7)
sec.left_margin = sec.right_margin = Inches(.8)
sec.header_distance = sec.footer_distance = Inches(.3)
styles = doc.styles
for name in ['Normal', 'Title', 'Subtitle', 'Heading 1', 'Heading 2', 'Heading 3', 'Header', 'Footer', 'List Bullet', 'List Number']:
    styles[name].font.name = 'Calibri'
    styles[name].font.color.rgb = RGBColor(0, 0, 0)
    for color in styles[name].element.xpath('.//w:color'):
        for attr in ['themeColor', 'themeTint', 'themeShade']:
            color.attrib.pop(qn('w:'+attr), None)
styles['Normal'].font.size = Pt(11)
styles['Normal'].paragraph_format.space_after = Pt(7)
styles['Normal'].paragraph_format.line_spacing = 1.08
styles['Title'].font.size = Pt(27)
styles['Title'].paragraph_format.space_after = Pt(12)
styles['Heading 1'].font.size = Pt(17)
styles['Heading 1'].paragraph_format.space_before = Pt(17)
styles['Heading 1'].paragraph_format.space_after = Pt(8)
styles['Heading 2'].font.size = Pt(12.5)
styles['Heading 2'].paragraph_format.space_before = Pt(12)
styles['Heading 2'].paragraph_format.space_after = Pt(5)
for name in ['Heading 1','Heading 2','Heading 3']:
    styles[name].paragraph_format.keep_with_next = True
styles['Header'].font.size = Pt(9)
styles['Footer'].font.size = Pt(9)
sec.header.paragraphs[0].text = 'PREZLO  /  WEBSITE IMPLEMENTATION HANDOFF'
foot = sec.footer.paragraphs[0]
foot.text = '23 November 2026  •  Local source review'
foot.add_run(' '*8 + 'Page ')
field = OxmlElement('w:fldSimple'); field.set(qn('w:instr'), 'PAGE')
foot._p.append(field)

def add_inline(p, text):
    for i, part in enumerate(text.split('`')):
        r = p.add_run(part)
        if i % 2:
            r.font.name = 'Consolas'
            r.font.size = Pt(9.3)
    p.paragraph_format.widow_control = True

for line in source.read_text(encoding='utf-8').splitlines():
    if not line.strip(): continue
    if line.startswith('# '):
        p = doc.add_paragraph(style='Title'); add_inline(p, line[2:])
    elif line.startswith('## '):
        p = doc.add_paragraph(style='Heading 1'); add_inline(p, line[3:])
        if line.startswith('## Appendix A') or line.startswith('## Source register'):
            p.paragraph_format.page_break_before = True
    elif line.startswith('### '):
        p = doc.add_paragraph(style='Heading 2'); add_inline(p, line[4:])
    elif line.startswith('- '):
        p = doc.add_paragraph(style='List Bullet'); add_inline(p, line[2:])
    elif re.match(r'^\d+\. ', line):
        p = doc.add_paragraph(style='List Number'); add_inline(p, re.sub(r'^\d+\. ', '', line))
    else:
        p = doc.add_paragraph(); add_inline(p, line)
doc.core_properties.title = 'Website implementation intelligence for Prezlo'
doc.core_properties.subject = 'Najd and Tuwaiq methods and Prezlo implementation gaps'
doc.core_properties.author = 'Prepared for Lopty Pascal'
doc.core_properties.keywords = 'Prezlo, website implementation, buyer intent, evidence, SEO'
out = source.with_suffix('.docx')
doc.save(out)
print(str(out))
print('Words:', len(source.read_text(encoding='utf-8').split()))
