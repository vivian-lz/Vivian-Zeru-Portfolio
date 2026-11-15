import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS } from './data/projects';

export const serverRoutes: ServerRoute[] = [
  // Angular needs the project IDs at build time to prerender shareable detail pages.
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      PROJECTS.map((project) => ({ id: project.id })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
