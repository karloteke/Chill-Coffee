import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { ProductsComponent } from './pages/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, HeaderComponent, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chill-coffee');
}
