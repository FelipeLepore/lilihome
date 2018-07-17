import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  title: Subject<string>;
  detail: Subject<string>;
  constructor() {
    this.title = new Subject<string>();
    this.detail = new Subject<string>();
   }
}
