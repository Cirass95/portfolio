import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  setMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
  }) {
    this.title.setTitle(config.title);
    
    const tags = [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keywords || 'sviluppatore frontend, angular, ionic, wordpress, sviluppo web' },
      { property: 'og:title', content: config.ogTitle || config.title },
      { property: 'og:description', content: config.ogDescription || config.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'it_IT' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.ogTitle || config.title },
      { name: 'twitter:description', content: config.ogDescription || config.description }
    ];

    tags.forEach(tag => this.meta.updateTag(tag));
  }
}