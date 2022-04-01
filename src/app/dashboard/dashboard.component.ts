import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public productList: ProductsListService) {}
  ngOnInit(): void {}
}
