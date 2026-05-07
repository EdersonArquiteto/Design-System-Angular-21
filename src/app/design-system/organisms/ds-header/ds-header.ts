import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, startWith } from 'rxjs';
import { APP_ENV } from '../../../core/env/app-env.generated';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [],
  templateUrl: './ds-header.html',
})
export class DsHeader {
  readonly companyName = APP_ENV.companyName;

  private readonly platformId = inject(PLATFORM_ID);

  /** Data e hora em America/Sao_Paulo (fuso horário de Brasília) */
  readonly brasiliaDateTime = signal<string>('');

  constructor() {
    const format = () =>
      new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date());

    this.brasiliaDateTime.set(format());

    if (!isPlatformBrowser(this.platformId)) return;

    interval(1000)
      .pipe(startWith(0), takeUntilDestroyed())
      .subscribe(() => this.brasiliaDateTime.set(format()));
  }
}
