export const ROUTES = {
  HOME: '',
  ABOUT: 'chi-sono',
  EXPERIENCE: 'esperienza',
  BLOG: 'blog',
  BLOG_POST: 'blog/:id'
} as const;

export const ROUTE_TITLES = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.ABOUT]: 'Chi Sono',
  [ROUTES.EXPERIENCE]: 'Esperienza',
  [ROUTES.BLOG]: 'Blog'
} as const;