export interface Social {
  handle: string;
  url: string;
}

export interface EventData {
  topTitle: string;
  mainTitle: string;
  date: string;
  location: string;
  timeStart: string;
  timeEnd: string;
  lineup: string[];
  socials: [Social, Social];
  ticketUrl: string;
}

export const event: EventData = {
  topTitle: 'SILENT',
  mainTitle: 'PARTY',
  date: 'Sab. 20 GIUGNO',
  location: 'ANTISTADIO, JESI',
  timeStart: 'FROM 22:00',
  timeEnd: "'TILL LATE",
  lineup: ['LA REGINA', 'DJ MORRU'],
  socials: [
    { handle: '@GIOVANICRIJESI', url: 'https://www.instagram.com/giovanicrijesi' },
    { handle: '@CONSULTAGIOVANIJESI', url: 'https://www.instagram.com/consultagiovanijesi' },
  ],
  ticketUrl: 'https://www.eventbrite.it/e/biglietti-silent-party-1991007242258',
};
