import { ProductListInterface } from './Interfaces/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  products: ProductListInterface[] = [];
  formWidth: string = '0vw';

  add(value: any): void {
    this.products.push(value);
  }

  changeFormWidth(value: string): void {
    this.formWidth = value;
  }
}
