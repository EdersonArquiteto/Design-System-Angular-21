import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { DsInputComponent } from '../../../design-system/atoms/ds-input/ds-input';
import { DsButtonComponent } from '../../../design-system/atoms/ds-button/ds-button';
import { DsFormFieldComponent } from '../../../design-system/molecules/ds-form-field/ds-form-field';

@Component({
  selector: 'ds-register',
  imports: [CommonModule, ReactiveFormsModule, DsInputComponent, DsButtonComponent, DsFormFieldComponent],
  templateUrl: './register.html',
})
export class Register {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: this.passwordMatchValidator }); // Validador de grupo

  get emailError() {
    const ctrl = this.registerForm.get('email');
    if (ctrl?.touched && ctrl?.errors?.['required']) return 'O e-mail é obrigatório';
    if (ctrl?.touched && ctrl?.errors?.['email']) return 'E-mail inválido';
    return null;
  }


  // Validador Customizado: Compara dois campos do formulário
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    return password && confirm && password.value !== confirm.value ? { mismatch: true } : null;
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Registrando:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
