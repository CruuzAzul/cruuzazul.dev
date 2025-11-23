import NoCode from '../../public/static/images/talks/no-code.webp';
import Zenika from '../../public/static/images/conferenceLogos/zenika.svg';
import type { Talk } from '../../modules/talks/types/Talk';

export const JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus: Talk = {
  id: '7',
  title: "J'adore les développeurs, dans 2, 3 ans il y en aura plus 👨🏻‍💻",
  language: '(🇫🇷)',
  description:
    'Entre nous, avons-nous encore besoin de développeurs ? 🤔\n' +
    '\n' +
    "Voilà maintenant plusieurs années que tout le monde arpente le web à la recherche d'outils pour remplacer les développeurs. Souvent vu comme les rois du pétrole, avec une centaine de messages LinkedIn en attente, leur parcours semble se dérouler sans encombre... Mais il parait que toute les bonnes choses ont une fin 🏁\n" +
    '\n' +
    "Avec l’arrivée du no-code, du low-code, de l’intelligence artificielle, et de plein d'autres outils, la peur règne dans le monde des accros aux lignes de code ! 😰\n" +
    '\n' +
    "Sont-ils vraiment indispensables ? Pourrons-nous enfin nous en passer ? Serait-ce une espèce en voie d'extinction ?\n" +
    '\n' +
    'Venez mener l’enquête avec nous 🕵🏼‍♂️',
  image: NoCode,
  format: 'Quicky',
  videoId: 'mA6dmVYBfdA',
  speaker: [
    {
      name: 'Audart Lucas',
      picture: 'https://github.com/Slocaly.png',
      social: 'https://bsky.app/profile/slocaly.bsky.social',
    },
  ],
  conferences: [
    {
      name: 'Conférence interne Zenika',
      link: 'https://youtu.be/mA6dmVYBfdA',
      date: '2023',
      image: Zenika,
    },
  ],
};