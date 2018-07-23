import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/breadcrumb.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.scss']
})
export class OrderedListComponent implements OnInit {

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('PEDIDOS');
  }

}
