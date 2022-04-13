import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  date : Date 

  constructor() {
    this.date= new Date ();
   }

  ngOnInit(): void {
    
  }

}