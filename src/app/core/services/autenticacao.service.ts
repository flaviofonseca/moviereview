import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieReviewAbstractService } from './movie-review-abstract.service';
import { SnackBarService } from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })
export class AutenticacaoService extends MovieReviewAbstractService {

  constructor(
    private httpClient: HttpClient,
    private snackBarService: SnackBarService
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
    return this.snackBarService;
  }

  autenticar(credenciais) {
    return this.post('', { dados: credenciais, dispararMensagemError: false });
  }
}
