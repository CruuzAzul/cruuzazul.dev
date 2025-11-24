import TanStackQuery from '../../public/static/images/talks/tanstack-query.webp';
import DevfestNantes2025 from '../../public/static/images/conferenceLogos/devfest-nantes-2025.webp';
import SnowCamp from '../../public/static/images/conferenceLogos/snowcamp.webp';
import type { Talk } from '../../modules/talks/types/Talk';

export const RevolutionTanStackQueryEnfinUneBonneGestionDetat: Talk = {
    id: '11',
    title: 'Révolution TanStack Query\u00A0: Enfin une bonne gestion d\'état 🗂️',
    language: '(🇫🇷)',
    description:
        'Gérer l\'état dans une application frontend est un défi quotidien… 🤯 Entre Redux, Zustand, Recoil, les React Context ou encore Pinia côté Vue, les options sont nombreuses, mais parfois trop ! Et quand on y ajoute la gestion des appels réseau, du cache, des états de chargement ou d\'erreur, le tout peut vite devenir un vrai casse-tête… 💣\n' +
        '\n' +
        'C\'est là que TanStack Query entre en scène pour améliorer l\'experience de vos développeur et de vos utilisateur ! 🤩 Véritable révolution dans la gestion des données, cet outil met fin au chaos en remplaçant les solutions artisanales et les outils traditionnels souvent trop rigides 🤸🏼 Fini la gestion granulaire de l\'état : grâce à un cache performant, une synchronisation automatique et une gestion optimisée des requêtes, TanStack Query simplifie enfin la gestion de l\'état, que ce soit dans React ou au-delà ! 🗺️\n' +
        '\n' +
        'Dans ce talk, nous verrons comment reprendre le contrôle de vos données, éviter les pièges classiques et adopter les meilleures pratiques pour un état applicatif stable, performant et scalable !\n' +
        '\n' +
        'Prêt·e à rejoindre la révolution ? 🚀',
    image: TanStackQuery,
    format: 'Talk',
    slidesUrl: 'https://talk-tanstack-query-slides.vercel.app',
    speaker: [
        {
            name: 'Mickaël Alves',
            picture: 'https://github.com/malves-dev.png',
            social: 'https://x.com/malves_dev',
        },
        {
            name: 'Lucas Audart',
            picture: 'https://github.com/Slocaly.png',
            social: 'https://bsky.app/profile/slocaly.bsky.social',
        },
    ],
    conferences: [
        {
            name: 'DevFest Nantes',
            link: '',
            date: '2025-10-16',
            image: DevfestNantes2025,
        },
        {
            name: 'SnowCamp',
            link: '',
            date: '2026-01-15',
            image: SnowCamp,
        },
    ],
};

