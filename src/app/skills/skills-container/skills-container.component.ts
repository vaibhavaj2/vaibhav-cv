import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css']
})
export class SkillsContainerComponent implements OnInit {

  skillList1 = [
    { skill: "Java", value: 95 },
    { skill: "AWS", value: 90 },
    { skill: "Angular", value: 80 },
    { skill: "Digital solution architecture", value: 95 },
    { skill: "Cloud solutions", value: 95 }
  ];

  skillList2 = [
    { skill: "Java", value: 95 },
    { skill: "AWS", value: 90 },
    { skill: "Angular", value: 80 },
    { skill: "Digital solution architecture", value: 95 },
    { skill: "Cloud solutions", value: 95 }
  ];

  skillList3 = [
    { skill: "Java", value: 95 },
    { skill: "AWS", value: 90 },
    { skill: "Angular", value: 80 },
    { skill: "Digital solution architecture", value: 95 },
    { skill: "Cloud solutions", value: 95 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
