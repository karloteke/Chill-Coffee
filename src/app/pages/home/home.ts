import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterModule],
})

export class HomeComponent {
  router: any;

  goToProducts() {
    // Aquí puedes ejecutar código antes de redirigir
    console.log('Navegando a productos...');
    this.router.navigate(['/productsComponent']);
  }
}