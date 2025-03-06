import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollColor]',
  standalone: true
})
export class ScrollColorDirective {
  constructor(private el: ElementRef) {
    this.setupInitialStyles();
  }

  private setupInitialStyles() {
    const element = this.el.nativeElement as HTMLElement;
    element.style.transition = 'background-image 0.3s ease';
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    element.style.backgroundClip = 'text';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = this.el.nativeElement as HTMLElement;
    const rect = element.getBoundingClientRect();
    const scrollPercentage = Math.min(
      Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),
      1
    );

    const color = `linear-gradient(
      45deg,
      var(--accent-pink) ${scrollPercentage * 100}%,
      var(--primary-color) ${scrollPercentage * 100}%
    )`;

    element.style.backgroundImage = color;
  }
}