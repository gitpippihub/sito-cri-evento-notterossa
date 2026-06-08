import type { EventData } from '../event';
import { bgUrl, photoUrl, emblemaUrl } from '../assets';

export function createPoster(data: EventData): HTMLElement {
  const section = document.createElement('section');
  section.className = 'poster';

  const lineupHtml = data.lineup
    .map((dj, i) =>
      i < data.lineup.length - 1
        ? `${dj} <span class="sep">–</span> `
        : dj
    )
    .join('');

  section.innerHTML = `
    <div class="poster-bg" style="background-image:url(${bgUrl})"></div>
    <div class="poster-overlay" aria-hidden="true"></div>

    <div class="poster-inner">
      <h1 class="t-top">${data.topTitle}</h1>

      <div class="mid">
        <div class="t-main" aria-hidden="true">${data.mainTitle.replace(/T(?=Y)/g, '<span class="kern-ty">T</span>')}</div>
        <div class="photo-wrap">
          <img src="${photoUrl}" alt="Persone che ballano con le cuffie alla Notte Rossa" />
        </div>
        <div class="v-left">${data.timeStart}</div>
        <div class="v-right">${data.timeEnd}</div>
      </div>

      <div class="poster-ticket">
        <a href="${data.ticketUrl}" class="ticket-btn" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            <path d="M13 5v2M13 17v2M13 11v2"/>
          </svg>
          Prenota ora! 
        </a>
      </div>

      <div class="poster-bottom">
        <div class="date-bar">
          <span class="t-date">${data.date}</span>
          <span class="t-location">${data.location}</span>
        </div>
        <div class="dj-row">
          <span class="arr" aria-hidden="true">→</span>
          ${lineupHtml}
          <span class="arr" aria-hidden="true">←</span>
        </div>
        <div class="social-row">
          <a href="${data.socials[0].url}" class="social-handle">${data.socials[0].handle}</a>
          <a href="${data.ticketUrl}" class="social-prevendita">PRENOTA ONLINE</a>
          <a href="${data.socials[1].url}" class="social-handle">${data.socials[1].handle}</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
