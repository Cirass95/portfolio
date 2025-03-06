import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { LoadingComponent } from './components/loading/loading.component';
import { ThemeService } from './core/services/theme.service';
import { SeoService } from './core/services/seo.service';

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
    private themeService: ThemeService,
    private seoService: SeoService
  ) {

    this.seoService.setMetaTags({
      title: 'Michele Cirasola | Sviluppatore Frontend',
      description: 'Sviluppatore Frontend specializzato in Angular, Ionic e WordPress. Creo siti web moderni, applicazioni mobile e soluzioni e-commerce.',
      ogTitle: 'Michele Cirasola | Sviluppatore Frontend',
      ogDescription: 'Sviluppatore Frontend specializzato in Angular, Ionic e WordPress. Creo siti web moderni, applicazioni mobile e soluzioni e-commerce.',
      ogImage: 'https://michelecirasola.dev/foto_curriculum.png',
      keywords: 'sviluppatore frontend, angular, ionic, wordpress, sviluppo web, applicazioni mobile, siti web, italia, milano',
      
    });
    
  }

  ngOnInit() {
    this.themeService.initializeTheme();
    
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }
}