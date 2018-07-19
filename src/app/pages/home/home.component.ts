import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tableMock = [
    { purchase: 123456789, date: '27/09/2018', status: 'EM TRÂNSITO', price: 'R$10.665,75' },
    { purchase: 123456789, date: '27/09/2018', status: 'EM TRÂNSITO', price: 'R$10.665,75' },
    { purchase: 123456789, date: '27/09/2018', status: 'EM TRÂNSITO', price: 'R$10.665,75' },
    { purchase: 123456789, date: '27/09/2018', status: 'EM TRÂNSITO', price: 'R$10.665,75' },
    { purchase: 123456789, date: '27/09/2018', status: 'EM TRÂNSITO', price: 'R$10.665,75' }
  ]

  productsListMock = [
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' },
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' },
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' },
    { image: 'http://marcheartdevie.com.br/shop/6102-large_default/CADEIRA-MACCHIATO.jpg', name: 'Vienna Convertible Chaise Lounge', price: 'R$13.419,99' }
  ]

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('');
  }

}
