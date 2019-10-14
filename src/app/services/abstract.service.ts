import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';

export interface ObjetoParametro {
  dados?: any;
  exibirLoading?: boolean;
  dispararMensagemError?: boolean;
  enviarComoQueryString?: boolean;
  tituloMensagemError?: string;
}

export abstract class AbstractService {

  abstract getBaseURL(): string;

  abstract getRecurso(): string;

  abstract getHttpClient(): HttpClient;

  abstract dispararLoading();

  abstract removerLoading();

  url(servico) {
    return `${this.getBaseURL()}${this.getRecurso()}${servico}`;
  }

  get<T>(servico: string, param: ObjetoParametro = this.newInstanceObjetoParametro()): Observable<T> {

    if (param.exibirLoading) {
      this.dispararLoading();
    }

    return this.getHttpClient().get<T>(this.url(servico), { params: param.dados })
      .pipe(
        take(1),
        finalize(() => param.exibirLoading ? this.removerLoading() : null),
        catchError(error => this.tratarErro(error, param.dispararMensagemError, param.tituloMensagemError))
      );
  }

  post<T>(servico: string, param: ObjetoParametro = this.newInstanceObjetoParametro()): Observable<T> {

    if (param.exibirLoading) {
      this.dispararLoading();
    }

    const corpo = param.enviarComoQueryString ? {} : param.dados;
    const params = param.enviarComoQueryString ? param.dados : {};

    return this.getHttpClient().post<T>(this.url(servico), corpo, { params })
      .pipe(
        take(1),
        finalize(() => param.exibirLoading ? this.removerLoading() : null),
        catchError(error => this.tratarErro(error, param.dispararMensagemError, param.tituloMensagemError))
      );
  }

  protected tratarErro(resposta: Response | any, dispararMensagemError: boolean, tituloMensagemError = '') {
    if (dispararMensagemError) {
      const bodyError = resposta ? resposta.error : null;

      if (bodyError && bodyError.hasOwnProperty('statusCode')) {
        const responseError: any = bodyError;
        if (responseError.erros) {
          const error = responseError.error;
          // this.getMensagensService().exibaToastAlerta(error.message);
        }
      } else {
        let mensagemDeErro: string;
        const body: any = resposta.error || '';
        const err = body.error || JSON.stringify(body);
        mensagemDeErro = `${resposta.status} - ${resposta.statusText || ''} ${err}`;
      }
    }

    return throwError(resposta);
  }

  newInstanceObjetoParametro() {
    return {
      dados: null,
      exibirLoading: true,
      dispararMensagemError: true,
      enviarComoQueryString: false,
      tituloMensagemError: ''
    };
  }

}

