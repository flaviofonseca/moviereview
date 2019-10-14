import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() collapsed = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor() { }

  alterouCollapsed(event) {
    this.collapsed = event;
    this.collapsedChange.emit(event);
  }

  ngOnInit() {
  }

}
