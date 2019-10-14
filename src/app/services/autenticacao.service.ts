import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieReviewAbstractService } from './movie-review-abstract.service';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  getRecurso(): string {
    return '/auth';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  autenticar(credenciais) {
    return this.post('', { dados: credenciais });
  }
}
