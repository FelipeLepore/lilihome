import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../shared/breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private breadCrumb: BreadcrumbService) { }

  ngOnInit() {
    this.breadCrumb.title.next('');
  }

}
