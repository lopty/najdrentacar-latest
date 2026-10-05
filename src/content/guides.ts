import { BUSINESS, aed } from '../site/business';
import { EDU_GUIDES } from './eduGuides';
import { carsWithRates, getCar } from '../data/cars';

export interface Guide {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** ISO date the guide was last reviewed. */
  updated: string;
  /** Each section answers one buyer question. */
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  categories: string[];
  cars: string[];
  sources: { name: string; url: string }[];
}

export const guidePath = (slug: string) => `/guides/${slug}/`;

const SOURCES = {
  rta: { name: 'Roads and Transport Authority (RTA)', url: 'https://www.rta.ae' },
  salik: { name: 'Salik', url: 'https://www.salik.ae' },
  police: { name: 'Dubai Police', url: 'https://www.dubaipolice.gov.ae' },
  uae: { name: 'UAE Government portal', url: 'https://u.ae' },
};

const sunny = getCar('nissan-sunny');
const asx = getCar('mitsubishi-asx');
const outlander = getCar('mitsubishi-outlander');
const breakEven = (day: number, longer: number) => Math.ceil(longer / day);

const CORE_GUIDES: Guide[] = [
  {
    slug: 'documents-to-rent-a-car-in-dubai',
    navLabel: 'Documents you need',
    title: 'Documents Needed to Rent a Car in Dubai',
    description: 'The documents tourists and UAE residents need to rent a car in Dubai, which foreign licences are accepted, and when you need an International Driving Permit.',
    h1: 'Documents Needed to Rent a Car in Dubai',
    lead: 'What you need depends on one thing: whether you are a visitor or a UAE resident. Visitors rent on a passport and an accepted foreign licence. Residents rent on an Emirates ID and a UAE driving licence.',
    updated: '2026-10-05',
    sections: [
      {
        heading: 'What documents does a tourist need?',
        paragraphs: [
          'A visitor needs three things, all original and valid for the whole rental period.',
          'Keep digital copies on your phone as well. Rental companies record these documents on the rental agreement, and police may ask for them at a checkpoint or after an accident.',
        ],
        list: [
          'Passport.',
          'UAE entry stamp or visit visa.',
          'Driving licence from your home country, plus an International Driving Permit if your country requires one.',
        ],
      },
      {
        heading: 'What documents does a UAE resident need?',
        paragraphs: [
          'A resident needs an Emirates ID and a valid UAE driving licence. If you hold a residence visa you cannot legally drive on a foreign licence or an International Driving Permit, even if that licence would be accepted for a tourist. This is the single most common reason a rental is refused at the counter.',
          'New residents whose UAE licence is still being issued should wait until they have it. If your home licence is from a country with a transfer agreement, the conversion at the RTA is usually quick.',
        ],
      },
      {
        heading: 'Which foreign licences are accepted without an International Driving Permit?',
        paragraphs: [
          'Visitors from many countries can drive in the UAE on their national licence alone. This includes the GCC states, the United Kingdom, the United States, Canada, Australia, New Zealand and most European countries. Visitors from countries outside the recognised list need an International Driving Permit issued in their home country, carried together with the original licence.',
          'The recognised list is maintained by the UAE authorities and is updated from time to time, so check the current position before you travel. You can also send a photo of your licence to Najd Rent a Car on WhatsApp and we will tell you whether it is accepted.',
        ],
      },
      {
        heading: 'Is there a minimum age to rent a car?',
        paragraphs: [
          'The legal driving age for cars in the UAE is 18. Rental companies set their own minimum age and minimum licence-holding period, and these are often higher for luxury and high-performance vehicles. Ask for the requirement on the specific car you want before you book, and mention the age of every driver who will be named on the agreement.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I rent a car in Dubai with only a passport and licence?',
        a: 'As a visitor, yes, provided you also have a valid entry stamp or visit visa and your licence is from an accepted country or is accompanied by an International Driving Permit.',
      },
      {
        q: 'Can a UAE resident rent a car with a foreign licence?',
        a: 'No. UAE residents must hold a UAE driving licence to drive, including rental cars.',
      },
      {
        q: 'Do I need the original documents or are copies enough?',
        a: 'Bring the originals. Copies are useful as a backup but are not a substitute at handover.',
      },
      {
        q: 'Can I add a second driver to my rental?',
        a: 'Yes, if the second driver provides the same documents and is named on the rental agreement. Only named drivers are insured, so never hand the keys to someone who is not listed.',
      },
      {
        q: 'Where can a tourist rent a car in Dubai with just a home licence?',
        a: `Najd Rent a Car rents to visitors whose licence is accepted in the UAE. Send a photo of your licence and passport to ${BUSINESS.whatsappDisplay} on WhatsApp and we will confirm before you travel. The company has been licensed in Dubai since ${BUSINESS.foundingYear}.`,
      },
    ],
    categories: ['rent-a-car-dubai-tourists', 'economy-car-rental-dubai', 'monthly-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx'],
    sources: [SOURCES.rta, SOURCES.uae],
  },
  {
    slug: 'car-rental-deposit-insurance-dubai',
    navLabel: 'Deposit and insurance',
    title: 'Car Rental Deposit and Insurance in Dubai Explained',
    description: 'How car rental deposits and insurance work in Dubai: why a deposit is held, when it is refunded, what an excess is, and the questions to ask before you sign.',
    h1: 'Car Rental Deposit and Insurance in Dubai, Explained',
    lead: 'Most disputes between renters and rental companies in Dubai come down to two things: the deposit and the insurance excess. Both are simple once you know what they are for and what to ask.',
    updated: '2026-10-05',
    sections: [
      {
        heading: 'Why do rental companies take a deposit?',
        paragraphs: [
          'A security deposit covers costs that appear after you hand the car back. In the UAE, traffic fines and Salik toll charges are recorded against the car and can take days or weeks to show in the system. The deposit also covers fuel shortfalls, extra kilometres and any damage that is your responsibility.',
          'The amount varies by vehicle. An economy sedan carries a smaller deposit than a luxury SUV because the potential costs are lower.',
        ],
      },
      {
        heading: 'When do I get my deposit back?',
        paragraphs: [
          'Because fines can post late, rental companies in Dubai usually hold the deposit for a period after the car is returned before releasing it. Ask for the exact number of days in writing. If the deposit is a card pre-authorisation, your bank also needs time to release the hold, which is outside the rental company’s control.',
          'To avoid deductions you did not expect, return the car with the agreed fuel level, inside the mileage allowance, and on time. Take dated photos of the car at return, including the fuel gauge and odometer.',
        ],
      },
      {
        heading: 'What does rental insurance cover, and what is an excess?',
        paragraphs: [
          'Rental cars in the UAE must be insured. The excess is the part of a damage claim that you pay yourself. For example, with an excess of a fixed amount, you pay up to that amount for an at-fault accident and the insurer pays the rest. Some companies offer an optional waiver that reduces the excess for a daily fee.',
          'Read what is excluded. Typical exclusions are driving under the influence, an unnamed driver at the wheel, off-road use, water damage from driving through floods, and damage where no police report was obtained.',
        ],
      },
      {
        heading: 'What should I do if I have an accident?',
        paragraphs: [
          'In the UAE you need a police report for any accident, however small. Insurers will not process a claim without one, and a garage cannot legally repair accident damage without it. For minor accidents in Dubai with no injuries, you can report through the Dubai Police app or by calling the police. Then call your rental company straight away.',
          'Do not agree a private settlement at the roadside and drive off. Without a report, the full cost of the damage can fall on you regardless of who was at fault.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is the deposit to rent a car in Dubai?',
        a: 'It depends on the company and the car. Ask for the figure for the exact model, the payment methods accepted and the refund period before you book.',
      },
      {
        q: 'Is insurance included in a Dubai car rental?',
        a: 'Rental cars must be insured, but the level of cover and the excess differ between companies. Ask what the excess is and what is excluded.',
      },
      {
        q: 'Do I need a police report for a small scratch?',
        a: 'Yes, if it is accident damage. A police report is required for insurance and repair in the UAE.',
      },
      {
        q: 'Can I rent a car in Dubai without a deposit?',
        a: 'Some companies advertise it for certain cars, usually with conditions. Ask what replaces the deposit, because fines and tolls that arrive after return still have to be settled.',
      },
      {
        q: 'Which rental company should I use if I am worried about my deposit?',
        a: `One with a verifiable licence, a physical office and a written refund period. Najd Rent a Car has traded under licence ${BUSINESS.licenceNumber} since ${BUSINESS.foundingYear}, and its Head of Accounts is named on the team page.`,
      },
    ],
    categories: ['luxury-car-rental-dubai', 'monthly-car-rental-dubai', 'rent-a-car-dubai-tourists'],
    cars: ['audi-a6', 'range-rover-vogue'],
    sources: [SOURCES.police, SOURCES.rta],
  },
  {
    slug: 'driving-in-dubai-for-visitors',
    navLabel: 'Driving in Dubai',
    title: 'Driving in Dubai as a Visitor: Rules, Tolls and Parking',
    description: 'A practical guide to driving a rental car in Dubai: road rules, Salik tolls, speed cameras, parking zones and what happens when you get a fine.',
    h1: 'Driving in Dubai as a Visitor',
    lead: 'Driving in Dubai is easy to get used to. Roads are modern, signs are in Arabic and English, and traffic drives on the right. The parts that are different from home are the toll system, the number of speed cameras and how fines reach you in a rental car.',
    updated: '2026-10-05',
    sections: [
      {
        heading: 'What are the basic road rules?',
        paragraphs: [
          'Speed limits are posted and enforced by fixed and mobile radar. Limits change frequently along the same road, so watch the signs instead of following the flow.',
          'Lane discipline matters on the big highways. Slower traffic keeps right, and tailgating and sudden lane changes are fined.',
        ],
        list: [
          'Drive on the right, overtake on the left.',
          'Seat belts are compulsory for every passenger, front and rear.',
          'Children up to four years old must be in a child seat.',
          'Using a handheld phone while driving is an offence.',
          'There is zero tolerance for alcohol. Do not drive after drinking any amount.',
        ],
      },
      {
        heading: 'How do Salik tolls work in a rental car?',
        paragraphs: [
          'Salik is Dubai’s electronic road toll. There are no booths and you do not stop. A tag on the windscreen is read each time the car passes under a toll gate, and the charge is recorded automatically. Charges vary by time of day.',
          'In a rental car the tag belongs to the rental company. Your crossings are added up and billed to you, either at the end of the rental or from your deposit. Ask how each crossing is charged and whether there is any administration fee on top.',
        ],
      },
      {
        heading: 'How does paid parking work?',
        paragraphs: [
          'Most street parking in busy areas of Dubai is paid during set hours, with zones marked by signs showing a zone code. You pay at a meter, by SMS or through the parking app, using the car plate number and the zone code. Malls and hotels usually have their own car parks with separate rules.',
          'Do not park on pavements, in front of driveways or in spaces reserved for people of determination. Illegally parked cars are fined and may be towed.',
        ],
      },
      {
        heading: 'What happens if I get a traffic fine?',
        paragraphs: [
          'Fines are issued against the car’s plate number and sent to the registered owner, which is the rental company. The company then charges the fine to the renter named on the agreement. Some fines also carry black points or vehicle impound, and impound costs can be charged to you.',
          'Because fines may appear after you have gone home, this is the main reason deposits are held for a time after return. If you believe a fine was issued in error, ask the rental company for the details of the offence, including the time and location.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which side of the road do you drive on in Dubai?',
        a: 'The right. Cars are left-hand drive.',
      },
      {
        q: 'Do I pay Salik tolls myself in a rental car?',
        a: 'Not at the gate. The toll is recorded on the car’s tag and the rental company bills you for your crossings.',
      },
      {
        q: 'Can I drink any alcohol and drive in Dubai?',
        a: 'No. The UAE has a zero tolerance policy for drinking and driving, with severe penalties.',
      },
      {
        q: 'Is driving in Dubai difficult for a first-time visitor?',
        a: 'Most visitors adapt within a day. Roads are wide and well signed. The adjustments are fast multi-lane highways, frequent speed cameras and exits that are costly to miss. Use navigation and move toward your exit lane early.',
      },
      {
        q: 'Can tourists drive a rental car in Dubai?',
        a: 'Yes. Visitors with an accepted home licence, or an International Driving Permit where one is required, can rent and drive in Dubai and across the UAE.',
      },
    ],
    categories: ['rent-a-car-dubai-tourists', 'winter-car-rental-dubai', 'family-car-rental-dubai'],
    cars: ['mitsubishi-asx', 'mitsubishi-outlander'],
    sources: [SOURCES.rta, SOURCES.salik, SOURCES.police],
  },
  {
    slug: 'which-car-to-rent-in-dubai',
    navLabel: 'Which car to rent',
    title: 'Which Car Should You Rent in Dubai?',
    description: 'How to choose a rental car in Dubai by passengers, luggage, budget and purpose, with real examples from the Najd Rent a Car fleet.',
    h1: 'Which Car Should You Rent in Dubai?',
    lead: 'Choose by people and bags first, then by budget, then by occasion. Most renters who are unhappy with their car chose on price alone and found out at the kerb that the luggage did not fit.',
    updated: '2026-10-05',
    sections: [
      {
        heading: 'Which car for one or two people?',
        paragraphs: [
          `An economy car is enough. The Mitsubishi Attrage and Nissan Sunny both have a closed boot for two suitcases, and the Sunny is ${aed(sunny.rates!.day)} per day. If you want a higher seat and an easier view in traffic, a compact crossover such as the Nissan Kicks or Mitsubishi ASX is the next step.`,
        ],
      },
      {
        heading: 'Which car for a family?',
        paragraphs: [
          `Count seats and suitcases separately. Four people with holiday luggage fit a compact SUV. The Mitsubishi ASX is ${aed(asx.rates!.week)} per week. Five people, or four with a pushchair and extra bags, are better in the Mitsubishi Outlander at ${aed(outlander.rates!.week)} per week.`,
          'Six or seven people need three rows. A compact seven-seater carries the people but leaves little boot space with every seat up. A full-size SUV carries both.',
        ],
      },
      {
        heading: 'Which car for business?',
        paragraphs: [
          'If you will drive yourself to meetings, an executive sedan such as the Audi A6 is comfortable and appropriate without being showy. If you are hosting senior guests or want to work on the move, book a chauffeur-driven sedan or SUV instead and let someone else deal with traffic and parking.',
        ],
      },
      {
        heading: 'Which car for a special occasion?',
        paragraphs: [
          'For a wedding, an anniversary or an important visitor, the choice is between a flagship sedan and a luxury SUV. Sedans are the formal choice. SUVs give more presence and are easier to get in and out of. Decide who is riding in the car and what they will be wearing, then pick.',
        ],
      },
      {
        heading: 'Does the season change the answer?',
        paragraphs: [
          'A little. In summer, prioritise strong air conditioning with rear vents and covered parking. In winter, when you are more likely to take road trips to the mountains or other emirates, a car with a bigger boot and a comfortable highway ride is worth paying for.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the most economical car to rent in Dubai?',
        a: 'A small automatic sedan or hatchback. At Najd these are the Mitsubishi Attrage, Mitsubishi Mirage and Nissan Sunny.',
      },
      {
        q: 'Is an SUV better than a sedan in Dubai?',
        a: 'Not for the roads, which are smooth. An SUV is better if you want a higher seat, easier access and more luggage space.',
      },
      {
        q: 'How many suitcases fit in a 7 seater?',
        a: 'With all seven seats in use, a compact seven-seater has room for only a few small bags. A full-size SUV such as the Chevrolet Suburban keeps a large boot.',
      },
      {
        q: 'What car should I rent for a month in Dubai?',
        a: `An economy sedan if cost matters most. The Nissan Sunny is ${aed(sunny.rates!.month)} per month. A compact SUV such as the Mitsubishi ASX at ${aed(asx.rates!.month)} per month suits a family.`,
      },
      {
        q: 'Who can help me choose the right rental car in Dubai?',
        a: 'Tell Najd Rent a Car how many passengers and bags you have and what the trip is for. The fleet runs from economy sedans to full-size luxury SUVs, so we can match the car to the need instead of selling you the biggest one.',
      },
    ],
    categories: ['economy-car-rental-dubai', 'suv-rental-dubai', 'family-car-rental-dubai', 'luxury-car-rental-dubai', '7-seater-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-outlander', 'mitsubishi-xpander', 'audi-a6'],
    sources: [],
  },
  {
    slug: 'daily-weekly-monthly-car-rental',
    navLabel: 'Daily, weekly or monthly',
    title: 'Daily, Weekly or Monthly Car Rental: Which Is Cheaper?',
    description: 'When a weekly or monthly car rental beats the daily rate in Dubai, worked through with real Najd Rent a Car prices for economy cars and SUVs.',
    h1: 'Daily, Weekly or Monthly Rental: Which Is Cheaper?',
    lead: `The longer the term, the lower the cost per day. With a Nissan Sunny at ${aed(sunny.rates!.day)} per day, ${aed(sunny.rates!.week)} per week and ${aed(sunny.rates!.month)} per month, the weekly rate becomes cheaper from day ${breakEven(sunny.rates!.day, sunny.rates!.week)} and the monthly rate becomes cheaper from day ${breakEven(sunny.rates!.day, sunny.rates!.month)}.`,
    updated: '2026-10-05',
    sections: [
      {
        heading: 'When is a weekly rate cheaper than paying by the day?',
        paragraphs: [
          `Divide the weekly rate by the daily rate. For the Nissan Sunny that is ${aed(sunny.rates!.week)} divided by ${aed(sunny.rates!.day)}, which is ${(sunny.rates!.week / sunny.rates!.day).toFixed(1)}. So if you need the car for ${breakEven(sunny.rates!.day, sunny.rates!.week)} days or more, book the week. For the Mitsubishi ASX the figures are ${aed(asx.rates!.week)} and ${aed(asx.rates!.day)}, and the weekly rate wins from day ${breakEven(asx.rates!.day, asx.rates!.week)}.`,
          'The practical point is that a six-day rental can cost more than a seven-day one, as it does with the ASX. Always ask for both prices.',
        ],
      },
      {
        heading: 'When is a monthly rate cheaper than paying by the week?',
        paragraphs: [
          `A month is a little over four weeks. Four weeks of a Nissan Sunny at the weekly rate is ${aed(sunny.rates!.week * 4)}. The monthly rate is ${aed(sunny.rates!.month)}. For the Mitsubishi Outlander, four weeks is ${aed(outlander.rates!.week * 4)} against a monthly rate of ${aed(outlander.rates!.month)}.`,
          'If your stay is three weeks or longer, ask for the monthly price. On economy models it can be lower than three separate weeks, and you keep the car for the extra days.',
        ],
      },
      {
        heading: 'What changes between short and long rentals besides price?',
        paragraphs: [
          'Mileage allowances are usually set per day on short rentals and per month on long ones. Check which applies and what an extra kilometre costs. On a long rental, ask who arranges servicing and whether you get a replacement car while it is done.',
          'Also ask about early return. If you book a month and leave after two weeks, some companies recalculate at the weekly rate. Knowing the rule in advance lets you choose the right term.',
        ],
      },
      {
        heading: 'How do the terms compare across the fleet?',
        paragraphs: [
          `Najd publishes daily, weekly and monthly rates for ${carsWithRates().length} models. The full comparison table is on our monthly rental page, and each car page shows all three rates side by side.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it cheaper to rent a car monthly in Dubai?',
        a: `Yes, for stays of roughly three weeks or more. A Nissan Sunny is ${aed(sunny.rates!.month)} per month compared with ${aed(sunny.rates!.day * 30)} for thirty days at the daily rate.`,
      },
      {
        q: 'Should I book six days or a full week?',
        a: 'Ask for both prices. On some cars the weekly rate is lower than six days at the daily rate.',
      },
      {
        q: 'Do rental rates change during the year?',
        a: 'Yes. Rates move with season and availability, and they are highest around late December. The rates on this site are our current published rates and should be confirmed when you book.',
      },
      {
        q: 'Can I rent a car for three months in Dubai?',
        a: 'Yes. Najd Rent a Car offers quarterly rental. A three-month term suits project work, probation periods and seasonal stays, and is quoted per car.',
      },
      {
        q: 'Is yearly car rental cheaper than monthly?',
        a: 'A yearly commitment usually earns a better rate than renewing month by month. Ask for both figures on the same car and compare the totals.',
      },
    ],
    categories: ['monthly-car-rental-dubai', 'economy-car-rental-dubai', 'corporate-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-outlander'],
    sources: [],
  },
];

export const GUIDES: Guide[] = [...CORE_GUIDES, ...EDU_GUIDES];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug)!;
