import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkMode.asObservable();
  private readonly THEME_KEY = 'preferred-theme';

  toggleTheme() {
    const newTheme = !this.isDarkMode.value;
    this.isDarkMode.next(newTheme);
    this.updateTheme();
    this.saveThemePreference(newTheme);
  }

  private updateTheme() {
    const isDark = this.isDarkMode.value;
    document.documentElement.classList.toggle('dark-theme', isDark);
    document.documentElement.classList.toggle('light-theme', !isDark);
  }

  private saveThemePreference(isDark: boolean) {
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }

  initializeTheme() {
    // const savedTheme = localStorage.getItem(this.THEME_KEY);
    // const prefersDark = savedTheme 
    //   ? savedTheme === 'dark'
    //   : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    /* `this.isDarkMode.next(prefersDark);` is updating the BehaviorSubject `isDarkMode` with the value
    of `prefersDark`. This means that any subscribers to the `isDarkMode$` observable will receive
    the new value of `prefersDark`. In this context, it is setting the initial dark mode preference
    based on the value of `prefersDark`. */
    // this.isDarkMode.next(prefersDark);
    this.updateTheme();
  }
}