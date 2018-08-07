import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';

@Component({
  selector: 'app-products',
  template: `
    <section class="home-page-wrapper is-1-column">
      <h1 class="home-page-heading">Category name</h1>
      <ul class="product-list">
        <li class="col-md-6 col-lg-4 mb-3" *ngFor="let product of products">
          <app-product [product]="product" [details]="false"></app-product>
        </li>
      </ul>
    </section>
  `,
  styles: [`
  @import '/assets/_include-media.scss';

  .product-list {
    display: flex;
    position: relative;
    width: 90%;
    list-style: none;
    padding: 0;
  }

  .product-list-item {
    background: #eee;
    margin: 10px;
    padding: 0;
    width: 100%;

    @include media('>=tablet') {
      width: 250px;
      min-height: 350px;
    }
  }

  .product-list-link {
    text-decoration: none;
  }

  .product-list-image {
    width: 250px;
    background: red;
  }

  .product-list-info {
    margin: 10px;
    padding: 10px;
  }

  `]
})
export class ListingItemsComponent implements OnInit {
  @Input() public products: ListingItem[];
  constructor() { }

  ngOnInit() {
  }

}
