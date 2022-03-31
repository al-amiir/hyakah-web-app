import { ProductListInterface } from './Interfaces/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  products: ProductListInterface[] = [];
  formWidth: string = '0vw';
  quantityFormWidth: string = '0vw';
  selectedProductId: number = 0;

  addNewProduct(value: any): void {
    this.products.unshift(value);
  }

  editSelectedProductId(value: number): void {
    this.selectedProductId = value;
  }

  editProduct(id: number, cost: number, quantity: number): void {
    // First get current values
    let currentAvgCost =
      this.products[id].cost === null ? 0 : this.products[id].cost;
    let currentQuantity =
      this.products[id].quantity === null ? 0 : this.products[id].quantity;

    // Second change the cost with the required equation
    this.products[id].cost =
      (currentAvgCost * currentQuantity + cost) / (currentQuantity + quantity);

    // Third change the quantity
    this.products[id].quantity = quantity + currentQuantity;

    console.log(this.products[id]);
  }

  changeFormWidth(value: string): void {
    this.formWidth = value;
  }
  changeQuantityFormWidth(value: string): void {
    this.quantityFormWidth = value;
  }
}
