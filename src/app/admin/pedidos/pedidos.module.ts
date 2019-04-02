import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class PedidosModule { }
