import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Skills',
        icon: 'pi pi-fw pi-desktop',
      },
      {
        label: 'Education',
        icon: 'pi pi-fw pi-book',
      },
      {
        label: 'Experience',
        icon: 'pi pi-fw pi-briefcase'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-tablet'
      },
      {
        label: 'Certifications',
        icon: 'pi pi-fw pi-id-card'
      },
      {
        label: 'Interests',
        icon: 'pi pi-fw pi-images'
      },
      {
        label: 'Contact Me',
        icon: 'pi pi-fw pi-envelope'
      }
    ];
  }

}
