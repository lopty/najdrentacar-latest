export type CarTag =
  | 'economy'
  | 'suv'
  | 'luxury'
  | 'seven-seater'
  | 'family'
  | 'executive'
  | 'sedan';

export interface CarRates {
  day?: number;
  week?: number;
  month: number;
  longTerm?: number;
}

export interface Car {
  slug: string;
  modelYear?: number;
  variants?: { year: number; month: number; longTerm?: number }[];
  brand: string;
  model: string;
  /** Short class label shown on cards, e.g. "Economy sedan". */
  label: string;
  bodyType: 'Sedan' | 'Hatchback' | 'SUV' | 'MPV';
  transmission: 'Automatic';
  /** Left undefined where the seating configuration is not confirmed. */
  seats?: number;
  /** Overrides the displayed seat count where it depends on configuration, e.g. "7 or 8". */
  seatsText?: string;
  bags?: number;
  /** Left undefined where no rate has been supplied. Never estimate. */
  rates?: CarRates;
  tags: CarTag[];
  /** One sentence used at the top of the car page and in the meta description. */
  summary: string;
  /** Long description shown below "Explore more vehicles". Unique per car. */
  about: string[];
  suits: string[];
}

export const carName = (car: Car) => `${car.brand} ${car.model}${car.slug.endsWith("-2027") ? " 2027" : ""}`;
export const carPath = (car: Car) => `/cars/${car.slug}/`;
export const seatText = (car: Car) => car.seatsText ?? (car.seats ? String(car.seats) : '');
const refreshedImages = new Set(['nissan-sunny', 'range-rover-vogue', 'mitsubishi-asx-2027', 'mitsubishi-destinator-2027']);
export const carImage = (car: Car) => `/images/cars/${car.slug}${refreshedImages.has(car.slug) ? '-catalogue' : ''}.webp`;

export const CARS: Car[] = [
  {
    slug: 'nissan-sunny',
    modelYear: 2025,
    variants: [{"year":2025,"month":1700,"longTerm":1300}],
    brand: 'Nissan',
    model: 'Sunny',
    label: 'Economy sedan',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    bags: 2,
    rates: {"month":1700,"longTerm":1300},
    tags: ['economy', 'sedan'],
    summary:
      'The Nissan Sunny is the practical choice for daily driving in Dubai: a four-door automatic sedan with a proper boot and low running costs.',
    about: [
      'The Nissan Sunny is one of the most common cars on Dubai roads for a simple reason. It does the everyday job well. You get four doors, room for five, an automatic gearbox and a boot that takes two large suitcases without folding a seat. For commuting between Al Quoz, Business Bay and Deira, or for a month of school runs and supermarket trips, it is hard to justify paying for more car.',
      'Renters usually pick the Sunny over a hatchback when they carry luggage or passengers in the back seat regularly. The longer body gives rear passengers real legroom, and a closed boot keeps bags out of sight when you park. Fuel stops are infrequent because the engine is small and the car is light.',
      'Najd Rent a Car offers the Sunny on monthly and long-term terms. The monthly rate is where it makes the most sense, so it suits long-stay customers and company staff who keep a car for several months at a time.',
    ],
    suits: ['Residents who need a monthly car', 'Visitors on a budget who still want a boot', 'Companies moving staff around the city'],
  },
  {
    slug: 'mitsubishi-attrage',
    modelYear: 2024,
    variants: [{"year":2024,"month":1400,"longTerm":1200},{"year":2025,"month":1600,"longTerm":1300}],
    brand: 'Mitsubishi',
    model: 'Attrage',
    label: 'Economy sedan',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    bags: 2,
    rates: {"month":1400,"longTerm":1200},
    tags: ['economy', 'sedan'],
    summary:
      'The Mitsubishi Attrage is a monthly rental option: a compact automatic sedan that is light on fuel and easy to park anywhere in Dubai.',
    about: [
      'The Mitsubishi Attrage is the sedan version of the Mirage. It keeps the small, efficient engine and adds a separate boot, so you get the fuel economy of a city car with space for two suitcases. Compare the 2024 and 2025 versions by monthly rate and rental length.',
      'The Attrage is narrow and short for a sedan, which matters more than people expect. Older parts of Dubai such as Satwa, Karama and Bur Dubai have tight street parking, and many apartment buildings have compact basement bays. This car fits where larger sedans have to circle. On Sheikh Zayed Road it sits comfortably at the speed limit, although it is tuned for economy and not for fast overtaking.',
      'Choose the Attrage if price is your first concern and you mostly drive inside the city with one or two people. If you regularly carry four adults, look at the Nissan Sunny, which has a longer cabin for a similar monthly rate.',
    ],
    suits: ['Solo drivers and couples', 'Short city trips and tight parking', 'Anyone comparing the lowest rate first'],
  },
  {
    slug: 'mitsubishi-mirage',
    brand: 'Mitsubishi',
    model: 'Mirage',
    label: 'Economy hatchback',
    bodyType: 'Hatchback',
    transmission: 'Automatic',
    seats: 5,
    tags: ['economy'],
    summary:
      'The Mitsubishi Mirage is a five-door automatic hatchback, the smallest and most city-friendly car in the Najd fleet.',
    about: [
      'The Mitsubishi Mirage is a small five-door hatchback built for city use. It turns in very little space, slots into parking bays that other cars skip, and uses little fuel in stop-start traffic. If your days are spent between a hotel or apartment, the metro car parks and the malls, this is all the car you need.',
      'A hatchback boot is shorter than a sedan boot, so the Mirage suits light packers. The rear seats fold when you need to carry something longer, which a sedan cannot do. Two adults travel comfortably in front, and the back seat works best for children or short journeys.',
      'We list the Mirage without a published rate because pricing depends on the rental length and the season. Message us with your dates and we will quote it alongside the Attrage and Sunny so you can compare the three economy options.',
    ],
    suits: ['City driving and short stays', 'New drivers who want a small car', 'Second car for a household'],
  },
  {
    slug: 'nissan-kicks',
    brand: 'Nissan',
    model: 'Kicks',
    label: 'Compact crossover',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 5,
    tags: ['suv', 'family'],
    summary:
      'The Nissan Kicks is a compact automatic crossover with a raised driving position and a hatchback boot, sized for city streets.',
    about: [
      'The Nissan Kicks sits between an economy sedan and a full SUV. You sit higher than in a Sunny, which makes it easier to see over traffic and to get children in and out of the back seat, but the footprint is still small enough for mall car parks and narrow residential streets.',
      'People choose the Kicks when they want the look and visibility of an SUV without the fuel bill of a large one. The boot is a practical square shape with a low loading lip, and the rear seats fold flat for bulky items. It is a front-wheel-drive road car, so treat it as a tall hatchback and keep it on tarmac.',
      'Ask us for the current Kicks rate for your dates. If you need more rear legroom or a bigger boot, compare it with the Mitsubishi ASX and Outlander on the same enquiry.',
    ],
    suits: ['Small families', 'Drivers who prefer a higher seat', 'City use with occasional highway trips'],
  },
  {
    slug: 'mitsubishi-asx',
    modelYear: 2024,
    variants: [{"year":2024,"month":2300,"longTerm":2000},{"year":2025,"month":2450,"longTerm":2100}],
    brand: 'Mitsubishi',
    model: 'ASX',
    label: 'Compact crossover SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 5,
    bags: 3,
    rates: {"month":2300,"longTerm":2000},
    tags: ['suv', 'family'],
    summary:
      'The Mitsubishi ASX is a compact automatic SUV with five seats and room for three bags, priced well below the larger SUVs.',
    about: [
      'The Mitsubishi ASX is the entry point to SUV rental at Najd. It gives you a raised seat, five proper seats and a boot that takes three bags with monthly and 5+ month rates for the 2024 and 2025 models.',
      'The ASX is a good match for a week in the UAE that includes one or two longer drives. It is stable on the highway to Abu Dhabi or Ras Al Khaimah, the ride height copes with speed humps and rough car park ramps, and it is still short enough to park without stress in Dubai Marina or Downtown.',
      'For a family of four with normal luggage, the ASX is usually enough. If you are five adults, or you are carrying pushchairs and several large cases, step up to the Outlander or the seven-seat Xpander.',
    ],
    suits: ['Families of three or four', 'Monthly stays with road trips', 'Drivers moving up from a sedan'],
  },
  {
    slug: 'mitsubishi-outlander',
    modelYear: 2024,
    variants: [{"year":2024,"month":3200,"longTerm":3000},{"year":2025,"month":3200,"longTerm":3000}],
    brand: 'Mitsubishi',
    model: 'Outlander',
    label: 'Mid-size 7-seater SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 7,
    bags: 3,
    rates: {"month":3200,"longTerm":3000},
    tags: ['suv', 'family', 'seven-seater'],
    summary:
      'The Mitsubishi Outlander is a mid-size automatic SUV with a roomy cabin, suited to families and longer drives across the Emirates.',
    about: [
      'The Mitsubishi Outlander is the mid-size SUV in our range. It is noticeably wider and longer than the ASX, which shows in shoulder room across the back seat and in the depth of the boot. It also has a third row that folds out of the boot floor, giving seven seats when you need them. That row is best for children, and with it folded you have a five-seater with room for three bags.',
      'On the road the Outlander feels settled at highway speed and quiet enough for long conversations, which makes it a comfortable car for the Dubai to Abu Dhabi run or a day trip to Hatta. The driving position is high and the mirrors are large, so it is not intimidating to drive even if you normally use a smaller car.',
      'The 2024 and 2025 Outlander share the same monthly and 5+ month rates. Tell us how many passengers and bags you have and we will confirm it is the right size before you commit.',
    ],
    suits: ['Family holidays', 'Residents hosting visitors', 'Long highway drives'],
  },
  {
    slug: 'mitsubishi-xpander',
    modelYear: 2024,
    variants: [{"year":2024,"month":2500,"longTerm":2300},{"year":2025,"month":2600,"longTerm":2400}],
    brand: 'Mitsubishi',
    model: 'Xpander',
    label: '7-seater MPV',
    bodyType: 'MPV',
    transmission: 'Automatic',
    seats: 7,
    bags: 4,
    rates: {"month":2500,"longTerm":2300},
    tags: ['seven-seater', 'family'],
    summary:
      'The Mitsubishi Xpander is an automatic seven-seater with three rows and year-specific monthly prices for family use.',
    about: [
      'The Mitsubishi Xpander is a three-row people carrier with seven seats. It has the lowest published monthly price among our seven-seaters, and for many families it removes the need to rent two cars. Grandparents, parents and children travel together, and you pay one rental and one fuel bill.',
      'The third row is best for children or for adults on shorter trips. With all seven seats in use the boot space is limited, so plan luggage carefully if every seat is taken. Fold the third row flat and you have a five-seater with a very large boot, which is how most renters use it day to day.',
      'The Xpander drives like a car, not a van. It is easy to see out of and simple to park. If you need seven adult-size seats and luggage space at the same time, look at the Chevrolet Suburban, which is a much larger vehicle.',
    ],
    suits: ['Families of five to seven', 'Groups sharing one car to save cost', 'School runs and car pools'],
  },
  {
    slug: 'audi-a6',
    modelYear: 2022,
    variants: [{"year":2022,"month":4500,"longTerm":3800}],
    brand: 'Audi',
    model: 'A6',
    label: 'Executive sedan',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    bags: 3,
    rates: {"day":250,"week":1600,"month":4500,"longTerm":3800},
    tags: ['luxury', 'executive', 'sedan'],
    summary:
      'The Audi A6 is an executive automatic sedan for business travel: quiet, comfortable and understated.',
    about: [
      'The Audi A6 is a business sedan. It is the car you rent when you have client meetings in DIFC, a site visit in Jebel Ali and a dinner on the Palm in the same day, and you want to arrive relaxed and looking the part without drawing attention.',
      'It is the most accessible car in our luxury range by price. The cabin is quiet at highway speed, the seats are supportive on long drives, and the boot holds three cases, so it also works as an upgrade for a couple on holiday who want more comfort than an economy car gives.',
      'The monthly rate suits companies that need a car for a visiting manager. If you need a car with a driver for the same purpose, ask us about our chauffeur service, which uses our executive sedans and SUVs.',
    ],
    suits: ['Business visitors', 'Monthly use by managers', 'Couples who want a comfortable upgrade'],
  },
  {
    slug: 'bmw-7-series',
    brand: 'BMW',
    model: '7 Series',
    label: 'Luxury sedan',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    tags: ['luxury', 'executive', 'sedan'],
    summary:
      'The BMW 7 Series is a flagship luxury sedan, available self-drive or with a chauffeur for executive and VIP travel.',
    about: [
      'The BMW 7 Series is BMW at its largest and most comfortable. The focus of this car is the rear seat. There is generous legroom, and the ride is tuned to keep the cabin calm, which is why it is a regular choice for executive transfers and for hosting senior guests.',
      'Compared with the Mercedes S-Class, the 7 Series tends to appeal to people who also enjoy driving. It feels more direct from behind the wheel, so it works both as a self-drive car for a special week in Dubai and as a chauffeur car for a delegation.',
      'We quote the 7 Series on request because the rate depends on dates and whether you need a driver. Najd has a dedicated Head of VIP for bookings like this, so message us with what you need.',
    ],
    suits: ['Executives and VIP guests', 'Weddings and formal events', 'Drivers who want a luxury sedan to enjoy'],
  },
  {
    slug: 'mercedes-s-class',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    label: 'Luxury sedan',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    tags: ['luxury', 'executive', 'sedan'],
    summary:
      'The Mercedes-Benz S-Class is the classic chauffeur car: a flagship sedan for executive travel, weddings and VIP guests.',
    about: [
      'The Mercedes-Benz S-Class is the reference point for chauffeur-driven travel. When a company asks us for a car to collect a chairman, or a family wants a car for the bride, this is the model most people think of first.',
      'What sets the S-Class apart is how little the outside world reaches the back seat. Road noise is low, the suspension smooths out rough surfaces, and passengers can work or rest properly on the move. In Dubai, where a cross-city journey can take an hour in traffic, that matters.',
      'We provide the S-Class with or without a driver. For weddings and events, tell us the date, the hours you need and the pickup points. For corporate use, we can arrange it as part of a wider package that covers several vehicles.',
    ],
    suits: ['Chauffeur-driven executive travel', 'Wedding cars', 'Hosting important guests'],
  },
  {
    slug: 'porsche-cayenne',
    brand: 'Porsche',
    model: 'Cayenne',
    label: 'Luxury performance SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 5,
    tags: ['luxury', 'suv'],
    summary:
      'The Porsche Cayenne is a five-seat luxury SUV that drives like a sports car and still carries a family and their bags.',
    about: [
      'The Porsche Cayenne is the luxury SUV for people who like driving. It has five seats and a useful boot, so it handles family duty, but the steering, brakes and body control are far sharper than a typical SUV. On the sweeping roads up Jebel Jais or out to Hatta, that difference is obvious.',
      'In the city the Cayenne is easier to live with than the full-size American SUVs. It is shorter and lower, so hotel ramps, valet lanes and basement parking are less of a squeeze. You still sit high enough to see well in traffic.',
      'Choose the Cayenne over a Range Rover if you want a sportier feel, and over an Escalade if you do not need a third row of seats. Rates are on request. Send us your dates for a quote.',
    ],
    suits: ['Drivers who want a sporty SUV', 'Couples and small families', 'Weekend road trips in style'],
  },
  {
    slug: 'range-rover-vogue',
    modelYear: 2024,
    variants: [{"year":2024,"month":23000,"longTerm":19000}],
    brand: 'Range Rover',
    model: 'Vogue',
    label: 'Luxury SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 5,
    bags: 4,
    rates: {"day":900,"week":5500,"month":23000,"longTerm":19000},
    tags: ['luxury', 'suv', 'executive'],
    summary:
      'The Range Rover Vogue is the flagship luxury SUV: a commanding driving position, a calm cabin and space for five with four bags.',
    about: [
      'The Range Rover Vogue is the car many visitors picture when they think of driving in Dubai. It combines the height and presence of a large SUV with a cabin that is as quiet and well finished as a luxury sedan.',
      'From the driver seat you look down on most traffic, and the upright glass makes the car easier to place than its size suggests. Rear passengers get a wide, comfortable bench and the boot takes four suitcases, so it works for a family holiday as well as for business.',
      'The Vogue is the highest daily rate in our published list, and it suits a few days around an event, a celebration or an important visit. Weekly and monthly rates are available for longer stays. It can also be supplied with a chauffeur.',
    ],
    suits: ['Special occasions and celebrations', 'Executives who prefer an SUV', 'Families who want the best seat on the road'],
  },
  {
    slug: 'cadillac-escalade',
    modelYear: 2023,
    variants: [{"year":2023,"month":12500,"longTerm":10500}],
    brand: 'Cadillac',
    model: 'Escalade',
    label: 'Full-size luxury SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 7,
    bags: 5,
    rates: {"day":700,"week":4400,"month":12500,"longTerm":10500},
    tags: ['luxury', 'suv', 'seven-seater', 'executive'],
    summary:
      'The Cadillac Escalade is a seven-seat full-size luxury SUV, a favourite for VIP transfers, delegations and large families.',
    about: [
      'The Cadillac Escalade is the full-size luxury SUV in the Najd fleet. It seats seven across three rows and has the road presence that protocol and hospitality teams ask for when they are moving guests between hotels, offices and events.',
      'Space is the reason to choose it. Adults fit in every row, there is room for five bags, and the cabin is tall enough that getting in and out in formal dress is easy. For a family of six or seven who want to travel together in comfort, it does a job that no sedan can.',
      'We run more than one black Escalade, so ask us about matching vehicles for a convoy or a delegation. They are available self-drive or with a chauffeur. Give us the schedule and the number of passengers and we will plan the vehicles around it.',
    ],
    suits: ['VIP and delegation transport', 'Large families who want luxury', 'Events that need matching vehicles'],
  },
  {
    slug: 'chevrolet-suburban',
    brand: 'Chevrolet',
    model: 'Suburban',
    label: 'Full-size 8-seater SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 8,
    bags: 5,
    rates: {"day":550,"week":3465,"month":8000},
    tags: ['luxury', 'suv', 'seven-seater', 'family', 'executive'],
    summary:
      'The Chevrolet Suburban seats eight and still has a full-size boot, which makes it the group and crew vehicle of choice.',
    about: [
      'The Chevrolet Suburban is the longest SUV we offer and the one with the most usable space. It has eight seats, and unlike most three-row vehicles it keeps a large boot behind the third row. Eight people and their luggage can travel in one vehicle.',
      'That combination makes it the practical pick for groups: extended families, film and event crews, sports teams and company staff. Its daily rate is lower than the Escalade rate, so when the priority is capacity and comfort instead of badge, the Suburban is the sensible answer.',
      'It is a large vehicle, so check the height and length limits of your building car park before you book it for a long stay. On the open road it is relaxed and stable, and it is one of the most comfortable ways to drive a full group to Abu Dhabi or Fujairah.',
    ],
    suits: ['Groups of six to eight with luggage', 'Crews and corporate teams', 'Large family trips across the UAE'],
  },
  {
    slug: 'gmc-yukon',
    brand: 'GMC',
    model: 'Yukon',
    label: 'Full-size SUV',
    bodyType: 'SUV',
    transmission: 'Automatic',
    seats: 7,
    seatsText: '7 or 8',
    tags: ['luxury', 'suv', 'seven-seater', 'executive'],
    summary:
      'The GMC Yukon is a full-size three-row SUV for groups, executive transport and families who need serious space.',
    about: [
      'The GMC Yukon is a full-size SUV with three rows of seats. It shares its engineering with the Chevrolet Suburban and Cadillac Escalade and sits between them: more upmarket than the Chevrolet, less formal than the Cadillac.',
      'It is widely used in the UAE for executive and government transport, so it looks at home outside any hotel or office tower. Passengers get wide seats and plenty of headroom, and the high driving position gives a clear view of the road ahead.',
      'The Yukon seats seven with two individual seats in the second row, or eight with a bench. Tell us how many passengers you have and we will confirm the configuration and the rate for your dates. If you already know you need eight seats plus luggage, ask about the Suburban at the same time.',
    ],
    suits: ['Executive and staff transport', 'Large families', 'Group travel between emirates'],
  },
{
  "slug": "mitsubishi-asx-2027",
  "brand": "Mitsubishi",
  "model": "ASX",
  "modelYear": 2027,
  "label": "Compact crossover SUV",
  "bodyType": "SUV",
  "transmission": "Automatic",
  "seats": 5,
  "rates": {
    "month": 2500,
    "longTerm": 2200
  },
  "tags": [
    "suv",
    "family"
  ],
  "summary": "The 2027 Mitsubishi ASX joins the Najd fleet for monthly commuting, family errands and longer stays in Dubai.",
  "about": [
    "Choose the 2027 ASX when you want a compact crossover for a sustained stay rather than changing cars between short bookings. Its five-seat layout suits a couple or small family; tell us about child seats and larger bags before choosing the vehicle.",
    "The monthly rate is AED 2,500. For a rental of five months or more, the published rate is AED 2,200 per month. Compare this model year with the 2024 and 2025 ASX on our other ASX page before deciding.",
    "Use the supplied vehicle photo as a reference and confirm the exact car at booking. Ask for mileage, delivery arrangements, insurance excess and servicing details in the written quote."
  ],
  "suits": [
    "Monthly commuting in Dubai",
    "Small families planning a longer stay",
    "Drivers comparing newer ASX models"
  ]
},
{
  "slug": "mitsubishi-destinator-2027",
  "brand": "Mitsubishi",
  "model": "Destinator",
  "modelYear": 2027,
  "label": "7-seater family SUV",
  "bodyType": "SUV",
  "transmission": "Automatic",
  "seats": 7,
  "rates": {
    "month": 3100,
    "longTerm": 2800
  },
  "tags": [
    "suv",
    "family",
    "seven-seater"
  ],
  "summary": "The 2027 Mitsubishi Destinator offers three rows and seven seats for families arranging monthly or long-term car rental in Dubai.",
  "about": [
    "The Destinator adds another seven-seat choice to Najd alongside the Xpander and Outlander. Mitsubishi describes the model as a three-row midsize SUV. Consider it when occasional extra passengers matter as much as everyday family use.",
    "Our 2027 Destinator is AED 3,100 per month, or AED 2,800 per month for a rental lasting at least five months. Those are monthly charges, not the total for the full agreement. Ask for a quote covering your intended start and return dates.",
    "When comparing seven-seaters, check luggage room with the third row occupied. Share your passenger count, bag sizes and child-seat requirements with Najd so the car can be checked against your actual journey."
  ],
  "suits": [
    "Families needing a third row",
    "Five-month or longer stays",
    "Residents comparing Destinator and Outlander"
  ]
},
];

// Premium vehicles lead general browsing; category-specific lists keep their own focus.
const displayPriority = ['range-rover-vogue', 'cadillac-escalade', 'chevrolet-suburban', 'audi-a6', 'porsche-cayenne', 'mercedes-s-class', 'bmw-7-series', 'gmc-yukon', 'mitsubishi-asx-2027', 'mitsubishi-destinator-2027'];
CARS.sort((a, b) => (displayPriority.indexOf(a.slug) < 0 ? 99 : displayPriority.indexOf(a.slug)) - (displayPriority.indexOf(b.slug) < 0 ? 99 : displayPriority.indexOf(b.slug)));
export const carsWithTag = (tag: CarTag) => CARS.filter((c) => c.tags.includes(tag));
export const carsByBrand = (brand: string) => CARS.filter((c) => c.brand === brand);
export const carsWithRates = () => CARS.filter((c) => c.rates);
export const getCar = (slug: string) => CARS.find((c) => c.slug === slug)!;

export function lowestRate(cars: Car[], period: keyof CarRates): number | undefined {
  const values = cars.map((c) => c.rates?.[period]).filter((n): n is number => typeof n === "number");
  return values.length ? Math.min(...values) : undefined;
}

export const rateSummary = (car: Car) => car.rates ? [car.rates.day ? 'AED ' + car.rates.day.toLocaleString('en-US') + ' per day' : '', car.rates.week ? 'AED ' + car.rates.week.toLocaleString('en-US') + ' per week' : '', 'AED ' + car.rates.month.toLocaleString('en-US') + ' per month', car.rates.longTerm ? 'AED ' + car.rates.longTerm.toLocaleString('en-US') + ' per month for 5+ months' : ''].filter(Boolean).join(', ') : 'Rate on request';
