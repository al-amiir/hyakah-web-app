import { ProductListInterface } from './Interfaces/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  products: ProductListInterface[] = [];
  formWidth: string = '0vw';

  add(value: any): void {
    this.products.unshift(value);
  }
  edit(id: number, cost: number, quantity: number): void {
    // First get current values
    let currentAvgCost =
      this.products[id].cost === null ? 0 : this.products[id].cost;
    let currentAvgQuantity =
      this.products[id].quantity === null ? 0 : this.products[id].quantity;

    // Second change the cost with the required equation
    this.products[id].cost =
      (currentAvgCost * currentAvgQuantity + cost) /
      (currentAvgQuantity + quantity);

    // Third change the quantity
    this.products[id].quantity = quantity;

    console.log(this.products[id]);
  }
  changeFormWidth(value: string): void {
    this.formWidth = value;
  }
}
