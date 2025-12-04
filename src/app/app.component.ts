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
      title: 'Michele Cirasola | Sviluppatore Frontend Angular, Ionic & WordPress',
      description: 'Sviluppatore Frontend con 6+ anni di esperienza in progetti enterprise. Specializzato in Angular, Ionic, TypeScript e WordPress per applicazioni web e mobile nei settori bancario, PA e industriale.',
      ogTitle: 'Michele Cirasola | Sviluppatore Frontend Angular, Ionic & WordPress',
      ogDescription: 'Sviluppatore Frontend con 6+ anni di esperienza in progetti enterprise. Specializzato in Angular, Ionic, TypeScript e WordPress per applicazioni web e mobile.',
      ogImage: 'https://michelecirasola.dev/foto_curriculum.png',
      keywords: 'sviluppatore frontend, angular developer, ionic framework, typescript, rxjs, ngrx, wordpress, sviluppo web enterprise, applicazioni mobile ibride, consulente IT, progetti bancari, pubblica amministrazione, pescara, abruzzo, tech lead',

    });

  }

  ngOnInit() {
    this.themeService.initializeTheme();

    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }
}