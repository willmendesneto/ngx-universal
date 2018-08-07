import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutContainerComponent } from './ui/containers/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutContainerComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/items'
  }, {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule'
  }],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
