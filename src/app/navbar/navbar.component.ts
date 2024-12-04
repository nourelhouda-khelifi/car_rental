import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
   // Déclaration d'une variable d'entrée qui est liée au thème (mode clair ou sombre)
   @Input() theme: string = 'light'; 
   // Événement émis lorsque le thème change (par exemple, lorsqu'on passe du mode sombre au mode clair)
   @Output() themeChange = new EventEmitter<string>(); 
 
   // Variable pour contrôler l'affichage du menu mobile
   showMenu = false;
 
   // Liste des liens de navigation dans la Navbar
   navLinks = [
     { id: 1, name: 'HOME', link: '/#' },
     { id: 2, name: 'CARS', link: '/#cars' },
     { id: 3, name: 'ABOUT', link: '/#about' },
     { id: 4, name: 'BOOKING', link: '/#booking' }
   ];
 
   // Fonction pour basculer entre l'affichage du menu mobile
   toggleMenu() {
     this.showMenu = !this.showMenu;
   }
 
   // Fonction pour basculer entre le mode sombre et clair
   toggleTheme() {
     const newTheme = this.theme === 'dark' ? 'light' : 'dark'; // Inverse le thème actuel
     this.themeChange.emit(newTheme); // Émet l'événement pour changer le thème
   }


}
