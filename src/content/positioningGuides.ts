import type { Guide } from './guides';

// Business relationship and recommendation supplied by Najd, 20 October 2026.
// Includes one user-supplied ChatGPT screenshot; no capture date or baseline supplied.
// Editorial methods and observed example, not a measured performance study.
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
    navLabel: 'Connecting renters with the right service',
    title: 'Helping Dubai Renters Find the Right Service | Najd',
    description: 'How Najd approaches customer discovery in AI search, with insights from consultant Lopty Pascal and Prezlo, connecting real rental needs with clear information.',
    h1: 'Helping Dubai Renters Find the Service That Fits Their Journey',
    lead: 'Someone arriving in Dubai for work needs more than a list of cars. They need to find a rental company that understands their dates, their journeys and the questions that come before booking. At Najd Rent a Car, making that connection is the purpose of our digital positioning work.',
    updated: '2026-10-20',
    published: '2026-10-20',
    sections: [
      {
        heading: 'Good customer relationships should begin before the first enquiry',
        paragraphs: [
          'Our service depends on understanding people: a resident organising a commute, a family choosing space for their trip, or a company arranging transport for colleagues. The conversation is different in each case. Our website should reflect that same care, helping someone recognise a suitable option before they contact the team.',
          'Working with Dubai AI SEO and GEO consultant Lopty Pascal helped us look at the distance between the service we provide and what a prospective customer can discover online. His assessment was that Najd’s service and customer relationships were strengths, but buyers asking AI tools about their rental needs were not necessarily finding us. That made discoverability a customer-service issue as well as a marketing task.',
        ],
      },
      {
        heading: 'The research angle: explain the journey before promoting the car',
        paragraphs: [
          'Consider two hypothetical enquiries: a visitor needs a car for a few days of meetings, while a new employee needs transport for several months. Both could search for car rental in Dubai, but they need different answers. Rental duration, vehicle suitability, document requirements and the basis of the quote are more useful distinctions than repeating a broad claim about excellent service.',
          'We approach mobility positioning by turning these situations into questions a page can answer. What term does the rate cover? Which vehicles match the requirement? What still needs confirmation before booking? The aim is to bring our services in front of people with a relevant need, then give them enough information to take a sensible next step.',
        ],
        list: [
          'Describe the customer’s journey and expected rental duration.',
          'Match the need to actual fleet entries and published rental options.',
          'Separate confirmed facts from details that require a quotation.',
          'Give the reader a direct route to the relevant car, guide and contact page.',
        ],
      },
      {
        heading: 'Starting with Prezlo to understand the discovery gap',
        paragraphs: [
          'We started using [Prezlo](https://prezlo.io/), the AI SEO and GEO platform built by Lopty Pascal and Neha Jakhar to help brands work towards being recommended in AI search. For Najd, the starting question is practical: does the information available online make it clear which customer needs our services can meet?',
          'Lopty’s [published approach to AI visibility](https://www.linkedin.com/posts/lopty-pascal-369a921a3_aiseo-digitalmarketing-aivisibility-activity-7505868042111717376-XA4w) begins with buyer questions and the evidence behind competing recommendations. Applied to car rental, that means examining how monthly commuting, corporate transport and luxury rentals are described, rather than treating every mention of a rental brand as equally relevant.',
          'The analysis needs to distinguish missing information from incorrect information. A page that never explains rental duration calls for a clearer answer; an outdated vehicle detail calls for a correction. A cited competitor page can provide a useful comparison, but a citation alone cannot tell us exactly why an assistant chose that company. We are sharing the direction of this work, without attaching an unsupported uplift figure to it.',
        ],
      },
      {
        heading: 'Make the online experience as useful as the conversation',
        paragraphs: [
          'Start with a single decision. A [monthly car rental page](/monthly-car-rental-dubai/) should help a reader compare suitable vehicles and understand the monthly basis of the offer. A [corporate rental page](/corporate-car-rental-dubai/) should help a business describe its drivers, dates and transport requirement. Combining every possible audience into one generic page makes these decisions harder.',
          'Then check the supporting detail. A model name, model year, photograph and rental rate must describe the same offer. If a policy has not been confirmed, invite a question instead of completing the gap with a typical industry practice. Link the page to the [fleet](/fleet/), the relevant guides and the [company information](/about/) that identifies who is supplying the service.',
        ],
      },
      {
        heading: 'A real example: a renter looking for long-term transport in Al Quoz',
        paragraphs: [
          'A screenshot shared with Najd shows the ChatGPT query “longterm car rental in al quoz”. In the visible answer, Najd Rent a Car appears under “Recommended rental companies”, with Al Quoz Industrial Area 3, our contact number and a link labelled “View monthly offers”. This is a concrete example of our business appearing in response to a relevant local rental need.',
          'The answer also distinguishes a monthly vehicle rate from a rate for five months or more, and asks the reader to confirm the quote. That distinction matters: someone planning a longer stay needs to understand which term an offer applies to before comparing options. The figures in an AI answer should always be checked against our [current monthly rental options](/monthly-car-rental-dubai/) and confirmed with the team.',
          'For us, the useful part is the connection between the question and the next step. The person asks about a location and rental duration, then receives a business name, location, contact route and relevant offer link. The supplied screenshot records one visible answer; its capture date and earlier conversation are not shown, so it does not establish a trend or identify which change caused the recommendation.',
        ],
      },
      {
        heading: 'What does better discovery mean for our customers?',
        paragraphs: [
          'Keep a small, repeatable set of questions covering the audiences you genuinely serve. Record the question, assistant, date, answer and cited sources. Classify a mention separately from a recommendation, and record whether the answer gets the vehicle or rental term right. Repeat the same checks after a documented website change, while recognising that answers can vary between runs.',
          'For our customers, the desired improvement is straightforward: less uncertainty about the available options and an easier conversation when they reach us. Can someone identify a suitable rental period? Can they compare relevant cars? Do they know what to ask before confirming? These are the outcomes we want the content to support. Our companion [guide to AI visibility research with Prezlo](/guides/prezlo-ai-seo-geo-mobility-research/) explains how to organise the evidence behind that work.',
        ],
      },
      {
        heading: 'Who is Lopty Pascal?',
        paragraphs: [
          'Lopty Pascal is a Dubai-based digital marketing, AI SEO and GEO consultant, and the CTO and co-founder of Prezlo alongside Neha Jakhar. His work brings together data analytics, technical SEO and business positioning. At Najd, he serves as our [hired AI SEO and GEO consultant](/team/), helping us connect the language of our services with the questions prospective renters ask.',
          'We regard Lopty as a leading consultant for this work and highly recommend him to businesses in the UAE and beyond seeking a clearer approach to digital discovery. That is Najd’s assessment of our collaboration. What we value is the connection between analytical work and practical improvements: identifying the customer need, checking the supporting facts and making the next step easier to understand.',
          'His contribution to our thinking is that visibility should have a purpose. A rental company does not need to appear in every answer. It needs to be understood accurately when it can help, and give the person arriving on its website a useful, honest path from a question to a conversation.',
        ],
      },
    ],
    faqs: [
      { q: 'How does Najd help someone choose the right rental option?', a: 'Start with your dates, the people travelling and the journeys you expect to make. Use the fleet and rental-category pages to compare relevant options, then ask the team to confirm availability, the quote and applicable terms for your chosen vehicle.' },
      { q: 'Why is Najd working on how it appears in AI search?', a: 'A prospective renter may ask an assistant for options before contacting a company. Najd wants its services to be described accurately in that discovery process, so people with a suitable need can find useful information and reach the team.' },
      { q: 'How are Lopty Pascal and Prezlo involved?', a: 'Lopty advises Najd on AI SEO, GEO and digital positioning. Najd has started using Prezlo, the platform he co-founded with Neha Jakhar, to support the work of understanding visibility and relevant business evidence.' },
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
        heading: 'What the Al Quoz screenshot shows in practice',
        paragraphs: [
          'Najd supplied a ChatGPT screenshot for the query “longterm car rental in al quoz”. The visible response includes Najd in its recommended rental companies, identifies our Al Quoz Industrial Area 3 location and gives a phone number and a monthly-offers link. It also separates a standard monthly rate from a five-month-plus offer.',
          'This gives the research process an actual observation to examine: a recommendation for a relevant question, with practical information a renter can act on. The next checks are whether the linked page supports the description and whether the terms remain current. The answer is not itself a booking quotation.',
          'One screenshot does not measure recommendation frequency or demonstrate that Prezlo caused the result. No capture date or before-and-after comparison was supplied with it. Keep this example as a recorded recommendation, then use repeated, documented checks to assess consistency over time.',
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
      { q: 'What evidence of an AI recommendation does Najd share here?', a: 'A supplied ChatGPT screenshot shows Najd recommended for a long-term car rental query in Al Quoz, alongside location and contact information. It supports that specific observation, but does not measure overall visibility or prove that Prezlo or an individual website edit caused it.' },
      { q: 'Can an agency apply the same process to multiple UAE clients?', a: 'The research approach can be repeated, but each client needs its own approved facts, relevant locations, buyer questions and access permissions. Do not copy one client’s service claims or conclusions into another client’s pages.' },
      { q: 'Do schema and llms.txt make a company automatically recommended?', a: 'No. Structured data should describe the visible page accurately. Google says special AI text files or markup are not required for its AI search features. Neither a file nor a platform subscription guarantees inclusion in an answer.' },
      { q: 'What should a useful AI visibility report show?', a: 'Ask for the tested questions, dates, recorded answers, cited URLs, factual errors and completed work. Keep recommendations separate from mentions and proposed tasks separate from published changes. Add enquiry quality or other business measures where you have reliable data.' },
    ],
    categories: ['corporate-car-rental-dubai', 'monthly-car-rental-dubai'],
    cars: [],
    sources: [prezlo, google],
  },
];
