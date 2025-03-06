import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollColorDirective } from '../../shared/directives/scroll-color.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollColorDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '💻',
      title: 'Sviluppo Web',
      description: 'Applicazioni web moderne e responsive costruite con Angular e le ultime tecnologie.',
      features: [
        'Single Page Applications',
        'Progressive Web Apps',
        'Design Responsive',
        'Ottimizzazione delle Performance'
      ]
    },
    {
      icon: '📱',
      title: 'Sviluppo Mobile',
      description: 'Applicazioni mobile cross-platform utilizzando il framework Ionic.',
      features: [
        'App iOS e Android',
        'Applicazioni Ibride',
        'Integrazione Funzionalità Native',
        'Pubblicazione su App Store'
      ]
    },
    {
      icon: '🌐',
      title: 'Sviluppo WordPress',
      description: 'Siti web professionali WordPress per aziende e negozi online.',
      features: [
        'Siti Web Aziendali',
        'E-commerce',
        'Ottimizzazione SEO',
        'Velocità di Caricamento'
      ]
    },
    {
      icon: '🔧',
      title: 'Consulenza Tecnica',
      description: 'Consulenza esperta su soluzioni tecniche e architettura.',
      features: [
        'Code Review',
        'Design Architetturale',
        'Audit Performance',
        'Implementazione Best Practices'
      ]
    }
  ];
}