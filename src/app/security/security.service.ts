import { Injectable } from '@angular/core';
import { SecurityUserModel } from './security-user.model';

const USUARIO_LOGADO = 'USUARIO_LOGADO';

@Injectable({ providedIn: 'root' })
export class SecurityService {

  constructor() { }

  adicionarUsuarioLogado(user) {
    sessionStorage.setItem(USUARIO_LOGADO, JSON.stringify(user));
  }

  obterUsuarioLogado(): SecurityUserModel {
    return JSON.parse(sessionStorage.getItem(USUARIO_LOGADO));
  }
}
