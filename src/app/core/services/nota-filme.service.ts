import { Injectable } from '@angular/core';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from '../../shared/services';

@Injectable()
export class NotaFilmeService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient,
    private mensagemService: MensagemService
  ) { super(); }

  getRecurso(): string {
    return '/notafilme';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  getMensagemService() {
    return this.mensagemService;
  }

  avaliarFilme(nota) {
    return this.post('', { dados: nota });
  }

  obterResumoNotasFilmes() {
    return this.get<any[]>('/resumoNotasFilmes');
  }

  consultarAvaliacoes(codigoFilme) {
    return this.get<any[]>('/consultarTodos', { dados: { codigoFilme } });
  }
}
