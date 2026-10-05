import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { matchRoute } from './routes';
import './index.css';

const route = matchRoute(window.location.pathname);
const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  // Production: the HTML was prerendered at build time.
  hydrateRoot(container, <App route={route} />);
} else {
  // Development: render on the client and set the title for convenience.
  document.title = route.title;
  createRoot(container).render(<App route={route} />);
}
