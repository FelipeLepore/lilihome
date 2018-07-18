import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() showExportBtn: boolean = false;
  @Input() showFilters: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
