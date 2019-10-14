import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavChange = new EventEmitter();
  @Output() logoutApp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sidenavChangeEvent() {
    this.sidenavChange.emit();
  }

  logoutAppEvent() {
    this.logoutApp.emit();
  }
}
