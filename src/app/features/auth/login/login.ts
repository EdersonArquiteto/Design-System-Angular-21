import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsInputComponent } from '../../../design-system/atoms/ds-input/ds-input';
import { DsButtonComponent } from '../../../design-system/atoms/ds-button/ds-button';
import { DsFormFieldComponent } from '../../../design-system/molecules/ds-form-field/ds-form-field';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import {Router, RouterLink} from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'ds-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, DsInputComponent, DsButtonComponent, DsFormFieldComponent],
  templateUrl: './login.html',
})
export class Login {
  readonly env = environment;

  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastService);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get emailError() {
    const ctrl = this.loginForm.get('email');
    if (ctrl?.touched && ctrl?.errors?.['required']) return 'O e-mail é obrigatório';
    if (ctrl?.touched && ctrl?.errors?.['email']) return 'E-mail inválido';
    return null;
  }

  get passwordError() {
    const ctrl = this.loginForm.get('password');
    if (ctrl?.touched && ctrl?.errors?.['required']) return 'A senha é obrigatória';
    if (ctrl?.touched && ctrl?.errors?.['minlength']) return 'Mínimo de 6 caracteres';
    return null;
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.login({ email: email!, password: password! }).subscribe({
      next: (auth) => {
        if (!auth.accessToken) {
          this.toast.show('Login não retornou token. Verifique a API ou o formato da resposta.', 'error');
          return;
        }
        void this.router.navigate(['/dashboard/home']);
      },
      error: () => {
        // Toast global já é exibido pelo errorInterceptor
      },
    });
  }
}
