import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollColorDirective } from '../../shared/directives/scroll-color.directive';

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollColorDirective]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      period: '2025 - Presente',
      title: 'Senior Frontend Developer',
      company: 'Gruppo Euris spa',
      description: 'Guida dello sviluppo di applicazioni enterprise e mentoring di sviluppatori junior. Implementazione di best practices e soluzioni architetturali.',
      technologies: ['Angular', 'TypeScript', 'NgRx']
    },

    {
      period: '2019 - 2025',
      title: 'Frontend Developer Tech Lead',
      company: 'Aesys srl',
      description: 'Iniziato come sviluppatore frontend lavorando su varie applicazioni web. Specializzato nel framework Angular e tecnologie web moderne.',
      technologies: ['Angular', 'JavaScript', 'CSS3']
    }
  ];
}