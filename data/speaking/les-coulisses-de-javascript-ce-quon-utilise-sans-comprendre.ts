import JavaScriptCoulisses from '../../public/static/images/talks/coulisses-javascript.png';
import JavaScriptCoulissesFeatured from '../../public/static/images/talks/coulisses-javascript-featured.jpg';
import DevQuest from '../../public/static/images/conferenceLogos/devquest.svg';
import SunnyTech from '../../public/static/images/conferenceLogos/sunnyTech.svg';
import BDXIO from '../../public/static/images/conferenceLogos/bdxio.png';
import DevfestToulouse from '../../public/static/images/conferenceLogos/defestToulouse.png';
import DevfestDijon from '../../public/static/images/conferenceLogos/devfestDijon.png';
import type { Talk } from '../../modules/talks/types/Talk';

export const LesCoulissesDeJavaScriptCeQuonUtiliseSansComprendre: Talk = {
    id: '10',
    title: "Les coulisses de JavaScript\u00A0: ce qu'on utilise sans comprendre 🎭",
    language: '(🇫🇷)',
    description:
        'Bienvenue dans les coulisses d\'un des plus grand spectacle du développement web : JavaScript 🪄 Sur scène, tout semble magique : les animations captivent, les promesses sont tenues, et tout s\'exécute sans accroc. Mais derrière le rideau, une véritable troupe travaille sans relâche pour donner vie à ce spectacle.\n' +
        '\n' +
        'Dans cette visite guidée, nous vous invitons à lever le rideau sur la mécanique de JavaScript : son engine, les closures, son incontournable event loop, les contextes d\'exécution, et bien sûr, ses fameuses promesses. Ces concepts vous sont peut-être familiers, mais n\'est-il pas temps d\'un peu mieux les comprendre ?\n' +
        '\n' +
        'Prenez vos billets et plongez avec nous dans les rouages fascinants de JavaScript 🎟️',
    image: JavaScriptCoulisses,
    featuredImage: JavaScriptCoulissesFeatured,
    format: 'Talk',
    slidesUrl: 'https://talk-js-backstage.vercel.app',
    speaker: [
        {
            name: 'Etienne Idoux',
            picture: 'https://github.com/PopsIDX.png',
            social: 'https://twitter.com/PopsIDX',
        },
    ],
    conferences: [
        {
            name: 'DevQuest',
            link: '',
            date: '2025',
            image: DevQuest,
        },
        {
            name: 'Sunny Tech',
            link: '',
            date: '2025',
            image: SunnyTech,
        },
        {
            name: 'BDX I/O',
            link: '',
            date: '2025',
            image: BDXIO,
        },
        {
            name: 'DevFest Toulouse',
            link: '',
            date: '2025',
            image: DevfestToulouse,
        },
        {
            name: 'DevFest Dijon',
            link: '',
            date: '2025',
            image: DevfestDijon,
        },
    ],
};

