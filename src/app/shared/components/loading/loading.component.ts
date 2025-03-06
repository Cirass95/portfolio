import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  progress = 0;
  isLoading = false;
  loadingText = 'Inizializzazione...';
  private texts = [
    'Caricamento portfolio...',
    'Preparazione progetti...',
    'Configurazione interfaccia...',
    'Ottimizzazione contenuti...',
    'Quasi pronto...'
  ];

  ngOnInit() {
    this.startLoading();
  }

  private startLoading() {
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % this.texts.length;
      this.loadingText = this.texts[textIndex];
    }, 600);

    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      }
    }, 30);

    setTimeout(() => {
      clearInterval(interval);
      clearInterval(textInterval);
      this.progress = 100;
      this.loadingText = 'Benvenuto!';
      setTimeout(() => {
        this.isLoading = true;
      }, 500);
    }, 3000);
  }
}