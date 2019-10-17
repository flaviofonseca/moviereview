import { Injectable } from '@angular/core';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { HttpClient } from '@angular/common/http';
import { FilmeModel } from '../../pages/filme/filme-cadastro/filme.model';
import { SnackBarService } from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })
export class FilmeService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient,
    private mensagemService: SnackBarService
  ) {
    super();
  }

  getRecurso(): string {
    return '/filme';
  }

  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  getMensagemService() {
    return this.mensagemService;
  }

  salvarFilme(filme) {
    return this.post('', { dados: filme, dispararMensagemError: true });
  }

  editarFilme(filme: any) {
    return this.put('', { dados: filme, dispararMensagemError: true });
  }

  consultarFilmes() {
    return this.get<any[]>('/consultarTodos');
  }

  consultarFilme(codigo) {
    return this.get<FilmeModel>(`/consultar/${codigo}`);
  }
}
