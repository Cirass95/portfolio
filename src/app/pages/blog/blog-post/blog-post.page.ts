import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PageHeaderComponent } from '../../../components/shared/page-header/page-header.component';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent],
  templateUrl: './blog-post.page.html',
  styleUrls: ['./blog-post.page.scss']
})
export class BlogPostPage implements OnInit {
  post: BlogPost | undefined;
  
  private posts: BlogPost[] = [
    {
      id: 'angular-best-practices-2025',
      title: 'Angular Best Practices 2025: Guida Completa allo Sviluppo Moderno',
      content: `
        <h2>Introduzione alle Best Practices Angular 2025</h2>
        <p>Nel panorama in continua evoluzione dello sviluppo frontend, Angular continua a essere uno dei framework più robusti e affidabili per la creazione di applicazioni web enterprise. In questa guida completa, esploreremo le best practices più recenti e gli approcci moderni per lo sviluppo con Angular nel 2025.</p>

        <h3>1. Architettura Modulare</h3>
        <p>La modularizzazione rimane un pilastro fondamentale nello sviluppo Angular. Nel 2025, l'approccio consigliato è:</p>
        <ul>
          <li>Utilizzare standalone components come default</li>
          <li>Implementare una struttura feature-based</li>
          <li>Sfruttare il lazy loading per ottimizzare le performance</li>
        </ul>

        <h3>2. State Management Moderno</h3>
        <p>La gestione dello stato dell'applicazione è cruciale. Le best practices attuali includono:</p>
        <ul>
          <li>Utilizzare Signals per stato locale e reattività</li>
          <li>Implementare NgRx per applicazioni di grandi dimensioni</li>
          <li>Sfruttare RxJS per gestire flussi di dati complessi</li>
        </ul>

        <h3>3. Performance Optimization</h3>
        <p>Le prestazioni sono fondamentali per una buona user experience. Ecco le tecniche più efficaci:</p>
        <ul>
          <li>Implementare il change detection OnPush</li>
          <li>Utilizzare il server-side rendering con Angular Universal</li>
          <li>Ottimizzare il bundle size con moderne tecniche di tree-shaking</li>
        </ul>

        <h2>Conclusioni</h2>
        <p>Seguendo queste best practices, potrai sviluppare applicazioni Angular moderne, performanti e facilmente manutenibili. Ricorda che il mondo dello sviluppo è in continua evoluzione, quindi è importante mantenersi sempre aggiornati sulle ultime novità e tendenze.</p>
      `,
      date: '15 Marzo 2025',
      author: 'Michele Cirasola',
      category: 'Angular',
      readTime: '10 min',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop',
      tags: ['Angular', 'TypeScript', 'Web Development', 'Frontend']
    },
    {
      id: 'typescript-5-novita',
      title: 'TypeScript 5: Le Novità che Cambieranno il Tuo Modo di Programmare',
      content: `
        <h2>TypeScript 5: Un Salto di Qualità</h2>
        <p>TypeScript 5 introduce numerose novità che migliorano significativamente l'esperienza di sviluppo. Vediamo le principali innovazioni e come possono beneficiare i tuoi progetti.</p>

        <h3>Decorators Stage 3</h3>
        <p>I decoratori sono stati completamente rivisti, offrendo maggiore flessibilità e potenza. Esempi pratici di utilizzo e best practices.</p>

        <h3>Type-Only Imports/Exports</h3>
        <p>Gestione migliorata delle importazioni di tipo, con impatto positivo sulle performance di compilazione.</p>

        <h3>Conclusioni</h3>
        <p>TypeScript 5 rappresenta un importante passo avanti per il linguaggio, offrendo strumenti più potenti per lo sviluppo di applicazioni moderne.</p>
      `,
      date: '10 Marzo 2025',
      author: 'Michele Cirasola',
      category: 'TypeScript',
      readTime: '8 min',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop',
      tags: ['TypeScript', 'JavaScript', 'Programming']
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.posts.find(post => post.id === id);

    if (this.post) {
      this.title.setTitle(`${this.post.title} | Blog`);
      this.meta.updateTag({ 
        name: 'description', 
        content: this.post.content.substring(0, 160) + '...'
      });
    }
  }
}