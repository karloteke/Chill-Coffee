import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  type: string;
}


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    description: 'Grano arábica de altura con notas florales, cítricas y un toque de jazmín. Perfil brillante y afrutado.',
    price: 11.5,
    img: 'assets/etiope.jpg',
    type: 'Grano'
  },
  {
    id: 2,
    name: 'Kenya AA Plus',
    description: 'Grano de alta montaña, sabor brillante con notas a grosella negra y vino tinto. Final limpio y duradero.',
    price: 13.0,
    img: 'assets/aaplus.jpg',
    type: 'Grano'
  },
  {
    id: 3,
    name: 'Peru Andes Gold',
    description: 'Café de altura cultivado en los Andes peruanos, con notas dulces de caramelo, avellana y un final limpio.',
    price: 10.5,
    img: 'assets/peru.jpg',
    type: 'Grano'
  },
  {
    id: 4,
    name: 'Mexico Chiapas Altura',
    description: 'Grano arábica de cultivo orgánico, con aroma floral, cuerpo medio y sabores a cacao y almendra tostada.',
    price: 9.8,
    img: 'assets/chiapas.jpg',
    type: 'Grano'
  },
  {
    id: 5,
    name: 'Brazil Santos Bourbon',
    description: 'Café brasileño de baja acidez y cuerpo medio, con notas de almendra y chocolate con leche.',
    price: 9.9,
    img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?fit=crop&w=400&h=300',
    type: 'Grano'
  },
  {
    id: 6,
    name: 'Panama Geisha Premium',
    description: 'Exclusivo café Geisha con aroma floral, cuerpo sedoso y sabores a bergamota y miel. Edición limitada.',
    price: 24.5,
    img: 'assets/panama.jpg',
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

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule]
})

export class ProductsComponent {
  products = PRODUCTS;
}
