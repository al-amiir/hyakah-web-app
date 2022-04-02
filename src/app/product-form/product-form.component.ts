import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  disabledButton = {
    color: '#c4c4c4',
    border: '#c4c4c4',
    cursor: 'not-allowed',
  };
  ableButton = {
    color: 'white',
    backgroundColor: '#ef7139',
    border: ' 2px solid #ef7139',
    cursor: 'pointer',
  };

  formValues = {
    name: '',
    images: '',
    price: '',
    cost: null,
    quantity: null,
  };
  constructor(public productListService: ProductsListService) {}

  ngOnInit(): void {}
  resetFromValues(): void {
    this.formValues = {
      name: '',
      images: '',
      price: '',
      cost: null,
      quantity: null,
    };
  }
  onSubmit(): void {
    // FAKE IMAGE URL , REMOVE LATER
    this.formValues.images =
      'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-products-sustainable-living-flaticons-lineal-color-flat-icons.png';
    //
    this.productListService.addNewProduct(this.formValues);
    this.resetFromValues();
    this.productListService.changeFormWidth('0vw');
  }
  cancel(): void {
    this.productListService.changeFormWidth('0vw');
  }
}
