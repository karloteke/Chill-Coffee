import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
 products = [
  {
    id: 1,
    name: 'Espresso Intenso',
    description: 'Café 100% arábica de tueste oscuro, sabor profundo y notas de cacao.',
    price: 3.5,
    img: 'assets/espressointenso.jpg',
    type: 'Grano'
  },
  {
    id: 2,
    name: 'Latte Cremoso',
    description: 'Mezcla suave con leche vaporizada y crema dorada. Ideal para la tarde.',
    price: 4.2,
    img: 'assets/latecremoso.jpg',
    type: 'Cremoso'
  },
  {
    id: 3,
    name: 'Cold Brew Natural',
    description: 'Café frío infusionado 12h, sabor suave y refrescante.',
    price: 4.8,
    img: 'assets/coldbrew.jpg',
    type: 'Bebida fría'
  },
  {
    id: 4,
    name: 'Cappuccino Clásico',
    description: 'Equilibrio perfecto entre espresso, leche y espuma.',
    price: 4.5,
    img: 'assets/cappuccinoclasico.jpg',
    type: 'Espumoso'
  },
  {
    id: 5,
    name: 'Colombian Supremo',
    description: 'Grano de origen colombiano, notas dulces de caramelo y cítricos.',
    price: 8.9,
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?fit=crop&w=400&h=300',
    type: 'Grano'
  },
  {
    id: 6,
    name: 'Frappe Chocolate',
    description: 'Café frappé con sirope de chocolate y crema batida.',
    price: 9.5,
    img: 'assets/frappuccino.jpg',
    type: 'Grano'
  },
  {
    id: 7,
    name: 'Brazil Santos',
    description: 'Cuerpo suave, baja acidez, con toques de nuez y chocolate.',
    price: 7.8,
    img: 'assets/grano2.png',
    type: 'Grano'
  },
  {
    id: 8,
    name: 'Kenya AA',
    description: 'Sabor vibrante y afrutado con notas de grosella negra.',
    price: 9.9,
    img: 'assets/kenya.jpg',
    type: 'Grano'
  },
  {
    id: 9,
    name: 'Sumatra Mandheling',
    description: 'Café de cuerpo intenso, notas terrosas y aroma exótico.',
    price: 10.2,
    img: 'assets/grano4.jpg',
    type: 'Grano'
  },
  {
    id: 10,
    name: 'Guatemala Antigua',
    description: 'Tueste medio con matices de cacao, nuez y ligera acidez.',
    price: 8.7,
    img: 'assets/grano3.jpg',
    type: 'Grano'
  },
  {
    id: 11,
    name: 'Costa Rica Tarrazú',
    description: 'Café balanceado, con notas de miel y cítricos suaves.',
    price: 9.0,
    img: 'assets/grano5.jpg',
    type: 'Grano'
  },
  {
    id: 12,
    name: 'Peru Organic',
    description: 'Café orgánico con matices de cacao y frutos secos.',
    price: 8.4,
    img: 'assets/grano1.jpg',
    type: 'Grano'
  }
];
}