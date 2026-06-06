import type { EventData } from '../event';
import { emblemaUrl, consultaLogoUrl } from '../assets';

export function createDetails(data: EventData): HTMLElement {
  const section = document.createElement('section');
  section.className = 'details';
  section.setAttribute('aria-label', 'Dettagli evento');

  const lineupItems = data.lineup
    .flatMap((dj, i) =>
      i < data.lineup.length - 1
        ? [
            `<span class="lineup-dj" data-stagger>${dj}</span>`,
            `<span class="lineup-dot" aria-hidden="true" data-stagger></span>`,
          ]
        : [`<span class="lineup-dj" data-stagger>${dj}</span>`]
    )
    .join('');

  section.innerHTML = `
    <div class="details-inner">

      <!-- Intro heading -->
      <div data-anim>
        <span class="section-tag">Silent Party · Giovani CRI Jesi</span>
        <span class="section-heading">L'EVENTO</span>
      </div>

      <!-- Description -->
      <p class="details-desc" data-anim>
        Una serata unica nel cuore di Jesi: musica, energia e cuffie wireless per tutti.
        Tre canali, tre generi, un'unica pista. Balli al ritmo che vuoi tu —
        senza disturbare nessuno, ma coinvolgendo tutti.
      </p>

      <div class="divider" aria-hidden="true"></div>

      <!-- Info grid -->
      <div class="info-grid" data-anim="scale">
        <div class="info-cell">
          <span class="info-label">Data</span>
          <span class="info-value">${data.date}</span>
        </div>
        <div class="info-cell">
          <span class="info-label">Inizio</span>
          <span class="info-value">${data.timeStart.replace('FROM ', '')}</span>
        </div>
        <div class="info-cell">
          <span class="info-label">Dove</span>
          <span class="info-value">${data.location}</span>
        </div>
        <div class="info-cell">
          <span class="info-label">Fine</span>
          <span class="info-value">${data.timeEnd}</span>
        </div>
      </div>

      <div class="divider" aria-hidden="true"></div>

      <!-- Lineup -->
      <div class="lineup-block" data-anim>
        <span class="lineup-label">Line-up</span>
        <div class="lineup-names">${lineupItems}</div>
      </div>

      <div class="divider" aria-hidden="true"></div>

      <!-- Ticket CTA -->
      <div class="ticket-cta" data-anim="pop">
        <span class="ticket-cta-label">Prenota il tuo posto</span>
        <a href="${data.ticketUrl}" class="ticket-btn" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            <path d="M13 5v2M13 17v2M13 11v2"/>
          </svg>
          Acquista la Prevendita
        </a>
        <span class="ticket-note">Disponibile online · Posti limitati</span>
      </div>

    </div>
  `;

  return section;
}

export function createFooter(data: EventData): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const socialsHtml = data.socials
    .map((s) => `<a href="${s.url}">${s.handle}</a>`)
    .join('');

  const logoUrls = [emblemaUrl, consultaLogoUrl];
  const logoAlts = ['Emblema CRI Jesi', 'Consulta Giovani Jesi'];

  const socialsWithLogos = data.socials
    .map((s, i) => `
      <div class="footer-social-item">
        <div class="footer-logo-wrap">
          <img src="${logoUrls[i]}" alt="${logoAlts[i]}" />
        </div>
        <a href="${s.url}">${s.handle}</a>
      </div>`)
    .join('');

  footer.innerHTML = `
    <div class="footer-socials">${socialsWithLogos}</div>
    <p class="footer-copy">© 2026 CRI Jesi</p>
  `;

  return footer;
}
