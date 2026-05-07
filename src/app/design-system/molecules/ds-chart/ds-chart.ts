import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'ds-chart',
  standalone: true,
  templateUrl: './ds-chart.html',
})
export class DsChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  
  @Input() type: 'line' | 'bar' | 'doughnut' = 'line';
  @Input() data: any;
  @Input() options: any = {};

  private chart: any;

  ngAfterViewInit() { this.initChart(); }

  ngOnChanges() { if (this.chart) { this.chart.destroy(); this.initChart(); } }

  private initChart() {
    const config: ChartConfiguration = {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#94a3b8', font: { family: 'Urbanist' } } } },
        scales: this.type !== 'doughnut' ? {
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
          x: { grid: { display: false }, ticks: { color: '#64748b' } }
        } : {}
      }
    };
    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}