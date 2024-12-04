import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  theme: string = 'light';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
