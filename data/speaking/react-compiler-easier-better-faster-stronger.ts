import ReactCompiler from '../../public/static/images/talks/react-compiler.webp';
import ReactCompilerFeatured from '../../public/static/images/talks/react-compiler-featured.webp';
import TouraineTech from '../../public/static/images/conferenceLogos/touraineTech.svg';
import Devoxx from '../../public/static/images/conferenceLogos/devoxx.webp';
import DevfestNantes2024 from '../../public/static/images/conferenceLogos/devfest-nantes-2024.svg';
import type { Talk } from '../../modules/talks/types/Talk';

export const ReactCompilerEasierBetterFasterStronger: Talk = {
  id: '1',
  title: 'React Compiler\u00A0: Easier, Better, Faster, Stronger 🤖',
  language: '(🇫🇷)',
  description:
    "Imaginez une nouvelle version de React encore plus attendue qu'un album des Daft Punk 💽 Avec les nouveaux hooks, les actions, les React Server Components et bien plus, la version 19 de React s'annonce révolutionnaire ! 🤯 Et c'est sans compter le hit de la version : Le React Compiler !\n" +
    '\n' +
    "Au travers d'exemples concrets et de démonstrations, parcourons ensemble cette feature inédite pour en comprendre le besoin initial et son fonctionnement ⚙️ En quelques notes de code, découvrons comment React vous promet désormais performance et optimisation en toute facilité !\n" +
    '\n' +
    "Le React Compiler, véritable chef-d'œuvre de cette mise à jour, s'annonce comme un remix parfait pour vos applications passées et futures ! Venez vibrer avec nous et laissez-vous emporter par le rythme du React Compiler ! 🚀\n",
  image: ReactCompiler,
  featuredImage: ReactCompilerFeatured,
  format: 'Talk',
  videoId: '_edOnkr8Yy4',
  slidesUrl: 'https://slides-talk-react-compiler.vercel.app/',
  speaker: [
    {
      name: 'Lucas Audart',
      picture: 'https://github.com/Slocaly.png',
      social: 'https://bsky.app/profile/slocaly.bsky.social',
    },
  ],
  conferences: [
    {
      name: 'Devoxx France',
      link: 'https://www.devoxx.fr/agenda-2025/talk/react-compiler-easier-better-faster-stronger/',
      date: '2025-04-18',
      image: Devoxx,
    },
    {
      name: 'Touraine Tech',
      link: '',
      date: '2025-02-07',
      image: TouraineTech,
    },
    {
      name: 'Devfest Nantes',
      link: 'https://devfest.gdgnantes.com/sessions/react_compiler___easier__better__faster__stronger___/',
      date: '2024-10-17',
      image: DevfestNantes2024,
    },
  ],
};
