import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';

interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage {
  education: Education[] = [
    {
      period: 'SETTEMBRE 2014',
      degree: 'Laurea in Economia e Informatica',
      institution: 'Università degli Studi Gabriele D\'Annunzio, Pescara',
      description: 'Formazione interdisciplinare che combina competenze economiche e informatiche, con focus particolare sullo sviluppo software e l\'analisi dei sistemi informativi aziendali.'
    }
  ];

  skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        'Angular (2+)',
        'TypeScript',
        'RxJS',
        'NgRx',
        'HTML5',
        'CSS3/SCSS',
        'JavaScript ES6+'
      ]
    },
    {
      name: 'Mobile Development',
      skills: [
        'Ionic Framework',
        'Cordova',
        'Progressive Web Apps',
        'Cross-platform Development',
        'Mobile UI/UX'
      ]
    },
    {
      name: 'Altri Strumenti',
      skills: [
        'Git',
        'REST APIs',
        'Material Design',
        'Responsive Design',
        'Performance Optimization',
        'Testing (Unit, E2E)'
      ]
    }
  ];

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Chi Sono | Michele Cirasola - Sviluppatore Frontend');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Scopri il mio percorso formativo e le competenze tecniche nel campo dello sviluppo frontend e mobile. Specializzato in Angular, Ionic e sviluppo web moderno.' 
    });
  }
}