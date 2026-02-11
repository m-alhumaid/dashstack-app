import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  constructor(private http: HttpClient) {}
  getFavorites() {
    return this.http.get<any[]>('assets/data/favorites.json');
  }
}
