import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  theme: string = 'light';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'; // Inverse le thème actuel
  }
}
