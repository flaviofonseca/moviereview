import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from './notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss']
})
export class NotificacaoComponent implements OnInit {

  constructor(
    public notificacaoService: NotificacaoService
  ) { }

  ngOnInit() {
  }

  fechar(index) {
    this.notificacaoService.listaNotificacoes.splice(index, 1);
  }

}
