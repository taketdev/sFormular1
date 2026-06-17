import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface DriverStanding {
  pos: string;
  name: string;
  country: string;
  number: string;
  team: string;
  points: number;
  colorClass: string;
}

interface TeamStanding {
  pos: string;
  team: string;
  points: number;
  colorClass: string;
}

@Component({
  selector: 'app-champstanding',
  imports: [RouterLink],
  templateUrl: './champstanding.html',
  styleUrl: './champstanding.scss',
})
export class ChampStanding {
  private readonly route = inject(ActivatedRoute);
  
  protected readonly activeTab = signal<string>('fahrer');

  protected readonly driversList = signal<DriverStanding[]>([
    { pos: '01', name: 'Max Verstappen', country: 'NED', number: '1', team: 'Red Bull Racing', points: 331, colorClass: 'redbull-border' },
    { pos: '02', name: 'Lando Norris', country: 'GBR', number: '4', team: 'McLaren', points: 279, colorClass: 'mclaren-border' },
    { pos: '03', name: 'Charles Leclerc', country: 'MON', number: '16', team: 'Ferrari', points: 245, colorClass: 'ferrari-border' },
    { pos: '04', name: 'Oscar Piastri', country: 'AUS', number: '81', team: 'McLaren', points: 237, colorClass: 'mclaren-border' },
    { pos: '05', name: 'Carlos Sainz', country: 'ESP', number: '55', team: 'Ferrari', points: 190, colorClass: 'ferrari-border' },
    { pos: '06', name: 'Lewis Hamilton', country: 'GBR', number: '44', team: 'Mercedes', points: 174, colorClass: 'mercedes-border' }
  ]);

  protected readonly teamsList = signal<TeamStanding[]>([
    { pos: '01', team: 'Red Bull Racing', points: 599, colorClass: 'redbull-border' },
    { pos: '02', team: 'McLaren', points: 516, colorClass: 'mclaren-border' },
    { pos: '03', team: 'Ferrari', points: 435, colorClass: 'ferrari-border' },
    { pos: '04', team: 'Mercedes', points: 348, colorClass: 'mercedes-border' },
    { pos: '05', team: 'Aston Martin', points: 82, colorClass: 'aston-border' },
    { pos: '06', team: 'RB', points: 34, colorClass: 'rb-border' }
  ]);

  constructor() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'] || 'fahrer';
      this.activeTab.set(tab);
    });
  }
}
