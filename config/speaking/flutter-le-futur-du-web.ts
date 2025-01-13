import Flutter from '../../public/images/talks/flutter.png';
import Zenika from '../../public/images/conferenceLogos/zenika.svg';
import {Talk} from '../../modules/speaking/types/speaking';

export const FlutterLeFuturDuWeb: Talk = {
  id: '8',
  title: 'Flutter, le futur du web ? 🐦',
  description:
    'Vous avez sûrement déjà entendu parler de Flutter une des dernière technologie de Google ! 🐦 \n' +
    '\n' +
    "Elle permet de générer des applications pour tous les écrans à partir d'une seule base de code ! On parle bien de développer d’un coup des applications pour Android, iOS, Linux, Mac, ou encore Windows ! 🪄\n" +
    '\n' +
    'Mais saviez-vous que vous pouvez aussi avoir votre application web à partir de la même base de code ? Peut-on vraiment toucher plus d’utilisateurs avec une expérience similaire à celle sur mobile ? Est-ce une alternative assez solide pour révolutionner le développement web ? 🌏',
  image: Flutter,
  format: 'Quicky',
  videoId: 'mdGMBIYmi6c',
  speaker: [
    {
      name: 'Audart Lucas',
      picture: 'https://github.com/Slocaly.png',
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
};
