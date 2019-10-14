import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  collapsed = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sidenavChange() {
    this.collapsed = !this.collapsed;
  }

  logoutApp() {
    this.router.navigate(['/']);
  }
}
