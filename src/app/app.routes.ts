import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'chi-sono',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage),
  },
  {
    path: 'esperienza',
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
  { 
    path: '**', 
    redirectTo: '' 
  }
];