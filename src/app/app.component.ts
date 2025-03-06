import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { LoadingComponent } from './components/loading/loading.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingComponent],
  template: `
    <app-loading *ngIf="showLoading"></app-loading>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  showLoading = true;

  constructor(
    private meta: Meta,
    private title: Title,
    private themeService: ThemeService
  ) {
    this.title.setTitle('Michele Cirasola | Sviluppatore Frontend & WordPress');
    
    this.meta.addTags([
      { name: 'description', content: 'Sviluppatore Frontend specializzato in Angular, Ionic e WordPress. Creo siti web moderni, applicazioni mobile e soluzioni e-commerce per il mercato italiano.' },
      { name: 'keywords', content: 'sviluppatore frontend, angular, ionic, wordpress, sviluppo web, applicazioni mobile, siti web, italia, milano' },
      { name: 'author', content: 'Michele Cirasola' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Michele Cirasola | Sviluppatore Frontend & WordPress' },
      { property: 'og:description', content: 'Sviluppatore Frontend specializzato in Angular, Ionic e WordPress. Creo siti web moderni, applicazioni mobile e soluzioni e-commerce per il mercato italiano.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'it_IT' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Michele Cirasola | Sviluppatore Frontend & WordPress' },
      { name: 'twitter:description', content: 'Sviluppatore Frontend specializzato in Angular, Ionic e WordPress. Creo siti web moderni, applicazioni mobile e soluzioni e-commerce.' },
      { name: 'format-detection', content: 'telephone=no' }
    ]);
  }

  ngOnInit() {
    this.themeService.initializeTheme();
    
    setTimeout(() => {
      this.showLoading = false;
    }, 5000);
  }
}