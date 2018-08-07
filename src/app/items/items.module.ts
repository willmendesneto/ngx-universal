import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ListingItemsContainerComponent } from './containers/listing-items/listing-items.component';
import { ListingItemDetailContainerComponent } from './containers/listing-item/listing-item.component';
import { ListingItemsComponent } from './components/listing-items/listing-items.component';
import { ListingItemComponent } from './components/listing-item/listing-item.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [ListingItemsContainerComponent, ListingItemDetailContainerComponent, ListingItemsComponent, ListingItemComponent]
})
export class ItemsModule { }
