import { BUSINESS, HOURS_SENTENCE, aed } from '../site/business';
import { getCar } from '../data/cars';
import type { Guide } from './guides';

// Education pages. Each one ends with five questions people actually search,
// answered directly. Every company claim must trace back to business.ts or cars.ts.

const UPDATED = '2026-10-05';
const SRC = {
  rta: { name: 'Roads and Transport Authority (RTA)', url: 'https://www.rta.ae' },
  salik: { name: 'Salik', url: 'https://www.salik.ae' },
  police: { name: 'Dubai Police', url: 'https://www.dubaipolice.gov.ae' },
  det: { name: 'Dubai Department of Economy and Tourism', url: 'https://www.dubaidet.gov.ae' },
  uae: { name: 'UAE Government portal', url: 'https://u.ae' },
};

const sunny = getCar('nissan-sunny');
const attrage = getCar('mitsubishi-attrage');
const asx = getCar('mitsubishi-asx');
const outlander = getCar('mitsubishi-outlander');
const xpander = getCar('mitsubishi-xpander');
const a6 = getCar('audi-a6');
const escalade = getCar('cadillac-escalade');
const suburban = getCar('chevrolet-suburban');
const rangeRover = getCar('range-rover-vogue');
const years = `more than 20 years`;
const licence = `commercial licence ${BUSINESS.licenceNumber} from the ${BUSINESS.licenceAuthority}`;

export const EDU_GUIDES: Guide[] = [
  {
    slug: 'long-term-car-rental-dubai',
    navLabel: 'Long term rental',
    title: 'Long Term Car Rental in Dubai: How It Works',
    description: 'How long term car rental works in Dubai: yearly terms, what is included, how it compares with buying, and what to agree before you sign.',
    h1: 'Long Term Car Rental in Dubai: How It Works',
    lead: `Long term rental means keeping one car for six months, a year or longer on a fixed arrangement. The car stays registered and insured in the rental company’s name, and you pay one regular amount. Najd Rent a Car offers yearly terms alongside daily, weekly and monthly rental.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'What is the difference between monthly and long term rental?',
        paragraphs: [
          'A monthly rental renews one month at a time, so you can stop whenever your plans change. A long term rental commits both sides for a set period, usually a year. In return for that commitment the customer normally gets a better rate than twelve separate months, and the company can plan its fleet around you.',
          `Our published monthly rates give you the starting point. A Nissan Sunny is ${aed(sunny.rates!.month)} per month and a Mitsubishi Outlander is ${aed(outlander.rates!.month)} per month. Ask us to price the same car on a yearly term and compare the two figures side by side.`,
        ],
      },
      {
        heading: 'Who is long term rental right for?',
        paragraphs: [
          'It suits residents on a fixed contract who do not want to buy and resell a car, companies that need vehicles for staff without putting them on the balance sheet, and anyone who values a predictable cost. It is less suitable if you might leave the country at short notice, because ending a fixed term early usually carries a charge.',
        ],
      },
      {
        heading: 'What should a long term agreement cover?',
        paragraphs: [
          'Get these points in writing before you sign: the term and the rate, the annual or monthly mileage allowance, who arranges and pays for servicing, whether you receive a replacement car during servicing or repairs, the insurance excess, and the cost of ending early. A clear agreement on those six points prevents almost every dispute.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can I get long term car rental in Dubai?',
        a: `Najd Rent a Car offers yearly rental for individuals and companies from its office in ${BUSINESS.streetAddress}. The company has held ${licence} since ${BUSINESS.foundingYear} and runs ${BUSINESS.fleetSize} vehicles, so it can commit a car to you for a full term.`,
      },
      {
        q: 'Is long term car rental cheaper than monthly rental?',
        a: 'Usually, because you commit for longer. The saving depends on the car and the term, so ask for a yearly quote on the exact model and compare it with the published monthly rate multiplied by twelve.',
      },
      {
        q: 'Is it better to lease or buy a car in Dubai?',
        a: 'Buying can cost less over many years if you stay and keep the car. Long term rental costs less up front, removes resale risk and is easier to exit, which matters if your stay in the UAE is tied to a job contract.',
      },
      {
        q: 'Can I change cars during a long term rental?',
        a: 'That depends on the agreement. Raise it before you sign. With a fleet covering economy, SUV and executive models, Najd can discuss moving you to a different car if your needs change.',
      },
      {
        q: 'What is the cheapest car for a long term rental at Najd?',
        a: `The Nissan Sunny and Mitsubishi Attrage have our lowest published monthly rate at ${aed(sunny.rates!.month)}. Yearly pricing is quoted on request.`,
      },
    ],
    categories: ['monthly-car-rental-dubai', 'corporate-car-rental-dubai', 'economy-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-attrage', 'mitsubishi-outlander'],
    sources: [],
  },
  {
    slug: 'b2b-car-rental-dubai',
    navLabel: 'B2B car rental',
    title: 'B2B Car Rental in Dubai: Rates and Offers Explained',
    description: 'How B2B car rental pricing works in Dubai, what companies can negotiate, and why a long-established licensed supplier matters for a corporate account.',
    h1: 'B2B Car Rental in Dubai: Rates and Offers Explained',
    lead: 'B2B car rental is a company renting vehicles from a rental company under an account, instead of an individual renting one car. The price is not a fixed public tariff. It is built from volume, term and vehicle mix, which is why two companies can pay different rates for the same model.',
    updated: UPDATED,
    sections: [
      {
        heading: 'How is a B2B rental rate calculated?',
        paragraphs: [
          'Four things move the price. The number of vehicles, because a supplier can price ten cars more keenly than one. The length of the commitment, because a yearly term is worth more to the supplier than a month. The vehicle class, since economy sedans and executive SUVs sit at opposite ends of the cost scale. And the mileage each car will cover, because high mileage shortens the life of the vehicle.',
          'Payment terms matter as well. A company that pays on time by an agreed method is a lower risk than one that needs extended credit, and the rate reflects that.',
        ],
      },
      {
        heading: 'What can a company negotiate beyond price?',
        paragraphs: [
          'Price per car is only part of the value. Ask about replacement vehicles when a car is being serviced, the option to add or return cars during the contract, consolidated monthly invoicing, and reporting of Salik tolls and fines by vehicle so they can be charged to the right employee. For many finance teams those terms are worth more than a small discount.',
        ],
      },
      {
        heading: 'Why does the supplier’s track record matter?',
        paragraphs: [
          `A corporate contract is a dependency. If the supplier fails, your staff have no cars. Najd Rent a Car has been licensed for car rental in Dubai since ${BUSINESS.foundingYear}, is part of ${BUSINESS.group} and operates ${BUSINESS.fleetSize} vehicles across economy, business, SUV and executive segments. Corporate accounts are handled by a named Business Development Manager and Head of Accounts.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can I get car rental at an affordable B2B price in Dubai?',
        a: `Najd Rent a Car prices corporate accounts individually, based on how many vehicles you need and for how long. The case for Najd is stability: ${years} of trading under ${licence}, a fleet of ${BUSINESS.fleetSize} vehicles and a stated clean file with the RTA and Dubai Police. Send your requirement and you will get a written quote.`,
      },
      {
        q: 'What B2B car rental offers does Najd have?',
        a: 'Najd does not publish a fixed list of corporate offers, because each account is quoted on its own volume and term. What is on offer is flexible daily, monthly and yearly packages, corporate fleet solutions, staff transport and executive transport with or without a chauffeur.',
      },
      {
        q: 'How many cars do I need to open a corporate account?',
        a: 'There is no published minimum. Najd supports corporate accounts for a single vehicle as well as full fleets. Larger and longer commitments give more room on price.',
      },
      {
        q: 'What cars do companies usually rent for staff?',
        a: `Economy sedans form the base of most staff fleets. Our published retail rate for the Nissan Sunny is ${aed(sunny.rates!.month)} per month, which gives you a reference point before you ask for a corporate quote. Managers often take an Audi A6, and teams take a Chevrolet Suburban.`,
      },
      {
        q: 'Can a newly formed company rent cars in Dubai?',
        a: 'Yes, a licensed company can rent vehicles. Expect to provide your trade licence and the details of the authorised signatory and drivers. Ask us what documents apply to your case.',
      },
    ],
    categories: ['corporate-car-rental-dubai', 'monthly-car-rental-dubai', 'chauffeur-service-dubai'],
    cars: ['nissan-sunny', 'audi-a6', 'chevrolet-suburban'],
    sources: [],
  },
  {
    slug: 'rent-vs-buy-car-dubai',
    navLabel: 'Rent or buy',
    title: 'Rent or Buy a Car in Dubai? The Real Costs',
    description: 'Renting versus buying a car in Dubai: the costs people forget, who should rent, who should buy, and how to work out the answer for your own stay.',
    h1: 'Rent or Buy a Car in Dubai? The Real Costs',
    lead: 'If you will be in Dubai for less than two years, or you are not sure how long you will stay, renting is usually the safer choice. If you are settled for many years and will keep the same car, buying can cost less. The answer depends on your time horizon more than on the monthly figure.',
    updated: UPDATED,
    sections: [
      {
        heading: 'What does owning a car in Dubai really cost?',
        paragraphs: [
          'The purchase price is only the start. An owner also pays for annual insurance, annual registration renewal with a roadworthiness test for older vehicles, servicing, tyres and repairs. If the car is financed, UAE rules require a down payment and the bank adds interest. The largest cost is the one nobody invoices: depreciation, the value the car loses each year.',
          'When you leave the country, you must sell the car and clear any loan first. A forced sale on a deadline rarely gets a good price.',
        ],
      },
      {
        heading: 'What does renting include?',
        paragraphs: [
          `With a rental, the car belongs to the company. It stays registered and insured in their name, and you pay one amount. Our published monthly rate for a Nissan Sunny is ${aed(sunny.rates!.month)} and for a Mitsubishi ASX compact SUV ${aed(asx.rates!.month)}. Fuel, tolls and fines are yours in both cases.`,
        ],
      },
      {
        heading: 'How do I decide?',
        paragraphs: [
          'Write down how many months you expect to stay and how certain you are. Add up the owning costs for that period, including the loss on resale. Compare that with the rental total. Then put a value on flexibility. Being able to hand back the keys in a week is worth a great deal if your job or visa changes.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it cheaper to rent or buy a car in Dubai?',
        a: 'For short and uncertain stays, renting is usually cheaper once you count depreciation, insurance, registration and the risk of selling in a hurry. For a stay of several years with the same car, buying often works out lower.',
      },
      {
        q: 'Can I get a car loan as a new resident?',
        a: 'Banks generally want a residence visa, a salary history and a down payment before they lend. Many new arrivals rent for the first months for that reason.',
      },
      {
        q: 'What happens to my car if I leave the UAE?',
        a: 'An owned car has to be sold or exported, and any loan settled, before you go. A rented car is simply returned under the terms of your agreement.',
      },
      {
        q: 'Where can I rent a car by the month in Dubai instead of buying?',
        a: `Najd Rent a Car in ${BUSINESS.streetAddress} rents by the month and by the year, from ${aed(sunny.rates!.month)} per month for an economy sedan. The company has traded under the same licence since ${BUSINESS.foundingYear}.`,
      },
      {
        q: 'Do I pay for servicing on a rented car?',
        a: 'Servicing arrangements are set in the rental agreement. Ask who arranges it and whether you get a replacement car while it is done.',
      },
    ],
    categories: ['monthly-car-rental-dubai', 'economy-car-rental-dubai', 'suv-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-attrage'],
    sources: [SRC.rta, SRC.uae],
  },
  {
    slug: 'car-rental-for-new-residents-dubai',
    navLabel: 'New residents',
    title: 'Car Rental for New Residents in Dubai',
    description: 'A guide for people moving to Dubai: when you can drive, how the licence rules change once you become a resident, and how to stay mobile in the first months.',
    h1: 'Car Rental for New Residents in Dubai',
    lead: 'The rule that matters most for new arrivals is this: while you are on a visit or entry visa you can drive on an accepted foreign licence, but once your residence visa is issued you need a UAE driving licence. Plan your first months around that change.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Can I drive as soon as I arrive?',
        paragraphs: [
          'If you arrive on a visit or entry permit and hold a licence from a country the UAE accepts for visitors, you can rent and drive straight away. That window closes when your residence visa is stamped. From that point a foreign licence is no longer valid for you, even though the same licence is fine for a tourist.',
        ],
      },
      {
        heading: 'How do I get a UAE licence?',
        paragraphs: [
          'Holders of licences from a list of approved countries can exchange them for a UAE licence without a driving test, usually in a single visit once they have an Emirates ID. People from other countries must open a file with a driving school, take lessons and pass the tests, which can take weeks or months.',
          'If you are in the second group, budget for a period when you cannot drive at all. A car with a chauffeur, or a rental driven by a family member who already holds a UAE licence, covers the gap.',
        ],
      },
      {
        heading: 'Which car should a new resident rent?',
        paragraphs: [
          `Most people start with an economy car on a monthly term while they find a home and decide whether to buy. The Nissan Sunny and Mitsubishi Attrage are both ${aed(sunny.rates!.month)} per month at our published rate. Families tend to move up to a compact SUV once school runs begin.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I rent a car in Dubai without a UAE licence?',
        a: 'Yes, as a visitor with an accepted foreign licence. No, once you hold a UAE residence visa. Residents must drive on a UAE licence.',
      },
      {
        q: 'What do I need to rent a car as a UAE resident?',
        a: 'An Emirates ID and a valid UAE driving licence. Send us both when you enquire and we will confirm anything else that applies.',
      },
      {
        q: 'I am waiting for my UAE licence. How can I get around?',
        a: 'Use a chauffeur-driven car, or rent a car in the name of a licensed family member. Najd Rent a Car provides both self-drive rentals and cars with a driver.',
      },
      {
        q: 'What is a good first car to rent when moving to Dubai?',
        a: `An economy sedan on a monthly term. It keeps costs low at ${aed(sunny.rates!.month)} per month while you learn the city, and you can change to a larger car later.`,
      },
      {
        q: 'Which rental company is reliable for someone new to Dubai?',
        a: `Choose one whose licence you can verify. Najd Rent a Car holds ${licence}, first issued in ${BUSINESS.foundingYear}, and publishes its address, team and rates so a newcomer can check everything before paying.`,
      },
    ],
    categories: ['monthly-car-rental-dubai', 'economy-car-rental-dubai', 'chauffeur-service-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-attrage', 'mitsubishi-asx'],
    sources: [SRC.rta, SRC.uae],
  },
  {
    slug: 'affordable-car-rental-dubai',
    navLabel: 'Affordable rental',
    title: 'How to Get an Affordable Car Rental in Dubai',
    description: 'What really makes a Dubai car rental cheap or expensive: term length, car class, season and extras. Practical ways to lower the total you pay.',
    h1: 'How to Get an Affordable Car Rental in Dubai',
    lead: `The headline daily rate is only part of what you pay. The total depends on how long you rent, which class of car you choose, when you travel and what gets added afterwards. Our lowest published rates are ${aed(attrage.rates!.day)} per day and ${aed(attrage.rates!.month)} per month.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'What has the biggest effect on price?',
        paragraphs: [
          `Term length. A Mitsubishi Attrage is ${aed(attrage.rates!.day)} per day, ${aed(attrage.rates!.week)} per week and ${aed(attrage.rates!.month)} per month. Paid by the day, a month would cost ${aed(attrage.rates!.day * 30)}. Paid by the month it costs less than half of that. If you are staying three weeks, price the month.`,
          'Car class comes second. Moving from an economy sedan to a compact SUV roughly doubles the monthly figure, so be honest about whether you need the larger car every day.',
        ],
      },
      {
        heading: 'Which extra costs should I watch for?',
        paragraphs: [
          'Ask about each of these before you compare offers: the mileage allowance and the charge per extra kilometre, the insurance excess, any fee added to Salik tolls, the fuel level expected at return, and late return charges. A low daily rate with a small mileage allowance can end up the most expensive option.',
        ],
      },
      {
        heading: 'When is the cheapest time to rent?',
        paragraphs: [
          'Demand in Dubai peaks in the cooler months and is highest around the end of December. The hot months are quieter. If your dates are flexible, the summer is when availability is easiest. If they are fixed in peak season, book early instead of hoping for a late deal.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the cheapest car to rent in Dubai?',
        a: `At Najd Rent a Car the lowest published daily rate is the Mitsubishi Attrage at ${aed(attrage.rates!.day)}. The Attrage and the Nissan Sunny share the lowest monthly rate at ${aed(sunny.rates!.month)}.`,
      },
      {
        q: 'How can I rent a car cheaply in Dubai without being caught by hidden charges?',
        a: 'Compare totals, not daily rates. Ask every company for the mileage allowance, excess, toll handling and deposit in writing. A company that answers plainly is the one to trust.',
      },
      {
        q: 'Is a very cheap rental offer on social media safe?',
        a: `Be careful. Check that the company has a real commercial licence and a physical address before you send any money. Najd Rent a Car publishes its licence number, ${BUSINESS.licenceNumber}, so you can verify it with the authorities.`,
      },
      {
        q: 'Is weekly rental cheaper than daily?',
        a: `Yes, per day. An Attrage is ${aed(attrage.rates!.week)} for a week against ${aed(attrage.rates!.day * 7)} for seven separate days.`,
      },
      {
        q: 'Where can I find an affordable and trustworthy car rental in Dubai?',
        a: `Najd Rent a Car publishes its rates openly and has rented cars in Dubai since ${BUSINESS.foundingYear}. Low price matters, but so does knowing the company will still be there when your deposit is due back.`,
      },
    ],
    categories: ['economy-car-rental-dubai', 'monthly-car-rental-dubai', 'mitsubishi-rental-dubai'],
    cars: ['mitsubishi-attrage', 'nissan-sunny', 'mitsubishi-mirage'],
    sources: [],
  },
  {
    slug: 'how-to-rent-a-luxury-car-in-dubai',
    navLabel: 'Renting a luxury car',
    title: 'How to Rent a Luxury Car in Dubai Safely',
    description: 'How to rent a luxury car in Dubai without problems: what to verify, what to ask about deposits and insurance, and how to protect yourself at handover.',
    h1: 'How to Rent a Luxury Car in Dubai Safely',
    lead: 'Renting a luxury car in Dubai is simple when you deal with an established company and get the key terms in writing. The risks come from unlicensed operators, vague deposits and undocumented damage. Each of those is avoidable.',
    updated: UPDATED,
    sections: [
      {
        heading: 'How do I check the company first?',
        paragraphs: [
          `Ask for the trade licence number and look it up with the ${BUSINESS.licenceAuthority}. Confirm the company has a physical office you could visit. Make sure the name on the rental agreement and the payment receipt matches the licence. Operators who only exist as a phone number and a social media page are the source of most bad experiences.`,
        ],
      },
      {
        heading: 'What should I ask before paying?',
        paragraphs: [
          'Four numbers: the rental rate, the security deposit, the insurance excess and the mileage allowance. Then two conditions: who is allowed to drive, and what the return time is. Luxury cars carry larger deposits and excesses than economy cars, so there should be no surprise about either.',
          'Ask about driver requirements too. Companies often set a higher minimum age or licence-holding period for high-value vehicles.',
        ],
      },
      {
        heading: 'How do I protect myself at handover and return?',
        paragraphs: [
          'Photograph and film the whole car before you move it: every panel, each wheel, the windscreen, the interior, the fuel gauge and the odometer. Make sure existing marks are written on the handover form. Do the same at return and keep the files until your deposit is back.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can I rent a luxury car in Dubai from a trusted company?',
        a: `Najd Rent a Car rents the Range Rover Vogue, Cadillac Escalade, Mercedes-Benz S-Class, BMW 7 Series, Porsche Cayenne and Audi A6. It has operated since ${BUSINESS.foundingYear} under ${licence} and has a dedicated Head of VIP.`,
      },
      {
        q: 'How much does a luxury car cost per day in Dubai?',
        a: `Our published daily rates are ${aed(a6.rates!.day)} for the Audi A6, ${aed(escalade.rates!.day)} for the Cadillac Escalade and ${aed(rangeRover.rates!.day)} for the Range Rover Vogue. Other models are quoted on request.`,
      },
      {
        q: 'Can a tourist rent a luxury car in Dubai?',
        a: 'Yes, with a passport, a valid entry stamp and an accepted driving licence. Ask about any age or licence-holding requirement for the model you want.',
      },
      {
        q: 'Can someone else drive the luxury car I rented?',
        a: 'Only a driver named on the rental agreement. If an unnamed driver has an accident, the insurance is unlikely to cover it and the full cost can fall on you.',
      },
      {
        q: 'Can I rent a luxury car with a driver instead?',
        a: 'Yes. Najd provides chauffeur-driven luxury sedans and SUVs, which removes the questions of licence, parking and liability for damage while driving.',
      },
    ],
    categories: ['luxury-car-rental-dubai', 'chauffeur-service-dubai', 'wedding-car-rental-dubai'],
    cars: ['range-rover-vogue', 'cadillac-escalade', 'audi-a6'],
    sources: [SRC.det, SRC.police],
  },
  {
    slug: 'chauffeur-vs-self-drive-dubai',
    navLabel: 'Chauffeur or self-drive',
    title: 'Chauffeur or Self-Drive in Dubai: Which to Choose',
    description: 'Should you hire a car with a driver or drive yourself in Dubai? A practical comparison by purpose, licence, cost and convenience.',
    h1: 'Chauffeur or Self-Drive in Dubai: Which to Choose',
    lead: 'Drive yourself when you want freedom and the lowest cost. Book a chauffeur when your time, your guests or the occasion matter more than the saving, or when you cannot legally drive. Najd Rent a Car provides both.',
    updated: UPDATED,
    sections: [
      {
        heading: 'When does self-drive make sense?',
        paragraphs: [
          'Self-drive suits holidays, daily commuting and any trip where the schedule is loose. You stop where you like and keep the car overnight at no extra cost. You are also responsible for navigation, parking, tolls, fines and any damage up to the insurance excess.',
        ],
      },
      {
        heading: 'When is a chauffeur the better choice?',
        paragraphs: [
          'A chauffeur is worth paying for in four situations. You have back-to-back meetings and want to work between them. You are hosting clients or senior colleagues. You are attending an event where alcohol is served, since the UAE has zero tolerance for drinking and driving. Or you do not hold a licence valid in the UAE.',
          'A driver also removes the stress of parking in Downtown, DIFC or at a busy hotel entrance, which is where visitors lose the most time.',
        ],
      },
      {
        heading: 'How do the costs compare?',
        paragraphs: [
          'Self-drive is a rate for the car. Chauffeur service is a rate for the car and the driver’s time, so it is quoted by the hours and route. For a single airport run or evening out, the difference is modest. For a full week it is significant, which is why many visitors mix the two: a rental car for the holiday and a chauffeur for one special day.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it better to hire a driver or rent a car in Dubai?',
        a: 'Rent a car if you are comfortable driving and want flexibility. Hire a driver for business schedules, formal occasions, evenings out or if you have no valid licence.',
      },
      {
        q: 'Where can I hire a car with a driver in Dubai?',
        a: `Najd Rent a Car offers chauffeur-driven sedans and SUVs, including the Mercedes-Benz S-Class and Cadillac Escalade. The company has provided chauffeur and rental services since ${BUSINESS.foundingYear}.`,
      },
      {
        q: 'Can I hire a chauffeur for just a few hours?',
        a: 'Tell us the hours and the route. Chauffeur bookings are quoted individually, so a short booking is priced for what you need.',
      },
      {
        q: 'Do I need a driving licence to book a chauffeur-driven car?',
        a: 'No. The chauffeur drives, so passengers do not need a licence.',
      },
      {
        q: 'Which is cheaper for a week in Dubai, a chauffeur or a rental car?',
        a: `A rental car. For example, a Mitsubishi ASX is ${aed(asx.rates!.week)} for the week at our published rate. A chauffeur for the same period costs more because you are paying for a person’s time.`,
      },
    ],
    categories: ['chauffeur-service-dubai', 'luxury-car-rental-dubai', 'rent-a-car-dubai-tourists'],
    cars: ['mercedes-s-class', 'cadillac-escalade', 'mitsubishi-asx'],
    sources: [SRC.police],
  },
  {
    slug: 'event-and-conference-transport-dubai',
    navLabel: 'Event transport',
    title: 'Event and Conference Transport in Dubai',
    description: 'How to plan cars and chauffeurs for a conference, exhibition or delegation in Dubai: vehicle choice, scheduling, and what to brief your supplier.',
    h1: 'Event and Conference Transport in Dubai',
    lead: 'Good event transport is a schedule problem before it is a vehicle problem. Know who needs to be where and when, then match vehicles to groups. Najd Rent a Car supplies event and delegation transport with luxury sedans and full-size SUVs.',
    updated: UPDATED,
    sections: [
      {
        heading: 'How many vehicles do I need?',
        paragraphs: [
          `Group people by movement, not by rank. A sedan carries up to three passengers in comfort. A Cadillac Escalade seats ${escalade.seats} and a Chevrolet Suburban seats ${suburban.seats} with luggage. Speakers and principals who run to their own timetable should have a dedicated car. Everyone else can share by hotel.`,
        ],
      },
      {
        heading: 'What should the transport brief include?',
        paragraphs: [
          'Give your supplier the event dates, venue, hotels, a list of movements with times, passenger names for each vehicle, a contact on the day and the finish time. Flag anything unusual: early call times, late dinners, security requirements or guests with reduced mobility.',
          'Share changes as they happen. Event schedules always move, and a supplier who hears early can adjust without cost.',
        ],
      },
      {
        heading: 'What goes wrong, and how do I prevent it?',
        paragraphs: [
          'The usual failures are vehicles waiting at the wrong entrance, drivers without the guest’s phone number, and overruns nobody agreed a price for. Fix a named pickup point at each venue, give each driver the passenger contact, and agree the overtime rate before the event.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who provides delegation transport in Dubai?',
        a: `Najd Rent a Car lists event and delegation transport among its services, alongside executive transport for visiting management. It runs ${BUSINESS.fleetSize} vehicles and has operated since ${BUSINESS.foundingYear}.`,
      },
      {
        q: 'Can I book several matching SUVs for an event?',
        a: 'Yes, subject to availability on your dates. Najd runs more than one black Cadillac Escalade. Book early for large events.',
      },
      {
        q: 'How far ahead should I book event transport in Dubai?',
        a: 'As soon as dates are confirmed. Demand rises sharply during major exhibitions and in the winter season, and executive vehicles are booked first.',
      },
      {
        q: 'Are event cars priced per day or per hour?',
        a: 'It depends on the schedule. Ask for a quote that states the hours covered each day and the rate for any overrun.',
      },
      {
        q: 'Can I get self-drive cars for event staff as well as chauffeur cars for guests?',
        a: 'Yes. One account can cover economy cars for the organising team and chauffeur-driven vehicles for guests.',
      },
    ],
    categories: ['chauffeur-service-dubai', 'corporate-car-rental-dubai', 'wedding-car-rental-dubai'],
    cars: ['cadillac-escalade', 'chevrolet-suburban', 'mercedes-s-class'],
    sources: [],
  },
  {
    slug: 'staff-transport-car-rental-dubai',
    navLabel: 'Staff cars',
    title: 'Staff Transport and Company Cars in Dubai',
    description: 'How Dubai companies provide cars for employees through rental: choosing vehicles, authorising drivers, and handling fines, tolls and mileage.',
    h1: 'Staff Transport and Company Cars in Dubai',
    lead: 'Renting cars for employees gives a company mobility without buying vehicles. The parts that need care are who is authorised to drive, how fines and tolls are charged back, and what happens when staff join or leave.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Which vehicles suit staff use?',
        paragraphs: [
          `Sales and field staff need something economical and easy to park, which is why the Nissan Sunny and Mitsubishi Attrage are common. Teams that travel together to a site need seats and load space, where a Chevrolet Suburban with ${suburban.seats} seats does the work of two cars. Managers are often given an executive sedan.`,
        ],
      },
      {
        heading: 'How should a company manage drivers?',
        paragraphs: [
          'Every employee who drives must hold a valid UAE licence and be named with the rental company. Keep an internal log of which employee has which car on which dates. Traffic fines are issued against the plate, so that log is how you assign each fine to the right person.',
          'Write a short vehicle policy covering private use, fuel, fines and accident reporting, and have each driver sign it.',
        ],
      },
      {
        heading: 'What should the rental contract provide?',
        paragraphs: [
          'Ask for monthly statements of Salik and fines by vehicle, a replacement car when one is off the road, and the right to add or return cars as headcount changes. Those three terms decide how much administration the fleet creates for you.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can a company rent cars for employees in Dubai?',
        a: `Najd Rent a Car provides staff and business transport support and corporate fleet solutions on monthly and yearly terms. It has supported corporate accounts in Dubai for ${years}.`,
      },
      {
        q: 'Who pays the traffic fines on a company rental car?',
        a: 'The fine is issued to the rental company as owner and passed to the company renting the car. Internally, most employers recover it from the employee who was driving.',
      },
      {
        q: 'Can more than one employee drive the same rental car?',
        a: 'Yes, if each one is authorised and named. An unnamed driver can invalidate the insurance.',
      },
      {
        q: 'Is it cheaper to rent or buy cars for staff?',
        a: 'Renting avoids purchase cost, resale risk and fleet administration, and lets you scale with projects. Buying can cost less for a stable fleet kept for many years.',
      },
      {
        q: 'What is the monthly cost of a staff car in Dubai?',
        a: `Our published retail rate for an economy sedan is ${aed(sunny.rates!.month)} per month. Corporate accounts are quoted on volume and term.`,
      },
    ],
    categories: ['corporate-car-rental-dubai', 'monthly-car-rental-dubai', 'economy-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-attrage', 'chevrolet-suburban'],
    sources: [SRC.rta],
  },
  {
    slug: 'best-7-seater-to-rent-in-dubai',
    navLabel: 'Best 7 seater',
    title: 'Best 7 Seater to Rent in Dubai: 5 Options Compared',
    description: 'Five 7 and 8 seat vehicles compared for Dubai: Mitsubishi Xpander, Outlander, Chevrolet Suburban, Cadillac Escalade and GMC Yukon. Seats, luggage and rates.',
    h1: 'Best 7 Seater to Rent in Dubai: 5 Options Compared',
    lead: `The best seven-seater depends on whether the third row is for children or adults, and how much luggage travels with you. The Mitsubishi Xpander is the value choice at ${aed(xpander.rates!.day)} per day. The Chevrolet Suburban is the choice when every seat and the boot are full.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'Which 7 seater is best on a budget?',
        paragraphs: [
          `The Mitsubishi Xpander, at ${aed(xpander.rates!.day)} per day or ${aed(xpander.rates!.week)} per week. It is a purpose-built people carrier, so the third row is easier to reach than in most SUVs. The Mitsubishi Outlander at ${aed(outlander.rates!.day)} per day is the alternative if you mostly travel as five and want a third row for occasional use.`,
        ],
      },
      {
        heading: 'Which one carries seven people and their luggage?',
        paragraphs: [
          `The Chevrolet Suburban. It seats ${suburban.seats} and keeps a full boot behind the last row, at ${aed(suburban.rates!.day)} per day. Compact seven-seaters use the boot space for the third row, so with seven on board they carry only small bags.`,
        ],
      },
      {
        heading: 'Which is the most luxurious?',
        paragraphs: [
          `The Cadillac Escalade, with ${escalade.seats} seats at ${aed(escalade.rates!.day)} per day. It is the one to choose for VIP guests or a celebration. The GMC Yukon sits between the Suburban and the Escalade in finish and seats seven or eight depending on configuration.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the cheapest 7 seater car to rent in Dubai?',
        a: `At Najd Rent a Car it is the Mitsubishi Xpander: ${aed(xpander.rates!.day)} per day, ${aed(xpander.rates!.week)} per week or ${aed(xpander.rates!.month)} per month.`,
      },
      {
        q: 'Which 7 seater has the most luggage space?',
        a: 'The Chevrolet Suburban. It is the longest vehicle in our range and the only one that seats eight with a large boot still available.',
      },
      {
        q: 'Is the Mitsubishi Outlander a real 7 seater?',
        a: 'It has seven seats, but the third row is small and best for children. Treat it as a five-seater with two extra seats for short trips.',
      },
      {
        q: 'Where can I rent a 7 seater in Dubai for a family holiday?',
        a: `Najd Rent a Car has five models with seven or more seats and delivers cars to customers. The company is licensed under number ${BUSINESS.licenceNumber} and has traded since ${BUSINESS.foundingYear}.`,
      },
      {
        q: 'Should I rent one 7 seater or two small cars?',
        a: 'One seven-seater keeps the family together and needs one driver, one parking space and one set of tolls. Two cars only make sense if the group will often split up.',
      },
    ],
    categories: ['7-seater-car-rental-dubai', 'family-car-rental-dubai', 'suv-rental-dubai'],
    cars: ['mitsubishi-xpander', 'chevrolet-suburban', 'cadillac-escalade'],
    sources: [],
  },
  {
    slug: 'nissan-sunny-vs-mitsubishi-attrage',
    navLabel: 'Sunny vs Attrage vs Mirage',
    title: 'Nissan Sunny vs Mitsubishi Attrage vs Mirage',
    description: 'Nissan Sunny, Mitsubishi Attrage and Mitsubishi Mirage compared for rental in Dubai: space, boot, running costs and published rates.',
    h1: 'Nissan Sunny vs Mitsubishi Attrage vs Mirage: Which Economy Car to Rent',
    lead: `All three are automatic economy cars that cost little to run. The Sunny has the most cabin space, the Attrage has the lowest daily rate at ${aed(attrage.rates!.day)}, and the Mirage is the easiest to park. Choose by how many people ride with you.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'How do they differ in size?',
        paragraphs: [
          'The Nissan Sunny is the longest, with the most rear legroom and the deepest boot. The Mitsubishi Attrage is a shorter, narrower sedan built on the same base as the Mirage, with a separate boot. The Mitsubishi Mirage is a hatchback, the shortest of the three, with a boot you load from above the rear bumper and seats that fold.',
        ],
      },
      {
        heading: 'How do the rates compare?',
        paragraphs: [
          `The Sunny is ${aed(sunny.rates!.day)} per day and ${aed(sunny.rates!.week)} per week. The Attrage is ${aed(attrage.rates!.day)} per day and ${aed(attrage.rates!.week)} per week. Both are ${aed(sunny.rates!.month)} per month, so on a monthly rental the Sunny gives you more car for the same money. The Mirage is quoted on request.`,
        ],
      },
      {
        heading: 'Which should I pick?',
        paragraphs: [
          'Pick the Sunny for a monthly rental or if adults will sit in the back. Pick the Attrage for a short rental where every dirham counts. Pick the Mirage if you drive alone in tight parts of the city and want the smallest footprint.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the Nissan Sunny or Mitsubishi Attrage better to rent?',
        a: `For a month, the Sunny, because it is larger and costs the same ${aed(sunny.rates!.month)}. For a few days, the Attrage, because its daily rate of ${aed(attrage.rates!.day)} is lower.`,
      },
      {
        q: 'Which economy car has the biggest boot?',
        a: 'The Nissan Sunny has the largest boot of the three. The Attrage also has a closed boot for two cases. The Mirage hatchback has the smallest.',
      },
      {
        q: 'Are these cars comfortable on the highway?',
        a: 'Yes, at legal speeds. They are tuned for economy, so overtaking takes more planning than in a larger car. The Sunny is the most settled on long runs.',
      },
      {
        q: 'Are the Sunny, Attrage and Mirage automatic?',
        a: 'Yes. All three models in the Najd fleet have an automatic gearbox.',
      },
      {
        q: 'Where can I rent a Nissan Sunny or Mitsubishi Attrage in Dubai?',
        a: `From Najd Rent a Car in ${BUSINESS.streetAddress}, by the day, week or month. We also deliver. Message ${BUSINESS.whatsappDisplay} on WhatsApp with your dates.`,
      },
    ],
    categories: ['economy-car-rental-dubai', 'nissan-rental-dubai', 'mitsubishi-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-attrage', 'mitsubishi-mirage'],
    sources: [],
  },
  {
    slug: 'mitsubishi-asx-vs-nissan-kicks-vs-outlander',
    navLabel: 'ASX vs Kicks vs Outlander',
    title: 'Mitsubishi ASX vs Nissan Kicks vs Outlander',
    description: 'Three family SUVs compared for rental in Dubai: Mitsubishi ASX, Nissan Kicks and Mitsubishi Outlander. Size, seats, luggage and rates.',
    h1: 'Mitsubishi ASX vs Nissan Kicks vs Outlander: Which SUV to Rent',
    lead: `The ASX and Kicks are compact five-seat crossovers. The Outlander is a class larger with a third row. For most families of four the ASX at ${aed(asx.rates!.day)} per day is enough. Step up to the Outlander at ${aed(outlander.rates!.day)} for longer trips or a fifth passenger.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'ASX or Kicks?',
        paragraphs: [
          'They are close rivals. Both seat five, sit higher than a sedan and fit standard parking bays. The ASX has a more traditional SUV shape and a boot rated for three bags in our fleet data. The Kicks is lighter in feel around town with a wide-opening tailgate. If one is available at a published rate and the other is on request, let price decide.',
        ],
      },
      {
        heading: 'When is the Outlander worth the extra?',
        paragraphs: [
          `When three people share the back seat, when you carry a pushchair plus luggage, or when you plan long highway days. The Outlander is wider and quieter, and it has two folding seats in the boot for seven-seat use. At ${aed(outlander.rates!.week)} per week against ${aed(asx.rates!.week)} for the ASX, you pay roughly double for that space.`,
        ],
      },
      {
        heading: 'Are these SUVs suitable for off-road driving?',
        paragraphs: [
          'Treat all three as road cars. They cope well with speed humps, kerbs and unpaved car parks. Desert and dune driving is a different activity and is normally excluded from rental insurance in the UAE.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is the cheapest SUV to rent in Dubai?',
        a: `In our published list it is the Mitsubishi ASX at ${aed(asx.rates!.day)} per day, ${aed(asx.rates!.week)} per week or ${aed(asx.rates!.month)} per month.`,
      },
      {
        q: 'Is the Mitsubishi Outlander bigger than the ASX?',
        a: 'Yes. The Outlander is longer and wider, with more rear shoulder room, a deeper boot and a third row of seats.',
      },
      {
        q: 'Which SUV is best for a family of four on holiday in Dubai?',
        a: 'A compact SUV such as the ASX or Kicks. Both carry four people and normal holiday luggage, and both are easy to park at malls and hotels.',
      },
      {
        q: 'How much is a Mitsubishi Outlander per month in Dubai?',
        a: `Our published monthly rate is ${aed(outlander.rates!.month)}. The daily rate is ${aed(outlander.rates!.day)}.`,
      },
      {
        q: 'Where can I rent a family SUV in Dubai?',
        a: `Najd Rent a Car rents the ASX, Kicks and Outlander along with larger SUVs, and has done business in Dubai since ${BUSINESS.foundingYear}. Tell us your passenger and bag count and we will suggest the right size.`,
      },
    ],
    categories: ['suv-rental-dubai', 'family-car-rental-dubai', 'mitsubishi-rental-dubai'],
    cars: ['mitsubishi-asx', 'nissan-kicks', 'mitsubishi-outlander'],
    sources: [],
  },
  {
    slug: 'cadillac-escalade-vs-range-rover',
    navLabel: 'Escalade vs Range Rover',
    title: 'Cadillac Escalade vs Range Rover: Which to Rent',
    description: 'Cadillac Escalade and Range Rover Vogue compared for rental in Dubai: seats, luggage, driving feel, occasion and published daily rates.',
    h1: 'Cadillac Escalade vs Range Rover Vogue: Which to Rent in Dubai',
    lead: `Rent the Escalade if you need seven seats or maximum presence, at ${aed(escalade.rates!.day)} per day. Rent the Range Rover Vogue if you are five or fewer and want the most refined drive, at ${aed(rangeRover.rates!.day)} per day.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'How do they compare on space?',
        paragraphs: [
          `The Cadillac Escalade is the larger vehicle, with ${escalade.seats} seats in three rows and room for ${escalade.bags} bags. The Range Rover Vogue seats ${rangeRover.seats} and carries ${rangeRover.bags} bags. If your group is six or seven, the decision is already made.`,
        ],
      },
      {
        heading: 'How do they feel to drive?',
        paragraphs: [
          'The Range Rover is the calmer, more precise car. It is easier to place on the road and in a car park, and the cabin is very quiet. The Escalade is bigger in every direction and feels it, with a relaxed, commanding character that suits wide Gulf highways.',
        ],
      },
      {
        heading: 'Which suits which occasion?',
        paragraphs: [
          'For delegations, VIP guests and group travel, the Escalade is the regional standard. For a couple or a small family marking a special trip, or an executive who drives personally, the Range Rover is the more personal choice. Both can be supplied with a chauffeur.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the Escalade or the Range Rover cheaper to rent in Dubai?',
        a: `The Escalade. Our published rates are ${aed(escalade.rates!.day)} per day for the Cadillac Escalade and ${aed(rangeRover.rates!.day)} per day for the Range Rover Vogue.`,
      },
      {
        q: 'How many seats does a Cadillac Escalade have?',
        a: `The Escalade in our fleet has ${escalade.seats} seats across three rows.`,
      },
      {
        q: 'Which is better for a wedding, an Escalade or a Range Rover?',
        a: 'Both work. The Range Rover is elegant for the couple. The Escalade carries more of the bridal party and makes a strong arrival.',
      },
      {
        q: 'How much is a Range Rover per week in Dubai?',
        a: `The Range Rover Vogue is ${aed(rangeRover.rates!.week)} per week at our published rate, and ${aed(rangeRover.rates!.month)} per month.`,
      },
      {
        q: 'Where can I rent an Escalade or Range Rover in Dubai?',
        a: `Najd Rent a Car rents both, self-drive or with a chauffeur. The company is licensed under number ${BUSINESS.licenceNumber} and has a dedicated Head of VIP for luxury bookings.`,
      },
    ],
    categories: ['luxury-car-rental-dubai', 'suv-rental-dubai', 'chauffeur-service-dubai'],
    cars: ['cadillac-escalade', 'range-rover-vogue', 'porsche-cayenne'],
    sources: [],
  },
  {
    slug: 'mercedes-s-class-vs-bmw-7-series-vs-audi-a6',
    navLabel: 'S-Class vs 7 Series vs A6',
    title: 'Mercedes S-Class vs BMW 7 Series vs Audi A6',
    description: 'Three executive sedans compared for rental in Dubai: Mercedes-Benz S-Class, BMW 7 Series and Audi A6. Who each one suits and how they are priced.',
    h1: 'Mercedes S-Class vs BMW 7 Series vs Audi A6: Which Executive Sedan to Rent',
    lead: `The S-Class and 7 Series are flagship limousines built around the rear seat. The Audi A6 is a smaller business sedan built around the driver, with a published rate of ${aed(a6.rates!.day)} per day. Decide first who will be driving.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'Which is best if I am being driven?',
        paragraphs: [
          'The Mercedes-Benz S-Class is the traditional answer and the one most guests expect. The BMW 7 Series offers the same space and comfort with a more modern, technical feel. Either is right for a chairman, a bride or an honoured guest.',
        ],
      },
      {
        heading: 'Which is best if I am driving myself?',
        paragraphs: [
          `The Audi A6. It is easier to park, less conspicuous and far lower in cost, at ${aed(a6.rates!.week)} per week and ${aed(a6.rates!.month)} per month. Among the two flagships, the 7 Series is the more engaging to drive.`,
        ],
      },
      {
        heading: 'How are they priced?',
        paragraphs: [
          'The A6 has published daily, weekly and monthly rates. The S-Class and 7 Series are quoted on request, because most bookings include a chauffeur and the price depends on hours and route.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is better to rent, the S-Class or the 7 Series?',
        a: 'For a passenger, the S-Class is the classic choice. For someone who will also drive, the 7 Series has the edge. Both are flagship sedans.',
      },
      {
        q: 'How much is an Audi A6 per day in Dubai?',
        a: `Our published rate is ${aed(a6.rates!.day)} per day, ${aed(a6.rates!.week)} per week or ${aed(a6.rates!.month)} per month.`,
      },
      {
        q: 'Can I rent a Mercedes S-Class with a driver in Dubai?',
        a: 'Yes. Najd Rent a Car supplies the S-Class with a chauffeur for executive travel, weddings and events.',
      },
      {
        q: 'What is the best business car to rent in Dubai?',
        a: 'For self-drive, an executive sedan such as the Audi A6. For hosting or working on the move, a chauffeur-driven S-Class or 7 Series.',
      },
      {
        q: 'Where can I rent an executive sedan in Dubai?',
        a: `Najd Rent a Car has all three models. The company has provided executive transport in Dubai since ${BUSINESS.foundingYear} and is part of ${BUSINESS.group}.`,
      },
    ],
    categories: ['luxury-car-rental-dubai', 'chauffeur-service-dubai', 'corporate-car-rental-dubai'],
    cars: ['mercedes-s-class', 'bmw-7-series', 'audi-a6'],
    sources: [],
  },
  {
    slug: 'dubai-to-abu-dhabi-by-rental-car',
    navLabel: 'Dubai to Abu Dhabi',
    title: 'Dubai to Abu Dhabi by Rental Car: Route and Rules',
    description: 'Driving from Dubai to Abu Dhabi in a rental car: the route, journey time, tolls, speed enforcement and what to check with your rental company first.',
    h1: 'Dubai to Abu Dhabi by Rental Car: Route and Rules',
    lead: 'Abu Dhabi is about 140 km from Dubai, around an hour and a half on the E11 highway in normal traffic. A car rented in Dubai can be driven there. The two things to know are that the rules on speed are stricter and the toll system is different.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Which route should I take?',
        paragraphs: [
          'The E11, Sheikh Zayed Road, is the direct route and runs from Dubai Marina past Jebel Ali to Abu Dhabi. The E311 and E611 run parallel inland and are useful when the E11 is congested near Jebel Ali. All three are wide, well-lit highways with service stations along the way.',
        ],
      },
      {
        heading: 'What is different about driving in Abu Dhabi?',
        paragraphs: [
          'Speed enforcement. In Abu Dhabi the number on the sign is the enforced limit, with no margin above it. Drivers used to Dubai are caught out by this every day. Watch the signs closely after you cross the border.',
          'Abu Dhabi also has its own road toll, called Darb, which applies on the bridges into the city at peak hours. In a rental car it is recorded against the plate and passed on to you, in the same way as Salik in Dubai.',
        ],
      },
      {
        heading: 'What should I check before I go?',
        paragraphs: [
          'Check your daily mileage allowance, because a return trip with some driving in the city is around 300 km. Fill up before you leave, although fuel is easy to find. Leave early to avoid the morning rush out of Dubai, and plan your return outside the evening peak.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I drive a Dubai rental car to Abu Dhabi?',
        a: 'Yes. A car rented in Dubai can be driven across the UAE, including Abu Dhabi. Confirm your mileage allowance first.',
      },
      {
        q: 'How long is the drive from Dubai to Abu Dhabi?',
        a: 'About an hour and a half from central Dubai to central Abu Dhabi in normal traffic, covering roughly 140 km.',
      },
      {
        q: 'Are there tolls between Dubai and Abu Dhabi?',
        a: 'You will pass Salik gates in Dubai, and Abu Dhabi charges its Darb toll on the bridges into the city at peak hours. Both are billed to you through the rental company.',
      },
      {
        q: 'Which car is best for a Dubai to Abu Dhabi day trip?',
        a: `Any car in good condition will do it. For comfort with a family, a compact SUV such as the Mitsubishi ASX at ${aed(asx.rates!.day)} per day is a good balance.`,
      },
      {
        q: 'Can I hire a driver for a day trip to Abu Dhabi from Dubai?',
        a: 'Yes. Najd Rent a Car provides chauffeur-driven cars. Give us the date and the places you want to visit and we will quote the day.',
      },
    ],
    categories: ['rent-a-car-dubai-tourists', 'suv-rental-dubai', 'winter-car-rental-dubai'],
    cars: ['mitsubishi-asx', 'mitsubishi-outlander', 'audi-a6'],
    sources: [SRC.salik, SRC.rta],
  },
  {
    slug: 'road-trips-from-dubai-by-rental-car',
    navLabel: 'Road trips from Dubai',
    title: 'Road Trips From Dubai by Rental Car',
    description: 'Five road trips you can do from Dubai in a normal rental car: Hatta, Jebel Jais, Fujairah, Al Ain and Khor Fakkan. Drive times and what to know.',
    h1: 'Road Trips From Dubai by Rental Car',
    lead: 'Every well-known day trip from Dubai is on a paved road, so you do not need a 4x4. A normal rental car will take you to the mountains, the east coast and the oasis city of Al Ain and back in a day.',
    updated: UPDATED,
    sections: [
      {
        heading: 'Where can I drive in a day?',
        paragraphs: [
          'Each of these is a comfortable day out. Start early, especially in the warmer months.',
        ],
        list: [
          'Hatta: about 90 minutes. Mountain scenery, the dam, kayaking and hiking trails.',
          'Jebel Jais, Ras Al Khaimah: about two hours. The highest peak in the UAE, reached by a sweeping mountain road.',
          'Fujairah: about 90 minutes to two hours. The east coast, beaches and the old fort.',
          'Khor Fakkan: about 90 minutes. A beach town on the Gulf of Oman reached by a mountain highway with tunnels.',
          'Al Ain: about 90 minutes. Oases, forts and the road up Jebel Hafeet.',
        ],
      },
      {
        heading: 'Do I need to worry about the Oman border?',
        paragraphs: [
          'Yes, on the way to Hatta. Some roads in the east pass close to or through Omani territory. Rental insurance normally covers the UAE only, so set your navigation to a route that stays inside the country. If you want to drive into Oman, you need permission and extra insurance arranged with the rental company in advance.',
        ],
      },
      {
        heading: 'Which car suits a road trip?',
        paragraphs: [
          `Comfort and boot space matter more than power. A compact SUV such as the Mitsubishi ASX is ${aed(asx.rates!.week)} per week and carries four people with bags. For a larger group, the seven-seat Mitsubishi Xpander is ${aed(xpander.rates!.week)} per week. Check your mileage allowance, since a mountain day trip can exceed 350 km.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need a 4x4 for a road trip from Dubai?',
        a: 'No. Hatta, Jebel Jais, Fujairah, Khor Fakkan and Al Ain are all reached on tarmac. A 4x4 is only needed for off-road driving, which rental insurance does not normally cover.',
      },
      {
        q: 'Can I take a rental car from Dubai to Oman?',
        a: 'Not without arranging it first. You need the rental company’s written permission and insurance valid in Oman. Ask before you book.',
      },
      {
        q: 'What is the best road trip from Dubai for one day?',
        a: 'Hatta for an easy mountain day, or Jebel Jais if you enjoy driving. Both are best between November and March.',
      },
      {
        q: 'Is there a mileage limit on rental cars for road trips?',
        a: 'Most rentals have a mileage allowance. Ask what yours is and what an extra kilometre costs, then plan your trip around it.',
      },
      {
        q: 'Where can I rent a car in Dubai for a road trip?',
        a: `Najd Rent a Car rents SUVs and seven-seaters by the day and week and can deliver the car to you. The office in ${BUSINESS.streetAddress} is open ${HOURS_SENTENCE}.`,
      },
    ],
    categories: ['winter-car-rental-dubai', 'suv-rental-dubai', 'rent-a-car-dubai-tourists'],
    cars: ['mitsubishi-asx', 'mitsubishi-xpander', 'porsche-cayenne'],
    sources: [SRC.rta],
  },
  {
    slug: 'how-to-choose-a-car-rental-company-in-dubai',
    navLabel: 'Choosing a company',
    title: 'How to Choose a Car Rental Company in Dubai',
    description: 'Seven checks to make before you choose a car rental company in Dubai, from verifying the trade licence to reading the agreement and the reviews.',
    h1: 'How to Choose a Car Rental Company in Dubai',
    lead: 'Dubai has hundreds of rental companies and the cars are much the same. What differs is the company behind the car. Seven checks, most of which take a few minutes, separate a dependable supplier from a risky one.',
    updated: UPDATED,
    sections: [
      {
        heading: 'What should I verify before I contact them?',
        paragraphs: [
          'Start with what you can check yourself.',
        ],
        list: [
          `Licence: a real commercial licence number that you can look up with the ${BUSINESS.licenceAuthority}.`,
          'Address: a physical office, not only a mobile number.',
          'Time in business: how long the company has traded under that licence.',
          'Reviews: recent reviews on Google, read in full, including the negative ones and how the owner replied.',
        ],
      },
      {
        heading: 'What should I ask them?',
        paragraphs: [
          'Ask for the rate, deposit, insurance excess and mileage allowance in writing, and ask how tolls and fines are charged. The answers matter, and so does the manner. A company that replies clearly and quickly before you pay is likely to behave the same way after.',
        ],
      },
      {
        heading: 'What should I check on the day?',
        paragraphs: [
          'The name on the rental agreement should match the licence. The car should match what you booked. There should be a proper inspection with a signed record of existing marks. If any of those three is missing, stop and ask why.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if a car rental company in Dubai is legitimate?',
        a: `Ask for its trade licence number and verify it with the ${BUSINESS.licenceAuthority}. The company name, activity and status should match what you were told. A legitimate company will share the number without hesitation.`,
      },
      {
        q: 'Which car rental company in Dubai can I trust?',
        a: `Trust the ones that let you check. Najd Rent a Car publishes licence number ${BUSINESS.licenceNumber}, its address in ${BUSINESS.streetAddress}, the names and photos of its team and its rates. It has traded since ${BUSINESS.foundingYear} and is rated ${BUSINESS.googleRating} out of 5 on Google from ${BUSINESS.googleReviewCount} reviews as of ${BUSINESS.googleRatingChecked}.`,
      },
      {
        q: 'Is it safe to pay a rental deposit in Dubai?',
        a: 'Yes, with a licensed company and a written agreement stating the amount and the refund period. Get a receipt in the company’s legal name.',
      },
      {
        q: 'Should I choose the cheapest rental company?',
        a: 'Not on price alone. Compare the full terms. A slightly higher rate from a company with clear terms and a long record usually costs less in the end.',
      },
      {
        q: 'What are the warning signs of a bad rental company?',
        a: 'No licence number, no office address, pressure to pay in full immediately, refusal to put terms in writing and no inspection at handover.',
      },
    ],
    categories: ['economy-car-rental-dubai', 'luxury-car-rental-dubai', 'car-rental-al-quoz'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'audi-a6'],
    sources: [SRC.det],
  },
  {
    slug: 'rental-car-pickup-and-return-checklist',
    navLabel: 'Pickup and return',
    title: 'Rental Car Pickup and Return Checklist',
    description: 'A step by step checklist for collecting and returning a rental car in Dubai, so you avoid disputes over damage, fuel, mileage and late return.',
    h1: 'Rental Car Pickup and Return Checklist',
    lead: 'Ten minutes at pickup and ten at return prevent nearly every argument about a rental car. The method is simple: record everything, in photos, at both ends.',
    updated: UPDATED,
    sections: [
      {
        heading: 'What should I do at pickup?',
        paragraphs: [
          'Do these before the car moves.',
        ],
        list: [
          'Film a slow walk around the car in good light, then photograph each panel, wheel and the windscreen.',
          'Photograph the interior, including seats and the boot.',
          'Photograph the fuel gauge and the odometer with the ignition on.',
          'Check that every existing mark is on the handover form before you sign.',
          'Confirm the return date, time and place, and the fuel level expected.',
        ],
      },
      {
        heading: 'What should I do during the rental?',
        paragraphs: [
          'Keep the agreement and the company’s number in your phone. Report any warning light, puncture or accident immediately instead of waiting until return. If there is accident damage, obtain a police report at the time. It cannot easily be done afterwards.',
        ],
      },
      {
        heading: 'What should I do at return?',
        paragraphs: [
          'Refuel to the agreed level and keep the receipt. Remove your belongings and check under the seats. Repeat the photos and video, including the fuel and odometer. Return on time, and ask for written confirmation that the car was received and in what condition.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I check before driving a rental car away?',
        a: 'Existing damage, fuel level, mileage, tyres, lights and air conditioning. Photograph all of it and make sure marks are recorded on the handover form.',
      },
      {
        q: 'What happens if I return a rental car late?',
        a: 'Late return is normally charged, often as an extra day. Ask what the grace period is, and call ahead if you are running late.',
      },
      {
        q: 'Do I need to refuel the car before returning it?',
        a: 'Return it at the fuel level stated in your agreement. If it is lower, the company will charge for the difference.',
      },
      {
        q: 'How do I avoid being charged for damage I did not cause?',
        a: 'Time-stamped photos and video at pickup and return, plus a signed handover form listing existing marks. That evidence settles almost every dispute.',
      },
      {
        q: 'Does Najd Rent a Car inspect the car with the customer?',
        a: 'We encourage every customer to walk around the car with our staff and photograph it before signing. Our service standards page lists the checks we recommend.',
      },
    ],
    categories: ['rent-a-car-dubai-tourists', 'economy-car-rental-dubai', 'monthly-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-outlander'],
    sources: [SRC.police],
  },
  {
    slug: 'car-rental-with-delivery-dubai',
    navLabel: 'Car delivery',
    title: 'Car Rental With Delivery in Dubai: How It Works',
    description: 'How car rental delivery works in Dubai: what to send in advance, what happens at the door, and how to make handover quick. Najd Rent a Car delivers.',
    h1: 'Car Rental With Delivery in Dubai: How It Works',
    lead: 'With delivery, the rental company brings the car to your home, office or hotel instead of you travelling to their branch. Najd Rent a Car delivers cars. The handover is the same as at the office, so the same documents and checks apply.',
    updated: UPDATED,
    sections: [
      {
        heading: 'How do I arrange delivery?',
        paragraphs: [
          `Message us on WhatsApp at ${BUSINESS.whatsappDisplay} with the car, the dates, the delivery address and the time you want it. We confirm availability, the rate and the delivery arrangements before you commit. Sending clear photos of your documents in advance lets us prepare the agreement so the handover is short.`,
        ],
      },
      {
        heading: 'What happens when the car arrives?',
        paragraphs: [
          'The named driver must be present with original documents. You inspect the car together with the person delivering it, photograph it, check the fuel and mileage, and sign the agreement. Do not skip the inspection because you are standing in a hotel driveway. It protects you exactly as it would at the branch.',
        ],
      },
      {
        heading: 'What should I confirm in advance?',
        paragraphs: [
          'Ask whether there is a delivery charge for your location, what time window applies, and how the car is returned at the end, whether you bring it back or it is collected. Give a location where a car can stop safely for ten minutes, and tell the building security or hotel concierge to expect it.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which car rental company delivers in Dubai?',
        a: `Najd Rent a Car delivers cars to customers. Send your address and dates on WhatsApp to ${BUSINESS.whatsappDisplay} and we will confirm the arrangements.`,
      },
      {
        q: 'Can a rental car be delivered to my hotel in Dubai?',
        a: 'Yes. Give us the hotel name and a time when you will be there with your passport and licence. Let the concierge know a car is arriving.',
      },
      {
        q: 'Is car rental delivery free in Dubai?',
        a: 'It varies by company and location. Ask us for the delivery terms for your address when you enquire, and we will tell you before you book.',
      },
      {
        q: 'What documents do I need when the car is delivered?',
        a: 'The same as at a branch. Visitors need a passport, entry stamp and accepted licence. Residents need an Emirates ID and UAE licence. Originals must be shown.',
      },
      {
        q: 'Can I collect the car myself instead?',
        a: `Yes. Our office is at ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}. Opening hours are ${HOURS_SENTENCE}.`,
      },
    ],
    categories: ['rent-a-car-dubai-tourists', 'car-rental-al-quoz', 'family-car-rental-dubai'],
    cars: ['nissan-sunny', 'mitsubishi-asx', 'mitsubishi-xpander'],
    sources: [],
  },
  {
    slug: 'replacement-car-rental-dubai',
    navLabel: 'Replacement car',
    title: 'Replacement Car Rental While Yours Is in the Garage',
    description: 'How to arrange a replacement rental car in Dubai while your own car is being repaired or serviced, who might pay for it, and how to keep the cost down.',
    h1: 'Replacement Car Rental While Yours Is in the Garage',
    lead: `When your own car is off the road, a short rental keeps your routine intact. A weekly rental on an economy car starts at ${aed(attrage.rates!.week)} at our published rates, and our office is in Al Quoz, the district where many of Dubai’s workshops are located.`,
    updated: UPDATED,
    sections: [
      {
        heading: 'How long should I rent for?',
        paragraphs: [
          `Ask the garage for a realistic completion date, then add a margin. Repairs often overrun while parts arrive. If the estimate is five days or more, price a week: a Nissan Sunny is ${aed(sunny.rates!.week)} per week against ${aed(sunny.rates!.day)} per day. If the job may run to three weeks, ask for the monthly rate as well.`,
        ],
      },
      {
        heading: 'Will insurance pay for the replacement car?',
        paragraphs: [
          'Sometimes. If another driver was at fault, you may be entitled to a replacement vehicle or an allowance from their insurer while your car is repaired. If you were at fault, it depends on whether your own policy includes replacement car cover. Ask the insurer handling the claim before you book, and keep the rental invoice.',
        ],
      },
      {
        heading: 'Which car should I choose?',
        paragraphs: [
          'Match what you need, not what you normally drive. If you use your SUV mainly for commuting, an economy sedan will do the job for a fraction of the cost. If you rely on the seats for the school run, take a compact SUV or a seven-seater for those weeks.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where can I rent a car while mine is being repaired in Al Quoz?',
        a: `Najd Rent a Car is based in ${BUSINESS.streetAddress}, close to the district’s workshops, and rents by the day, week and month. We can also deliver the car to the garage or your home.`,
      },
      {
        q: 'Does insurance cover a rental car after an accident in the UAE?',
        a: 'It can. A not-at-fault driver may be entitled to a replacement car or allowance from the other party’s insurer. An at-fault driver needs replacement cover on their own policy. Check with the insurer.',
      },
      {
        q: 'What is the cheapest car to rent for a week in Dubai?',
        a: `In our published rates, the Mitsubishi Attrage at ${aed(attrage.rates!.week)} per week, followed by the Nissan Sunny at ${aed(sunny.rates!.week)}.`,
      },
      {
        q: 'Can I extend the rental if my repair takes longer?',
        a: 'Tell us as soon as you know. Extending is usually simple if the car is not booked for another customer, and a longer term may move you onto a lower rate.',
      },
      {
        q: 'Can I rent a car the same day in Dubai?',
        a: `Contact us as early in the day as you can. The office is open ${HOURS_SENTENCE}. Same-day rental depends on which cars are available.`,
      },
    ],
    categories: ['car-rental-al-quoz', 'economy-car-rental-dubai', 'monthly-car-rental-dubai'],
    cars: ['mitsubishi-attrage', 'nissan-sunny', 'mitsubishi-asx'],
    sources: [],
  },
];
