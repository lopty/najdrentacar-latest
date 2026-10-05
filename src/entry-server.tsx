import { renderToString } from 'react-dom/server';
import { App } from './App';
import { NOT_FOUND, ROUTES, Route } from './routes';
import { BUSINESS, HOURS_SENTENCE, SITE_URL } from './site/business';
import { CARS, carName, carPath } from './data/cars';
import { CATEGORIES, categoryPath } from './content/categories';
import { GUIDES, guidePath } from './content/guides';

export { ROUTES, NOT_FOUND, BUSINESS, HOURS_SENTENCE, SITE_URL };

export function renderRoute(route: Route): string {
  return renderToString(<App route={route} />);
}

/** Data for llms.txt, kept here so it is generated from the same sources as the pages. */
export const LLMS = {
  cars: CARS.map((car) => ({ name: carName(car), path: carPath(car), label: car.label, seats: car.seatsText ?? car.seats, rates: car.rates })),
  categories: CATEGORIES.map((c) => ({ name: c.h1, path: categoryPath(c.slug), description: c.description })),
  guides: GUIDES.map((g) => ({ name: g.h1, path: guidePath(g.slug), description: g.description })),
};
