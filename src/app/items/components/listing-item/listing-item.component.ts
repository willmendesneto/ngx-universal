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
        <a [routerLink]="item.id" class="item-list-link">{{item.title}}</a>
      </ng-template>

      <div class="item-list-info">
        <img [attr.src]="item.image" [attr.alt]="item.title" class="item-list-image">
        <div class="item-list-info" *ngIf="details">
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./listing-item.scss'],
})
export class ListingItemComponent implements OnInit {
  @Input() public item: ListingItem;
  @Input() public details: boolean;
  constructor() { }

  ngOnInit() {
  }

}
