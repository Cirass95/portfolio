import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'chi-sono',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'esperienza',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender
  },
   { 
      path: '', 
      renderMode: RenderMode.Prerender
    },
    { 
      path: '**', 
      renderMode:RenderMode.Prerender
    },
    {
      path: 'blog/:id',
      renderMode: RenderMode.Client
    },
];
