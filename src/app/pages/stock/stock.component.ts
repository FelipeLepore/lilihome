import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('ESTOQUE');
  }

}
