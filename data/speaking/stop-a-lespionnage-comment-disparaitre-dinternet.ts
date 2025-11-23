import Espionnage from '../../public/static/images/talks/espionnage.webp';
import DevfestLille from '../../public/static/images/conferenceLogos/devfest-lille.webp';
import DevfestStrasbourg2024 from '../../public/static/images/conferenceLogos/devfest-strasbourg-2024.webp';
import SnowCamp from '../../public/static/images/conferenceLogos/snowcamp.webp';
import TouraineTech from '../../public/static/images/conferenceLogos/touraineTech.svg';
import Breizhcamp from '../../public/static/images/conferenceLogos/breizhcamp.svg';
import Zenika from '../../public/static/images/conferenceLogos/zenika.svg';
import type { Talk } from '../../modules/talks/types/Talk';

export const StopALespionnageCommentDisparaitreDinternet: Talk = {
  id: '4',
  title: 'STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍',
  language: '(🇫🇷)',
  description:
    'Vous en avez marre de vous sentir traqué sur Internet ? 😒 Nous aussi ! Mais est-il réellement possible de nos jours de devenir un véritable ninja digital ? 🥷🏻 Et si pour protéger votre vie privée en ligne, il fallait tout d’abord comprendre qui a accès à vos données et ce qu’ils peuvent faire avec ?\n' +
    '\n' +
    'Nous allons vous apprendre comment être un vrai pro de la confidentialité et de la sécurité des données, mais surtout comment devenir anonyme en ligne et éviter les curieux… 👀 Sortez vos loupes et suivez-nous dans cette enquête pour reprendre le contrôle de votre vie numérique !\n' +
    '\n' +
    'Et si vous êtes chanceux, nous vous dévoilerons peut-être quelques secrets de ninja pour échapper aux espions ! Venez nous rejoindre et apprenez comment devenir le maître du camouflage numérique ! 😶‍🌫️',
  image: Espionnage,
  format: 'Talk',
  videoId: 'pHP3MC1r6Ro',
  speaker: [
    {
      name: 'Etienne Idoux',
      picture: 'https://github.com/PopsIDX.png',
      social: 'https://twitter.com/PopsIDX',
    },
  ],
  conferences: [
    {
      name: 'Devfest Lille',
      link: '',
      date: '2024',
      image: DevfestLille,
    },
    {
      name: 'Devfest Strasbourg',
      link: '',
      date: '2024',
      image: DevfestStrasbourg2024,
    },
    {
      name: 'SnowCamp',
      link: '',
      date: '2024',
      image: SnowCamp,
    },
    {
      name: 'Touraine Tech',
      link: 'https://2024.touraine.tech/talk/xlORqKhzTikvV2R3N9q5',
      date: '2024',
      image: TouraineTech,
    },
    {
      name: 'Breizhcamp',
      link: 'https://www.breizhcamp.org/conference/programme/',
      date: '2023',
      image: Breizhcamp,
    },
    {
      name: 'Conférence interne Zenika',
      link: 'https://youtu.be/Tj1yPUsA720',
      date: '2023',
      image: Zenika,
    },
  ],
};