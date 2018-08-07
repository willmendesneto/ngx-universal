import { Component, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-listing-item',
  template: `
    <app-product [product]="product" [details]="true"></app-product>
  `,
  styles: []
})
export class ListingItemDetailContainerComponent implements OnInit {
  public product: ListingItem = new ListingItem();

  constructor(
    private route: ActivatedRoute,
    private ui: UiService,
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['product']),
        tap(product => this.metaData(product)),
      )
      .subscribe(res => this.product = res);
  }

  metaData(product: ListingItem) {
    this.ui.setMetaData({
      title: product.title,
      description: product.description,
      image: product.image,
    });
  }
}
