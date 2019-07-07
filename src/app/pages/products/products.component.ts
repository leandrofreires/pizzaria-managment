import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  pizzas: number[];
  inicio = 1;
  constructor() {
    this.pizzas  = Array(25).fill(1).map((x, i) => i);
    console.log(this.pizzas);
   }

  ngOnInit() {
  }

}
