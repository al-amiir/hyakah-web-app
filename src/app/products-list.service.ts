import { ProductListInterface } from './Interfaces/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  products: ProductListInterface[] = [];
  constructor() {}
  add(value: any): void {
    this.products.push(value);
  }
}
