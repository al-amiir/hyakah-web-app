import { Component, Input, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
})
export class DashboardContentComponent implements OnInit {
  @Input() prod: any;
  @Input() i: any;

  height: string = '0px';
  rotate: string = 'rotateZ(0deg)';
  speedometerRotation: string = 'translate(-50%, -50%) rotateZ(-123deg)';
  profitMargin?: number;

  constructor(public productList: ProductsListService) {}

  ngOnInit(): void {
    this.calculateProfitMargin();
  }

  addMoreQuantity(value: number): void {
    this.productList.changeQuantityFormWidth('100vw');
    this.productList.editSelectedProductId(value);
  }
  toggle(e: any): void {
    if (e.target.localName !== 'img') {
      if (this.height === '0px') {
        this.height = '113px';
        this.rotate = 'rotateZ(180deg)';
      } else {
        this.height = '0px';
        this.rotate = 'rotateZ(0deg)';
      }
    } else if (e.target.localName === 'img') {
      if (this.height === '113px') {
        this.height = '0px';
        this.rotate = 'rotateZ(0deg)';
      }
    }
    this.calculateProfitMargin();
  }

  calculateProfitMargin(): void {
    if (this.prod.cost >= this.prod.price) {
      this.profitMargin = 0;
      this.speedometerRotation = `translate(-50%, -50%) rotateZ(${this.getRandomArbitrary(
        -122,
        -76
      )}deg)`;
      console.log(`red ${this.profitMargin}`);
    } else {
      this.profitMargin =
        ((this.prod.price - this.prod.cost) / this.prod.price) * 100;
      if (this.profitMargin > 0 && this.profitMargin <= 30) {
        this.speedometerRotation = `translate(-50%, -50%) rotateZ(${this.getRandomArbitrary(
          -60,
          58
        )}deg)`;
        console.log(`yellow ${this.profitMargin}`);
      } else {
        this.speedometerRotation = `translate(-50%, -50%) rotateZ(${this.getRandomArbitrary(
          59,
          122
        )}deg)`;
        console.log(`green ${this.profitMargin}`);
      }
    }
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
