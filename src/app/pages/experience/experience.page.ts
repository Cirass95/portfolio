import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header.component';

interface DetailedExperience {
  period: string;
  role: string;
  sector: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss']
})
export class ExperiencePage {
  experiences: DetailedExperience[] = [
    {
      period: '2022 - Presente',
      role: 'Senior Angular Developer',
      sector: 'Settore Bancario',
      description: 'Consulenza per lo sviluppo e la migrazione di una piattaforma di home banking enterprise per un importante istituto bancario italiano. Il progetto si è concentrato sulla modernizzazione del sistema di pagamenti digitali e l\'integrazione con i principali servizi nazionali.',
      responsibilities: [
        'Lead developer del modulo pagamenti della piattaforma',
        'Implementazione dei principali sistemi di pagamento digitale nazionali',
        'Integrazione con PagoPA e altri servizi governativi',
        'Ottimizzazione delle performance e dell\'esperienza utente'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST API']
    },
    {
      period: '2021 - 2022',
      role: 'Consulente Frontend',
      sector: 'Pubblica Amministrazione',
      description: 'Consulenza per lo sviluppo di un portale istituzionale per un ministero italiano. Il progetto ha richiesto particolare attenzione agli standard di accessibilità e alle normative della PA digitale.',
      responsibilities: [
        'Coordinamento del team frontend',
        'Sviluppo di componenti accessibili secondo WCAG 2.1',
        'Implementazione di servizi digitali per i cittadini',
        'Mentoring e formazione del team interno'
      ],
      technologies: ['Angular', 'TypeScript', 'Accessibility Standards', 'WCAG 2.1']
    }
  ];

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Esperienza | Michele Cirasola - Sviluppatore Frontend');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Esplora il mio percorso professionale come consulente IT specializzato nello sviluppo web e mobile. Esperienza con progetti enterprise per clienti nei settori bancario, assicurativo e PA.' 
    });
  }
}