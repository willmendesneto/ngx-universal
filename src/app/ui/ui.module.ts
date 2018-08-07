import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LayoutContainerComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
