import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollColorDirective } from '../../shared/directives/scroll-color.directive';


interface ContactInfo {
  email: string;
  location: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollColorDirective]
})
export class ContactComponent {
  contactInfo: ContactInfo = {
    email: 'michelecirasola1995@gmail.com',
    location: 'Pescara Abruzzo, Italia'
  };

  socialLinks: SocialLink[] = [
    {
      name: 'Posizione',
      icon: '📍',
      url: 'https://www.google.it/maps/place/Pescara+PE/@42.4555601,14.1830655,14z/data=!3m1!4b1!4m6!3m5!1s0x1331a60db9286477:0xa0b89e89b22cbfe2!8m2!3d42.4617624!4d14.2160321!16zL20vMDNmMmhj?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D',
      description: this.contactInfo.location
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/michele-cirasola-2a0a89127/',
      description: 'Connettiti professionalmente'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Cirass95',
      description: 'Esplora i miei repository'
    },
    // {
    //   name: 'Twitter',
    //   icon: '🐦',
    //   url: 'https://twitter.com',
    //   description: 'Seguimi per aggiornamenti tech'
    // },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/michelecirasola/',
      description: 'Contenuti dietro le quinte'
    }
  ];
}