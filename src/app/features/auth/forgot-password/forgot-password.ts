import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsInputComponent } from '../../../design-system/atoms/ds-input/ds-input';
import { DsButtonComponent } from '../../../design-system/atoms/ds-button/ds-button';
import { DsFormFieldComponent } from '../../../design-system/molecules/ds-form-field/ds-form-field';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ds-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, DsInputComponent, DsButtonComponent, DsFormFieldComponent],
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  readonly env = environment;
  sent = signal(false);
  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Enviando recuperação para:', this.forgotForm.value.email);
      this.sent.set(true); // Muda a interface para o estado de sucesso
    }
  }
}
