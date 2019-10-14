import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotificacaoComponent } from './layout/notificacao/notificacao.component';


@NgModule({
  declarations: [PagesComponent, SidenavComponent, HeaderComponent, NotificacaoComponent],
  imports: [
    CommonModule,
    ClarityModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
