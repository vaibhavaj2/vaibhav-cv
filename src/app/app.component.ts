import { Component, OnInit } from '@angular/core';

declare let AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vaibhav-cv';

  ngOnInit(): void {
    AOS.init(); 
  }
}
