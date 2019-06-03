import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IndexModule } from './index/index.module';
import { ProductsModule } from './products/products.module';
import { AboutModule } from './about/about.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [PagesComponent,],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IndexModule,
    ProductsModule,
    AboutModule,
    NotFoundModule
  ]
})
export class PagesModule { }
