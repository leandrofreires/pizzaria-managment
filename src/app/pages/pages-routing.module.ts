import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'products',
      loadChildren: () => import('./products/products.module').then(module => module.ProductsModule)
    }, {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(module => module.AboutModule)
    }, {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule)
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
