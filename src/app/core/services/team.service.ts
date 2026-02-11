import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private http: HttpClient) {}
  getTeam() {
    return this.http.get<any[]>('assets/data/team.json');
  }
}
