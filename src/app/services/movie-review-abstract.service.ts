import { AbstractService } from './abstract.service';
import { environment } from 'src/environments/environment';
import { MensagemService } from '../shared/services';

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
