import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
// import { Products } from './pages/products/products';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
      { path: 'header', component: Header },
      { path: 'footer', component: Footer },
      { path: '', component: Home },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
];
