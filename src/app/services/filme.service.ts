import { Injectable } from '@angular/core';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FilmeService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  getRecurso(): string {
    return '/filme';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  salvarFilme(filme) {
    return this.getHttpClient().post(this.url(''), filme);
  }

  consultarFilmes() {
    return this.get<any[]>('/consultarTodos');
  }
}
