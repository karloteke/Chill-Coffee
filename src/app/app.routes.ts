import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
      { path: 'header', component: Header },
      { path: 'footer', component: Footer },
      { path: '', component: Home },
      { path: 'products', component: Products },
      { path: 'contact', component: Contact },
];
