import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  formWidth = '0vw';
  constructor(public productList: ProductsListService) {}

  ngOnInit(): void {}

  addButton(): void {
    // this.formWidth = `${100 + Math.random()}vw`;
    // this.formWidth = '100vw';
    // this.productList.console.log(this.formWidth);
    this.productList.changeFormWidth('100vw');
  }
}
