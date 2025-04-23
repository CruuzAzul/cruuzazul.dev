import Remotion from '../../public/images/talks/remotion.png';
import Mixit from '../../public/images/conferenceLogos/mixit.svg';
import SnowCamp from '../../public/images/conferenceLogos/snowcamp.webp';
import TouraineTech from '../../public/images/conferenceLogos/touraineTech.svg';
import LyonJS from '../../public/images/conferenceLogos/lyonJs.svg';
import Bedrock from '../../public/images/conferenceLogos/bedrock.svg';
import {Talk} from '../../modules/speaking/types/speaking';

export const RemotionLe7emeArtAPorteeDeComposantsWebEtDApi: Talk = {
  id: '3',
  title: "Remotion\u00A0: le 7ème art à portée de composants web et d'API 🎬",
  language: '(🇫🇷)',
  description:
    "Remotion est une lib open source publiée en 2019, qui permet la génération de gif, d'animations, de vidéos de manière programmatique, à partir de composant React ! Nous allons vous partager notre aventure de création de trailer vidéo dans le contexte des plateformes de streaming sur lesquels nous travaillons chez Bedrock. Nostalgique des programmes du début des années 2000, on a essayé de reproduire quelques bandes d'annonces pour vous rappelez des souvenirs et vous montrer à quel point c'est facile !\n" +
    '\n' +
    'Installez-vous et préparez vos pop-corn la séance va commencer ! 🍿',
  image: Remotion,
  format: 'Talk',
  videoId: 'mr_-LTkLl8A',
  speaker: [
    {
      name: 'Antoine Caron',
      picture: 'https://github.com/slashgear.png',
      social: 'https://x.com/Slashgear_',
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
};