import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ListingItem } from '../models/product';
import { ListingItemService } from '../services/items.service';

@Injectable({
  providedIn: 'root',
})
export class ListingItemResolver implements Resolve<ListingItem> {
  constructor(private service: ListingItemService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getListingItem(route.paramMap.get('id'));
  }
}
