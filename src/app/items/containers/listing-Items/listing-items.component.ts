import { Component, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-listing-items',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ListingItemsContainerComponent implements OnInit {
  public products: ListingItem[] = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['products']),
        tap(products => this.metaData(products)),
      )
      .subscribe(res => this.products = res);
  }

  metaData(products: ListingItem[]) {
    this.ui.setMetaData({
      title: 'Items',
      description: `Check out our collection of ${products.length} products`
    });
  }
}
