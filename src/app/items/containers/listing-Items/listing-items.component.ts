import { Component, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-listing-items',
  template: `
    <app-items [items]="items"></app-items>
  `,
  styles: []
})
export class ListingItemsContainerComponent implements OnInit {
  public items: ListingItem[] = [];

  constructor(private route: ActivatedRoute, private ui: UiService) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['items']),
        tap(items => this.metaData(items)),
      )
      .subscribe(res => this.items = res);
  }

  metaData(items: ListingItem[]) {
    this.ui.setMetaData({
      title: 'Items',
      description: `Check out our collection of ${items.length} items`
    });
  }
}
