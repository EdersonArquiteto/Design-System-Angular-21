import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DsSidebar } from '../../../design-system/organisms/ds-sidebar/ds-sidebar';
import { DsHeader } from '../../../design-system/organisms/ds-header/ds-header';

@Component({
  selector: 'ds-dashboard-layout',
  imports: [CommonModule, RouterModule, DsSidebar, DsHeader],
  standalone: true,
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {}
