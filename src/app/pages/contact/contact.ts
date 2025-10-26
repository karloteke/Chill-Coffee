import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.submitted = true;
      console.log('Formulario enviado:', this.contact);
      // Aquí podrías conectar con un servicio o API más adelante
      this.contact = { name: '', email: '', message: '' };
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
