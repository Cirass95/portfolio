import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollColorDirective } from '../../shared/directives/scroll-color.directive';


interface Skill {
  name: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollColorDirective]
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 95, color: 'var(--accent-pink)' },
    { name: 'Ionic', level: 85, color: 'var(--accent-green)' },
    { name: 'TypeScript', level: 90, color: 'var(--accent-blue)' },
    { name: 'JavaScript', level: 90, color: 'var(--accent-purple)' },
    { name: 'HTML/CSS', level: 85, color: 'var(--accent-orange)' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 55, color: 'var(--accent-green)' },
    { name: 'Express', level: 55, color: 'var(--accent-blue)' },
    { name: 'MongoDB', level: 50, color: 'var(--accent-purple)' },
    { name: 'WordPress', level: 80, color: 'var(--accent-pink)' },
    { name: 'Git', level: 90, color: 'var(--accent-orange)' }
  ];

  technologies: string[] = [
    'RxJS', 'NgRx', 'Redux', 'SASS', 'Webpack', 
    'Jest', 'Cypress', 'GraphQL', 'REST API', 
    'CI/CD', 'AWS', 'Firebase', 'Material UI', 'PrimeNG','Kendoo UI', 
    'WordPress', 'Tailwind CSS', 'Bootstrap'
  ];
}