import AppwriteWorkshop from '../../public/images/talks/appwrite-workshop.png';
import DevfestNantes2023 from '../../public/images/conferenceLogos/devfest-nantes-2023.svg';
import DevfestLille from '../../public/images/conferenceLogos/devfest-lille.png';
import DevfestStrasbourg2023 from '../../public/images/conferenceLogos/devfest-strasbourg-2023.png';
import SnowCamp from '../../public/images/conferenceLogos/snowcamp.webp';
import Breizhcamp from '../../public/images/conferenceLogos/breizhcamp.svg';
import {Workshop} from '../../modules/speaking/types/speaking';

export const VoyageAuCoeurDappwrite: Workshop = {
  id: '5',
  title: "Voyage au coeur d'Appwrite\u00A0: le backend open-source qui challenge Firebase 🧳",
  language: '(🇫🇷)',
  description:
    'Bienvenue à bord du grand voyage, destination : l\'univers du backend open-source ! Êtes vous prêts pour cette aventure au cœur d\'Appwrite, la solution qui défie le géant déjà bien connu Firebase ? 🛫\n' +
    '\n' +
    'Au cours de cette aventure, vous découvrirez les fondamentaux d\'Appwrite, de la mise en place de l\'environnement à l\'exploration de fonctionnalités plus avancées. Nous parcourrons ensemble les différents services de base qui font d\'Appwrite l\'outil indispensable pour tout développeur à la recherche d\'un backend facile à utiliser et performant 🚀\n' +
    '\n' +
    'Prenez votre courage à deux mains et embarquez avec nous pour une expérience inoubliable au cœur de l\'écosystème Appwrite ! 👨🏼‍✈️',
  image: AppwriteWorkshop,
  format: 'Workshop',
  speaker: [
    {
      name: 'Lucas Audart',
      picture: 'https://github.com/Slocaly.png',
      twitter: 'https://twitter.com/Slocalyy',
    },
  ],
  conferences: [
    {
      name: 'Devfest Nantes',
      link: '',
      date: '2023',
      image: DevfestNantes2023,
    },
    {
      name: 'Devfest Lille',
      link: '',
      date: '2024',
      image: DevfestLille,
    },
    {
      name: 'Devfest Strasbourg',
      link: '',
      date: '2023',
      image: DevfestStrasbourg2023,
    },
    {
      name: 'SnowCamp',
      link: '',
      date: '2024',
      image: SnowCamp,
    },
    {
      name: 'Breizhcamp',
      link: 'https://www.breizhcamp.org/conference/programme/',
      date: '2024',
      image: Breizhcamp,
    },
  ],
};