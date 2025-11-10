import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Directive, ElementRef, Input, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { PRODUCTS, Product } from '../products/products'; 


@Directive({ 
  selector: '[appParallax]', 
  standalone: true,
})
export class ParallaxDirective implements AfterViewInit {
  @Input() ratio = 0.4;
  private bgEl!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.bgEl = (this.el.nativeElement as HTMLElement).querySelector('.hero-bg') as HTMLElement;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.bgEl) return;
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    if (!inView) return;
    const offset = -rect.top;
    const bgTranslate = offset * this.ratio;
    this.renderer.setStyle(this.bgEl, 'transform', `translate3d(0, ${bgTranslate}px, 0)`);
  }
}


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterModule, ParallaxDirective],
})


export class HomeComponent {
  router: any;

   featured: Product[] = PRODUCTS.filter(p => [10, 11, 12].includes(p.id));

  goToProducts() {
    // Aquí puedes ejecutar código antes de redirigir
    console.log('Navegando a productos...');
    this.router.navigate(['/productsComponent']);
    
  }
}

