export const ROUTES = ['characters', 'locations', 'episodes'] as const;

export type Routes = typeof ROUTES[number];
