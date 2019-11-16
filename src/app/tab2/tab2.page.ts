import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'] 
})
export class Tab2Page {

  messages = [
    {
      user: 'Doctor Professor Of Medicine',
      createdAt: 15554090856000,
      msg: 'Hey whats up dog?'
    },
    {
      user: 'max',
      createdAt: 155540900956000,
      msg: 'I dont feel no good?'
    },
    {
      user: 'Doctor Professor Of Medicine',
      createdAt: 15540910560000,
      msg: 'Are you dead?'
    }
  ]
  constructor() {}
  sendMessage(){
    
  }

}
