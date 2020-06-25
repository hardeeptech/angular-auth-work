import { Component, OnInit } from '@angular/core';
import { JsService } from '../shared/js/js.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private js: JsService) { }

  ngOnInit(): void {
    this.js.callJsClass()
  }

}
