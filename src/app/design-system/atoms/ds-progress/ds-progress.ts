import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'ds-ds-progress',
  imports: [CommonModule],
  templateUrl: './ds-progress.html',
})
export class DsProgress {
  @Input() type: 'linear' | 'circular' = 'linear';
  @Input() value = 0; // Para o linear
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
}
