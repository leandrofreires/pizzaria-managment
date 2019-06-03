import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'products',
      component: ProductsComponent
    }, {
      path: 'about',
      component: AboutComponent
    }, {
      path: '',
      component: IndexComponent
    }, {
      path: '**', component: NotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
