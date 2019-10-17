import { environment } from 'src/environments/environment';
import { AbstractService } from './abstract.service';

export abstract class MovieReviewAbstractService extends AbstractService {


  constructor(
  ) {
    super();
  }

  abstract getMensagemService();

  getBaseURL() {
    return environment.BASE_URL;
  }

  dispararLoading() {
  }

  removerLoading() {
  }

  disparaMensagemErro(mensagemErro) {
    this.getMensagemService().showMensagemAlerta(mensagemErro);
  }
}
