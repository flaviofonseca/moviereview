import { AbstractService } from './abstract.service';
import { environment } from 'src/environments/environment';

export abstract class MovieReviewAbstractService extends AbstractService {

  getBaseURL() {
    return environment.BASE_URL;
  }

  dispararLoading() {
  }

  removerLoading() {
  }
}
