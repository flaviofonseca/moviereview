import { Component } from '@angular/core';
import { RotasService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviereview';

  constructor(private rotasService: RotasService) {

  }
}
