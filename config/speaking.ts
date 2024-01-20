import Appwrite from '../public/images/talks/appwrite.png';
import Espionnage from '../public/images/talks/espionnage.png';
import Remotion from '../public/images/talks/remotion.png';
import NoCode from '../public/images/talks/noCode.png';
import Flutter from '../public/images/talks/flutter.png';

import VeryTechTrip from '../public/images/talks/vtt.webp';
import Devoxx from '../public/images/talks/devoxx.png';
import Mixit from '../public/images/talks/mixit.svg';
import SnowCamp from '../public/images/talks/snowcamp.webp';
import Zenika from '../public/images/talks/zenika.png';
import Breizhcamp from '../public/images/talks/breizhcamp.svg';
import DevFestDijon from '../public/images/talks/devfestDijon.png';
import TouraineTech from '../public/images/talks/touraineTech.svg';
import LyonJS from '../public/images/talks/lyonJs.png';
import Bedrock from '../public/images/talks/bedrock.svg';
import {StaticImageData} from 'next/image';

export interface Speaker {
  name: string;
  twitter: string;
}

export interface Conference {
  name: string;
  link: string;
  date: string;
  image: StaticImageData;
}

export interface Speaking {
  title: string;
  description: string;
  image: StaticImageData;
  format: string;
  videoLink: string;
  speaker: Speaker[];
  conferences: Conference[];
}
export const speaking: Speaking[] = [
  {
    title: 'Appwrite est-il prêt à éteindre Firebase ? 🔥',
    description:
      "Est-ce que Firebase vous dit quelque chose ? Vous en avez sûrement entendu parlé et vous l'avez peut-être déjà utilisé, et pour le coup, c'est normal ! Voilà maintenant plusieurs années que de nombreux développeurs l'utilisent pour faciliter la création de back-end scalable et performant.\n" +
      '\n' +
      "Mais avez-vous déjà entendu parler d'Appwrite ❓\n" +
      '\n' +
      'Peut importe votre réponse, venez découvrir avec nous le duel entre Appwrite la jeune solution open-source et Firebase la flamme de Google 🥊',
    image: Appwrite,
    format: 'Talk (50 minutes)',
    videoLink: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
    speaker: [
      {
        name: 'Lucas Audart',
        twitter: 'https://twitter.com/Slocalyy',
      },
    ],
    conferences: [
      {
        name: 'Devoxx France',
        link: 'https://cfp.devoxx.fr/2023/talk/JON-3628/Appwrite_est-il_pret_a_eteindre_Firebase_%3F_%F0%9F%94%A5',
        date: '2023',
        image: Devoxx,
      },
      {
        name: 'SnowCamp',
        link: 'https://snowcamp2023.sched.com/event/1EOux/appwrite-est-il-pret-a-eteindre-firebase',
        date: '2023',
        image: SnowCamp,
      },
      {
        name: 'Very Tech Trip',
        link: 'https://verytechtrip.com/programme',
        date: '2023',
        image: VeryTechTrip,
      },
      {
        name: 'MiXiT',
        link: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
        date: '2022',
        image: Mixit,
      },
      {
        name: 'Breizhcamp',
        link: 'https://www.breizhcamp.org/conference/programme/',
        date: '2022',
        image: Breizhcamp,
      },
      {
        name: 'DevFest Dijon',
        link: 'https://my.weezevent.com/devfest-dijon',
        date: '2022',
        image: DevFestDijon,
      },
      {
        name: 'Conférence interne Zenika',
        link: 'https://youtu.be/ZO8dwVfKYCo',
        date: '2022',
        image: Zenika,
      },
    ],
  },
  {
    title: "Remotion : le 7ème art à portée de composants web et d'API 🎬",
    description:
      "Remotion est une lib open source publiée en 2019, qui permet la génération de gif, d'animations, de vidéos de manière programmatique, à partir de composant React ! Nous allons vous partager notre aventure de création de trailer vidéo dans le contexte des plateformes de streaming sur lesquels nous travaillons chez Bedrock. Nostalgique des programmes du début des années 2000, on a essayé de reproduire quelques bandes d'annonces pour vous rappelez des souvenirs et vous montrer à quel point c'est facile !\n" +
      '\n' +
      'Installez-vous et préparez vos pop-corn la séance va commencer ! 🍿',
    image: Remotion,
    format: 'Talk (50 minutes)',
    videoLink: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
    speaker: [
      {
        name: 'Lucas Audart',
        twitter: 'https://twitter.com/Slocalyy',
      },
    ],
    conferences: [
      {
        name: 'MiXiT',
        link: 'https://mixitconf.org/2022/appwrite-est-il-pret-a-eteindre-firebase-',
        date: '2023',
        image: Mixit,
      },
      {
        name: 'SnowCamp',
        link: 'https://snowcamp2023.sched.com/event/1EOux/appwrite-est-il-pret-a-eteindre-firebase',
        date: '2023',
        image: SnowCamp,
      },
      {
        name: 'Touraine Tech',
        link: 'https://my.weezevent.com/devfest-dijon',
        date: '2023',
        image: TouraineTech,
      },
      {
        name: 'LyonJS',
        link: 'https://www.meetup.com/lyonjs/events/284549533/',
        date: '2022',
        image: LyonJS,
      },
      {
        name: 'Bedrock',
        link: 'https://youtu.be/LvaHeKiwf0o',
        date: '2022',
        image: Bedrock,
      },
    ],
  },
  {
    title: 'STOP à l’espionnage ! Comment disparaître d’internet ? 🕵🏼‍',
    description:
      'Vous en avez marre de vous sentir traqué sur Internet ? 😒 Nous aussi ! Mais est-il réellement possible de nos jours de devenir un véritable ninja digital ? 🥷🏻 Et si pour protéger votre vie privée en ligne, il fallait tout d’abord comprendre qui a accès à vos données et ce qu’ils peuvent faire avec ?\n' +
      '\n' +
      'Nous allons vous apprendre comment être un vrai pro de la confidentialité et de la sécurité des données, mais surtout comment devenir anonyme en ligne et éviter les curieux… 👀 Sortez vos loupes et suivez-nous dans cette enquête pour reprendre le contrôle de votre vie numérique !\n' +
      '\n' +
      'Et si vous êtes chanceux, nous vous dévoilerons peut-être quelques secrets de ninja pour échapper aux espions ! Venez nous rejoindre et apprenez comment devenir le maître du camouflage numérique ! 😶‍🌫️',
    image: Espionnage,
    format: 'Talk (50 minutes)',
    videoLink: 'https://youtu.be/Tj1yPUsA720',
    speaker: [
      {
        name: 'Etienne Idoux',
        twitter: 'https://twitter.com/PopsIDX',
      },
    ],
    conferences: [
      {
        name: 'SnowCamp',
        link: '',
        date: 'SOON',
        image: SnowCamp,
      },
      {
        name: 'Touraine Tech',
        link: '',
        date: 'SOON',
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
  },
  {
    title: "J'adore les développeurs, dans 2, 3 ans il y en aura plus 👨🏻‍💻",
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
    format: 'Quicky (20 minutes)',
    videoLink: 'https://youtu.be/mA6dmVYBfdA',
    speaker: [
      {
        name: 'Audart Lucas',
        twitter: 'https://twitter.com/Slocalyy',
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
  },
  {
    title: 'Flutter, le futur du web ? 🐦',
    description:
      'Vous avez sûrement déjà entendu parler de Flutter une des dernière technologie de Google ! 🐦 \n' +
      '\n' +
      "Elle permet de générer des applications pour tous les écrans à partir d'une seule base de code ! On parle bien de développer d’un coup des applications pour Android, iOS, Linux, Mac, ou encore Windows ! 🪄\n" +
      '\n' +
      'Mais saviez-vous que vous pouvez aussi avoir votre application web à partir de la même base de code ? Peut-on vraiment toucher plus d’utilisateurs avec une expérience similaire à celle sur mobile ? Est-ce une alternative assez solide pour révolutionner le développement web ? 🌏',
    image: Flutter,
    format: 'Quicky (20 minutes)',
    videoLink: 'https://youtu.be/mdGMBIYmi6c',
    speaker: [
      {
        name: 'Audart Lucas',
        twitter: 'https://twitter.com/Slocalyy',
      },
    ],
    conferences: [
      {
        name: 'Conférence interne Zenika',
        link: 'https://youtu.be/mdGMBIYmi6c',
        date: '2022',
        image: Zenika,
      },
    ],
  },
];
