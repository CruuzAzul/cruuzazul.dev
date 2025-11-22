import type { Podcast } from '../../modules/podcasts/types/Podcast';
import ZenikastJuniorDansLaTech from '../../public/static/images/talks/zenikast-junior-dans-la-tech.jpg';
import Zenika from '../../public/static/images/conferenceLogos/zenika.svg';

export const EtreJuniorDansLaTech: Podcast = {
  id: '12',
  title: 'Être junior dans la tech',
  language: '(🇫🇷)',
  description:
    'Débuter dans le monde de la tech en tant que junior peut être à la fois excitant et intimidant. Entre les attentes, les défis techniques, et la nécessité de trouver sa place dans une équipe, le parcours d\'un développeur junior est semé d\'embûches mais aussi de belles opportunités.\n' +
    '\n' +
    'Dans ce podcast, nous explorons les réalités du quotidien d\'un junior dans la tech : comment gérer la pression, apprendre efficacement, s\'intégrer dans une équipe, et surtout, comment grandir professionnellement. Nos invités partagent leurs expériences, leurs conseils et leurs astuces pour naviguer dans cet univers en constante évolution.\n',
  image: ZenikastJuniorDansLaTech,
  format: 'Podcast',
  speaker: [
    {
      name: 'Johana Lavigne',
      picture: 'https://github.com/johanalavigne.png',
      social: 'https://github.com/johanalavigne',
    },
    {
      name: 'Antoine Caron',
      picture: 'https://github.com/slashgear.png',
      social: 'https://x.com/Slashgear_',
    },
    {
      name: 'Théo Gianella',
      picture: 'https://github.com/theogianella.png',
      social: 'https://github.com/theogianella',
    },
    {
      name: 'Mickaël Alves',
      picture: 'https://github.com/malves-dev.png',
      social: 'https://x.com/malves_dev',
    },
  ],
  videoId: '4yBqGEsjy2E',
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
      link: 'https://open.spotify.com/episode/41mJ25fVQNBY9EQbCV6a1P?si=HR5YG35dRu2mHjICxRAcYA',
    },
    {
      platform: 'Deezer',
      link: 'https://dzr.page.link/1mbz8nq7B63Sjcaw5',
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=4yBqGEsjy2E',
    },
  ],
};

