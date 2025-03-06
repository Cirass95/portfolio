import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  constructor(
    private router: Router,
    private location: Location,
    public themeService: ThemeService
  ) {}

  goBack(): void {
    if (this.router.url === '/') {
      return;
    }
    this.location.back();
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}