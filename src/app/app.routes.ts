import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: Footer },
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
];
