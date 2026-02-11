import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService, Order } from '../../core/services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {

  orders: Order[] = [];

  searchText: string = '';
  filterStatus: string = 'All';
  filterType: string = 'All';
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.ordersService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error loading orders:', err);
      }
    });
  }

  get filteredOrders(): Order[] {
    let filtered = [...this.orders];

    if (this.searchText) {
      filtered = filtered.filter(order =>
        order.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    if (this.filterStatus !== 'All') {
      filtered = filtered.filter(order =>
        order.status === this.filterStatus
      );
    }

    if (this.filterType !== 'All') {
      filtered = filtered.filter(order =>
        order.type === this.filterType
      );
    }

    return filtered;
  }

  get paginatedOrders(): Order[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrders.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredOrders.length / this.pageSize);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  resetFilters() {
    this.filterStatus = 'All';
    this.filterType = 'All';
    this.searchText = '';
    this.currentPage = 1;
  }

  get startItem(): number {
    return this.filteredOrders.length === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    const end = this.currentPage * this.pageSize;
    return end > this.filteredOrders.length ? this.filteredOrders.length : end;
  }

  get totalItems(): number {
    return this.filteredOrders.length;
  }
}
