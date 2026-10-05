import React from 'react';
import { BUSINESS, OPENING_HOURS, mailLink, telLink, whatsappLink } from '../site/business';
import type { Crumb } from '../site/schema';
import { GROUP_COMPANIES, TEAM, TeamMember, teamPhoto } from '../data/team';
import { CARS } from '../data/cars';
import { MAIN_CATEGORY_SLUGS, categoryPath, getCategory } from '../content/categories';
import { CallButton, CheckList, Container, CtaBand, H2, LinkCards, PageHeader, Prose, Section, TrustPanel, WhatsAppButton } from '../components/ui';

const mainCategoryLinks = () => MAIN_CATEGORY_SLUGS.map((s) => ({ href: categoryPath(s), label: getCategory(s).h1 }));

const TRUST_LINKS = [
  { href: '/about/', label: 'About Najd Rent a Car' },
  { href: '/team/', label: 'Our Team' },
  { href: '/licence/', label: 'Licence and Verification' },
  { href: '/service-standards/', label: 'Service Standards' },
  { href: '/reviews/', label: 'Customer Reviews' },
  { href: '/contact/', label: 'Contact' },
];
const otherTrustLinks = (current: string) => TRUST_LINKS.filter((l) => l.href !== current);

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <li className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
    <img
      src={teamPhoto(member)}
      alt={`${member.name}, ${member.role} at Najd Rent a Car`}
      width={400}
      height={400}
      loading="lazy"
      className="w-28 h-28 rounded-full object-cover mx-auto"
    />
    <h3 className="text-sm font-bold text-slate-900 mt-3">{member.name}</h3>
    <p className="text-xs text-slate-600 mt-0.5">{member.role}</p>
  </li>
);

export const AboutPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <>
    <PageHeader
      crumbs={crumbs}
      h1="About Najd Rent a Car"
      lead={`Najd Rent a Car has been serving clients since ${BUSINESS.foundingYear} from its headquarters in ${BUSINESS.streetAddress}, Dubai. We provide chauffeur-driven and self-drive luxury car rentals, and economy rentals for daily, monthly and yearly needs.`}
    />
    <Container>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <H2>Who we are</H2>
            <Prose
              paragraphs={[
                `${BUSINESS.legalName} is a Dubai car rental company with more than two decades in the market. We are part of ${BUSINESS.group}, a diversified business group established in ${BUSINESS.groupFoundingYear}.`,
                `Our fleet numbers ${BUSINESS.fleetSize} vehicles across economy, business, SUV and executive segments. We serve individuals, families and visitors, and we support corporate accounts with staff mobility, executive transport and event transport across Dubai.`,
                `The company is licensed for car rental under commercial licence ${BUSINESS.licenceNumber}, issued by the ${BUSINESS.licenceAuthority}, and states a clean file with the RTA and Dubai Police.`,
              ]}
            />
          </div>
          <img
            src="/images/najd-team-group-photo.webp"
            alt="The Najd Rent a Car and Al Basel Group team together in Dubai"
            width={1170}
            height={779}
            className="w-full h-auto rounded-2xl border border-slate-200"
          />
        </div>
      </Section>

      <Section>
        <H2>Our mission</H2>
        <Prose paragraphs={['To be the leading chauffeur service and rent-a-car company in Dubai and the UAE, delivering three things.']} />
        <div className="mt-4">
          <CheckList items={['Premium service standards.', 'Best value pricing.', 'Genuine Arabian hospitality.']} />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <img
            src="/images/basel-al-kasem-founder.webp"
            alt="Basel Al Kasem, Founder and CEO of Najd Rent a Car and Al Basel Group"
            width={800}
            height={1201}
            loading="lazy"
            className="lg:col-span-4 w-full max-w-xs h-auto rounded-2xl border border-slate-200"
          />
          <div className="lg:col-span-8">
            <H2>Founder and CEO: {BUSINESS.founder}</H2>
            <Prose
              paragraphs={[
                `Najd Rent a Car was founded under the leadership of Mr. ${BUSINESS.founder}, the founder of ${BUSINESS.group}. He has lived in Dubai for over 40 years.`,
                'Before building the group he was Business Development Manager at Burj Al Arab from 1999 to 2007. He holds a Bachelor’s degree in Economics from the University of Central Florida and a Master’s degree from the University of New England in Australia, and he has completed executive programmes at Harvard University.',
                'He is recognised for advisory work with international organisations and non-profits, including the Dubai Handicap Club. Under his leadership the group has grown into a portfolio that covers consultancy, real estate, travel, investments, headhunting and car rental.',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <H2>Services</H2>
        <CheckList
          items={[
            'Daily, weekly, monthly and yearly rentals.',
            'Corporate fleet solutions.',
            'Staff and business transport support.',
            'Executive transport for visiting management and guests.',
            'Event and delegation transport when required.',
            'Car delivery to your location.',
          ]}
        />
        <div className="mt-6">
          <LinkCards links={mainCategoryLinks()} />
        </div>
      </Section>

      <Section>
        <H2>Part of {BUSINESS.group}</H2>
        <Prose
          paragraphs={[
            `${BUSINESS.group} was established in ${BUSINESS.groupFoundingYear}. Alongside Najd Rent a Car, the group includes the companies below.`,
          ]}
        />
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {GROUP_COMPANIES.map((c) => (
            <li key={c.slug} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
              <img src={`/images/group/${c.slug}.webp`} alt={`${c.name} logo`} width={480} height={160} loading="lazy" className="max-h-14 w-auto object-contain" />
              <span className="text-[11px] text-slate-600 text-center">{c.name}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <H2>The people behind the company</H2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TEAM.slice(0, 6).map((m) => (
            <MemberCard key={m.slug} member={m} />
          ))}
        </ul>
        <p className="mt-5">
          <a href="/team/" className="text-sm font-semibold text-[#C5221F] underline underline-offset-4">
            Meet all {TEAM.length} members of the team
          </a>
        </p>
      </Section>

      <Section>
        <H2>More about how we work</H2>
        <LinkCards links={[...otherTrustLinks('/about/'), { href: '/fleet/', label: 'Our Fleet', note: `${CARS.length} models listed` }]} />
      </Section>
      <Section>
        <TrustPanel />
      </Section>
    </Container>
  </>
);

export const TeamPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const groups: { heading: string; key: TeamMember['group']; intro: string }[] = [
    { heading: 'Leadership', key: 'leadership', intro: 'The founder and the directors who run the company day to day.' },
    { heading: 'Management', key: 'management', intro: 'The managers responsible for operations, fleet, accounts, projects and business development.' },
    { heading: 'Sales, accounts and fleet support', key: 'team', intro: 'The people you are most likely to speak to when you enquire, book or pay.' },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        h1="Our Team"
        lead={`${TEAM.length} people lead and run Najd Rent a Car. These are their real names, roles and photographs, taken from the company organisation chart.`}
      />
      <Container>
        {groups.map((g) => (
          <Section key={g.key}>
            <H2>{g.heading}</H2>
            <p className="text-[15px] text-slate-700 mb-5 max-w-3xl">{g.intro}</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {TEAM.filter((m) => m.group === g.key).map((m) => (
                <MemberCard key={m.slug} member={m} />
              ))}
            </ul>
          </Section>
        ))}

        <Section>
          <H2>Who handles what</H2>
          <Prose
            paragraphs={[
              'A rental company is only as reliable as the people accountable for each part of it. At Najd those responsibilities are assigned to named roles. The Fleet Manager and Fleet Procurement Assistant look after the vehicles. The Head of Accounts and the Accountant handle invoicing and deposits. The Head of VIP looks after chauffeur and luxury bookings. The Business Development Manager and Sales Executive work with corporate and individual customers.',
              'If you have a question that is not answered on this site, contact us and ask for the relevant role.',
            ]}
          />
        </Section>

        <Section>
          <CtaBand heading="Speak to the team" message="Hello Najd Rent a Car, I would like to speak to your team about a rental." />
        </Section>
        <Section>
          <H2>More about the company</H2>
          <LinkCards links={[...otherTrustLinks('/team/'), ...mainCategoryLinks().slice(0, 3)]} />
        </Section>
      </Container>
    </>
  );
};

export const LicencePage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const rows: [string, string][] = [
    ['Licence number', BUSINESS.licenceNumber],
    ['Licence type', 'Commercial Licence'],
    ['Issuing authority', BUSINESS.licenceAuthority],
    ['Company name', BUSINESS.legalName],
    ['Legal form', 'Limited Liability Company'],
    ['Licensed activity', BUSINESS.licenceActivity],
    ['First issued', BUSINESS.licenceFirstIssued],
    ['Current licence valid until', BUSINESS.licenceValidUntil],
    ['Dubai Chamber membership number', BUSINESS.dubaiChamberNumber],
    ['Registered address', `${BUSINESS.streetAddress}, ${BUSINESS.city}, UAE`],
    ['P.O. Box', BUSINESS.poBox],
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        h1="Licence and Verification"
        lead={`Najd Rent a Car operates under commercial licence number ${BUSINESS.licenceNumber}, issued by the ${BUSINESS.licenceAuthority}. The licensed activity is car rental. The details below are taken from the licence document.`}
      />
      <Container>
        <Section>
          <H2>Licence details</H2>
          <dl className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 max-w-3xl text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
                <dt className="text-slate-500">{k}</dt>
                <dd className="font-semibold text-slate-900 sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section>
          <H2>How to verify the licence yourself</H2>
          <Prose
            paragraphs={[
              `Every commercial licence in mainland Dubai is recorded by the ${BUSINESS.licenceAuthority}. You do not have to take our word for any of the details on this page. Search for licence number ${BUSINESS.licenceNumber} using the public licence search on the department’s website, and compare the company name, activity and status with what we show here.`,
              'We recommend you do the same check on any rental company before you hand over a deposit. A genuine company will give you its licence number without hesitation, and the name on the licence should match the name on your rental agreement and your payment receipt.',
            ]}
          />
          <p className="mt-4 text-sm">
            <a href="https://www.dubaidet.gov.ae" rel="noopener" className="text-[#C5221F] font-semibold underline underline-offset-4">
              Dubai Department of Economy and Tourism website
            </a>
          </p>
        </Section>

        <Section>
          <H2>What the licence tells you</H2>
          <Prose
            paragraphs={[
              `The licence was first issued on ${BUSINESS.licenceFirstIssued} and has been renewed since. That date is the basis for our statement that Najd has served clients since ${BUSINESS.foundingYear}.`,
              'The licensed activity is car rental, which means the company is permitted to rent vehicles to the public in Dubai. The company also states that it holds a clean file with the Roads and Transport Authority and Dubai Police.',
            ]}
          />
        </Section>

        <Section>
          <H2>Related pages</H2>
          <LinkCards links={[...otherTrustLinks('/licence/'), { href: '/fleet/', label: 'Our Fleet' }]} />
        </Section>
        <Section>
          <CtaBand heading="Want a copy of the licence?" message="Hello Najd Rent a Car, could you send me a copy of your trade licence?" />
        </Section>
      </Container>
    </>
  );
};

export const ServiceStandardsPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const standards: { heading: string; paragraphs: string[] }[] = [
    {
      heading: 'Premium service standards',
      paragraphs: [
        'This is the first commitment in our mission statement. In practice it means the car you are given should be clean, roadworthy and the model you agreed, and the people you deal with should be able to answer your questions about it.',
      ],
    },
    {
      heading: 'Best value pricing',
      paragraphs: [
        'We publish daily, weekly and monthly rates on this site for the models where a standard rate applies. Where a car is quoted on request, we say so plainly. Rates can change with season and availability, and the rate we confirm to you at booking is the one that counts.',
      ],
    },
    {
      heading: 'Genuine Arabian hospitality',
      paragraphs: [
        'Our founder came to car rental from the hospitality industry, and the company keeps a dedicated Head of VIP. Courtesy is not reserved for luxury bookings. A customer renting an economy car for a month should be treated as well as one booking a chauffeur for a day.',
      ],
    },
    {
      heading: 'Fast response and operational support',
      paragraphs: [
        'Fast response and operational support are listed among the strengths of the company, alongside an experienced and reliable team. If something goes wrong with a car during your rental, contact us straight away on the numbers shown on this site.',
      ],
    },
    {
      heading: 'Compliance',
      paragraphs: [
        `Najd operates under commercial licence ${BUSINESS.licenceNumber} from the ${BUSINESS.licenceAuthority} and states a clean file with the RTA and Dubai Police. We publish our licence details so customers can verify them.`,
      ],
    },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        h1="Service Standards"
        lead="These are the standards Najd Rent a Car sets for itself, taken from our mission and company profile, followed by the checks we encourage every customer to make at handover."
      />
      <Container>
        {standards.map((s) => (
          <Section key={s.heading}>
            <H2>{s.heading}</H2>
            <Prose paragraphs={s.paragraphs} />
          </Section>
        ))}

        <Section>
          <H2>What to check when you collect a car</H2>
          <CheckList
            items={[
              'Walk around the car with our staff and photograph every panel, the wheels and the windscreen.',
              'Make sure existing marks are written on the handover sheet before you sign it.',
              'Note the fuel level and the odometer reading, and photograph both.',
              'Test the air conditioning, lights, wipers and seat belts.',
              'Read the rental agreement for the deposit, insurance excess, mileage allowance and return time.',
              'Save our phone and WhatsApp numbers before you drive away.',
            ]}
          />
        </Section>

        <Section>
          <H2>If you are not satisfied</H2>
          <Prose
            paragraphs={[
              `Tell us. Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email} and explain what happened. The management team is named on our team page, and you are welcome to ask for a manager.`,
            ]}
          />
        </Section>

        <Section>
          <H2>Related pages</H2>
          <LinkCards
            links={[
              ...otherTrustLinks('/service-standards/'),
              { href: '/guides/car-rental-deposit-insurance-dubai/', label: 'Deposit and insurance explained' },
            ]}
          />
        </Section>
        <Section>
          <TrustPanel />
        </Section>
      </Container>
    </>
  );
};

export const ContactPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <>
    <PageHeader
      crumbs={crumbs}
      h1="Contact Najd Rent a Car"
      lead={`Call, message or email us to check availability, get a quote or book a car. Our office is at ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, Dubai.`}
    >
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <WhatsAppButton message="Hello Najd Rent a Car, I would like to rent a car in Dubai." label={`WhatsApp ${BUSINESS.whatsappDisplay}`} />
        <CallButton />
      </div>
    </PageHeader>
    <Container>
      <Section>
        <H2>Contact details</H2>
        <dl className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 max-w-3xl text-sm">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Phone</dt>
            <dd className="font-semibold"><a href={telLink} className="text-slate-900 hover:text-[#C5221F]">{BUSINESS.phoneDisplay}</a></dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">WhatsApp</dt>
            <dd className="font-semibold">
              <a href={whatsappLink('Hello Najd Rent a Car, I have a question.')} className="text-slate-900 hover:text-[#C5221F]">{BUSINESS.whatsappDisplay}</a>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Landline</dt>
            <dd className="font-semibold"><a href={`tel:${BUSINESS.landlineE164}`} className="text-slate-900 hover:text-[#C5221F]">{BUSINESS.landlineDisplay}</a></dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Email</dt>
            <dd className="font-semibold"><a href={mailLink} className="text-slate-900 hover:text-[#C5221F]">{BUSINESS.email}</a></dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Address</dt>
            <dd className="font-semibold text-slate-900 sm:text-right">
              <address className="not-italic">
                {BUSINESS.legalName}<br />
                {BUSINESS.addressLine}<br />
                {BUSINESS.streetAddress}<br />
                P.O. Box {BUSINESS.poBox}, {BUSINESS.city}, {BUSINESS.country}
              </address>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Opening hours</dt>
            <dd className="font-semibold text-slate-900 sm:text-right">
              <ul>
                {OPENING_HOURS.map((h) => (
                  <li key={h.label}>
                    {h.label}: {h.text}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Map</dt>
            <dd className="font-semibold sm:text-right">
              <a href={BUSINESS.googleProfileUrl} rel="noopener" className="text-slate-900 hover:text-[#C5221F]">
                Open in Google Maps (plus code {BUSINESS.plusCode})
              </a>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Google reviews</dt>
            <dd className="font-semibold sm:text-right">
              <a href={BUSINESS.googleProfileUrl} rel="noopener" className="text-slate-900 hover:text-[#C5221F]">
                {BUSINESS.googleRating} out of 5 from {BUSINESS.googleReviewCount} reviews
              </a>{' '}
              ·{' '}
              <a href={BUSINESS.googleReviewUrl} rel="noopener" className="text-[#C5221F] underline underline-offset-2">
                Write a review
              </a>
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-3.5">
            <dt className="text-slate-500">Commercial licence</dt>
            <dd className="font-semibold">
              <a href="/licence/" className="text-slate-900 hover:text-[#C5221F]">
                No. {BUSINESS.licenceNumber}, {BUSINESS.licenceAuthority}
              </a>
            </dd>
          </div>
        </dl>
      </Section>

      <Section>
        <H2>What to tell us for a fast quote</H2>
        <CheckList
          items={[
            'The car or the type of car you want.',
            'Your pickup and return dates.',
            'Whether you are a visitor or a UAE resident, and where your licence was issued.',
            'How many passengers and bags you have.',
            'Whether you need a chauffeur.',
            'Whether you will collect from our Al Quoz office or want the car delivered, and where.',
          ]}
        />
      </Section>

      <Section>
        <H2>Start with a category</H2>
        <LinkCards links={[...mainCategoryLinks(), { href: '/fleet/', label: 'Full fleet' }, { href: '/car-rental-al-quoz/', label: 'Car Rental in Al Quoz' }]} />
      </Section>

      <Section>
        <H2>About the company</H2>
        <LinkCards links={otherTrustLinks('/contact/')} />
      </Section>
    </Container>
  </>
);

/**
 * Themes are our own summary of the public Google reviews. Do not add verbatim
 * customer quotes here unless the business supplies them with permission.
 */
const REVIEW_THEMES: { heading: string; text: string }[] = [
  {
    heading: 'Condition of the cars',
    text: 'Several reviewers describe the cars they received as clean, new and well maintained, and one says the condition was better than expected.',
  },
  {
    heading: 'Staff and drivers',
    text: 'Reviewers call the staff helpful and professional, and one long-standing review singles out the drivers as friendly.',
  },
  {
    heading: 'Luxury rentals',
    text: 'Luxury cars are the most common subject. One customer writes about keeping a Cadillac Escalade for fifteen days.',
  },
  {
    heading: 'Delivery and chauffeur service',
    text: 'One reviewer rates the delivery and chauffeur service highly and comments on the pricing of luxury cars.',
  },
  {
    heading: 'Responsiveness',
    text: 'One reviewer mentions quick replies on WhatsApp and flexible pickup and drop-off times.',
  },
  {
    heading: 'Repeat customers',
    text: 'One reviewer was renting from Najd for the second time and recommends the company.',
  },
];

export const ReviewsPage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => {
  const labels = ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        h1="Najd Rent a Car Reviews"
        lead={`Najd Rent a Car is rated ${BUSINESS.googleRating} out of 5 on Google from ${BUSINESS.googleReviewCount} customer reviews, checked in ${BUSINESS.googleRatingChecked}. The reviews are public and you can read every one of them on our Google profile.`}
      >
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a
            href={BUSINESS.googleProfileUrl}
            rel="noopener"
            className="inline-flex items-center justify-center px-5 py-3 bg-[#C5221F] hover:bg-[#A81B18] text-white font-bold text-sm rounded-xl transition-colors"
          >
            Read all reviews on Google
          </a>
          <a
            href={BUSINESS.googleReviewUrl}
            rel="noopener"
            className="inline-flex items-center justify-center px-5 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 font-bold text-sm rounded-xl transition-colors"
          >
            Write a review
          </a>
        </div>
      </PageHeader>
      <Container>
        <Section>
          <H2>Rating breakdown</H2>
          <dl className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 max-w-md text-sm">
            {BUSINESS.googleStarCounts.map((count, i) => (
              <div key={labels[i]} className="flex justify-between px-5 py-3">
                <dt className="text-slate-600">{labels[i]}</dt>
                <dd className="font-semibold text-slate-900 tabular-nums">
                  {count} {count === 1 ? 'review' : 'reviews'}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-slate-500 mt-3">Source: Google Business Profile, {BUSINESS.googleRatingChecked}. We show every star level, including the lowest.</p>
        </Section>

        <Section>
          <H2>What customers write about</H2>
          <p className="text-[15px] text-slate-700 max-w-3xl mb-5">
            This is our summary of the written reviews on Google. It is not a substitute for reading them in the customers’ own words.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REVIEW_THEMES.map((t) => (
              <li key={t.heading} className="bg-white border border-slate-200 rounded-2xl p-5">
                <h3 className="text-base font-semibold text-slate-900">{t.heading}</h3>
                <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <H2>How we handle reviews</H2>
          <Prose
            paragraphs={[
              'We do not write, buy or edit reviews, and we do not choose which ones appear. Google publishes them under the name of the person who wrote them. The owner replies to reviews on the profile.',
              'If you have rented from us, an honest review helps other customers decide. If something went wrong, please also contact us directly so a manager can put it right.',
            ]}
          />
        </Section>

        <Section>
          <H2>More about the company</H2>
          <LinkCards links={[...otherTrustLinks('/reviews/'), { href: '/fleet/', label: 'Our Fleet' }]} />
        </Section>
        <Section>
          <CtaBand heading="Rent from a company you can check" message="Hello Najd Rent a Car, I read your reviews and would like to rent a car." />
        </Section>
      </Container>
    </>
  );
};

export const NotFoundPage: React.FC = () => (
  <Container className="py-20">
    <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
    <p className="text-slate-600 mt-3">The page you are looking for does not exist or has moved.</p>
    <div className="mt-8">
      <LinkCards
        links={[
          { href: '/', label: 'Home' },
          { href: '/fleet/', label: 'Our Fleet' },
          { href: '/contact/', label: 'Contact' },
        ]}
      />
    </div>
  </Container>
);
