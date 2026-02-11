import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { FavoritesPage } from './pages/favorites/favorites.page';
import { OrdersPage } from './pages/orders/orders.page';
import { TeamPage } from './pages/team/team.page';
import { AddMemberPage } from './pages/add-member/add-member.page';

export const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'favorites', component: FavoritesPage },
  { path: 'orders', component: OrdersPage },
  { path: 'team', component: TeamPage },
  { path: 'team/add', component: AddMemberPage }
];
