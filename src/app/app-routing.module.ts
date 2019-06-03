import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
}, {
  path: '',
  loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
