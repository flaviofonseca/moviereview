import { Injectable } from '@angular/core';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotaFilmeService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient
  ) { super(); }

  getRecurso(): string {
    return '/notafilme';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  avaliarFilme(nota) {
    return this.post('', { dados: nota });
  }

  obterResumoNotasFilmes() {
    return this.get<any[]>('/resumoNotasFilmes');
  }
}
