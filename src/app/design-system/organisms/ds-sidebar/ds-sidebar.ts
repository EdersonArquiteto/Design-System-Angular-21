import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../../environments/environment';

type SidebarItem = {
  label: string;
  link: string[];
  icon: 'grid' | 'cart' | 'cube' | 'layers' | 'pie' | 'gear';
};

@Component({
  selector: 'ds-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ds-sidebar.html',
})
export class DsSidebar {
  readonly isCollapsed = signal(false);
  readonly appName = environment.appName;

  /** Itens principais — estilo próximo a dashboards enterprise (linhas finas, alto contraste). */
  readonly items: SidebarItem[] = [
    { label: 'Visão geral', link: ['/dashboard', 'home'], icon: 'grid' },
    { label: 'Vendas', link: ['/dashboard', 'home'], icon: 'cart' },
    { label: 'Produtos', link: ['/dashboard', 'home'], icon: 'cube' },
    { label: 'Cadastros', link: ['/dashboard', 'home'], icon: 'layers' },
    { label: 'Relatórios', link: ['/dashboard', 'home'], icon: 'pie' },
    { label: 'Configurações', link: ['/dashboard', 'home'], icon: 'gear' },
  ];

  toggle() {
    this.isCollapsed.update((v) => !v);
  }
}
