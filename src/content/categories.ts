import { BUSINESS, HOURS_SENTENCE, aed } from '../site/business';
import { CARS, Car, carsByBrand, carsWithRates, carsWithTag, getCar, lowestRate } from '../data/cars';

export interface CategoryPage {
  slug: string;
  /** Short label for navigation, cards and breadcrumbs. */
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  /** Direct answer to the search query, shown under the H1. */
  lead: string;
  cars: Car[];
  listHeading: string;
  sections: { heading: string; paragraphs: string[] }[];
  checklist: { heading: string; items: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
  guides: string[];
  /** Show the monthly comparison table (monthly page only). */
  showRateTable?: boolean;
}

export const categoryPath = (slug: string) => `/${slug}/`;

const pick = (...slugs: string[]) => slugs.map(getCar);
const names = (cars: Car[]) => cars.map((c) => `${c.brand} ${c.model}`);
const list = (items: string[]) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
const fromRate = (cars: Car[], period: 'day' | 'week' | 'month') => aed(lowestRate(cars, period)!);

const economy = carsWithTag('economy');
const suv = carsWithTag('suv');
const luxury = carsWithTag('luxury');
const sevenSeat = CARS.filter((c) => (c.seats ?? 0) >= 7);
const monthly = carsWithRates().sort((a, b) => a.rates!.month - b.rates!.month);
const executive = carsWithTag('executive');
const family = [...carsWithTag('family'), getCar('cadillac-escalade')].filter((c, i, a) => a.indexOf(c) === i);
const mitsubishi = carsByBrand('Mitsubishi');
const nissan = carsByBrand('Nissan');
const corporate = pick('nissan-sunny', 'mitsubishi-attrage', 'mitsubishi-asx', 'audi-a6', 'chevrolet-suburban', 'cadillac-escalade');
const tourist = pick('nissan-sunny', 'nissan-kicks', 'mitsubishi-asx', 'mitsubishi-outlander', 'mitsubishi-xpander', 'range-rover-vogue');
const summer = pick('nissan-sunny', 'mitsubishi-asx', 'mitsubishi-outlander', 'mitsubishi-xpander', 'audi-a6', 'chevrolet-suburban');
const winter = pick('mitsubishi-asx', 'mitsubishi-outlander', 'mitsubishi-xpander', 'porsche-cayenne', 'range-rover-vogue', 'cadillac-escalade');
const wedding = pick('mercedes-s-class', 'bmw-7-series', 'range-rover-vogue', 'cadillac-escalade', 'porsche-cayenne', 'audi-a6');
const alQuoz = pick('mitsubishi-attrage', 'nissan-sunny', 'mitsubishi-asx', 'mitsubishi-xpander', 'audi-a6', 'cadillac-escalade');

const sunny = getCar('nissan-sunny');
const escalade = getCar('cadillac-escalade');
const suburban = getCar('chevrolet-suburban');
const xpander = getCar('mitsubishi-xpander');
const a6 = getCar('audi-a6');

export const CATEGORIES: CategoryPage[] = [
  {
    slug: 'economy-car-rental-dubai',
    navLabel: 'Economy cars',
    title: 'Economy Car Rental Dubai | Najd Rent a Car',
    description: `Rent an economy car in Dubai from ${fromRate(economy, 'day')} per day or ${fromRate(economy, 'month')} per month. ${list(names(economy))}. Licensed since 2002.`,
    h1: 'Economy Car Rental in Dubai',
    lead: `Najd Rent a Car has ${economy.length} economy models in Dubai: the ${list(names(economy))}. All are automatic. Published rates start at ${fromRate(economy, 'day')} per day, ${fromRate(economy, 'week')} per week and ${fromRate(economy, 'month')} per month.`,
    cars: economy,
    listHeading: 'Economy cars available',
    sections: [
      {
        heading: 'Which economy car should you choose?',
        paragraphs: [
          'The three cars cover slightly different needs. The Mitsubishi Mirage is a hatchback and the shortest of the three, so it is the easiest to park and the best fit for one or two people. The Mitsubishi Attrage adds a separate boot for two suitcases while keeping the same small engine. The Nissan Sunny is the longest, and the one to take if adults will sit in the back seat regularly.',
          'All three are light on fuel, and petrol in the UAE is priced by the government each month, so running costs are predictable. For most renters the real decision is cabin and boot space, not cost per kilometre.',
        ],
      },
      {
        heading: 'When an economy car is the right call',
        paragraphs: [
          'An economy car makes sense when you are paying for transport and not for an experience. That covers residents between cars, new arrivals waiting for a driving licence transfer or a car purchase, staff vehicles, and visitors who plan to spend their budget elsewhere. Dubai roads are wide and well surfaced, so a small car is comfortable here in a way it might not be on rougher roads.',
          'It is the wrong call if you are five adults with luggage, or if you plan long motorway days with a full car. In that case compare the compact SUVs, which cost more per day but carry more.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm before you book an economy car',
      items: [
        'The exact model you will receive, since boot size differs between a hatchback and a sedan.',
        'The daily mileage allowance and the charge per extra kilometre.',
        'The security deposit amount, how it is taken and when it is returned.',
        'What the insurance covers and the excess you pay if the car is damaged.',
        'How Salik tolls and any traffic fines are billed to you.',
      ],
    },
    faqs: [
      {
        q: 'What is the cheapest car to rent at Najd Rent a Car?',
        a: `The Mitsubishi Attrage has our lowest published daily rate at ${aed(getCar('mitsubishi-attrage').rates!.day)}. The Attrage and the Nissan Sunny share the lowest monthly rate at ${aed(sunny.rates!.month)}. Rates can change, so confirm before booking.`,
      },
      {
        q: 'Are your economy cars automatic?',
        a: 'Yes. The Nissan Sunny, Mitsubishi Attrage and Mitsubishi Mirage in our fleet are all automatic.',
      },
      {
        q: 'Is it cheaper to rent an economy car by the month?',
        a: `Yes. A Nissan Sunny costs ${aed(sunny.rates!.day)} per day or ${aed(sunny.rates!.month)} per month. Thirty separate days at the daily rate would be ${aed(sunny.rates!.day * 30)}, so the monthly rate is far lower for a long stay.`,
      },
    ],
    related: ['monthly-car-rental-dubai', 'suv-rental-dubai', 'nissan-rental-dubai', 'mitsubishi-rental-dubai'],
    guides: ['daily-weekly-monthly-car-rental', 'documents-to-rent-a-car-in-dubai'],
  },
  {
    slug: 'suv-rental-dubai',
    navLabel: 'SUVs',
    title: 'SUV Rental Dubai | Najd Rent a Car',
    description: `Rent an SUV in Dubai from ${fromRate(suv, 'day')} per day. ${suv.length} models from compact crossovers to full-size seven and eight seaters. Licence ${BUSINESS.licenceNumber}.`,
    h1: 'SUV Rental in Dubai',
    lead: `We rent ${suv.length} SUV models in Dubai, from the compact Mitsubishi ASX at ${aed(getCar('mitsubishi-asx').rates!.day)} per day to the Range Rover Vogue at ${aed(getCar('range-rover-vogue').rates!.day)} per day. The range covers compact, mid-size, full-size and luxury SUVs, all automatic.`,
    cars: suv,
    listHeading: 'SUVs available',
    sections: [
      {
        heading: 'SUV sizes explained',
        paragraphs: [
          'Compact crossovers such as the Nissan Kicks and Mitsubishi ASX seat five and park like a hatchback. They are the right size for a couple or a family of four with ordinary luggage. The Mitsubishi Outlander is a class larger, with a wider back seat and a deeper boot for longer trips.',
          'Full-size SUVs are a different kind of vehicle. The Chevrolet Suburban, GMC Yukon and Cadillac Escalade have three rows of seats and are built to carry a full group in comfort. The Suburban is the longest and keeps a large boot even with every seat in use.',
          'The Porsche Cayenne and Range Rover Vogue are five-seat luxury SUVs. You choose them for how they drive and how they feel inside, not for maximum seat count.',
        ],
      },
      {
        heading: 'Do you need an SUV in Dubai?',
        paragraphs: [
          'You do not need one for the roads. Highways and city streets are smooth. People choose an SUV for the higher seating position, easier access for children and older passengers, and luggage space. Those are good reasons, especially on a family trip.',
          'Rental SUVs are road vehicles. Standard rental agreements in the UAE do not cover off-road or desert driving, and damage from dune driving is normally excluded from insurance. If you want a desert experience, book a licensed desert safari and keep the rental car on tarmac.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm before you book an SUV',
      items: [
        'Seat count and how much boot space is left with every seat in use.',
        'Whether your building or hotel car park has a height or length limit that affects full-size SUVs.',
        'That off-road use is excluded, so you know where the car can and cannot go.',
        'The deposit and insurance excess, which are usually higher for luxury SUVs than for compact ones.',
        'Fuel policy at return, since large SUVs have large tanks.',
      ],
    },
    faqs: [
      {
        q: 'What is the cheapest SUV to rent in Dubai at Najd?',
        a: `The Mitsubishi ASX, at ${aed(getCar('mitsubishi-asx').rates!.day)} per day, ${aed(getCar('mitsubishi-asx').rates!.week)} per week or ${aed(getCar('mitsubishi-asx').rates!.month)} per month. Ask us for the Nissan Kicks rate as well, which is quoted on request.`,
      },
      {
        q: 'Which SUV seats the most people?',
        a: `The Chevrolet Suburban seats ${suburban.seats}. The Cadillac Escalade seats ${escalade.seats}. For a lower budget, the Mitsubishi Xpander is a ${xpander.seats}-seat MPV.`,
      },
      {
        q: 'Can I take a rental SUV into the desert?',
        a: 'Rental SUVs are for road use. Off-road and dune driving is normally excluded from rental insurance in the UAE, so use a licensed desert tour operator for that part of your trip.',
      },
    ],
    related: ['7-seater-car-rental-dubai', 'family-car-rental-dubai', 'luxury-car-rental-dubai', 'economy-car-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai', 'car-rental-deposit-insurance-dubai'],
  },
  {
    slug: 'luxury-car-rental-dubai',
    navLabel: 'Luxury cars',
    title: 'Luxury Car Rental Dubai | Najd Rent a Car',
    description: `Rent a luxury car in Dubai: Range Rover, Escalade, S-Class, BMW 7 Series, Cayenne and Audi A6. Self-drive or chauffeur. From ${fromRate(luxury, 'day')} per day.`,
    h1: 'Luxury Car Rental in Dubai',
    lead: `Najd Rent a Car offers ${luxury.length} luxury and premium models in Dubai: ${list(names(luxury))}. They are available self-drive or with a chauffeur. Published daily rates run from ${fromRate(luxury, 'day')} for the Audi A6 to ${aed(getCar('range-rover-vogue').rates!.day)} for the Range Rover Vogue.`,
    cars: luxury,
    listHeading: 'Luxury and premium cars available',
    sections: [
      {
        heading: 'Sedan or SUV?',
        paragraphs: [
          'Luxury sedans put the passenger first. The Mercedes S-Class and BMW 7 Series are the cars to choose when someone will ride in the back, for business or for a formal occasion. The Audi A6 is smaller and priced lower, and it suits someone who will drive it personally to meetings.',
          'Luxury SUVs give you height and presence. The Range Rover Vogue is the most refined, the Porsche Cayenne is the sportiest, and the Cadillac Escalade, GMC Yukon and Chevrolet Suburban add a third row for groups and families.',
        ],
      },
      {
        heading: 'A luxury fleet backed by a long-standing company',
        paragraphs: [
          `Luxury rental is where trust matters most, because deposits and liabilities are higher. Najd Rent a Car has held Dubai commercial licence ${BUSINESS.licenceNumber} since ${BUSINESS.foundingYear} and is part of ${BUSINESS.group}. The company has a dedicated Head of VIP, and our founder spent eight years in business development at Burj Al Arab before starting the group, so hospitality standards are part of how we were built.`,
          'Before you book any luxury car, from us or anyone else, ask for the deposit, the insurance excess and the mileage allowance in writing. A serious company will answer all three without hesitation.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm before you book a luxury car',
      items: [
        'The exact model and whether it is self-drive or chauffeur-driven.',
        'The security deposit and how long the refund takes after return.',
        'The insurance excess for this specific car.',
        'The daily mileage allowance and extra kilometre charge.',
        'Minimum driver age and licence requirements for this vehicle class.',
        'A walk-around inspection with photos at handover, kept by both sides.',
      ],
    },
    faqs: [
      {
        q: 'How much does it cost to rent a luxury car in Dubai?',
        a: `Our published rates are ${aed(a6.rates!.day)} per day for the Audi A6, ${aed(suburban.rates!.day)} for the Chevrolet Suburban, ${aed(escalade.rates!.day)} for the Cadillac Escalade and ${aed(getCar('range-rover-vogue').rates!.day)} for the Range Rover Vogue. The S-Class, 7 Series, Cayenne and Yukon are quoted on request.`,
      },
      {
        q: 'Can I rent a luxury car with a driver?',
        a: 'Yes. Najd provides chauffeur-driven luxury cars as well as self-drive. Tell us the date, hours and route and we will quote the car and driver together.',
      },
      {
        q: 'Is Najd Rent a Car a licensed company?',
        a: `Yes. ${BUSINESS.legalName} holds commercial licence ${BUSINESS.licenceNumber}, issued by the ${BUSINESS.licenceAuthority}, with car rental as the licensed activity. The licence was first issued on ${BUSINESS.licenceFirstIssued}.`,
      },
    ],
    related: ['chauffeur-service-dubai', 'wedding-car-rental-dubai', 'suv-rental-dubai', 'corporate-car-rental-dubai'],
    guides: ['car-rental-deposit-insurance-dubai', 'which-car-to-rent-in-dubai'],
  },
  {
    slug: '7-seater-car-rental-dubai',
    navLabel: '7 seaters',
    title: '7 Seater Car Rental Dubai | Najd Rent a Car',
    description: `Rent a 7 or 8 seater car in Dubai from ${fromRate(sevenSeat, 'day')} per day: Mitsubishi Xpander and Outlander, Cadillac Escalade, Chevrolet Suburban and GMC Yukon.`,
    h1: '7 Seater Car Rental in Dubai',
    lead: `We have ${sevenSeat.length} models in Dubai with seven or more seats: the Mitsubishi Xpander (${xpander.seats} seats, ${aed(xpander.rates!.day)} per day), the Mitsubishi Outlander (${getCar('mitsubishi-outlander').seats} seats, ${aed(getCar('mitsubishi-outlander').rates!.day)} per day), the Cadillac Escalade (${escalade.seats} seats, ${aed(escalade.rates!.day)} per day) and the Chevrolet Suburban (${suburban.seats} seats, ${aed(suburban.rates!.day)} per day). The GMC Yukon seats 7 or 8 and is quoted on request.`,
    cars: sevenSeat,
    listHeading: '7 and 8 seater vehicles available',
    sections: [
      {
        heading: 'Seats and luggage are two separate questions',
        paragraphs: [
          'The most common mistake with seven-seaters is counting seats and forgetting bags. In a compact MPV such as the Xpander, the third row sits where the boot would be. Seven people fit, but there is little room left behind them. It works well for seven people on a day out, or for five people with a holiday load of luggage.',
          'A full-size SUV solves this. The Chevrolet Suburban is long enough to carry eight people and still hold several suitcases behind the last row. The Cadillac Escalade seats seven with a more luxurious cabin. If you are a group of seven arriving with one case each, a full-size SUV is the realistic choice.',
        ],
      },
      {
        heading: 'One large car or two small ones?',
        paragraphs: [
          `Two economy cars can cost less per day than one full-size SUV, but you need two drivers, two parking spaces and two sets of tolls, and the group is split. One Xpander at ${aed(xpander.rates!.day)} per day is cheaper than two economy cars and keeps everyone together, which is why it is the usual answer for families of five to seven.`,
          'The Mitsubishi Outlander sits between the two. Day to day it is a five-seat SUV, with a third row that folds out of the boot floor for two more passengers, best for children. The GMC Yukon seats seven or eight depending on whether the second row has two individual seats or a bench, so tell us which you need.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm before you book a 7 seater',
      items: [
        'How many passengers are adults, since third rows differ a lot in legroom.',
        'How many large suitcases you need to carry with all seats in use.',
        'Whether you need child seats and how many.',
        'Parking limits where you are staying, as full-size SUVs are long.',
        'Who will drive, and that each driver is named on the rental agreement.',
      ],
    },
    faqs: [
      {
        q: 'What is the cheapest 7 seater to rent in Dubai at Najd?',
        a: `The Mitsubishi Xpander at ${aed(xpander.rates!.day)} per day, ${aed(xpander.rates!.week)} per week or ${aed(xpander.rates!.month)} per month.`,
      },
      {
        q: 'Do you have an 8 seater?',
        a: `Yes. The Chevrolet Suburban seats ${suburban.seats} and is priced at ${aed(suburban.rates!.day)} per day or ${aed(suburban.rates!.week)} per week.`,
      },
      {
        q: 'Is there luggage space with all seven seats in use?',
        a: 'In the Xpander, very little, because the third row takes the boot area. In the Chevrolet Suburban, yes. It keeps a large boot behind the last row.',
      },
    ],
    related: ['family-car-rental-dubai', 'suv-rental-dubai', 'luxury-car-rental-dubai', 'rent-a-car-dubai-tourists'],
    guides: ['which-car-to-rent-in-dubai', 'documents-to-rent-a-car-in-dubai'],
  },
  {
    slug: 'monthly-car-rental-dubai',
    navLabel: 'Monthly rental',
    title: 'Monthly Car Rental Dubai | Najd Rent a Car',
    description: `Monthly car rental in Dubai from ${fromRate(monthly, 'month')} per month. ${monthly.length} models with published monthly rates, from economy sedans to luxury SUVs. Yearly terms available.`,
    h1: 'Monthly Car Rental in Dubai',
    lead: `Monthly car rental at Najd Rent a Car starts at ${fromRate(monthly, 'month')} per month for the Nissan Sunny and Mitsubishi Attrage. We publish monthly rates for ${monthly.length} models, and we also offer yearly terms for individuals and companies.`,
    cars: monthly,
    listHeading: 'Cars with a published monthly rate',
    showRateTable: true,
    sections: [
      {
        heading: 'Who rents by the month?',
        paragraphs: [
          'Monthly rental fits anyone who needs a car for longer than a holiday but does not want to buy. New residents use it while they settle in. People between cars use it to avoid a rushed purchase. Companies use it for project staff and seasonal demand. Long-stay visitors use it because a month at the monthly rate costs far less than thirty days at the daily rate.',
          'Compared with owning, a monthly rental has no purchase cost, no resale risk and no annual registration to arrange. You pay one figure for the car, and you hand it back when your plans change.',
        ],
      },
      {
        heading: 'Monthly, yearly and corporate terms',
        paragraphs: [
          'Najd offers daily, weekly, monthly and yearly rentals. A yearly term suits residents and businesses that know they need the car for the long run and want a fixed arrangement. Ask us for a yearly quote on the model you want and we will price it against the monthly rate so you can compare.',
          'For companies, monthly and yearly rentals can be grouped under one corporate account covering several vehicles. Our accounts and business development teams handle these directly.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm before you sign a monthly rental',
      items: [
        'The monthly mileage allowance and the charge for extra kilometres.',
        'Who pays for scheduled servicing and what happens if the car is off the road.',
        'Whether you get a replacement car during servicing or repairs.',
        'The notice period and any charge for returning the car early.',
        'How the deposit is held across a long rental and when it is returned.',
        'How Salik and fines are invoiced each month.',
      ],
    },
    faqs: [
      {
        q: 'What is the cheapest monthly car rental at Najd?',
        a: `The Nissan Sunny and Mitsubishi Attrage, both at ${aed(sunny.rates!.month)} per month. The next step up is the Mitsubishi ASX compact SUV at ${aed(getCar('mitsubishi-asx').rates!.month)} per month.`,
      },
      {
        q: 'How much do I save with a monthly rate?',
        a: `It depends on the car. A Nissan Sunny at the daily rate for thirty days would be ${aed(sunny.rates!.day * 30)}. The monthly rate is ${aed(sunny.rates!.month)}, a difference of ${aed(sunny.rates!.day * 30 - sunny.rates!.month)}.`,
      },
      {
        q: 'Do you offer yearly car rental?',
        a: 'Yes. Najd Rent a Car offers yearly rentals for individuals and companies in addition to daily, weekly and monthly terms. Contact us for a yearly quote.',
      },
    ],
    related: ['quarterly-car-rental-dubai', 'yearly-car-rental-dubai', 'daily-car-rental-dubai', 'economy-car-rental-dubai', 'corporate-car-rental-dubai'],
    guides: ['daily-weekly-monthly-car-rental', 'car-rental-deposit-insurance-dubai'],
  },
  {
    slug: 'chauffeur-service-dubai',
    navLabel: 'Chauffeur service',
    title: 'Chauffeur Service Dubai | Najd Rent a Car',
    description: 'Chauffeur-driven cars in Dubai from a licensed company trading since 2002: Mercedes S-Class, BMW 7 Series, Cadillac Escalade, Range Rover and more.',
    h1: 'Chauffeur Service in Dubai',
    lead: `Najd Rent a Car provides chauffeur-driven cars in Dubai for executives, visiting guests, delegations and events. The chauffeur fleet includes ${list(names(executive))}.`,
    cars: executive,
    listHeading: 'Cars available with a chauffeur',
    sections: [
      {
        heading: 'What we provide',
        paragraphs: [
          'Our chauffeur work falls into three kinds of booking. The first is executive transport for visiting management and guests, where a company needs a car and driver on call for a schedule of meetings. The second is event and delegation transport, where several vehicles move a group between hotels, venues and offices. The third is personal bookings for an occasion such as a wedding or a celebration.',
          'Sedans suit one or two passengers who want privacy and quiet. Full-size SUVs suit groups of up to seven or eight, or anyone who prefers a higher vehicle that is easier to step in and out of.',
        ],
      },
      {
        heading: 'Why companies use Najd for chauffeur work',
        paragraphs: [
          `Chauffeur service depends on reliability more than anything else. Najd has operated in Dubai since ${BUSINESS.foundingYear} and runs a fleet of ${BUSINESS.fleetSize} vehicles, so there is depth behind each booking. The company has a named Head of VIP responsible for this side of the business, and our mission statement commits us to premium service standards and genuine Arabian hospitality.`,
          'To quote accurately we need the date, the pickup time and place, the number of passengers, the planned stops and the expected finish time. A clear brief means the right vehicle and no surprises on the invoice.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm when you book a chauffeur',
      items: [
        'Whether the booking is priced by the hour, by the day or by the journey.',
        'What happens if the schedule overruns.',
        'Whether tolls, parking and fuel are included in the quote.',
        'The vehicle model, so it matches the occasion and the passenger count.',
        'A direct contact number for the day of the booking.',
      ],
    },
    faqs: [
      {
        q: 'Which cars can I book with a chauffeur?',
        a: `Our executive models: ${list(names(executive))}. Tell us the number of passengers and we will suggest the right one.`,
      },
      {
        q: 'How much does a chauffeur-driven car cost in Dubai?',
        a: 'Chauffeur bookings are quoted individually because the price depends on the car, the hours and the route. Send us your schedule on WhatsApp and we will give you a fixed quote.',
      },
      {
        q: 'Do you handle delegations and multi-car bookings?',
        a: 'Yes. Event and delegation transport is one of our listed services. We can supply several vehicles for the same schedule, including matching SUVs.',
      },
    ],
    related: ['luxury-car-rental-dubai', 'corporate-car-rental-dubai', 'wedding-car-rental-dubai', 'suv-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai'],
  },
  {
    slug: 'corporate-car-rental-dubai',
    navLabel: 'Corporate rental',
    title: 'Corporate Car Rental Dubai | Najd Rent a Car',
    description: `Corporate car rental and fleet solutions in Dubai. Staff cars, executive vehicles and chauffeur service under one account. ${BUSINESS.fleetSize} vehicles, licensed since 2002.`,
    h1: 'Corporate Car Rental in Dubai',
    lead: `Najd Rent a Car supplies vehicles to companies in Dubai on daily, weekly, monthly and yearly terms. We cover staff mobility, business operations, executive transport and event transport from a fleet of ${BUSINESS.fleetSize} vehicles across economy, business, SUV and executive segments.`,
    cars: corporate,
    listHeading: 'Popular corporate vehicles',
    sections: [
      {
        heading: 'Services for businesses',
        paragraphs: [
          'Corporate fleet solutions: a set of vehicles on monthly or yearly terms, sized to your team and adjusted as headcount changes. Economy sedans such as the Nissan Sunny and Mitsubishi Attrage are the usual base of a staff fleet.',
          'Staff and business transport support: larger vehicles such as the Chevrolet Suburban for moving crews and project teams, on short or long terms.',
          'Executive transport: sedans and luxury SUVs for visiting management and guests, self-drive or with a chauffeur. Event and delegation transport is arranged when required.',
        ],
      },
      {
        heading: 'Why a rental fleet instead of buying',
        paragraphs: [
          'Buying vehicles ties up capital and leaves the company managing registration, insurance renewals, servicing and resale. Renting turns that into a monthly operating cost and lets you scale the fleet up for a project and back down when it ends. For many small and mid-sized businesses in Dubai, that flexibility is worth more than ownership.',
          `What you need from the supplier is stability. ${BUSINESS.legalName} has been licensed for car rental in Dubai since ${BUSINESS.foundingYear}, is part of ${BUSINESS.group}, and states a clean file with the RTA and Dubai Police. The team includes a Head of Accounts, a Business Development Manager and a Fleet Manager, so corporate clients deal with named people.`,
        ],
      },
    ],
    checklist: {
      heading: 'What to agree in a corporate rental contract',
      items: [
        'Vehicle list, term length and the rate per vehicle.',
        'Mileage allowance per vehicle and how excess is charged.',
        'Servicing responsibility and replacement vehicles during downtime.',
        'How Salik tolls and traffic fines are reported and invoiced by driver.',
        'Insurance cover, excess, and which employees are authorised to drive.',
        'Terms for adding or returning vehicles before the contract ends.',
      ],
    },
    faqs: [
      {
        q: 'Do you offer corporate accounts?',
        a: 'Yes. Najd supports corporate accounts covering one vehicle or a full fleet, with daily, weekly, monthly and yearly terms.',
      },
      {
        q: 'What vehicles do companies usually rent?',
        a: `For staff, economy sedans from ${aed(sunny.rates!.month)} per month. For managers, the Audi A6 at ${aed(a6.rates!.month)} per month. For teams and crews, the ${suburban.seats}-seat Chevrolet Suburban at ${aed(suburban.rates!.month)} per month.`,
      },
      {
        q: 'Can you provide cars with drivers for visiting executives?',
        a: 'Yes. Executive transport for visiting management and guests is one of our core services, using luxury sedans and SUVs with a chauffeur.',
      },
    ],
    related: ['monthly-car-rental-dubai', 'chauffeur-service-dubai', 'economy-car-rental-dubai', 'luxury-car-rental-dubai'],
    guides: ['daily-weekly-monthly-car-rental', 'car-rental-deposit-insurance-dubai'],
  },
  {
    slug: 'rent-a-car-dubai-tourists',
    navLabel: 'For tourists',
    title: 'Rent a Car in Dubai as a Tourist | Najd Rent a Car',
    description: `How to rent a car in Dubai as a tourist: documents, licence rules and the right car for your trip. Cars from ${fromRate(tourist, 'day')} per day from a licensed Dubai company.`,
    h1: 'Rent a Car in Dubai as a Tourist',
    lead: `Tourists can rent a car in Dubai with a passport, a valid entry stamp or visa, and a driving licence that the UAE accepts for visitors. Najd Rent a Car rents to visitors on daily and weekly terms, with published rates from ${fromRate(tourist, 'day')} per day.`,
    cars: tourist,
    listHeading: 'Cars visitors usually choose',
    sections: [
      {
        heading: 'Which licence do you need?',
        paragraphs: [
          'Visitors from many countries can drive a rental car in the UAE on their home licence alone. That includes the GCC states, the United Kingdom, the United States, Canada, Australia and most of Europe. Visitors from other countries need an International Driving Permit carried together with the original licence.',
          'The list of accepted countries is set by the UAE authorities and can change. The simple way to be sure is to send us a photo of your licence before you travel. We will tell you whether it is accepted as it is or whether you need a permit.',
          'One rule catches people out. If you hold a UAE residence visa, you are not a tourist for driving purposes. Residents must drive on a UAE licence.',
        ],
      },
      {
        heading: 'Is renting worth it for a holiday?',
        paragraphs: [
          'It depends on your plans. If you are staying in one area and visiting two or three attractions, taxis and the metro may be enough. A rental car earns its cost when you want to move on your own schedule: an early start for the beach, a day in Abu Dhabi, an afternoon in Hatta or Al Ain, or simply a family that does not fit in one taxi.',
          'Driving here is straightforward for most visitors. Traffic drives on the right, signs are in English and Arabic, and major roads are modern. The things to learn before you set off are the Salik toll system, speed cameras and paid parking zones, which we cover in our driving guide.',
        ],
      },
    ],
    checklist: {
      heading: 'Tourist rental checklist',
      items: [
        'Passport, entry stamp or visa page, and your driving licence. Bring the originals.',
        'Where you want the car. We deliver, so give us your hotel or address and arrival time.',
        'An International Driving Permit if your licence country requires one.',
        'The deposit amount and the method of payment accepted for it.',
        'How long after you leave the UAE the deposit is released, since fines can arrive late.',
        'What the insurance excess is and whether a lower-excess option is offered.',
        'A phone number that works after you fly home, in case we need to reach you about a fine or toll.',
      ],
    },
    faqs: [
      {
        q: 'Can I rent a car in Dubai with a foreign licence?',
        a: 'Yes, if you are on a visit visa and your licence is from a country accepted by the UAE, or you carry an International Driving Permit with it. Send us a photo and we will confirm.',
      },
      {
        q: 'Can you deliver the car to my hotel?',
        a: 'Najd delivers cars. Send us your hotel name, dates and arrival time and we will confirm the delivery time and any charge before you book.',
      },
      {
        q: 'Can I drive a Dubai rental car to Abu Dhabi?',
        a: 'Yes. A car rented in Dubai can be driven in all seven emirates. Driving outside the UAE, for example to Oman, needs permission and extra insurance arranged in advance.',
      },
      {
        q: 'What is a good car for a tourist family?',
        a: `For four people, the Mitsubishi ASX at ${aed(getCar('mitsubishi-asx').rates!.week)} per week. For five to seven, the Mitsubishi Xpander at ${aed(xpander.rates!.week)} per week.`,
      },
    ],
    related: ['economy-car-rental-dubai', 'family-car-rental-dubai', 'winter-car-rental-dubai', 'summer-car-rental-dubai'],
    guides: ['documents-to-rent-a-car-in-dubai', 'driving-in-dubai-for-visitors', 'car-rental-deposit-insurance-dubai'],
  },
  {
    slug: 'summer-car-rental-dubai',
    navLabel: 'Summer rental',
    title: 'Summer Car Rental in Dubai | Najd Rent a Car',
    description: 'Renting a car in Dubai in summer: what to check in the heat, which cars cope best, and why June to September is a good time for a long rental.',
    h1: 'Summer Car Rental in Dubai',
    lead: 'From June to September, daytime temperatures in Dubai regularly pass 40°C, and a car stops being a convenience and becomes the practical way to get around. Every model listed on this site is air-conditioned and automatic. These are the models we suggest for summer, and what to check before you drive away.',
    cars: summer,
    listHeading: 'Cars we suggest for summer',
    sections: [
      {
        heading: 'Why a car matters more in summer',
        paragraphs: [
          'In the cooler months you can walk from a metro station or wait outside for a taxi. In July that ten-minute walk is punishing, especially with children or older relatives. A car parked in a covered bay puts you in cool air from door to door.',
          'Summer is also the quieter season for visitors. Hotels are cheaper and roads to the beaches and malls are less crowded, so a rental car goes further. Residents often take a monthly rental over the summer while their own car is in the workshop or while family is visiting.',
        ],
      },
      {
        heading: 'Choosing a car for the heat',
        paragraphs: [
          'Any modern car will keep you cool, but some choices help. A larger cabin takes longer to cool down after standing in the sun, so rear air vents matter if you carry passengers in the back. Lighter paint colours absorb less heat than black. If you have a choice of parking, a basement or shaded bay makes more difference than anything about the car.',
          'For families, a mid-size SUV or a seven-seater gives everyone more air and more space on a long drive. For one or two people, an economy sedan cools quickly and costs little to run with the air conditioning on all day.',
        ],
      },
      {
        heading: 'Driving safely in extreme heat',
        paragraphs: [
          'Never leave a child or a pet in a parked car, even for a minute. Cabin temperatures rise to dangerous levels very quickly in the Gulf summer. Keep drinking water in the car. Do not leave pressurised cans, lighters or phones on the dashboard.',
          'Heat is hard on tyres. If you are doing a long highway run, look at the tyres before you leave and report anything that looks low or damaged to us instead of driving on it.',
        ],
      },
    ],
    checklist: {
      heading: 'Summer handover checklist',
      items: [
        'Run the air conditioning for a few minutes before you leave and check that it blows cold from every vent.',
        'Look at all four tyres and ask where the spare and tools are.',
        'Ask who to call if the car overheats or breaks down, and save the number.',
        'Check whether a sunshade is supplied, or bring one.',
        'Confirm the fuel policy, since the engine uses more with the air conditioning running.',
      ],
    },
    faqs: [
      {
        q: 'Is it a good idea to rent a car in Dubai in summer?',
        a: 'Yes. Summer is when a car is most useful, because walking and waiting outdoors is uncomfortable. It is also low season for tourism, so the city is quieter.',
      },
      {
        q: 'Do all your cars have air conditioning?',
        a: 'Yes. Every model listed on this site is air-conditioned. We still recommend you test it yourself at handover.',
      },
      {
        q: 'Which car is best for a family in summer?',
        a: `A mid-size SUV such as the Mitsubishi Outlander, or the ${xpander.seats}-seat Mitsubishi Xpander if you are more than five. Both give rear passengers more room and air than a small sedan.`,
      },
    ],
    related: ['monthly-car-rental-dubai', 'family-car-rental-dubai', 'winter-car-rental-dubai', 'economy-car-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai', 'driving-in-dubai-for-visitors'],
  },
  {
    slug: 'winter-car-rental-dubai',
    navLabel: 'Winter rental',
    title: 'Winter Car Rental in Dubai | Najd Rent a Car',
    description: 'Renting a car in Dubai in winter: peak season advice, road trips to Hatta, Jebel Jais and Abu Dhabi, fog driving tips and the cars that suit them.',
    h1: 'Winter Car Rental in Dubai',
    lead: 'November to March is peak season in Dubai. The weather is mild, the city is full of visitors, and it is the best time of year for road trips across the Emirates. Rental cars are in high demand, so book early, especially for late December. These are the cars we suggest for winter.',
    cars: winter,
    listHeading: 'Cars we suggest for winter',
    sections: [
      {
        heading: 'Book ahead in peak season',
        paragraphs: [
          'Demand for rental cars rises sharply from the middle of December through the first week of January, and again around major events and school holidays. Seven-seaters and luxury SUVs are the first to be fully booked because there are fewer of them. If your dates are fixed, reserve as soon as your flights are confirmed.',
          'A weekly rate usually works out better than counting days, even if you only need the car for five or six of them. Ask us to quote both.',
        ],
      },
      {
        heading: 'Winter road trips from Dubai',
        paragraphs: [
          'Hatta is about ninety minutes away in the Hajar Mountains, with a dam, kayaking and hiking trails. Jebel Jais in Ras Al Khaimah is the highest peak in the UAE and is reached by a wide, winding mountain road that is a pleasure to drive. Abu Dhabi is around an hour and a half down the E11, and Al Ain and Fujairah are both comfortable day trips.',
          'All of these are on good tarmac roads, so any car in our fleet will do them. A compact SUV gives you a higher view and more luggage room. If you enjoy driving, the Porsche Cayenne makes the mountain roads the highlight of the trip.',
        ],
      },
      {
        heading: 'Fog and rain',
        paragraphs: [
          'Winter mornings can bring thick fog, mainly between December and February and most often on the highways toward Abu Dhabi and Al Ain. Slow down, leave a long gap and use low beam headlights. Dubai Police advise drivers not to use hazard lights while moving, because they hide your indicators.',
          'Rain is rare but can be heavy when it comes, and roads flood quickly. Avoid driving through standing water. Water damage to an engine is usually not covered by rental insurance.',
        ],
      },
    ],
    checklist: {
      heading: 'Winter rental checklist',
      items: [
        'Reserve early for late December and early January.',
        'Compare the weekly rate against the daily rate for your dates.',
        'Check the daily mileage allowance if you plan trips to other emirates.',
        'Ask what the insurance says about flood and water damage.',
        'Make sure every driver on the trip is named on the rental agreement.',
      ],
    },
    faqs: [
      {
        q: 'When should I book a rental car for a winter trip to Dubai?',
        a: 'As early as you can. Late December and early January are the busiest weeks of the year, and larger vehicles are booked first.',
      },
      {
        q: 'Do I need a 4x4 for Hatta or Jebel Jais?',
        a: 'No. Both are reached by paved roads and can be driven in any car. An SUV is more comfortable for a full car, but it is not required.',
      },
      {
        q: 'Is it safe to drive in fog in the UAE?',
        a: 'Yes, if you slow down, keep your distance and use low beam headlights. Do not drive with hazard lights on. If visibility is very poor, wait at a service station until it clears.',
      },
    ],
    related: ['rent-a-car-dubai-tourists', 'suv-rental-dubai', 'summer-car-rental-dubai', '7-seater-car-rental-dubai'],
    guides: ['driving-in-dubai-for-visitors', 'daily-weekly-monthly-car-rental'],
  },
  {
    slug: 'wedding-car-rental-dubai',
    navLabel: 'Weddings & events',
    title: 'Wedding & Event Car Rental Dubai | Najd Rent a Car',
    description: 'Wedding and event cars in Dubai with a chauffeur: Mercedes S-Class, BMW 7 Series, Range Rover Vogue and Cadillac Escalade. Licensed since 2002.',
    h1: 'Wedding and Event Car Rental in Dubai',
    lead: `For weddings, celebrations and corporate events in Dubai, Najd Rent a Car supplies luxury sedans and SUVs with a chauffeur or for self-drive. The usual choices are the ${list(names(wedding.slice(0, 4)))}.`,
    cars: wedding,
    listHeading: 'Cars for weddings and events',
    sections: [
      {
        heading: 'Choosing a wedding car',
        paragraphs: [
          'Start with the dress and the number of people riding together. A luxury sedan such as the Mercedes S-Class is the classic bridal car and photographs well, with a wide rear door and generous legroom. A Range Rover or Escalade has a taller cabin and a higher seat, which many brides find easier with a full gown, and it carries more of the bridal party.',
          'Think about the full day, not only the arrival. You may need a car for the couple, another for parents, and transport for guests between the ceremony and the reception. We can plan several vehicles around one timetable.',
        ],
      },
      {
        heading: 'Corporate events and delegations',
        paragraphs: [
          'For conferences, launches and official visits, the requirement is usually a group of matching vehicles on a fixed schedule. Event and delegation transport is one of the services Najd lists for corporate clients, alongside executive transport for visiting management.',
          'Send us the event date, venue, guest numbers and timings. The earlier we have the schedule, the easier it is to hold the vehicles you want.',
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm for a wedding or event booking',
      items: [
        'The exact model and colour of each car.',
        'Start time, finish time and what happens if the event runs late.',
        'Pickup points and any stops for photographs.',
        'Whether decoration of the car is allowed and who fits it.',
        'One named contact on our side for the day itself.',
      ],
    },
    faqs: [
      {
        q: 'Which car is best for a wedding in Dubai?',
        a: 'The Mercedes S-Class is the traditional choice. The Range Rover Vogue and Cadillac Escalade are popular for their height and space. All can be supplied with a chauffeur.',
      },
      {
        q: 'Can I hire a wedding car for a few hours only?',
        a: 'Tell us the hours you need and we will quote for that period. Chauffeur bookings are priced individually based on the car, the time and the route.',
      },
      {
        q: 'Can you supply several matching cars?',
        a: 'Yes, subject to availability on your date. We run more than one black Cadillac Escalade, and we can combine sedans and SUVs for larger events.',
      },
    ],
    related: ['chauffeur-service-dubai', 'luxury-car-rental-dubai', 'corporate-car-rental-dubai', '7-seater-car-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai'],
  },
  {
    slug: 'family-car-rental-dubai',
    navLabel: 'Family cars',
    title: 'Family Car Rental Dubai | Najd Rent a Car',
    description: `Family car rental in Dubai from ${fromRate(family, 'day')} per day. Compact SUVs for four, seven seaters for bigger families and an eight seat Suburban for the whole group.`,
    h1: 'Family Car Rental in Dubai',
    lead: `For a family in Dubai, the right rental car depends on headcount and luggage. For up to four people we suggest a compact SUV from ${aed(getCar('mitsubishi-asx').rates!.day)} per day. For five to seven, the Mitsubishi Xpander at ${aed(xpander.rates!.day)} per day. For a full group of eight with bags, the Chevrolet Suburban at ${aed(suburban.rates!.day)} per day.`,
    cars: family,
    listHeading: 'Family cars available',
    sections: [
      {
        heading: 'Matching the car to your family',
        paragraphs: [
          'Two adults and two children fit comfortably in a Nissan Kicks or Mitsubishi ASX, with space for a pushchair and a couple of cases. Add a fifth person or teenage children and the Mitsubishi Outlander is worth the step up for its wider rear seat.',
          'Three generations travelling together need three rows. The Xpander handles seven for everyday outings. If everyone has a suitcase, or if grandparents need easy access and adult-size seats in every row, the Suburban or Escalade is the comfortable answer.',
        ],
      },
      {
        heading: 'Children and car seats in the UAE',
        paragraphs: [
          'UAE traffic law requires every passenger to wear a seat belt, front and rear. Children up to four years old must travel in a child safety seat, and children under ten or shorter than 145 cm may not sit in the front passenger seat. Police issue fines for breaches, and the driver is responsible.',
          'If you need child seats, tell us the ages of your children when you enquire so we can confirm what is available. Many families bring their own seat, which is allowed and often easiest for the child.',
        ],
      },
    ],
    checklist: {
      heading: 'Family rental checklist',
      items: [
        'Count passengers and large bags, then choose the car to fit both.',
        'Ask about child seat availability and state the ages of your children.',
        'Check that rear doors have child locks and show you how to set them.',
        'Confirm rear air vents if you are travelling in the hot months.',
        'Name a second driver on the agreement so long drives can be shared.',
      ],
    },
    faqs: [
      {
        q: 'What is the best rental car for a family of five in Dubai?',
        a: `The Mitsubishi Outlander if you travel light, or the ${xpander.seats}-seat Mitsubishi Xpander at ${aed(xpander.rates!.week)} per week if you want a spare row for bags or a sixth passenger.`,
      },
      {
        q: 'Are child seats required by law in Dubai?',
        a: 'Yes. Children up to four years old must be in a child safety seat, and all passengers must wear seat belts.',
      },
      {
        q: 'Do you have a car for eight people?',
        a: `Yes. The Chevrolet Suburban seats ${suburban.seats} and keeps a large boot behind the third row.`,
      },
    ],
    related: ['7-seater-car-rental-dubai', 'suv-rental-dubai', 'rent-a-car-dubai-tourists', 'summer-car-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai', 'driving-in-dubai-for-visitors'],
  },
  {
    slug: 'mitsubishi-rental-dubai',
    navLabel: 'Mitsubishi',
    title: 'Mitsubishi Rental Dubai | Najd Rent a Car',
    description: `Rent a Mitsubishi in Dubai from ${fromRate(mitsubishi, 'day')} per day: Attrage, Mirage, ASX, Outlander and Xpander. Daily, weekly and monthly rates from Najd Rent a Car.`,
    h1: 'Mitsubishi Rental in Dubai',
    lead: `Najd Rent a Car has ${mitsubishi.length} Mitsubishi models for rent in Dubai: the ${list(mitsubishi.map((c) => c.model))}. Published rates start at ${fromRate(mitsubishi, 'day')} per day and ${fromRate(mitsubishi, 'month')} per month.`,
    cars: mitsubishi,
    listHeading: 'Mitsubishi models available',
    sections: [
      {
        heading: 'The Mitsubishi range, smallest to largest',
        paragraphs: [
          'Mitsubishi makes up the core of our economy and mid-range fleet, and the five models form a clear ladder. The Mirage hatchback and Attrage sedan are the city cars. The ASX is the compact SUV. The Outlander is the mid-size SUV. The Xpander is the seven-seat people carrier.',
          'Because they come from one maker, the controls and driving feel are similar across the range. If you start a long stay in an Attrage and later need more space, moving up to an ASX or Outlander is an easy change.',
        ],
      },
      {
        heading: 'Why Mitsubishi works well as a rental',
        paragraphs: [
          'These are simple, proven cars that are common across the Gulf, which is what you want from a rental. They are easy to drive, economical, and parts and servicing are widely available in the UAE, so a car is rarely off the road for long.',
        ],
      },
    ],
    checklist: {
      heading: 'Choosing between Mitsubishi models',
      items: [
        'One or two people in the city: Mirage or Attrage.',
        'Need a closed boot for suitcases: Attrage over Mirage.',
        'Family of four wanting a higher seat: ASX.',
        'Five people or long highway trips: Outlander.',
        'Six or seven people: Xpander.',
      ],
    },
    faqs: [
      {
        q: 'How much is a Mitsubishi Attrage per month in Dubai?',
        a: `Our published monthly rate for the Mitsubishi Attrage is ${aed(getCar('mitsubishi-attrage').rates!.month)}. The daily rate is ${aed(getCar('mitsubishi-attrage').rates!.day)}.`,
      },
      {
        q: 'How much is a Mitsubishi Outlander per week?',
        a: `The Mitsubishi Outlander is ${aed(getCar('mitsubishi-outlander').rates!.week)} per week or ${aed(getCar('mitsubishi-outlander').rates!.day)} per day.`,
      },
      {
        q: 'Is the Mitsubishi Xpander a 7 seater?',
        a: `Yes. The Xpander has ${xpander.seats} seats in three rows and is ${aed(xpander.rates!.day)} per day.`,
      },
    ],
    related: ['economy-car-rental-dubai', 'suv-rental-dubai', 'nissan-rental-dubai', '7-seater-car-rental-dubai'],
    guides: ['which-car-to-rent-in-dubai', 'daily-weekly-monthly-car-rental'],
  },
  {
    slug: 'nissan-rental-dubai',
    navLabel: 'Nissan',
    title: 'Nissan Rental Dubai | Najd Rent a Car',
    description: `Rent a Nissan in Dubai: Nissan Sunny from ${aed(sunny.rates!.day)} per day or ${aed(sunny.rates!.month)} per month, and the Nissan Kicks crossover. Licensed Dubai rental company.`,
    h1: 'Nissan Rental in Dubai',
    lead: `We rent ${nissan.length} Nissan models in Dubai. The Nissan Sunny sedan is ${aed(sunny.rates!.day)} per day, ${aed(sunny.rates!.week)} per week or ${aed(sunny.rates!.month)} per month. The Nissan Kicks compact crossover is quoted on request.`,
    cars: nissan,
    listHeading: 'Nissan models available',
    sections: [
      {
        heading: 'Sunny or Kicks?',
        paragraphs: [
          'The Sunny is a traditional sedan. It sits lower, has a long closed boot, and gives rear passengers more legroom than most cars at its price. It is the default choice for monthly rental and for anyone who values boot security and fuel economy.',
          'The Kicks is a crossover. You sit higher, the tailgate opens wide, and the back seats fold for larger loads. It suits small families and drivers who find a higher seat more comfortable. It costs more than the Sunny, so choose it for the seating position and flexibility, not for extra passenger space.',
        ],
      },
      {
        heading: 'A familiar car on UAE roads',
        paragraphs: [
          'Nissan is one of the best-known brands in the Emirates and the Sunny in particular is everywhere, from company fleets to family driveways. That familiarity is an advantage in a rental. The controls are intuitive and the car blends in wherever you park it.',
        ],
      },
    ],
    checklist: {
      heading: 'What to ask about a Nissan rental',
      items: [
        'Whether you want the lower monthly cost of the Sunny or the higher seat of the Kicks.',
        'The mileage allowance on the term you choose.',
        'The deposit and insurance excess for the model.',
        'Whether the weekly or monthly rate is better value for your dates.',
      ],
    },
    faqs: [
      {
        q: 'How much is a Nissan Sunny per month in Dubai?',
        a: `Our published monthly rate for the Nissan Sunny is ${aed(sunny.rates!.month)}. Rates can change, so confirm when you book.`,
      },
      {
        q: 'How much is a Nissan Sunny per day?',
        a: `The Nissan Sunny is ${aed(sunny.rates!.day)} per day or ${aed(sunny.rates!.week)} per week.`,
      },
      {
        q: 'Do you have the Nissan Kicks?',
        a: 'Yes. The Nissan Kicks is part of our fleet. Its rate is quoted on request, so send us your dates.',
      },
    ],
    related: ['economy-car-rental-dubai', 'monthly-car-rental-dubai', 'mitsubishi-rental-dubai', 'suv-rental-dubai'],
    guides: ['daily-weekly-monthly-car-rental', 'documents-to-rent-a-car-in-dubai'],
  },
  {
    slug: 'car-rental-al-quoz',
    navLabel: 'Al Quoz',
    title: 'Car Rental in Al Quoz, Dubai | Najd Rent a Car',
    description: `Najd Rent a Car is based in ${BUSINESS.streetAddress}, Dubai, and has rented cars since 2002. Economy, SUV and luxury cars from ${fromRate(alQuoz, 'day')} per day.`,
    h1: 'Car Rental in Al Quoz, Dubai',
    lead: `Najd Rent a Car is based in ${BUSINESS.streetAddress}, Dubai, and has operated from the emirate since ${BUSINESS.foundingYear}. If you live or work in Al Quoz, Al Barsha, Business Bay or along Sheikh Zayed Road, we are your local rental company, with cars from ${fromRate(alQuoz, 'day')} per day.`,
    cars: alQuoz,
    listHeading: 'Cars to rent from our Al Quoz base',
    sections: [
      {
        heading: 'Where we are',
        paragraphs: [
          'Al Quoz sits in the middle of Dubai between Sheikh Zayed Road and Al Khail Road, two of the main highways through the city. From here it is a short drive to Al Barsha and Mall of the Emirates on one side and to Business Bay and Downtown on the other.',
          `Our office is at ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, Dubai (plus code ${BUSINESS.plusCode}). We are open ${HOURS_SENTENCE}. Call ${BUSINESS.phoneDisplay} or message us on WhatsApp before you visit so the car you want is ready.`,
        ],
      },
      {
        heading: 'Renting locally',
        paragraphs: [
          'Al Quoz is home to workshops, warehouses, galleries and thousands of businesses, . For the companies and residents nearby, a local supplier makes practical sense. You can see the car before you sign, swap it if your needs change, and reach the people responsible for it.',
          'Workshop customers are a good example. If your own car is in a garage in Al Quoz for a week, a weekly rental on an economy sedan keeps you moving for less than daily taxis.',
        ],
      },
    ],
    checklist: {
      heading: 'Before you come to collect a car',
      items: [
        'Message us first with the car and dates you want, and say if you would prefer delivery.',
        'Bring your original licence and ID documents.',
        'Ask what deposit applies and how you can pay it.',
        'Allow time for a walk-around inspection and photos at handover.',
      ],
    },
    faqs: [
      {
        q: 'Where is Najd Rent a Car located?',
        a: `At ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, Dubai, United Arab Emirates. The P.O. Box is ${BUSINESS.poBox}.`,
      },
      {
        q: 'What are the opening hours of Najd Rent a Car?',
        a: `${HOURS_SENTENCE}.`,
      },
      {
        q: 'Do I have to collect the car from Al Quoz?',
        a: 'No. You can collect it from our office or ask us to deliver it to your home, office or hotel.',
      },
      {
        q: 'How do I contact Najd Rent a Car?',
        a: `Call or WhatsApp ${BUSINESS.phoneDisplay}, ring the office landline on ${BUSINESS.landlineDisplay}, or email ${BUSINESS.email}.`,
      },
      {
        q: 'How long has Najd been in Al Quoz?',
        a: `Najd Rent a Car has served clients since ${BUSINESS.foundingYear}, with its headquarters in ${BUSINESS.streetAddress}.`,
      },
    ],
    related: ['monthly-car-rental-dubai', 'economy-car-rental-dubai', 'corporate-car-rental-dubai', 'suv-rental-dubai'],
    guides: ['documents-to-rent-a-car-in-dubai', 'daily-weekly-monthly-car-rental'],
  },
  {
    slug: 'daily-car-rental-dubai',
    navLabel: 'Daily rental',
    title: 'Daily Luxury Car Rental Dubai | Najd Rent a Car',
    description: `Rent a luxury car by the day in Dubai from ${fromRate(luxury, 'day')}. ${luxury.length} luxury and premium models, self-drive or with a chauffeur. Book by WhatsApp or phone.`,
    h1: 'Daily Car Rental in Dubai',
    lead: `Our daily rental catalogue is the luxury and premium range: ${list(names(luxury))}. Published daily rates run from ${fromRate(luxury, 'day')} to ${aed(getCar('range-rover-vogue').rates!.day)}. Pick a car, then call or message us to book.`,
    cars: luxury,
    listHeading: 'Luxury cars available by the day',
    sections: [
      {
        heading: 'When a daily rental is the right choice',
        paragraphs: [
          'Renting by the day fits an occasion. A wedding, an anniversary, a client visit, a weekend with guests in town, or simply a few days in a car you would not buy. You pay for the days you use and nothing more, and you can add a chauffeur for part or all of the booking.',
          'If you need a car for transport over several weeks, a daily rate is the expensive way to do it. Our economy and mid-range cars are better value on monthly, quarterly or yearly terms, and those catalogues are linked below.',
        ],
      },
      {
        heading: 'How booking works',
        paragraphs: [
          `There is no online form to fill in. Open the car you want, then call or WhatsApp ${BUSINESS.phoneDisplay} with your dates. We confirm availability and the rate, tell you which documents to send, and arrange collection from our Al Quoz office or delivery to you.`,
        ],
      },
    ],
    checklist: {
      heading: 'What to confirm for a daily rental',
      items: [
        'The exact pickup and return times, since a daily rate runs on a 24 hour basis with most companies.',
        'The security deposit and the insurance excess for the model.',
        'The mileage included per day.',
        'Whether you want the car delivered, and where.',
        'Whether a chauffeur is needed for any part of the booking.',
      ],
    },
    faqs: [
      {
        q: 'Where can I rent a luxury car for one day in Dubai?',
        a: `Najd Rent a Car rents luxury and premium cars by the day from ${fromRate(luxury, 'day')}. The company has operated in Dubai since ${BUSINESS.foundingYear} under commercial licence ${BUSINESS.licenceNumber}, and it delivers.`,
      },
      {
        q: 'How much is a Range Rover per day in Dubai?',
        a: `The Range Rover Vogue is ${aed(getCar('range-rover-vogue').rates!.day)} per day at our published rate. Confirm the current rate when you book.`,
      },
      {
        q: 'How much is a Cadillac Escalade per day in Dubai?',
        a: `${aed(escalade.rates!.day)} per day at our published rate, for a seven-seat full-size luxury SUV.`,
      },
      {
        q: 'Can I rent a luxury car for a weekend?',
        a: 'Yes. Tell us the pickup and return times and we will price the days. Reserve early for weekends in the winter season.',
      },
      {
        q: 'Do you rent economy cars by the day?',
        a: 'This catalogue covers our luxury range. For economy and mid-range cars, the monthly, quarterly and yearly catalogues give far better value. Ask us if you need one for a shorter period.',
      },
    ],
    related: ['monthly-car-rental-dubai', 'quarterly-car-rental-dubai', 'yearly-car-rental-dubai', 'luxury-car-rental-dubai'],
    guides: ['how-to-rent-a-luxury-car-in-dubai', 'chauffeur-vs-self-drive-dubai'],
  },
  {
    slug: 'quarterly-car-rental-dubai',
    navLabel: 'Quarterly rental',
    title: 'Quarterly Car Rental Dubai | 3 Month Car Rental',
    description: `Rent a car for three months in Dubai. ${CARS.length} models from economy sedans to luxury SUVs on quarterly terms from a company licensed since 2002. Book by WhatsApp or phone.`,
    h1: 'Quarterly Car Rental in Dubai (3 Months)',
    lead: `A quarterly rental gives you one car for three months on a single agreement. It sits between a rolling monthly rental and a yearly commitment. All ${CARS.length} models in the Najd catalogue are available on a quarterly term, quoted per car.`,
    cars: CARS,
    listHeading: 'Cars available on a quarterly term',
    sections: [
      {
        heading: 'Who rents for three months?',
        paragraphs: [
          'Three months matches a surprising number of situations in Dubai. Project teams on a fixed assignment. New employees during a probation period who do not want to buy a car before the job is confirmed. Seasonal residents who spend the winter here. Families hosting relatives for a long visit. Students and interns on a placement.',
          'In each case a month is too short to be convenient and a year is too long to commit to. A quarter fixes the car and the cost for the period you actually need.',
        ],
      },
      {
        heading: 'How quarterly pricing works',
        paragraphs: [
          `Quarterly rates are quoted for the specific car and dates. As a reference, three months of a Nissan Sunny at the published monthly rate of ${aed(sunny.rates!.month)} comes to ${aed(sunny.rates!.month * 3)}, and three months of a Mitsubishi ASX comes to ${aed(getCar('mitsubishi-asx').rates!.month * 3)}. Ask us for the quarterly figure on the model you want and compare it with those totals.`,
        ],
      },
      {
        heading: 'What happens at the end of the quarter',
        paragraphs: [
          'You have three choices: return the car, renew for another quarter, or move onto a yearly term if your stay has become permanent. Tell us a couple of weeks before the end date so the car can be kept for you or released.',
        ],
      },
    ],
    checklist: {
      heading: 'What to agree for a quarterly rental',
      items: [
        'The total for the three months and how it is paid.',
        'The mileage allowance for the term.',
        'Who arranges servicing if it falls due during the quarter.',
        'The charge, if any, for returning the car early.',
        'How to renew or extend at the end.',
      ],
    },
    faqs: [
      {
        q: 'Can I rent a car for 3 months in Dubai?',
        a: `Yes. Najd Rent a Car offers quarterly rental on every model in its catalogue, from the Nissan Sunny to the Range Rover Vogue. Call or WhatsApp ${BUSINESS.phoneDisplay} with the car and start date.`,
      },
      {
        q: 'How much does it cost to rent a car for 3 months in Dubai?',
        a: `It depends on the car. Three months at our published monthly rate would be ${aed(sunny.rates!.month * 3)} for a Nissan Sunny or Mitsubishi Attrage. Ask for a quarterly quote on your chosen model.`,
      },
      {
        q: 'Is a 3 month rental better than renewing monthly?',
        a: 'If you know you need the car for the full period, yes. One agreement fixes the car and the price for the quarter and saves renewing each month.',
      },
      {
        q: 'Which company offers reliable 3 month car rental in Dubai?',
        a: `Look for a supplier that will still be operating when your term ends. Najd Rent a Car has traded continuously since ${BUSINESS.foundingYear}, runs ${BUSINESS.fleetSize} vehicles and is part of ${BUSINESS.group}.`,
      },
      {
        q: 'Can a company rent cars quarterly for a project?',
        a: 'Yes. Quarterly terms are common for project teams. Several vehicles can be placed under one corporate account with a single monthly invoice.',
      },
    ],
    related: ['monthly-car-rental-dubai', 'yearly-car-rental-dubai', 'daily-car-rental-dubai', 'corporate-car-rental-dubai'],
    guides: ['daily-weekly-monthly-car-rental', 'car-rental-for-new-residents-dubai'],
  },
  {
    slug: 'yearly-car-rental-dubai',
    navLabel: 'Yearly rental',
    title: 'Yearly Car Rental Dubai | Najd Rent a Car',
    description: `Yearly car rental in Dubai for residents and companies. ${CARS.length} models on 12 month terms from a company licensed since 2002. No purchase, no resale. Book by WhatsApp or phone.`,
    h1: 'Yearly Car Rental in Dubai',
    lead: `A yearly rental gives you the same car for twelve months without buying it. Najd Rent a Car offers yearly terms to residents and companies on all ${CARS.length} models in the catalogue below. Rates are quoted per car.`,
    cars: CARS,
    listHeading: 'Cars available on a yearly term',
    sections: [
      {
        heading: 'What a year of rental gives you',
        paragraphs: [
          'You drive the car as if it were yours, and the ownership work stays with us. The vehicle remains registered and insured in the company name. There is no loan, no down payment and nothing to sell at the end. When the year is up you return it, renew, or change to a different model.',
          'For residents on an employment contract, that removes the biggest risk of buying a car in the UAE: having to sell it quickly if the job ends.',
        ],
      },
      {
        heading: 'Yearly rental for companies',
        paragraphs: [
          'A yearly term suits a corporate fleet. The company gets a fixed cost per vehicle for budgeting, and vehicles can be added as the team grows. Economy sedans cover staff use, and executive sedans or SUVs cover management.',
        ],
      },
      {
        heading: 'How the yearly price compares',
        paragraphs: [
          `As a reference point, twelve months of a Nissan Sunny at the published monthly rate of ${aed(sunny.rates!.month)} is ${aed(sunny.rates!.month * 12)}. A yearly commitment is priced separately, so ask us for the yearly figure on the same car and set the two side by side before you decide.`,
        ],
      },
    ],
    checklist: {
      heading: 'What to agree for a yearly rental',
      items: [
        'The rate, the payment schedule and the method of payment.',
        'The annual mileage allowance and the charge beyond it.',
        'Servicing: who books it, who pays, and whether a replacement car is provided.',
        'What happens if the car is in an accident and off the road.',
        'The cost of ending the agreement before twelve months.',
        'Whether you can change model during the term.',
      ],
    },
    faqs: [
      {
        q: 'Where can I rent a car for a year in Dubai?',
        a: `Najd Rent a Car offers yearly rental to individuals and companies from its Al Quoz office. It has rented cars in Dubai for more than 20 years under commercial licence ${BUSINESS.licenceNumber}.`,
      },
      {
        q: 'Is yearly car rental cheaper than buying in Dubai?',
        a: 'Over one or two years it often is, once you include depreciation, insurance, registration and the cost of selling. Over many years with the same car, buying usually works out lower.',
      },
      {
        q: 'What is included in a yearly car rental?',
        a: 'The car, with registration and insurance kept in the rental company name. Servicing and replacement cars are set by the agreement, so confirm both. Fuel, tolls and fines are the customer’s.',
      },
      {
        q: 'Can I end a yearly rental early?',
        a: 'Usually yes, with a charge set in the agreement. Ask for that figure in writing before you sign, especially if your stay depends on your job.',
      },
      {
        q: 'What is the cheapest car to rent yearly in Dubai?',
        a: `Our lowest published monthly rate is ${aed(sunny.rates!.month)} for the Nissan Sunny and Mitsubishi Attrage, and those are the lowest-cost models on a yearly term as well.`,
      },
    ],
    related: ['monthly-car-rental-dubai', 'quarterly-car-rental-dubai', 'daily-car-rental-dubai', 'corporate-car-rental-dubai'],
    guides: ['long-term-car-rental-dubai', 'rent-vs-buy-car-dubai'],
  },
];

const EXTRA_GUIDES: Record<string, string[]> = {
  'economy-car-rental-dubai': ['affordable-car-rental-dubai', 'nissan-sunny-vs-mitsubishi-attrage'],
  'suv-rental-dubai': ['mitsubishi-asx-vs-nissan-kicks-vs-outlander'],
  'luxury-car-rental-dubai': ['how-to-rent-a-luxury-car-in-dubai', 'cadillac-escalade-vs-range-rover', 'mercedes-s-class-vs-bmw-7-series-vs-audi-a6'],
  '7-seater-car-rental-dubai': ['best-7-seater-to-rent-in-dubai'],
  'monthly-car-rental-dubai': ['long-term-car-rental-dubai', 'rent-vs-buy-car-dubai'],
  'chauffeur-service-dubai': ['chauffeur-vs-self-drive-dubai', 'event-and-conference-transport-dubai'],
  'corporate-car-rental-dubai': ['b2b-car-rental-dubai', 'staff-transport-car-rental-dubai'],
  'rent-a-car-dubai-tourists': ['car-rental-with-delivery-dubai', 'dubai-to-abu-dhabi-by-rental-car', 'rental-car-pickup-and-return-checklist'],
  'winter-car-rental-dubai': ['road-trips-from-dubai-by-rental-car'],
  'wedding-car-rental-dubai': ['mercedes-s-class-vs-bmw-7-series-vs-audi-a6', 'event-and-conference-transport-dubai'],
  'family-car-rental-dubai': ['best-7-seater-to-rent-in-dubai'],
  'car-rental-al-quoz': ['replacement-car-rental-dubai', 'how-to-choose-a-car-rental-company-in-dubai'],
};
for (const category of CATEGORIES) category.guides.push(...(EXTRA_GUIDES[category.slug] ?? []));

export const TERM_CATEGORY_SLUGS = [
  'daily-car-rental-dubai',
  'monthly-car-rental-dubai',
  'quarterly-car-rental-dubai',
  'yearly-car-rental-dubai',
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;

/** Categories a given car belongs to, used for "up" links on car pages. */
export function categoriesForCar(car: Car): CategoryPage[] {
  return CATEGORIES.filter((cat) => cat.cars.includes(car));
}

/** Main categories shown in the header and on the home page. */
export const MAIN_CATEGORY_SLUGS = [
  'economy-car-rental-dubai',
  'suv-rental-dubai',
  'luxury-car-rental-dubai',
  '7-seater-car-rental-dubai',
  'monthly-car-rental-dubai',
  'chauffeur-service-dubai',
];
