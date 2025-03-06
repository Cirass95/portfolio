import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  private static hasLoaded = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (LoadingGuard.hasLoaded) {
      this.router.navigate(['/']);
      return false;
    }
    
    LoadingGuard.hasLoaded = true;
    return true;
  }
}