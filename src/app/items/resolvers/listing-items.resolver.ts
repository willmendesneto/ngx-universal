import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ListingItem } from '../models/product';
import { ListingItemService } from '../services/items.service';

@Injectable({
  providedIn: 'root',
})
export class ListingItemsResolver implements Resolve<ListingItem[]> {
  constructor(private service: ListingItemService) {}

  resolve() {
    return this.service.getListingItems();
  }
}
