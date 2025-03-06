import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  setMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogImageWidth?: string;
    ogImageHeight?: string;
    ogType?: string;
    ogUrl?: string;
    ogLocale?: string;

  }) {
    this.title.setTitle(config.title);

    // 🔍 SEO Meta
    const seoTags = [
      { name: 'description', content: config.ogDescription || config.description },
      { name: 'keywords', content: config.keywords || 'sviluppatore frontend, angular, ionic, wordpress' },
      { name: 'author', content: 'Michele Cirasola' },
      { name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' }
    ];

    // 🖼️ Open Graph Meta
    const ogTags = [
      { property: 'og:title', content: config.ogTitle || config.title },
      { property: 'og:description', content: config.ogDescription || config.description },
      { property: 'og:image', content: config.ogImage || 'https://michelecirasola.dev/foto_curriculum.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://michelecirasola.dev' },
      { property: 'og:locale', content: 'it_IT' }
    ];

    [...seoTags, ...ogTags].forEach(tag => this.meta.updateTag(tag));

  }
}