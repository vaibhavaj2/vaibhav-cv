import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-progress-bar',
  templateUrl: './skills-progress-bar.component.html',
  styleUrls: ['./skills-progress-bar.component.css']
})
export class SkillsProgressBarComponent implements OnInit {

  @Input() skillsList!: { skill: string, value: number }[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
