import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollColorDirective } from '../../shared/directives/scroll-color.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollColorDirective]
})
export class AboutComponent implements OnInit {
  highlights = [
    { value: 0, target: 5, suffix: '+', text: 'Anni di Esperienza' },
    { value: 0, target: 20, suffix: '+', text: 'Progetti Completati' },
    { value: 0, target: 20, suffix: '+', text: 'Clienti Soddisfatti' }
  ];

  ngOnInit() {
    this.startCountAnimation();
  }

  startCountAnimation() {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    this.highlights.forEach(highlight => {
      let current = 0;
      const increment = highlight.target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= highlight.target) {
          highlight.value = highlight.target;
          clearInterval(timer);
        } else {
          highlight.value = Math.floor(current);
        }
      }, interval);
    });
  }
}