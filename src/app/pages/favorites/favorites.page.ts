import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  img: string;
  isFavorite?: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.css']
})
export class FavoritesPage {
  products: Product[] = [
    { name: 'Apple Watch Series 4', price: 120, img: 'assets/images/apple-watch.png'},
    { name: 'Air Max 270', price: 150, img: 'assets/images/apple-watch.png'},
    { name: 'Minimal Chair Tool', price: 90, img: 'assets/images/apple-watch.png'},
    { name: 'Apple Watch Series 4', price: 120, img: 'assets/images/apple-watch.png'},
    { name: 'Air Max 270', price: 150, img: 'assets/images/apple-watch.png'},
    { name: 'Minimal Chair Tool', price: 90, img: 'assets/images/apple-watch.png'},
    { name: 'Apple Watch Series 4', price: 120, img: 'assets/images/apple-watch.png'},
    { name: 'Air Max 270', price: 150, img: 'assets/images/apple-watch.png'},
    { name: 'Minimal Chair Tool', price: 90, img: 'assets/images/apple-watch.png'},
    { name: 'Apple Watch Series 4', price: 120, img: 'assets/images/apple-watch.png'},
    { name: 'Air Max 270', price: 150, img: 'assets/images/apple-watch.png'},
    { name: 'Minimal Chair Tool', price: 90, img: 'assets/images/apple-watch.png'},
  ];

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }
}
