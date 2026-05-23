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
      <header class="cri-logo">
        <img src="${emblemaUrl}" alt="Emblema Croce Rossa Italiana" />
        <div class="cri-logo-text">Croce Rossa Italiana<br>Comitato di Jesi</div>
      </header>

      <h1 class="t-top">${data.topTitle}</h1>

      <div class="mid">
        <div class="t-main" aria-hidden="true">${data.mainTitle}</div>
        <div class="photo-wrap">
          <img src="${photoUrl}" alt="Persone che ballano con le cuffie alla Notte Rossa" />
        </div>
        <div class="v-left">${data.timeStart}</div>
        <div class="v-right">${data.timeEnd}</div>
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
          <a href="${data.ticketUrl}" class="social-prevendita">PREVENDITA ONLINE</a>
          <a href="${data.socials[1].url}" class="social-handle">${data.socials[1].handle}</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
