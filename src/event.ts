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
  topTitle: 'NOTTE',
  mainTitle: 'ROSSA',
  date: 'SAB. 20 GIUGNO',
  location: 'ANTISTADIO, JESI',
  timeStart: 'FROM 10:30 PM',
  timeEnd: "'TILL LATE",
  lineup: ['AIDEM DJ', 'LA REGINA', 'DJ MORRU'],
  socials: [
    { handle: '@GIOVANICRIJESI', url: '#' },
    { handle: '@CONSULTAGIOVANIJESI', url: '#' },
  ],
  ticketUrl: '#',
};
