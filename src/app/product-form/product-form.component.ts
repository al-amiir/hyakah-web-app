import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
import { ProductListInterface } from '../Interfaces/interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  formValues = {
    name: '',
    images: '',
    price: '',
    cost: '',
    quantity: '',
  };
  constructor(private sendFromValues: ProductsListService) {}

  ngOnInit(): void {}
  resetFromValues(): void {
    this.formValues = {
      name: '',
      images: '',
      price: '',
      cost: '',
      quantity: '',
    };
  }
  onSubmit(): void {
    this.sendFromValues.add(this.formValues);
    this.resetFromValues();
  }
  cancel(): void {
    this.resetFromValues();
  }
}
