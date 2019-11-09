import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dates: string[] = ['January','February', 'March','April', 'May', 'June', 'July', 'August', 'September','October','November','December'];

  constructor() {}

}
