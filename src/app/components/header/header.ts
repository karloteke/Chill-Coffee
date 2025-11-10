import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  //  NECESARIO para [class.active] y *ngIf, *ngFor, etc.
import { RouterModule } from '@angular/router';  // NECESARIO para routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto; 
    
      if (this.menuAbierto) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
