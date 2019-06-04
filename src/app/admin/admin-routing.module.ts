import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'clientes',
    component: ClientesComponent
  }, {
    path: 'chat',
    component: ChatComponent
  }, {
    path: 'pedidos',
    component: PedidosComponent
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'prefix'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
