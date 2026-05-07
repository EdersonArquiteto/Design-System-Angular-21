import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'ds-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ds-accordion.html',
})
export class DsAccordion {
  @Input() title = '';
  isOpen = signal(false);
}
