import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() value!: number;
  @Input() label!: string;
  @Input() skill!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
