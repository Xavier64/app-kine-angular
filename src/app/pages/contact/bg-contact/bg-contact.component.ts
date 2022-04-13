import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-contact',
  templateUrl: './bg-contact.component.html',
  styleUrls: ['./bg-contact.component.scss']
})
export class BgContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkNotifications= "notifications"
  linkContact = "contact"
}
