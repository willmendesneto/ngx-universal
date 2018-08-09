import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="home-page-header">
    <a routerLink="/" class="header-logo">
      <img [attr.src]="logo" [attr.alt]="title" width="30" height="30">
      {{title}}
    </a>
    <div class="home-page-menu">
      <div class="home-page-menu-item">
        <a class="nav-item nav-link" *ngFor="let link of links"
          [routerLink]="link.url" routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }">
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>

  <section class="first-section">
    <div className="first-section-wrapper">
      <h1 class="first-section-title">
      {{ title }}
      </h1>
    </div>
  </section>
  `,
  styleUrls: ['./header.scss'],
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Store';
  public links = [{
    label: 'Items',
    url: '/items',
  }];
  constructor() { }

  ngOnInit() {
  }

}
