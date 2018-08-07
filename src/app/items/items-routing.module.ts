import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingItemsContainerComponent } from './containers/listing-items/listing-items.component';
import { ListingItemDetailContainerComponent } from './containers/listing-item/listing-item.component';
import { ListingItemsResolver } from './resolvers/listing-items.resolver';
import { ListingItemResolver } from './resolvers/listing-item.resolver';

const routes: Routes = [{
  path: '',
  component: ListingItemsContainerComponent,
  resolve: { products: ListingItemsResolver },
}, {
  path: ':id',
  component: ListingItemDetailContainerComponent,
  resolve: { product: ListingItemResolver },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
