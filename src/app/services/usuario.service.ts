import { Injectable } from '@angular/core';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from '../shared/services';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient,
    private mensagemService: MensagemService
  ) { super(); }

  getMensagemService() {
    return this.mensagemService;
  }

  getRecurso(): string {
    return '/usuario';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  criarNovoUsuario(usuario) {
    return this.post('', { dados: usuario });
  }
}
