import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  template: `
    <main>
      <section class="hero-section">
        <div class="container">
          <h1>Servizi</h1>
          <p class="lead">
            Soluzioni professionali per trasformare le tue idee in realtà digitali
          </p>
          <div class="methodology">
            <h2>Il Mio Approccio</h2>
            <div class="steps-grid">
              <div class="step" *ngFor="let step of methodologySteps; let i = index">
                <div class="step-number">{{i + 1}}</div>
                <h3>{{step.title}}</h3>
                <p>{{step.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <app-services></app-services>
    </main>
  `,
  styles: [`
    .hero-section {
      padding: 120px 0 60px;
      background: linear-gradient(to right, var(--bg-color), var(--card-bg));
    }
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, var(--accent-pink), var(--accent-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .lead {
      font-size: 1.5rem;
      color: var(--secondary-color);
      max-width: 800px;
      margin-bottom: 3rem;
    }

    .methodology {
      margin-top: 4rem;
    }

    .methodology h2 {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .steps-grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .step {
      padding: 2rem;
      background: var(--card-bg);
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      position: relative;
    }

    .step:hover {
      transform: translateY(-5px);
      border-color: var(--accent-pink);
    }

    .step-number {
      position: absolute;
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
      background: var(--accent-pink);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .step h3 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .step p {
      color: var(--secondary-color);
      font-size: 0.9rem;
    }
  `]
})
export class ServicesPage {
  methodologySteps = [
    {
      title: 'Analisi',
      description: 'Studio approfondito delle esigenze e degli obiettivi del progetto'
    },
    {
      title: 'Pianificazione',
      description: 'Definizione della strategia e delle tecnologie più adatte'
    },
    {
      title: 'Sviluppo',
      description: 'Implementazione con focus su qualità e best practices'
    },
    {
      title: 'Testing',
      description: 'Verifica approfondita di funzionalità e performance'
    }
  ];

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Servizi | Michele Cirasola - Sviluppatore Frontend');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Servizi professionali di sviluppo web: dalla consulenza tecnica alla realizzazione di applicazioni web moderne. Metodologia agile e focus sulla qualità.' 
    });
  }
}