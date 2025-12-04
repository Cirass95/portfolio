import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // Nuovi URL in inglese
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage),
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.page').then(m => m.ExperiencePage)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.page').then(m => m.BlogPage)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./pages/blog/blog-post/blog-post.page').then(m => m.BlogPostPage)
  },

  // Redirect 301 dai vecchi URL italiani (per SEO e utenti)
  {
    path: 'chi-sono',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'esperienza',
    redirectTo: 'experience',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: ''
  }
];