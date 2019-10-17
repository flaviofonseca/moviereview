import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SecurityService } from 'src/app/core/security/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavChange = new EventEmitter();
  @Output() logoutApp = new EventEmitter();

  usuarioLogado;

  constructor(
    private security: SecurityService
  ) {
    this.usuarioLogado = security.obterUsuarioLogado();
  }

  ngOnInit() {
  }

  sidenavChangeEvent() {
    this.sidenavChange.emit();
  }

  logoutAppEvent() {
    this.logoutApp.emit();
  }
}
