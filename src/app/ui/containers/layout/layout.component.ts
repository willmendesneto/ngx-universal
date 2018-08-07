import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <section class="home-page-wrapper is-1-column">
      <router-outlet></router-outlet>
    </section>
    <app-footer></app-footer>
  `,
  styles: []
})
export class LayoutContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
