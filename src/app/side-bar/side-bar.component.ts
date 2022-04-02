import { Component, OnInit } from '@angular/core';
import { SideBArLinksInterface } from './../Interfaces/interface';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  logoLink: SideBArLinksInterface = {
    icon: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-royal-flowers-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
    name: 'Hyakah Store',
    link: '',
  };
  sideBArLinks: SideBArLinksInterface[] = [
    {
      icon: 'https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/15/ffffff/external-dashboard-user-interface-tanah-basah-detailed-outline-tanah-basah.png',
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      icon: 'https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/15/ffffff/external-graph-user-interface-kmg-design-basic-outline-kmg-design.png',
      name: 'Sales',
      link: '/sales',
    },
    {
      icon: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/15/ffffff/external-wallet-business-kiranshastry-lineal-kiranshastry-3.png',
      name: 'Expenses',
      link: '/expenses',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
