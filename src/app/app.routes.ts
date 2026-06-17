import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ChampStanding } from './champstanding/champstanding';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Dashboard },
  { path: 'champstanding', component: ChampStanding },
  { path: 'tasks', redirectTo: 'home' },
  { path: 'settings', redirectTo: 'home' },
  { path: 'favorites', redirectTo: 'home' }
];
