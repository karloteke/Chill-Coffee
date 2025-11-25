import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})

export class ContactComponent {
  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const payload = form.value;
    console.log('Enviado:', payload);
    alert('¡Gracias! Te contactaremos pronto.');
    form.resetForm();
  }
}

  // submitted = false;

  // onSubmit() {
  //   if (this.contact.name && this.contact.email && this.contact.message) {
  //     this.submitted = true;
  //     console.log('Formulario enviado:', this.contact);
  //     // Aquí podrías conectar con un servicio o API más adelante
  //     this.contact = { name: '', email: '', message: '' };
  //   } else {
  //     alert('Por favor, completa todos los campos.');
  //   }
  // }

