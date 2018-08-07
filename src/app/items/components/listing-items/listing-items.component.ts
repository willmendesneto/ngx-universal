import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';

@Component({
  selector: 'app-items',
  template: `
    <section class="home-page-wrapper is-1-column">
      <h1 class="home-page-heading">Category name</h1>
      <ul class="item-list">
        <li class="col-md-6 col-lg-4 mb-3" *ngFor="let item of items">
          <app-item [item]="item" [details]="false"></app-item>
        </li>
      </ul>
    </section>
  `,
  styles: [`
  @import '/assets/_include-media.scss';

  .item-list {
    display: flex;
    position: relative;
    width: 90%;
    list-style: none;
    padding: 0;
  }

  .item-list-item {
    background: #eee;
    margin: 10px;
    padding: 0;
    width: 100%;

    @include media('>=tablet') {
      width: 250px;
      min-height: 350px;
    }
  }

  .item-list-link {
    text-decoration: none;
  }

  .item-list-image {
    width: 250px;
    background: red;
  }

  .item-list-info {
    margin: 10px;
    padding: 10px;
  }

  `]
})
export class ListingItemsComponent implements OnInit {
  @Input() public items: ListingItem[];
  constructor() { }

  ngOnInit() {
  }

}
