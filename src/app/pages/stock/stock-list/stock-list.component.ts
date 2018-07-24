import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/breadcrumb.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  model: any = {
    onColor: 'primary',
    offColor: 'secondary',
    onText: 'On',
    offText: 'Off',
    disabled: false,
    size: 'sm',
    value: true
  };

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('ESTOQUE');
  }

}
