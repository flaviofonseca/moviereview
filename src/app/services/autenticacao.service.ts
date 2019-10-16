import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { MensagemService } from '../shared/services';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient,
    private mensagemService: MensagemService
  ) {
    super();
  }

  getRecurso(): string {
    return '/auth';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  getMensagemService() {
    return this.mensagemService;
  }

  autenticar(credenciais) {
    return this.post('', { dados: credenciais });
  }
}
