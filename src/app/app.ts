import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DsToastContainer } from './design-system/organisms/ds-toast-container/ds-toast-container';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DsToastContainer],
  template: `
    <main class="min-h-screen bg-slate-950">
      <router-outlet></router-outlet>
    </main>
    <ds-toast-container></ds-toast-container>
  `,
})
export class AppComponent {}
