import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './../../../shared/breadcrumb.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  productsListMock = [
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' },
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' },
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' }
  ]

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('Nº 123456789');
  }

}
