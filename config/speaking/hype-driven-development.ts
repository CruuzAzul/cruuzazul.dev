import {Podcast} from '../../modules/speaking/types/speaking';
import ZenikastHypeDrivenDevelopment from '../../public/images/talks/zenikast-hype-driven-development.png';
import Zenika from '../../public/images/conferenceLogos/zenika.svg';

export const HypeDrivenDevelopment: Podcast = {
  id: '9',
  title: 'Le Hype Driven Development',
  description:
    'Dans un monde où les langages, les outils et les méthodes évoluent à un rythme effréné, la veille technologique est devenue un pilier essentiel pour les équipes de développement. Mais face à cette avalanche de nouveautés, une question cruciale se pose : les équipes doivent-elles céder à chaque tendance ?\n' +
    '\n' +
    'Discutons bonnes pratiques pour intégrer ou non ces innovations, tout en évitant les pièges des effets de mode. Nous partageons notre vision sur la manière dont les équipes peuvent gérer leur veille quotidienne pour maintenir leurs expertises, en équilibrant innovation et pragmatisme.\n',
  image: ZenikastHypeDrivenDevelopment,
  format: 'Podcast',
  speaker: [
    {
      name: 'Audart Lucas',
      picture: 'https://github.com/Slocaly.png',
      twitter: 'https://twitter.com/Slocalyy',
    },
    {
      name: 'Hubert Sablonnière',
      picture: 'https://github.com/hsablonniere.png',
      twitter: 'https://x.com/hsablonniere',
    },
    {
      name: 'Etienne Idoux',
      picture: 'https://github.com/PopsIDX.png',
      twitter: 'https://twitter.com/PopsIDX',
    },
  ],
  videoId: '3tBFOo8Yjoo',
  conferences: [
    {
      name: 'Conférence interne Zenika',
      date: '2024',
      image: Zenika,
    },
  ],
  platformLinks: [
    {
      platform: 'Spotify',
      link: 'https://open.spotify.com/show/5zKv7W4Zm5B6t2Q8mGQZ2Q',
    },
    {
      platform: 'Apple Podcast',
      link: 'https://podcasts.apple.com/fr/podcast/les-communaut%C3%A9s-it/id1569031417',
    },
    {
      platform: 'Deezer',
      link: 'https://www.deezer.com/fr/show/2570912',
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/channel/UC2V4Zo3K4Zm5B6t2Q8mGQZ2Q',
    },
  ],
};
