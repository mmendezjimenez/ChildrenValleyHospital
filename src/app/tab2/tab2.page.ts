import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'] 
})
export class Tab2Page {

  messages = [
    {
      user: 'Doctor',
      createdAt: 15554090856000,
      msg: ' Hello, dear patient?'
    },
    {
      user: 'Patient',
      createdAt: 155540900956000,
      msg: ' I dont feel so good?'
    },
    {
      user: 'Doctor',
      createdAt: 15540910560000,
      msg: ' Make sure to complete exams?'
    }
  ]
  currentUser = 'Doctor'
  newMsg = '';
  //@ViewChild(IonContent) content: IonContent;
  constructor() {}
  sendMessage(){
    this.messages.push({
      user: 'Doctor', 
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(()=>{
      this.content.scrollToBottom(200);
    })
  }

}
