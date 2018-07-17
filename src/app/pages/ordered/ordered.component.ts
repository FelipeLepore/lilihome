import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.scss']
})
export class OrderedComponent implements OnInit {

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('PEDIDOS');
  }

}
