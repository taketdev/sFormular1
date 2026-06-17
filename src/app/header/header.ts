import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);

  isStandingsPage(): boolean {
    return this.router.url.includes('/champstanding');
  }

  isTeamsTab(): boolean {
    return this.router.url.includes('tab=teams');
  }
}
