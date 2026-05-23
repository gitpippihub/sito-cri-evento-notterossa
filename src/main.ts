import './style.css';
import { event } from './event';
import { createPoster } from './components/poster';
import { createDetails, createFooter } from './components/details';
import { initScrollAnimations } from './animations';

const app = document.getElementById('app')!;
app.appendChild(createPoster(event));
app.appendChild(createDetails(event));
app.appendChild(createFooter(event));

// Run after DOM is painted so first-visible elements aren't hidden on load
requestAnimationFrame(() => initScrollAnimations());
