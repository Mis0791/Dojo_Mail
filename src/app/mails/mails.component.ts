import { Component, OnInit } from '@angular/core';
import { Email } from './../email';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {
  emails:Array<object>

  constructor() {
    this.emails = [];
    this.emails.push(new Email('yourwife@email.com', false, 'your dog is dead', 'thats it hes dead. What do you want for dinner?'))
    this.emails.push(new Email('michi@email.com', true, 'go to store', 'I need a bunch of things from the store.'))
    this.emails.push(new Email('nichole@email.com', true, 'kitty is sick', 'Take her to the vet!!!'))
    this.emails.push(new Email('mom@email.com', false, 'shopping', 'I need help finding a dress for a party this weekend.'))    
   }

  ngOnInit() {
  }

}
