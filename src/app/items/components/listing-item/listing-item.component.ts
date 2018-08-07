import { Component, Input, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';

@Component({
  selector: 'app-item',
  template: `
    <div class="card">
      <ng-container *ngIf="details; else link">
        <h1 class="home-page-heading">{{item.title}}</h1>
      </ng-container>
      <ng-template #link>
        <a [routerLink]="item.id">{{item.title}}</a>
      </ng-template>

      <div class="item-list-info">
        <img [attr.src]="item.image" [attr.alt]="item.title" class="produc-list-image">
        <div class="card-body" *ngIf="details">
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
@import '/assets/_include-media';

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
export class ListingItemComponent implements OnInit {
  @Input() public item: ListingItem;
  @Input() public details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
