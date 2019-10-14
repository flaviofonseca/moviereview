import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  listaNotificacoes = [];

  constructor() { }

  showAlertInfo(mensagem) {
    this.listaNotificacoes.push({
      mensagem,
      type: 'alert-info'
    });
  }
}
