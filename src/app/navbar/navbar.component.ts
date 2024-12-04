import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class NavbarComponent {
  @Input() theme: string = 'light'; 
  @Output() themeChange = new EventEmitter<string>();

  showMenu = false;

  navLinks = [
    { id: 1, name: 'HOME', link: '/#' },
    { id: 2, name: 'CARS', link: '/#cars' },
    { id: 3, name: 'ABOUT', link: '/#about' },
    { id: 4, name: 'BOOKING', link: '/#booking' }
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeChange.emit(newTheme);
  }
}
