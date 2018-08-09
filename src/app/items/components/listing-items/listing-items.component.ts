import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';

@Component({
  selector: 'app-items',
  template: `
    <section class="home-page-wrapper is-1-column">
      <h1 class="home-page-heading">Category name</h1>
      <ul class="item-list">
        <li class="item-list-item" *ngFor="let item of items">
          <app-item [item]="item" [details]="false"></app-item>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./listing-items.scss'],
})
export class ListingItemsComponent implements OnInit {
  @Input() public items: ListingItem[];
  constructor() { }

  ngOnInit() {
  }

}
