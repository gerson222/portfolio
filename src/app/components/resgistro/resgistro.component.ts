import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css'],
})
export class ResgistroComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9].*[0-9])[a-zA-Z0-9]{8,}$/),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [this.passwordMatchValidator, this.emailMatchValidator],
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get confirmEmail() {
    return this.form.get('confirmEmail');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  isFieldValid(fieldName: string) {
    const field = this.form.get(fieldName);
    return field?.invalid && field?.touched;
  }

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility(controlName: string) {
    if (controlName === 'password') {
      this.showPassword = !this.showPassword;
    } else if (controlName === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const passwordValue = passwordControl.value;
      const confirmPasswordValue = confirmPasswordControl.value;

      if (passwordValue !== confirmPasswordValue) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null); // Limpia los errores si coinciden
      }
    }
  }

  emailMatchValidator(form: FormGroup) {
    const emailControl = form.get('email');
    const confirmEmailControl = form.get('confirmEmail');

    if (emailControl && confirmEmailControl) {
      const emailValue = emailControl.value;
      const confirmEmailValue = confirmEmailControl.value;

      if (emailValue !== confirmEmailValue) {
        confirmEmailControl.setErrors({ emailMismatch: true });
      } else {
        confirmEmailControl.setErrors(null); // Limpia los errores si coinciden
      }
    }
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      alert('Formulario válido');
    } else {
      alert('Formulario inválido');
    }
  }
}
