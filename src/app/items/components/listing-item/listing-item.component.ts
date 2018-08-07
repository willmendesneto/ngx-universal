import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="card">
      <ng-container *ngIf="details; else link">
        <h1 class="home-page-heading">{{product.title}}</h1>
      </ng-container>
      <ng-template #link>
        <a [routerLink]="product.id">{{product.title}}</a>
      </ng-template>

      <div class="product-list-info">
        <img [attr.src]="product.image" [attr.alt]="product.title" class="produc-list-image">
        <div class="card-body" *ngIf="details">
          <p>{{product.description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
@import '/assets/_include-media';

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
export class ListingItemComponent implements OnInit {
  @Input() public product: ListingItem;
  @Input() public details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
