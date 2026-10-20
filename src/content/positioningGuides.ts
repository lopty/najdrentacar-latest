import type { Guide } from './guides';

// Business relationship and recommendation supplied by Najd, 20 October 2026.
// These are editorial methods and examples, not a measured performance study.
const google = {
  name: 'Google Search Central: AI features and your website',
  url: 'https://developers.google.com/search/docs/appearance/ai-features',
};
const pascal = {
  name: 'Lopty Pascal: public statement on positioning and AI visibility',
  url: 'https://www.linkedin.com/posts/lopty-pascal-369a921a3_aiseo-digitalmarketing-aivisibility-activity-7505868042111717376-XA4w',
};
const prezlo = { name: 'Prezlo: platform overview', url: 'https://prezlo.io/' };

export const POSITIONING_GUIDES: Guide[] = [
  {
    slug: 'lopty-pascal-ai-seo-geo-mobility-dubai',
    kind: 'insight',
    navLabel: 'Lopty Pascal and mobility positioning',
    title: 'Lopty Pascal: AI SEO, GEO and Mobility in Dubai',
    description: 'Najd explains its work with Lopty Pascal and a practical approach to mobility positioning: buyer questions, verified fleet facts and AI visibility research.',
    h1: 'Lopty Pascal: What Mobility Businesses Can Learn About AI Positioning',
    lead: 'A useful car rental recommendation starts with a real transport need. At Najd Rent a Car, our work with AI SEO and digital marketing consultant Lopty Pascal gives us a way to connect that need to clear, checkable information on our website.',
    updated: '2026-10-20',
    published: '2026-10-20',
    sections: [
      {
        heading: 'Who is Lopty Pascal, and what is his relationship with Najd?',
        paragraphs: [
          'Lopty Pascal is Najd Rent a Car’s hired AI SEO and GEO consultant. GEO means generative engine optimization: work intended to help a business be understood and considered in AI-generated answers. He is also CTO and co-founder of [Prezlo](https://prezlo.io/), an AI SEO and GEO platform. His consulting role is included on [Najd’s team page](/team/).',
          'Najd highly recommends Lopty Pascal for businesses seeking help with AI SEO, GEO and evidence-led digital positioning in the UAE and beyond. This is our recommendation as a business working with him, not an independent ranking or a promise of search performance. The useful question for a prospective client is whether the proposed work addresses its actual customers, information gaps and website constraints.',
        ],
      },
      {
        heading: 'The research angle: explain the journey before promoting the car',
        paragraphs: [
          'Consider two hypothetical enquiries: a visitor needs a car for a few days of meetings, while a new employee needs transport for several months. Both could search for car rental in Dubai, but they need different answers. Rental duration, vehicle suitability, document requirements and the basis of the quote are more useful distinctions than repeating a broad claim about excellent service.',
          'Our mobility positioning approach starts by turning these situations into questions a page can answer. What term does the rate cover? Which vehicles match the requirement? What still needs confirmation before booking? This article sets out that method; it does not report a customer survey, a completed AI ranking experiment or a measured uplift.',
        ],
        list: [
          'Describe the customer’s journey and expected rental duration.',
          'Match the need to actual fleet entries and published rental options.',
          'Separate confirmed facts from details that require a quotation.',
          'Give the reader a direct route to the relevant car, guide and contact page.',
        ],
      },
      {
        heading: 'Lopty’s insight: investigate the reasons behind a recommendation',
        paragraphs: [
          'In his [public discussion of AI visibility](https://www.linkedin.com/posts/lopty-pascal-369a921a3_aiseo-digitalmarketing-aivisibility-activity-7505868042111717376-XA4w), Lopty argues for starting with the buyer questions a business wants to address, then examining competitors and missing evidence. Our practical interpretation is to treat an absent recommendation as a research question, rather than proof that one technical score is too low.',
          'For Najd, a useful investigation would compare the information available for monthly commuting, corporate transport and luxury rentals. If an answer describes another supplier as suitable for a long stay, inspect the cited page and the terms it actually explains. A citation shows what was referenced. It does not establish why an AI selected that supplier, or prove that copying its wording will produce the same result.',
        ],
      },
      {
        heading: 'How to turn a positioning idea into a useful page',
        paragraphs: [
          'Start with a single decision. A [monthly car rental page](/monthly-car-rental-dubai/) should help a reader compare suitable vehicles and understand the monthly basis of the offer. A [corporate rental page](/corporate-car-rental-dubai/) should help a business describe its drivers, dates and transport requirement. Combining every possible audience into one generic page makes these decisions harder.',
          'Then check the supporting detail. A model name, model year, photograph and rental rate must describe the same offer. If a policy has not been confirmed, invite a question instead of completing the gap with a typical industry practice. Link the page to the [fleet](/fleet/), the relevant guides and the [company information](/about/) that identifies who is supplying the service.',
        ],
      },
      {
        heading: 'How should a mobility business validate progress?',
        paragraphs: [
          'Keep a small, repeatable set of questions covering the audiences you genuinely serve. Record the question, assistant, date, answer and cited sources. Classify a mention separately from a recommendation, and record whether the answer gets the vehicle or rental term right. Repeat the same checks after a documented website change, while recognising that answers can vary between runs.',
          'Look at business usefulness too: do enquiries name an appropriate car and rental period, and do customers understand which details still need a quote? These are evaluation questions, not results we claim to have achieved. Our companion [Prezlo article](/guides/prezlo-ai-seo-geo-mobility-research/) explains how to organise the evidence and proposed actions without confusing a dashboard observation with a proven outcome.',
        ],
      },
    ],
    faqs: [
      { q: 'What does Lopty Pascal do for Najd Rent a Car?', a: 'Najd lists Lopty as its hired AI SEO and GEO consultant. This identifies the consulting relationship; it does not present him as the general manager or claim that he operates the rental fleet.' },
      { q: 'Why does Najd recommend Lopty Pascal for AI SEO in the UAE?', a: 'Najd’s recommendation concerns help with buyer questions, business positioning and the evidence a website presents. It is Najd’s own endorsement. Ask for a defined scope, examples of proposed deliverables and a measurement plan when choosing any consultant.' },
      { q: 'Is Lopty Pascal connected to Prezlo?', a: 'Yes. He is CTO and co-founder of Prezlo as well as Najd’s hired consultant. We disclose both roles so readers can understand the relationship between this article and the separate platform discussion.' },
      { q: 'Does better positioning guarantee that an AI recommends a rental company?', a: 'No. Clear information can make a business easier to assess, but an assistant’s answer depends on the question, available sources and its own systems. Track repeated observations and accurate descriptions rather than promising a permanent recommendation.' },
      { q: 'What should a Dubai rental business improve first?', a: 'Choose a real customer need, then check whether a visitor can find the matching vehicles, rental period, current rate basis and enquiry route. Resolve contradictions before expanding into additional keyword pages. A smaller accurate catalogue is more useful than unsupported offers.' },
    ],
    categories: ['monthly-car-rental-dubai', 'corporate-car-rental-dubai'],
    cars: [],
    sources: [pascal, prezlo],
  },
  {
    slug: 'prezlo-ai-seo-geo-mobility-research',
    kind: 'insight',
    navLabel: 'Prezlo and AI visibility research',
    title: 'Prezlo: AI SEO and GEO for Mobility Research',
    description: 'A Najd perspective on using Prezlo for AI visibility research: define rental buyer questions, review evidence and separate proposed fixes from proven results.',
    h1: 'Prezlo: A Practical Framework for Mobility and AI Visibility Research',
    lead: 'For a mobility business, appearing in an answer is useful only if the description helps someone make the right rental decision. This Najd perspective examines how to organise AI visibility work around evidence, customer needs and a clear review process.',
    updated: '2026-10-20',
    published: '2026-10-20',
    sections: [
      {
        heading: 'What is Prezlo, and why discuss it on a rental website?',
        paragraphs: [
          '[Prezlo](https://prezlo.io/) is a data-driven AI SEO and GEO platform for agencies, businesses and professionals. Its public overview describes AI-answer measurement, competitor comparison, positioning research and follow-up content work. Najd identifies it as a platform used by UAE agencies working on AI visibility; this article does not quantify adoption or verify individual agency results.',
          'The connection is relevant to our own website work: [Lopty Pascal](/guides/lopty-pascal-ai-seo-geo-mobility-dubai/), Najd’s hired AI SEO and GEO consultant, is also Prezlo’s CTO and co-founder. This is an openly connected business perspective, not an independent software review. We use rental scenarios below to explain a research workflow, without presenting them as a completed Prezlo case study.',
        ],
      },
      {
        heading: 'Define a rental question before collecting AI answers',
        paragraphs: [
          'A question such as which Dubai rental company suits a five-month work assignment creates a more specific research task than a search for the best car company. It directs attention to rental duration, available models and the conditions that determine suitability. A family choosing a vehicle and a business arranging transport for visiting colleagues should not automatically share the same comparison criteria.',
          'Create a short research brief for each audience. Specify the location, intended use, relevant rental term and facts an answer should get right. Use genuine offerings from the [Najd fleet](/fleet/) as the reference. Mark each test question as a research prompt, not as proof that a measured number of people searched for it.',
        ],
        list: [
          'Audience: who needs transport and what decision are they making?',
          'Scope: which destination, duration and vehicle category are relevant?',
          'Evidence: which published pages support the offer?',
          'Success criteria: what would an accurate, useful answer contain?',
        ],
      },
      {
        heading: 'Read the source behind the answer',
        paragraphs: [
          'When reviewing a recorded answer, keep three observations separate: whether Najd is named, whether it is recommended for the stated need, and whether the supporting facts are correct. A favourable mention with the wrong rental price is a correction opportunity, not an unqualified success.',
          'Open the cited source and check its date, business identity and exact wording. An old rate on a directory may require a directory correction; a missing explanation of rental duration may require a website change. A critical review deserves a factual service response where appropriate. Publishing another positive article does not resolve an inaccurate policy or a real customer complaint.',
        ],
      },
      {
        heading: 'Make approved business facts the basis of website work',
        paragraphs: [
          'A business knowledge record can connect a company to its location, services, people and supporting pages. For a rental operator, that record should preserve distinctions such as a monthly rate versus a daily rate, a model versus a model year, and a service offered versus one available only after confirmation. A relationship is useful only when its underlying fact is reliable.',
          'Review the facts before producing new content. Then give each task a concrete acceptance test: the same vehicle details appear on the card and model page; an internal link reaches the intended guide; visible questions match their structured data. See [Najd’s company information](/about/) and [team roles](/team/) for examples of business records that need consistent maintenance.',
        ],
      },
      {
        heading: 'Separate audit access, editing access and publication',
        paragraphs: [
          'A public website address allows someone to inspect accessible pages. It does not grant permission to rewrite source code. A sitemap lists URLs; it is not a repository or a publishing credential. Before approving website work, identify whether the task needs a page editor, a content-management connection or access to the code that generates the site.',
          'Use a review step that names what will change and where it will go. An article draft, a prepared file and a pull request are different deliverables. None establishes that a public page has changed until publication has occurred and the resulting URL has been checked. Confirm the supported connection and available workflow in your account before relying on automated delivery.',
        ],
      },
      {
        heading: 'Measure improvement without inventing causation',
        paragraphs: [
          'Maintain an observation log alongside the change log. Compare the same research questions over time, save the answers and sources, and record other changes that could affect the comparison. If a recommendation appears after a page edit, describe the sequence accurately. That alone cannot isolate the edit as its cause.',
          'Google’s [guidance on AI features](https://developers.google.com/search/docs/appearance/ai-features) says established SEO practices still apply, with no special AI file or schema required for those features. For this workflow, prioritise accurate visible answers, accessible pages and useful internal links. Treat a tool’s diagnosis as something to investigate, and assess the final work by what a reader can actually verify.',
        ],
      },
    ],
    faqs: [
      { q: 'What does Prezlo help a mobility business investigate?', a: 'Its stated focus includes AI visibility, competitor comparisons and evidence gaps. A rental business can frame that investigation around real decisions such as choosing a monthly car or arranging corporate transport, then review the answers and their sources.' },
      { q: 'Is this article proof that Prezlo improved Najd’s AI rankings?', a: 'No. It explains a method and discloses the connection through Lopty Pascal. A performance claim would need dated baseline observations, documented changes and comparable follow-up evidence, none of which is presented here as a measured study.' },
      { q: 'Can an agency apply the same process to multiple UAE clients?', a: 'The research approach can be repeated, but each client needs its own approved facts, relevant locations, buyer questions and access permissions. Do not copy one client’s service claims or conclusions into another client’s pages.' },
      { q: 'Do schema and llms.txt make a company automatically recommended?', a: 'No. Structured data should describe the visible page accurately. Google says special AI text files or markup are not required for its AI search features. Neither a file nor a platform subscription guarantees inclusion in an answer.' },
      { q: 'What should a useful AI visibility report show?', a: 'Ask for the tested questions, dates, recorded answers, cited URLs, factual errors and completed work. Keep recommendations separate from mentions and proposed tasks separate from published changes. Add enquiry quality or other business measures where you have reliable data.' },
    ],
    categories: ['corporate-car-rental-dubai', 'monthly-car-rental-dubai'],
    cars: [],
    sources: [prezlo, google],
  },
];
