import ReactCompiler from '../../public/images/talks/react-compiler.png';
import TouraineTech from '../../public/images/conferenceLogos/touraineTech.svg';
import DevfestNantes2024 from '../../public/images/conferenceLogos/devfest-nantes-2024.svg';
import {Talk} from './speaking';

export const ReactCompilerEasierBetterFasterStronger: Talk = {
  id: '1',
  title: 'React Compiler\u00A0: Easier, Better, Faster, Stronger 🤖',
  description:
    'Imaginez une nouvelle version de React encore plus attendue qu’un album des Daft Punk 💽 Avec les nouveaux hooks, les actions, les React Server Components et bien plus, la version 19 de React s’annonce révolutionnaire ! 🤯 Et c’est sans compter le hit de la version : Le React Compiler !\n' +
    '\n' +
    'Au travers d’exemples concrets et de démonstrations, parcourons ensemble cette feature inédite pour en comprendre le besoin initial et son fonctionnement ⚙️ En quelques notes de code, découvrons comment React vous promet désormais performance et optimisation en toute facilité !\n' +
    '\n' +
    "Le React Compiler, véritable chef-d'œuvre de cette mise à jour, s'annonce comme un remix parfait pour vos applications passées et futures ! Venez vibrer avec nous et laissez-vous emporter par le rythme du React Compiler ! 🚀\n",
  image: ReactCompiler,
  format: 'Talk',
  videoId: '_edOnkr8Yy4',
  speaker: [
    {
      name: 'Lucas Audart',
      twitter: 'https://twitter.com/Slocalyy',
    },
  ],
  conferences: [
    {
      name: 'Touraine Tech',
      link: '',
      date: '2025',
      image: TouraineTech,
    },
    {
      name: 'Devfest Nantes',
      link: 'https://devfest.gdgnantes.com/sessions/react_compiler___easier__better__faster__stronger___/',
      date: '2024',
      image: DevfestNantes2024,
    },
  ],
};
