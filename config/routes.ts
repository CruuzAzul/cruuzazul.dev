interface Route {
  name: string;
  path: string;
  enabled: boolean;
}

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    enabled: true,
  },
  {
    name: 'About',
    path: '/about',
    enabled: true,
  },
  {
    name: 'Speaking',
    path: '/speaking',
    enabled: true,
  },
  {
    name: 'Articles',
    path: '/articles',
    enabled: true,
  },
  {
    name: 'Projects',
    path: '/projects',
    enabled: false,
  },
];
