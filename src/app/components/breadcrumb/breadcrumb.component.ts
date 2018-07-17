import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'breadcrumb-component',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  title;
  detail;
  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.subscribe(next => {
      this.title = next;
    });
    this.breadCrumb.detail.subscribe(next => {
      this.detail = next;
    });
  }

}
