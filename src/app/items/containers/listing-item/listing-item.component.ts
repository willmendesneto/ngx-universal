import { Component, OnInit } from '@angular/core';
import { ListingItem } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-listing-item',
  template: `
    <app-item [item]="item" [details]="true"></app-item>
  `,
  styles: []
})
export class ListingItemDetailContainerComponent implements OnInit {
  public item: ListingItem = new ListingItem();

  constructor(
    private route: ActivatedRoute,
    private ui: UiService,
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['item']),
        tap(item => this.metaData(item)),
      )
      .subscribe(res => this.item = res);
  }

  metaData(item: ListingItem) {
    this.ui.setMetaData({
      title: item.title,
      description: item.description,
      image: item.image,
    });
  }
}
