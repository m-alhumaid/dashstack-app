import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

Chart.register(...registerables);

interface Deal {
  product: string;
  location: string;
  date: string;
  price: number;
  status: string;
  month: string;
}

interface Stat {
  icon: string;
  title: string;
  value: number;
  trend: number; 
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements AfterViewInit {

  @ViewChild('salesChart') salesChartRef!: ElementRef<HTMLCanvasElement>;

  constructor(private http: HttpClient) {}

  months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  selectedMonth: string = 'January';

  chart!: Chart;
  deals: Deal[] = [];
  filteredDeals: Deal[] = [];
  salesData: Record<string, number[]> = {};

  stats: Stat[] = [];

  iconsMap: Record<string,string> = {
    'Total Users': 'assets/images/Icon.png',
    'Total Orders': 'assets/images/Icon (1).png',
    'Total Sales': 'assets/images/Icon (2).png',
    'Total Pending': 'assets/images/Icon (3).png'
  }

  ngAfterViewInit() {
    this.loadStats();
    this.loadData();
  }

  loadStats() {
    this.http.get<any[]>('assets/data/stats.json').subscribe(data => {
      this.stats = data.map(s => ({
        ...s,
        icon: this.iconsMap[s.title] || 'assets/images/default-icon.png',
        trend: s.trend
      }));
    });
  }

  loadData() {
    this.http.get<Deal[]>('assets/data/deals.json')
      .subscribe(data => {
        this.deals = data;
        this.filterTable();
      });

    this.http.get<Record<string, number[]>>('assets/data/sales-chart.json')
      .subscribe(data => {
        this.salesData = data;
        this.initChart();
      });
  }

  initChart() {
    if (!this.salesChartRef) return;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.salesChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'],
        datasets: [{
          data: this.salesData[this.selectedMonth] || [],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79,70,229,.15)',
          fill: true,
          tension: 0.4,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false }},
        scales: {
          x: { grid: { display: false }},
          y: { grid: { color: '#eee' }}
        }
      }
    });
  }

  updateDashboard() {
    this.filterTable();
    if (this.chart) {
      this.chart.data.datasets[0].data =
        this.salesData[this.selectedMonth] || [];
      this.chart.update();
    }
  }

  filterTable() {
    this.filteredDeals = this.deals.filter(d => d.month === this.selectedMonth);
  }

}
