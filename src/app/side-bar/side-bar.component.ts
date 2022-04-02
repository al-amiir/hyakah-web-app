import { Component, OnInit } from '@angular/core';
import { SideBArLinksInterface } from './../Interfaces/interface';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sidebarWidth = '200px';
  sidebarLeft = '-200px';
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
      icon: 'https://img.icons8.com/ios/16/ffffff/bank-card-front-side--v1.png',
      name: 'Expenses',
      link: '/expenses',
    },
    {
      icon: 'https://img.icons8.com/dotty/15/ffffff/warehouse--v1.png',
      name: 'Inventory',
      link: '/inventory',
    },
    {
      icon: 'https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/15/ffffff/external-accounting-accounting-smashingstocks-detailed-outline-smashing-stocks-11.png',
      name: 'Accounting',
      link: '/accounting',
    },
    {
      icon: 'https://img.icons8.com/ios/15/ffffff/document--v1.png',
      name: 'Documents',
      link: '/documents',
    },
    {
      icon: 'https://img.icons8.com/windows/15/ffffff/store-front.png',
      name: 'Store',
      link: '/store',
    },
  ];
  ngOnInit(): void {}
  expandSidebar(): void {
    if (window.innerWidth > 960) {
      this.sidebarLeft = '0px';
      this.sidebarWidth === '200px'
        ? (this.sidebarWidth = '0px')
        : (this.sidebarWidth = '200px');
    }
    if (window.innerWidth < 960) {
      this.sidebarWidth = '200px';
      this.sidebarLeft === '-200px'
        ? (this.sidebarLeft = '0px')
        : (this.sidebarLeft = '-200px');
    }
  }
}
