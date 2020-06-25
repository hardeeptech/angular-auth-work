import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class JsService {

  constructor() { }

  callJsClass(){
    $.getScript("../../../assets/js/demo/chart-area-demo.js", function () {
    });  
    $.getScript("../../../assets/js/demo/chart-bar-demo.js", function () {
    });  
    $.getScript("../../../assets/js/demo/chart-pie-demo.js", function () {
    });  
  }
}
