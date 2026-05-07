import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Step {
  label: string;
  description?: string;
}

@Component({
  selector: 'ds-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-stepper.html',
  styleUrl: './ds-stepper.scss',
})
export class DsStepperComponent {
  @Input({ required: true }) steps: Step[] = [];
  
  currentStep = signal(0);
  
  progressWidth = computed(() => {
    return (this.currentStep() / (this.steps.length - 1)) * 100;
  });

  next() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update(s => s + 1);
    }
  }

  prev() {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
    }
  }
}
