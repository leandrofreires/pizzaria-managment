import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatListModule,
  MatRippleModule,
  MatGridListModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class SharedModule { }
