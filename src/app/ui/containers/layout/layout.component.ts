import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class LayoutContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
