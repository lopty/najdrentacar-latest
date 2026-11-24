# Website implementation intelligence for Prezlo

Prepared for Lopty Pascal and Claude • 23 November 2026

## Purpose and main conclusion

This handoff explains the website method developed through the Najd Rent a Car and Tuwaiq Travel work, compares it with the current Prezlo source code, and proposes an implementation sequence. The commercial objective is straightforward: a customer describes the business outcome they want, supplies or confirms the necessary facts, and Prezlo prepares a coordinated website improvement that an implementation manager can review and deliver.

Prezlo already has important parts of this system. The local code contains positioning analysis, saved plans, business knowledge, attachment reading, buyer-question records, draft gates, website editing connectors, a coding workspace and publication-state rules. It should not be rebuilt as another unrelated agent. The next step is to connect these parts through a durable site-wide plan, with explicit intent ownership, evidence dependencies, implementation batches and live verification.

The central lesson from Najd and Tuwaiq is that the work was not simply writing more articles. We coordinated inventory, business facts, commercial pages, supporting guides, navigation, structured data, rendering, images, prices and enquiry handling. A single business correction could require changes in all those places. Prezlo needs to understand and manage those dependencies.

## How to use this handoff

Claude should first read the findings and implementation sequence, then inspect the referenced source files before making changes. Existing uncommitted work must be preserved. This review did not change application code, push commits, deploy a site, run a paid generation task or contact a customer. It inspected the three local projects and ran a limited set of local checks.

The conversation appendix reconstructs the available discussion and decisions. It is not a verbatim export of every message, attachment, tool result or other chat. Earlier assistant reports are historical claims unless independently checked here. The supplied WhatsApp screenshot is commercial context; it is not independent proof of search attribution. Private chat participants, verification identifiers and deployment credentials are intentionally omitted.

## Evidence and verification boundaries

The reviewed roots are C:/Users/Lopty/Desktop/App/najdrentacar-latest, C:/Users/Lopty/Desktop/App/tuwaiq-travel and C:/Users/Lopty/Desktop/App/prezlo. References beginning N, T and P below identify those roots. Source references describe the local snapshot inspected on this date, not necessarily the deployed version.

Current checks performed for this handoff:

- Najd: `node scripts/audit.mjs` passed against the existing generated output, auditing 76 pages. Two descriptions were warned as potentially truncated, at 166 and 173 characters.
- Tuwaiq: `node --import tsx scripts/audit.ts` passed against the existing generated output, auditing 103 prerendered pages.
- Prezlo: 44 tests passed, zero failed or skipped, across positioning, technical planning, site scope, frozen draft handoff and evidence-reading suites.
- No fresh production builds or whole-suite/database runs were performed for this documentation-only review. Auditing an existing dist folder does not establish that it matches every current source change.
- No live repository delivery, CMS write, lead submission, analytics account or production sandbox was tested here.

The user reported three Tuwaiq leads visible in Google Sheets and search visibility for buyer queries. The supplied chat screenshot describes three leads in three days; an earlier message described three leads from the previous week. These may be different reporting windows. Neither statement establishes the acquisition channel or proves that restructuring caused the leads. The Najd ChatGPT screenshot demonstrates one displayed recommendation for long-term rental in Al Quoz, not stable placement across engines or all Dubai queries.

## The method used on Najd

### Start with the business and the actual offer

The owner supplied the fleet, prices, model years, licence number, contact details, delivery confirmation, presentation decks, team corrections and photographs. Those facts took precedence over plausible rental-industry assumptions. Ambiguities were clarified instead of filled in: the Audi A6 long-term rate obscured by a cursor was confirmed as AED 3,800; mileage was confirmed as 250 km per day and 4,500 km per month.

Fleet information was centralised rather than manually repeated in unrelated pages. Luxury cars retained approved daily and weekly rates; economy vehicles had daily and weekly prices removed. Monthly and five-month-plus rates were corrected, including model-year variants. The Chevrolet Suburban weekly calculation was AED 550 × 7 × 90%, or AED 3,465; its monthly rate was AED 8,000. The request also required removing obsolete cheap-price claims throughout site copy and SEO output, not just changing the visible cards.

This illustrates a reusable rule: a price is a structured offer with a vehicle or service, period, currency, eligibility and validity. The rendered card, detail page, comparison text, structured offer and machine-readable summary should all derive from the same record. A search-and-replace across prose alone cannot maintain that contract. [N1, N2]

### Separate commercial intent from education

The site uses commercial category pages, individual vehicle pages, trust pages and guides. The owner asked for luxury, economy, SUV, monthly, long-term, B2B, tourist and seasonal intent coverage. Existing category destinations were reused where the intent already had a strong page. New guides addressed different buying decisions rather than recreating the same landing page under a slightly different phrase.

The later Dubai expansion added corporate fleet quotation, executive guest transport and mileage guidance. The office being in Al Quoz did not mean the whole service market was only Al Quoz. Conversely, expanding the target to Dubai did not justify inventing branches, delivery guarantees or repetitive neighbourhood pages. The review explicitly deferred area pages that lacked distinctive service facts. [N3]

The owner-specific rule was to avoid a standalone inventory category with fewer than two matching cars. That is a useful Najd policy, not a universal SEO rule. A specialist business with one genuine product can still deserve a useful product or service page. Prezlo should make eligibility rules depend on the business model and the evidence available.

### Build proof alongside the sales pages

About, team, licence, service standards, reviews and contact information support the commercial pages. The owner corrected Walid to Marketing Manager and Maher to General Manager. Lopty was retained as a hired AI SEO and GEO consultant because he was already listed and the owner explicitly instructed that role, even though the later v7 operational team presentation did not list him.

The licence number supplied by the owner was 532541. The important implementation lesson is consistent identity and provenance, not using a licence number as a generic ranking trick. A licence number does not independently prove every advertised claim. Authority names, validity and legal details require their own evidence and freshness checks.

Eight supplied logos were framed as clients across Najd and the Al Basel Group network because the owner described cross-selling. They were not converted into claims that every organisation was a direct Najd client, official partner or endorser. Storage photographs supported a specific Al Quoz storage page, but did not establish climate control, insurance, security staffing, access hours or prices. Those unstated features were not invented. [N3]

### Connect the page set

Commercial pages point to matching vehicles and decision guides. Guides point back to the relevant offer and next step. Trust information is accessible throughout the site. Pages need a meaningful incoming link in the main content, not merely an entry in a giant footer. Breadcrumbs explain hierarchy, while contextual links explain relationships that do not fit a strict tree.

The reusable output is a page graph: each page has a purpose, primary intent, parent where applicable, related pages, proof sources and a conversion destination. A page count alone tells us little. Seventy-six disconnected or repetitive pages would be worse than a smaller coherent set.

### Implement and check the rendered website

Najd uses React and Vite with server rendering during the build to produce static HTML per route. Its audit enforces unique titles, descriptions, H1s and canonicals; checks links, assets, repeated long text and orphans; validates JSON-LD parsing; and compares fleet pricing in visible content and schema. It also checks mileage and rejects retired economy rates. Guides must have at least five FAQ entries. [N1, N2]

The current Najd audit forbids client module scripts and buttons. Those are project choices, not standards to apply blindly to Prezlo customers. A proper form needs buttons, and Tuwaiq needs client behaviour for enquiries. The general requirement is readable initial content, crawlable navigation and functioning user interactions.

The audit’s exact-paragraph threshold catches accidental repetition; it does not detect every semantically duplicated page. Its JSON parsing check does not prove correct schema semantics or search eligibility. The reusable system should preserve these practical gates and add semantic review and business-specific assertions.

## The method used on Tuwaiq

Tuwaiq applies the same structural principle to travel: destinations, packages, services, buyer-query pages and guides are connected through shared route and metadata generation. It also prerenders pages, but retains the client behaviour needed for booking and enquiry flows. Its local audit covers 103 generated pages and checks metadata, canonicals, internal links, repeated paragraphs and incoming links. [T1, T2]

The conversion requirement was as important as the ranking requirement. The owner wanted the visitor’s details recorded and then a choice of WhatsApp or telephone. A button that merely opens WhatsApp does not establish that a lead was saved. A form submission that never presents the contact choices also fails the intended experience.

Earlier work addressed hidden-state CSS, dialog visibility, competing button handlers and the distinction between a saved lead and an unconfirmed request. The current lead script requires a readable positive server acknowledgement; an opaque response is not treated as successful receipt. An unresolved submission keeps an honest message while allowing the visitor to contact the business. The endpoint was preserved rather than replaced merely because the user reported a UI problem. [T3]

The personal WhatsApp and call number was changed to +971 54 460 8771; the office contact was not automatically replaced. Prices needed an inline From or Starting from label without awkward line wrapping. These are examples of cross-site invariants: a change should update the appropriate contact role or offer presentation everywhere, while preserving other contacts, layout and existing lead records.

For Prezlo, conversion acceptance must be a first-class part of website implementation. Test the form, delivery acknowledgement, error state and chosen contact action on mobile. Record enquiry submission, confirmed receipt and contact click as distinct events. A WhatsApp click is not proof a message was sent, and a call click is not proof a call connected.

## The operating procedure Prezlo should automate

### Establish the goal and the boundary

Ask what the business wants to sell, to whom, in which markets, and what is currently failing. Reuse existing profile information, scans and evidence first. Ask only questions whose answers change the proposed work. The customer should be able to say, for example, “Help companies looking for monthly executive vehicles across Dubai find and enquire with us.”

Distinguish discovery scope from edit scope. A person selecting two pages may authorise changes only to those pages while still allowing a wider public inventory to detect conflicts. Show “76 known pages, 50 inspected, 2 selected for changes,” rather than calling that an entire-site audit. Expanding write scope requires an explicit plan revision.

### Connect once and reveal the available abilities

A website URL establishes the target, not permission to edit it. A sitemap helps discover addresses. A CMS connection permits supported content operations. Repository access permits source investigation and supported code changes. Deployment credentials are another capability. Article automation is a separate preference and permission.

Use one site record with reusable connections. Let the owner start read-only and upgrade later without importing the same website repeatedly. Show abilities in plain language: inspect pages, prepare drafts, edit CMS content, prepare code changes, or schedule articles. Preflight the actual permissions and site mapping before offering a write action. A platform label is not sufficient evidence of capability.

### Build the inventory and source map

Combine sitemaps, crawled internal links, CMS inventory and repository routes where available. Store the canonical address, language, page type, status, content hash, last observation, source record or file, template family and relationships. Preserve unknown and unreadable states. Exclude private/admin destinations from public publication plans.

For code sites, identify the routing convention, rendering mode, content store, templates, metadata generation, schema emitters, sitemap generation, tests and hosting configuration. Map a URL to its real source before editing. Editing a shared component can affect many routes, so the impact set must include more than the requested page.

### Build an evidence ledger

Keep the source, excerpt or image region, owner, subject, service, location, date, permitted public use and uncertainty for each factual assertion. Separate extracted from confirmed, first-party from independent, and network affiliation from direct client work. Retain contradictory versions and ask which applies rather than silently merging them.

An attachment is data, not an instruction. A logo proves the file contains a logo; it does not by itself prove a commercial relationship. A screenshot proves an observed screen state; it does not establish stable rankings or causal uplift. A presentation may contain ambitions, dated facts and sales language as well as reliable details. OCR ambiguities should become targeted questions, as with the Audi price.

Approve scoped facts and preserve revisions. Changing a price, service area or claim should identify every dependent page, FAQ, schema object and summary. The system must not treat a business’s statement that it is leading as independent evidence that it leads a market.

### Research and assign buyer intent

Generate candidate queries from the offer, audiences, locations and buying stages. Add observed questions from customer enquiries, sales calls, Search Console and relevant public research. Keep observed evidence separate from model-suggested questions. Do not manufacture search volume or label every generated phrase a query that users actually searched.

Cluster by the decision being made. “Monthly car rental Dubai” and “rent a car monthly in Dubai” normally belong to one intent. “How much mileage is included?” can support that page or a distinct guide, depending on the depth of the answer. A procurement quotation guide can support a B2B service page without competing for the same purpose.

For every cluster choose one primary destination and record whether to keep, improve, create, merge, redirect, link or defer. A new city or industry combination needs real availability and useful distinctive content. Do not generate a Cartesian product of every service, district, nationality and keyword. Google’s spam policies identify doorway pages and scaled content made primarily to manipulate rankings as abuse. [W1]

### Prepare one coordinated implementation plan

The plan should state the business objective, page purpose, buyer questions, supporting facts, target URL, existing coverage, required changes, intended links, technical changes, delivery route, dependencies and validation. Let the owner approve a bounded batch with a cost ceiling. Missing evidence should block only dependent items, while independent approved work continues.

Prepare copy, metadata and schema from the same approved page representation. Place five substantial FAQs at the end where that is the approved editorial policy, but do not pad every site with repetitive questions. The useful output is a clear answer followed by suitability, practical terms, evidence and a next step. Prefer a rate enquiry to an invented price.

### Implement in the existing design and stack

Use the existing components, typography, navigation, image treatment and content model. Fix incorrect car imagery and preserve model identity. Apply site-wide data changes centrally. Compress and size images appropriately and inspect mobile layout. Never copy competitor benefits, prices or imagery permissions into the client’s offer.

Code agents need tools, context, limits and verification. The useful loop is inspect, map, edit, run checks, read failures, repair and review the final diff. A capable model does not guarantee it will avoid breaking a site. Good execution depends on correct evidence, an isolated environment, realistic tests and visible limits.

### Validate before delivery and verify afterwards

Check changed routes plus affected shared templates and the whole-site link graph. Validate content, schema, prices, contact roles, image availability, mobile layout, forms and technical output. Present exact revisions, changes and failed or missing checks. Deliver through a supported CMS operation, reviewed pull request or installation package.

Prepared, submitted, merged, deployed and publicly verified are different states. After deployment, fetch the public URLs and compare them with the approved manifest. Check links from existing hubs, canonical and indexability behaviour, visible content and sitemap presence. A successful local build or a pull request URL cannot establish that the customer’s public website changed.

## What Prezlo already has

### Planning and context

`shared/site-positioning.ts` defines service, place, case-study, FAQ and About plan items, create/strengthen actions, proof slots and link ideas. It compares services and locations with page content, identifies missing proof and orphan pages, and uses existing route sections for suggested paths. It is a useful deterministic baseline, not merely a text prompt. [P1]

`server/site-positioning-server.ts` saves plans, gathers approved facts and reads pages from an existing scan. It limits the positioning read to 50 pages, eight concurrent requests and a 40-second overall budget. It reports partial coverage. Technical planning separately samples up to 20 pages by commercial role and URL family and explicitly labels its tasks as proposals rather than a running queue. [P2, P3]

`shared/website-handoff.ts` carries recommendation context without granting execution authority. `website-workspace.tsx` reads Playbook context and presents a goal conversation. The source explicitly tells the user that this conversation gives advice and that preparation is a later step. This is part of the remaining mental gap between describing a goal and commissioning a coherent implementation. [P4]

### Evidence and drafting

Prezlo has knowledge records with versions and a change log, trust evidence, attachment extraction and an evidence-reading explanation. File handling supports PDF, DOCX, text/Markdown/CSV and PNG/JPEG/WebP. The inspected handler does not accept PPTX. DOCX extraction explicitly excludes embedded images, headers and footers; ordinary PDF text extraction does not interpret all embedded images. The Najd presentation workflow therefore is not fully reproduced by this ingestion route. [P5, P6]

Buyer-question evidence records distinguish sales, enquiries, interviews, Search Console and a hub-topic basis. The site-agent context includes saved tracked questions and profile targets. Its tools can read the plan/facts/pages, prepare pages and internal links, ask the owner and finish. It cannot publish. This is a good boundary to retain. [P7, P8]

Draft gates check supplied claims, recognised brand rules, internal URLs and other content properties. They also disclose brand rules that the automatic checks do not understand. These are valuable controls, but the inspected gates operate mainly on text and supplied evidence strings, not a full claim-to-fact-revision dependency graph. [P9]

### Code and delivery

The coding agent can list, read, search, write and edit files and run permitted commands. It checks whether project checks passed after the last edit. Repository delivery is separate from generation and requires review. A saved website draft can now be frozen and passed to a coding task, including title, body and FAQs. It would be wrong to say there is no bridge at all between drafts and code. [P10, P11]

The capability matrix distinguishes WordPress, Shopify, Wix, custom CMS, repositories and no connection. Existing-page replacement and link drafting in the site-agent toolbox use WordPress readers. The code workspace offers another path, but there is not one interchangeable implementation route for every platform. The coding policy primarily supports npm project commands; arbitrary Python/PHP executables and lockfile edits are restricted. [P8, P12]

Technical repair state already distinguishes unknown outcomes, expired reviews, verification and unsupported edit paths. Reuse those honesty conventions. The inspected state derivation is specifically tied to missing-canonical repair, so it should not be mistaken for a complete lifecycle for a new multi-page content programme. [P13]

## Gaps and recommended priorities

### Priority one  A durable whole site implementation contract

There are saved positioning plans, site-agent runs, drafts and code tasks, but they are different units of work. Positioning items currently expose create or strengthen, not a full keep/merge/redirect/defer lifecycle. The structural build specification proposes explicit plan items, dependencies, revision-bound approvals, facts and deliveries, and labels itself a draft. A search of server, shared and migration sources did not find the proposed structural table names or claim-gate implementation. This is evidence that that particular specification is not implemented under those names, not proof that no related functionality exists elsewhere. [P1, P14]

Extend existing records into a common implementation plan. Preserve the current technical repair and draft systems instead of creating a rival state engine. Give each item a stable identity, current revision, owning intent, desired URL, source mapping, evidence references, dependencies, validation and execution receipt. Let implementation managers resume and reconcile a whole project, rather than recreate context after each small task.

### Priority one  Complete coverage without pretending every page was read

The current page and time caps are reasonable safeguards. Removing them is not the solution. Add a resumable inventory and batched observations, with counts for discovered, inspected, inaccessible, selected and changed pages. Carry uninspected areas into the plan as uncertainty. Compare proposed new pages against the wider inventory before claiming they are missing. [P2, P3]

The planner’s text normalisation removes characters outside a-z and digits. That makes Arabic-only phrases lose their content in this helper. The current matching is mainly lexical with selected aliases. For Dubai and multilingual customers, add Unicode-aware language handling, entity aliases and semantic comparison over shortlisted pages. Retain deterministic evidence and an uncertain state; a model should not silently decide that an existing page is absent. [P1]

### Priority one  Connect buyer research to page ownership

Saved questions exist, but the inspected positioning input uses current profile targets and stored mention observations rather than an end-to-end research-and-clustering stage. The site agent receives a short question list and has no research tool in its declared toolbox. Do not remove existing research elsewhere in Prezlo; establish an explicit contract that feeds it into this workflow. [P2, P7, P8]

Store query provenance, market, language, date, buying stage, cluster and primary URL. Add near-duplicate and competing-intent checks before generation. Distinguish catalogue hubs, individual offers, comparisons, procurement guidance and informational support. A competitor appearing in an AI answer can motivate investigation, but does not prove that a new page will replace that competitor.

### Priority one  Align evidence policy with the owner promise

The earlier discussion required owner-approved knowledge and no autonomous knowledge changes. Current code has added bounded automatic first-party verification. It also allows the website article writer to continue when approved knowledge is empty, using a recommend-and-verify block. The writer still fails if the approved-knowledge load itself fails. These are materially different conditions, and the handoff should not repeat the old blanket claim that every automatic article stops when no approved facts exist. [P5, P15]

Choose and expose one policy: owner-approved facts only, or explicitly authorised routine first-party facts with provenance and expiry. Preserve owner rejection and removal. First-party attribution is not independent corroboration. In addition, coding-task startup currently catches an approved-knowledge read failure and substitutes an empty list. For business-content tasks, this should become an explicit unavailable state; purely mechanical changes may proceed under an appropriately limited contract. This is a code-level risk identified here, not a demonstrated production fabrication. [P11]

Add fact-revision dependencies and scoped claim validation. The same value must not support an unrelated product, country, year or legal entity. Price changes should invalidate affected offers and generated prose. Content approval should apply to the exact snapshot being delivered, and material source changes should require re-review.

### Priority two  Batch execution across tools and platforms

The site agent is capped at ten page drafts, ten link batches and fourteen default reasoning steps. Its plan tool returns eight items and shortened briefs, while tool responses are also clipped. These limits bound cost, but they do not constitute a resumable full-site programme. Keep bounded tasks and add a parent plan that schedules small coherent batches, preserves decisions and records blocked dependencies. [P8]

The known-link set in the inspected toolbox is initialised from existing link candidates. It is not visibly extended as sibling drafts are created. Reserve planned URLs in the parent plan, then validate links against a staged route manifest. Do not publish references to a page that was rejected or failed delivery. For repositories, assemble related pages, navigation and generated outputs in one reviewed change where practical; CMS delivery needs an ordered batch and partial-failure handling.

Route each operation by verified capability. Current adapter copy still contains “a coding workspace ... which Prezlo does not have yet” in an unsupported-operation helper even though a coding workspace exists. Replace contradictory messages with capability-specific explanations and a link to the available alternative. Do not advertise generic edits for platforms whose current connector only supports metadata or articles. [P12]

### Priority two  Match the attachment workflow used in real projects

Add PPTX text, slide ordering, image extraction and relationship-aware media handling. Preserve the slide or image region from which a fact was read. Let the owner approve a logo for public use and specify direct client, group relationship, supplier or other relationship. Provide a crop/ambiguity review without requiring the user to repeat the whole presentation in chat. [P6]

This is not just broader file support. It is the difference between importing text and creating reusable business evidence. A usable attachment flow should propose facts, show their source, identify uncertainty, and connect approved facts to the pages they unlock.

### Priority two  Verify actual routes and conversion flows

The coding orchestrator creates before/after preview images after preparation, and its documented preview helper photographs the homepage. That does not establish that a changed inner page or mobile booking dialog is correct. Add a route manifest for affected-page previews and browser checks. A successful npm build must be supplemented by content, link, schema and conversion checks. [P10]

Add post-deployment reconciliation for repository work. Confirm expected content and revision on public pages rather than equating pull-request delivery with publication. For leads, test acknowledgement failure, duplicate submission, offline retry, contact selection and CSS hidden states. These were concrete Tuwaiq issues, so they belong in acceptance criteria rather than optional visual polish.

### Priority three  Measurement and operational learning

Separate implementation quality from search outcomes. Measure coverage, validated pages and confirmed deployment first. Then observe impressions, clicks, enquiries and AI-answer samples with dates and conditions. Record baseline and changes, and avoid causal claims without appropriate evidence. Use actual buyer enquiries to improve future briefs.

Do not optimise the agent for the number of pages produced. A better measure is approved buyer intents with a useful, verified destination and a working next step. Track competing pages merged, unsupported claims prevented, unresolved facts and customer intervention required.

## Proposed implementation manager experience

The clean journey should show one main job at a time, with an expandable project record underneath:

1. Add the website. Show that public inspection is available now and offer optional CMS/repository access in one panel.
2. Describe the goal. Prefill relevant Playbook or scanner context and reuse profile facts. Offer an individual-page or whole-site scope.
3. Review the understanding. Show services, markets, existing page coverage and only the evidence questions that affect the plan.
4. Approve the page plan. Show existing pages to improve, new pages to create, pages to merge or defer, why each matters and the cost ceiling.
5. Prepare the changes. Run bounded tasks, show meaningful progress and allow stop/resume. Continue independent items while facts are missing elsewhere.
6. Review the result. Show page previews, content changes, code diff where applicable, unresolved claims and passed/failed/not-run checks.
7. Deliver and verify. Offer the actual supported delivery route, then report the public result separately.

Users can return to any stage, but revisions must preserve dependency and approval rules. The implementation manager can prepare and explain the project; account roles determine whether they may approve content, deliver a CMS write or merely submit for owner approval. A scan or navigation link must never grant permission to modify a site.

“Connect once” means one persistent site identity and reusable access records, not one credential that magically covers every platform. “One pass” means one coherent request and project, with staged internal work and explicit review, not an unlimited unreviewed website rewrite.

## Recommended implementation sequence for Claude

### First establish one vertical slice

Use a fixture modelled on Najd: existing luxury and monthly categories, several vehicle records, a trust section and an incomplete corporate page. The goal is to improve corporate buyer coverage. The plan should reuse the existing commercial page, create one genuinely different procurement guide, add contextual links and update metadata/schema. It must not generate one page for every district.

Persist the plan and item revisions. Reuse the current knowledge, draft and coding records. Add a small manifest that expresses affected routes, facts, links and acceptance checks. Freeze the selected items into one coding request instead of flattening them into a 2,000-character instruction. Preserve the existing single-draft bridge as a supported case of the batch route. [P11]

Then demonstrate the complete journey: requested, planned, approved, prepared, checked, reviewed, delivered and publicly verified. Use a local fixture and controlled delivery stand-in first. Follow with an authorised test repository and test CMS before enabling customers. Do not call a simulated provider response a live acceptance test.

### Extend the shared contract

Reuse existing identifiers and storage wherever possible. Add these logical records or fields only where current models lack them:

- Site inventory revision: canonical identity, language, page observations, coverage and source mapping.
- Intent assignment: cluster, buyer evidence, primary page, supporting pages and collision decision.
- Plan item revision: operation, goal, URL, approved facts, scope, dependencies, draft/code references and expected outcomes.
- Evidence dependency: stable fact ID and revision, scope, expiry, approval policy and dependent claims.
- Delivery snapshot: selected item revisions, base commit or CMS revision, checksum, idempotency key and external receipt.
- Verification observation: expected route/content, actual result, checked time, failure/unknown reason and next action.

The existing structural specification is a strong starting point. Reconcile it with the newer coding workspace, automatic verification and frozen-draft bridge rather than implementing its older platform limitations verbatim. [P14]

### Add research and multilingual coverage

Bring existing keyword and question sources into a stable input contract. Label proposed versus observed queries. Add language-aware matching and a reviewer-visible duplicate decision. Introduce market/industry expansion only after this works. Plan in priority batches using service fit, evidence readiness, buyer intent and implementation effort; only use measured demand when there is a real source for it.

### Add evidence and delivery breadth

Implement PPTX ingestion and public-use relationships, then route-specific previews and conversion checks. Expand supported package managers or frameworks through tested sandbox adapters, not arbitrary command execution. Extend CMS page creation deliberately where its API and layout model permit it. Keep an export package for sites without supported write access, labelled ready for installation rather than published.

### Add continuing maintenance

Scheduled scans may find stale prices, missing pages, changed sources and conversion failures. They should propose a new change set. Structural implementation remains request-driven. Growth article automation may operate under separately granted permission, entitlement, destination health and the chosen knowledge policy. Publishing retries and refunds should reconcile durable receipts before repeating external actions.

## Acceptance scenarios

The first release should pass the following scenarios with deterministic fixtures and selected end-to-end tests:

- Import two selected pages from a larger known site; preserve wider discovery coverage and do not claim the whole site was inspected.
- Find an existing page for the same buyer intent and propose an improvement instead of a near-duplicate URL.
- Reject an unsupported location/service combination while continuing another fully evidenced item.
- Keep Arabic query content through normalisation and prevent collisions across languages.
- Read a presentation containing a client logo and ask about the relationship rather than asserting an endorsement.
- Change a monthly price and update all dependent cards, pages, schema and summaries; retain unrelated rates.
- Remove an economy daily offer everywhere and detect retired price text in generated output.
- Change a fact after draft approval and mark the affected delivery stale.
- Create a hub and two children without publishing broken links if one child fails.
- Freeze a reviewed draft and ensure a later draft edit cannot silently change the queued code task.
- Refuse a stale repository base or CMS revision and request a new review.
- Preserve failed and not-run checks; verify checks after the final edit.
- Preview the changed inner route at desktop and phone widths, including the real enquiry control.
- Simulate a lead endpoint timeout or unreadable response; never display confirmed receipt without acknowledgement.
- Stop and restart a job without duplicating pages, delivery requests or charges.
- Verify a deployed URL independently; keep submitted, live-unverified and verified states distinct.

Najd’s exact repetition and title-length rules should be configurable editorial gates. Tuwaiq’s form behaviour should be an explicit conversion contract. Do not copy the Najd prohibition on all buttons into a generic checker.

## Search guidance that should shape product claims

Google states that its AI search features do not require special AI files or markup. Its current guidance says Google Search does not use llms.txt. Prezlo may provide a maintained llms.txt summary as an optional output, but should not sell it as a prerequisite or a demonstrated ranking factor. Correct indexability, useful content and working links remain practical priorities. [W2]

FAQ content can help readers, but FAQ rich results are limited to qualifying authoritative government and health sites under Google’s published guidance. Five FAQs is an editorial choice from this project, not a promise of a rich result for rental or travel websites. Structured data should match visible, supported facts. [W3]

The earlier request to create clear main pages supports understandable navigation; it cannot force Google to display specific sitelinks. Likewise, private business knowledge helps Prezlo write consistently, but a private graph is not automatically ingested by search engines. Public pages and machine-readable representations are separate outputs that still need delivery and observation.

Backlink fulfilment must stay separate from structural implementation and automatic posting. If paid placement is offered, it needs appropriate disclosure and link qualification; buying links to manipulate rankings is covered by Google’s link-spam policy. Review services should facilitate genuine customer feedback, not sell fabricated positive reviews. [W1]

## What to request from the business owner

Ask for missing information in small groups tied to the plan: exact offer and service areas; current prices and conditions; licensing details where relevant; team roles; usable images; public client relationships; approved case examples; booking/contact destinations; and who can approve changes. Reuse what has already been supplied.

For measuring results, request Search Console query/page exports and appropriately scoped conversion data. Obtain actual deployment and test-site access only when needed. Do not put private lead details, credentials, API keys or ownership-verification tokens into prompts, exported reports or public pages.

## Source register

Local references use the repository roots stated earlier. Line numbers are navigation aids for the reviewed snapshot and may move with later edits.

- N1: `scripts/audit.mjs`, especially lines 44–100 for fleet/pricing checks and the remaining per-page checks; `package.json` for build commands.
- N2: `src/data/cars.ts`, `src/site/business.ts`, `src/site/schema.ts`, `src/routes.tsx`, `src/entry-server.tsx`, `scripts/prerender.mjs`.
- N3: `docs/dubai-buyer-seo-2026-11-17.md`; `src/content/dubaiBuyerGuides.ts`; `src/content/categories.ts`; `src/content/positioningGuides.ts`.
- T1: `src/data/routes.ts`, `src/data/buyerPages.ts`, `src/lib/seo.ts` around lines 192–202.
- T2: `scripts/prerender.ts` around lines 49–143; `scripts/audit.ts` around lines 104–208; `package.json`.
- T3: `public/leads/leads.js` around lines 64–97 and 309–344; `public/leads/config.js`; `docs/leads-apps-script.gs`. Do not export endpoint or authentication values from these files.
- P1: `shared/site-positioning.ts` lines 23–48, 127 onward, and 219 onward.
- P2: `server/site-positioning-server.ts` lines 15–23, 47 onward, 81–108 and 114–139.
- P3: `server/seo-site-plan.ts`, especially diagnostic selection, execution options and buildSiteWorkPlan.
- P4: `shared/website-handoff.ts`; `client/src/components/website-workspace.tsx` lines 26–70; `shared/website-flow.ts`.
- P5: `server/site-knowledge-graph.ts` lines 10–33, 75 onward and 97 onward; `shared/automatic-verification.ts`.
- P6: `server/trust-evidence-files.ts` lines 8–25 and 54–77; `server/trust-evidence-reading.ts`.
- P7: `shared/buyer-question-evidence.ts`; `server/buyer-question-evidence-store.ts`; `server/site-agent/toolbox.ts` lines 43–56.
- P8: `server/site-agent/agent.ts`, `pricing.ts`, `toolbox.ts` lines 66–126 and `run-store.ts` in the same directory.
- P9: `server/site-agent/draft-gates.ts`; `server/claim-guard.ts`.
- P10: `server/coding-workspace/agent.ts`; `orchestrator.ts` lines 44–83 and 94 onward; `policy.ts`; `docs/website-agent-execution-audit.md`.
- P11: `server/coding-workspace/start-task.ts` lines 21–64; `site-draft-input.ts` in the same directory.
- P12: `server/site-adapters.ts` lines 47–51, 53–152 and 174 onward.
- P13: `server/site-work-state.ts`, especially the missing-canonical relevance filter and verified-state derivation.
- P14: `docs/brand-structure/structural-seo-build-spec.md`; `docs/seo-site-planning-foundation.md`. These are design/history documents, not execution proof.
- P15: `server/website-blog.ts` around lines 178–184; `server/website-blog-runner.ts` around line 133. Check the writer’s current behaviour rather than assuming an option name is enforced.
- W1: Google Search spam policies, reviewed 23 November 2026: https://developers.google.com/search/docs/essentials/spam-policies
- W2: Google guide to generative AI features, reviewed 23 November 2026: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- W3: Google FAQ rich-result change guidance: https://developers.google.com/search/blog/2023/08/howto-faq-changes

## Appendix A  Reconstructed conversation and decisions

This appendix preserves the substantive available context for another agent. It is a reconstruction, not the full original transcript. Some requests below were later superseded. They are included to explain intent, not to authorise unfinished work automatically.

### Najd foundations

The owner supplied organisation and team PowerPoint files and asked for SEO descriptions below vehicle listings, interlinked category/model pages, clear main navigation pages and proof-based company content. They supplied licence 532541 and explicitly prohibited invented prices, testimonials, ratings, awards, partnerships and numerical achievements. They asked to inspect the code and documents before writing and to compile a verified fact sheet.

The page strategy included luxury/economy/SUV rental, tourists, monthly and long-term rental, seasonal use, events and delivery, plus individual model pages and trust pages. Guides were to answer real buyer questions and link to commercial destinations. The owner later required twenty educational pages and five useful FAQs at the end of each. The example “since 2001” appeared in an early message; later presentation-based site work used 2002. Conflicting dates should be resolved through the source ledger rather than copied from the earliest prompt.

The owner supplied Google business information, delivery confirmation and WhatsApp +971 58 595 2763. They wanted genuine reviews used, with terms to follow later. Their instructions required static routes, real navigation links, generated sitemap/robots/llms, unique metadata, truthful structured data and an audit for duplication and missing links. They would push the work themselves.

### Fleet corrections and presentation

The owner supplied a photographed rate sheet and asked to retain luxury short-term pricing, remove economy daily/weekly offers, correct model years and add Mitsubishi ASX 2027 and Destinator 2027. The ambiguous Audi long-term rate and cropped mileage allowance were clarified. They explicitly rejected obsolete “from AED 65” language throughout the site.

They requested a cleaner, more animated theme in Najd colours, consistently sized car images, luxury cars first, the correct Nissan Sunny generation and a white Range Rover Vogue. This established that visual and inventory accuracy matter alongside text. A preview not loading and live links returning 404 also exposed the need to distinguish local preparation from deployment.

### Editorial and company positioning

The owner requested a richer guide for European visitors/new arrivals, with a NAWAR link and a September 22 date. Visitor licensing and insurance statements require current authoritative verification; a requested date should not falsely imply historical publication. Later they requested two guides connecting mobility research, Lopty’s consulting contribution and Prezlo.

They clarified that the article should lead with Najd’s customer problem rather than Lopty’s name. They wanted to explain how good service can remain unseen by buyers using AI and how analysis can improve the public information. Lopty’s biography belonged later in the article. They described Prezlo as built by Lopty Pascal and Neha Jakhar. Superlatives such as “leading” still require evidence rather than becoming true because they appeared in a draft request.

They supplied one ChatGPT screenshot showing Najd for long-term rental in Al Quoz. That supports a specific observation, not a measured improvement or proof of causation. Team roles were corrected to Walid Marketing Manager, Maher General Manager and, if already present, Lopty Hired AI SEO and GEO Consultant.

### Dubai expansion and supporting evidence

The owner wanted Dubai-wide buyer coverage rather than an Al Quoz-only position and supplied the v7 team presentation. They proposed luxury rental, executive vehicles, B2B, storage and European/American customer needs. The approach was to reuse existing pages where possible and expand useful distinct information, not create every keyword variant.

They supplied logo strips for Public Investment Fund, Raffles, ENOC, Four Seasons, Corinthia, One&Only, Boutique Group and Barrière. Asked whether these were direct clients or wider group relationships, they replied that they cross-sell. The implementation used network wording. They also confirmed storage was at the same premises and supplied exterior/interior photos. Detailed storage promises remained unverified.

### Tuwaiq enquiries and offer presentation

The owner reported that booking buttons did not reliably show the form or contact options and that leads seemed missing. They clarified that both lead submission and a subsequent WhatsApp/call choice were required. Later they confirmed three leads were visible in Google Sheets and asked that fixes preserve the working system.

They requested From or Starting from on prices without bulky two-line cards. They subsequently changed Tuwaiq’s personal WhatsApp/call contact everywhere to +971 54 460 8771. The separate Al Basel real-estate localhost and agent-link request was incidental to this work and is not part of the SEO implementation review.

### Prezlo publishing product decisions

The owner wanted a self-service Growth agent that reliably executes promised posts without staff connecting each customer manually. Social/article publishing and backlink fulfilment were separated. Pro should have no automatic publishing; Growth should average two posts weekly per connected platform, subject to the final product rules.

Backlink giveaways were proposed as ten for a new Growth customer and five monthly, routed to admin for fulfilment. Extra backlinks and review-related services were discussed as paid or credit add-ons. These were product directions, not evidence that every entitlement or fulfilment path is currently built. Genuine review collection must be distinguished from purchasing fabricated praise.

Earlier Claude reports described fixes to uncertain publication counts, overlapping inactivity, destination activation history, replanning, retries, saved-result reconciliation and isolated test databases. They reported passing unit/database/build checks, but no real LinkedIn/WordPress/Shopify end-to-end acceptance. Those old totals are not the current test results of this handoff.

### Prezlo website and knowledge boundaries

The owner repeatedly distinguished automatic articles from request-driven website restructuring. Import a site, explain the objective, build or revise knowledge with approval, diagnose gaps and implement requested work. Periodic scans may propose issues; they should not silently change the website or the knowledge graph.

They wanted Playbook findings, weekly scans and Agentic mode to enter the same website flow with context. They objected to crowded tabs, repeated connection steps and selected-page imports being mistaken for whole-site access. Users should be able to remain read-only, make page-level changes, request deep structural work, enable article publishing or combine these choices.

Claude later supplied a coding-workspace handoff covering progress, stop/refund, workspace diagnostics, URL-prefilled requests, preview fixtures, immutable data contracts and truthful status labels. Code delivery stopped at review and a pull/merge request. The local project has since evolved further, including the single-draft coding bridge and bounded automatic first-party verification described in this report.

### Negative sentiment context

The owner wanted negative public signals incorporated into AI Playbook issues, with a drill-down and a heat map or other explanation. The review required cautious wording: potential concern, source excerpt and distinct source counts rather than invented harm percentages or causal ranking penalties. It identified compliment-negation and “never recommend” detection cases and the risk of approving a negative discovery as a positive owned source. This is a related evidence-quality lesson, not a reason to automatically rewrite a website or suppress criticism.

### Current request

The owner now wants to combine the practical experience from these projects into a document for Claude, inspect Prezlo’s real implementation, and make website structuring an intelligence the product can deliver. They want an implementation manager to handle the work from a business objective, including query research, locations, industries, proof, pages, links and technical implementation. This handoff is the requested analysis and specification; it does not implement those new capabilities.

## Appendix B  Suggested instruction to Claude

Read this handoff and the current code before changing anything. Preserve existing work. Start by reconciling the structural SEO draft specification with the newer positioning, evidence, site-agent and coding-workspace implementations. Build one end-to-end, durable implementation-plan flow that reuses those modules. Do not add another independent website agent or another crowded tab collection.

The first demonstration should improve a small existing site from one business request, reuse existing intent pages, create only justified new content, update links/metadata/schema together, preserve design and conversion behaviour, and produce a truthful review and delivery record. Keep request-driven structural changes separate from authorised automatic articles. Show exactly what is implemented, what was tested with stand-ins, what was tested against real destinations, and what remains unverified. Do not push or deploy without the owner’s instruction.
