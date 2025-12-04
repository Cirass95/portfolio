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
      period: '04/2025 - Presente',
      role: 'Web Developer',
      sector: 'Settore Metallurgico',
      description:
        'All\'interno di un\'azienda leader nell\'automazione di impianti siderurgici ho progettato e sviluppato una nuova sezione dedicata alla simulazione dei processi produttivi. Ho contribuito alla definizione dei requisiti, alla strutturazione dell\'architettura front-end e alla realizzazione delle funzionalità chiave, collaborando in modo continuo con analisti e team backend.',
      responsibilities: [
        'Coordinamento tecnico del team e supporto alle attività di sviluppo',
        'Analisi funzionale e definizione dei requisiti di simulazione',
        'Progettazione dell\'architettura front-end e sviluppo delle funzionalità core',
        'Ottimizzazione UI/UX e garantire performance elevate nei flussi complessi',
        'Gestione e pianificazione dei task tramite metodologie agili'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      period: '04/24 - 01/25',
      role: 'Web Developer',
      sector: 'Settore Bancario',
      description:
        'Partecipazione al progetto di migrazione e rinnovamento della piattaforma di home banking, con particolare focus sulla sezione pagamenti. Ho curato la realizzazione e la manutenzione delle funzionalità critiche legate ai principali strumenti di pagamento digitali.',
      responsibilities: [
        'Sviluppo e refactoring delle funzionalità di pagamento',
        'Gestione operazioni SDD, MAV e RAV',
        'Integrazione dei servizi con piattaforma PagoPA',
        'Collaborazione con analisti e team backend per garantire affidabilità e continuità del servizio'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      period: '08/23 - 04/24',
      role: 'Web Developer',
      sector: 'Pubblica Amministrazione',
      description:
        'Sviluppo e miglioramento del portale istituzionale rivolto a cittadini e imprese, con l’obiettivo di rendere l’accesso ai servizi digitali più semplice ed efficiente. Ho contribuito al rilascio di nuove funzionalità e al miglioramento delle prestazioni del sito.',
      responsibilities: [
        'Supporto tecnico al team front-end nello sviluppo di nuove funzionalità',
        'Risoluzione di bug e ottimizzazione delle performance',
        'Implementazione di nuove schede informative e flussi operativi',
        'Introduzione e gestione di nuovi programmi operativi nel portale'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      period: '01/23 - 07/23',
      role: 'Web Developer',
      sector: 'Settore Bancario',
      description:
        'Sviluppo web e mobile utilizzando Salesforce e LWC per l’implementazione di nuove funzionalità rivolte ai canali digitali bancari. Ho lavorato su personalizzazioni UI e integrazioni lato Salesforce.',
      responsibilities: [
        'Realizzazione e manutenzione di componenti Lightning Web Components',
        'Personalizzazione UI con HTML e CSS',
        'Modifiche e implementazioni nella piattaforma Salesforce',
        'Utilizzo di Salesforce Omnistudio per la gestione dei processi'
      ],
      technologies: ['CSS', 'HTML', 'JavaScript', 'Salesforce', 'Omnistudio']
    },
    {
      period: '03/22 - 12/22',
      role: 'Web & Mobile Developer',
      sector: 'Settore Human Resources',
      description:
        'Sviluppo mobile e progettazione UI per un’app dedicata alla gestione HR. Ho realizzato nuove funzionalità da zero, curando sia gli aspetti tecnici sia quelli di esperienza utente.',
      responsibilities: [
        'Sviluppo end-to-end di nuove funzionalità mobile',
        'Customizzazione UI tramite componenti Ionic',
        'Integrazione dei servizi necessari al funzionamento dell’app',
        'Gestione della pubblicazione negli store Android e iOS'
      ],
      technologies: ['Ionic 6', 'Cordova', 'SCSS', 'HTML', 'TypeScript', 'Angular']
    },
    {
      period: '12/21 - 03/22',
      role: 'Web & Mobile Developer',
      sector: 'Servizi IT',
      description:
        'Sviluppo di un’app mobile interna rivolta ai dipendenti, con focus su UI, integrazione servizi e ottimizzazione dell’usabilità.',
      responsibilities: [
        'Progettazione e sviluppo di nuove funzionalità mobile',
        'Customizzazione UI tramite componenti Ionic',
        'Integrazione dei servizi back-end',
        'Miglioramento dell’esperienza utente per i flussi interni'
      ],
      technologies: ['Ionic 6', 'Cordova', 'SCSS', 'HTML', 'TypeScript', 'Angular']
    },
    {
      period: '09/21 - 12/21',
      role: 'Web & Mobile Developer',
      sector: 'Retail',
      description:
        'Sviluppo dell’app mobile per shopping, con funzionalità rivolte ai clienti finali. Mi sono occupato della UI, dell’integrazione dei servizi e dell’implementazione di nuove feature orientate all’esperienza d’acquisto.',
      responsibilities: [
        'Sviluppo di nuove funzionalità mobile',
        'Customizzazione UI tramite componenti Ionic',
        'Integrazione dei servizi necessari al funzionamento',
        'Ottimizzazione dell’esperienza di shopping mobile'
      ],
      technologies: ['Ionic 6', 'Cordova', 'SCSS', 'HTML', 'TypeScript', 'Angular']
    },
    {
      period: '09/20 - 09/21',
      role: 'Web & Mobile Developer',
      sector: 'Settore Bancario',
      description:
        'Partecipazione allo sviluppo dell’app bancaria ufficiale, con attività legate a nuove funzionalità e alla migrazione dalla versione 4 alla versione 5 di Ionic.',
      responsibilities: [
        'Sviluppo di nuove funzionalità mobile',
        'Customizzazioni UI tramite Ionic',
        'Integrazione dei servizi per i flussi bancari',
        'Migrazione completa dell’app da Ionic 4 a Ionic 5'
      ],
      technologies: ['Ionic 4', 'Ionic 5', 'Cordova', 'SCSS', 'HTML', 'TypeScript', 'Angular']
    },
    {
      period: '01/20 - 09/20',
      role: 'Web Developer',
      sector: 'Settore Assicurativo',
      description:
        'Sviluppo front-end di una nuova piattaforma rivolta ai clienti per la gestione e l’acquisto di polizze assicurative. Ho lavorato sulla UI e sull’integrazione dei servizi, garantendo un flusso di acquisto semplice e affidabile.',
      responsibilities: [
        'Sviluppo UI tramite Material Design',
        'Integrazione dei servizi e gestione dei flussi assicurativi',
        'Utilizzo di NgRx per lo state management',
        'Realizzazione del processo completo di acquisto polizze'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Material Design']
    },
    {
      period: '09/19 - 01/20',
      role: 'Web & Mobile Developer',
      sector: 'Infrastrutture',
      description:
        'Sviluppo di un’app ibrida Ionic per la visualizzazione delle tratte autostradali e dei POI, con funzionalità offline per garantire fruibilità anche senza connessione.',
      responsibilities: [
        'Sviluppo dell’app mobile ibrida',
        'Implementazione di funzionalità offline',
        'Autenticazione tramite JWT',
        'Gestione delle rotte e dei controlli di accesso'
      ],
      technologies: ['Ionic 3', 'Cordova', 'SCSS', 'HTML', 'TypeScript', 'Angular']
    }
  ];


  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Esperienza | Michele Cirasola - Sviluppatore Frontend');
    this.meta.updateTag({
      name: 'description',
      content: 'Oltre 6 anni di esperienza in progetti enterprise nei settori bancario, PA, assicurativo e industriale. Specializzato in sviluppo web e mobile con Angular, Ionic e TypeScript.'
    });

  }
}