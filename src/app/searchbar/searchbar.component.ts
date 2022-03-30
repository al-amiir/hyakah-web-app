import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  constructor(public productList: ProductsListService) {}

  ngOnInit(): void {}

  addButton() {}
}
