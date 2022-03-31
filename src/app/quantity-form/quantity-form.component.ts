import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrls: ['./quantity-form.component.scss'],
})
export class QuantityFormComponent implements OnInit {
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

  quantityFormValues = {
    cost: null,
    quantity: null,
  };
  constructor(public productListService: ProductsListService) {}

  ngOnInit(): void {}
  resetFromValues(): void {
    this.quantityFormValues = {
      cost: null,
      quantity: null,
    };
  }
  onSubmit(): void {
    // this.productListService.add(this.quantityFormValues);
    this.productListService.editProduct(
      this.productListService.selectedProductId,
      this.quantityFormValues.quantity || 0,
      this.quantityFormValues.cost || 0
    );
    this.resetFromValues();
    this.productListService.changeQuantityFormWidth('0vw');
  }
  cancel(): void {
    this.productListService.changeQuantityFormWidth('0vw');
  }
}
