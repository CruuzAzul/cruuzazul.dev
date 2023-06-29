import Appwrite from '../public/images/talks/appwrite.png';
import Remotion from '../public/images/talks/remotion.png';

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
        twitter: 'https://mobile.twitter.com/Slocalyy',
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
        twitter: 'https://mobile.twitter.com/Slocalyy',
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
];
