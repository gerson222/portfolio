import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, userData } from '../../models/login'; // Importar la interfaz y datos ficticios

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  users: User[]; // Arreglo para almacenar los usuarios

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[0-9].*[0-9])[a-zA-Z0-9]{8,}$/),
        ],
      ],
      showPassword: [false],
    });

    this.users = userData; // Asignar los datos ficticios a la propiedad 'users'
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get emailValid() {
    return this.email?.invalid && this.email?.touched;
  }

  get passwordValid() {
    return this.password?.invalid && this.password?.touched;
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.router.navigate(['/profile']); // Redireccionar a la ruta "profile"
    } else {
      alert('Formulario inválido');
    }
  }
  
}
