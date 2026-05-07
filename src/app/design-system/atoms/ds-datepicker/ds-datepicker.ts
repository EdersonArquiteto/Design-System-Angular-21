import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BaseFormControl } from "../../utils/base-form-control";

@Component({
  selector: 'ds-datepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ds-datepicker.html',
})
export class DsDatepickerComponent extends BaseFormControl<string> {
  @Input() label = '';
  onInput(e: any) { this.handleValueChange(e.target.value); }
}