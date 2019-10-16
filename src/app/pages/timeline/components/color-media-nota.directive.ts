import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorMediaNota]'
})
export class ColorMediaNotaDirective {

  @Input('appColorMediaNota') set mediaNotaFilma(v) {
    this.alterarCor(v);
  }

  constructor(private el: ElementRef) {

  }

  private alterarCor(mediaNotaFilma) {
    let color = '';
    if (mediaNotaFilma > 7) {
      // color = '../../../../assets/greenStar.png';
      color = 'green';
    } else if (mediaNotaFilma < 4) {
      // color = '../../../../assets/redStar.png';
      color = 'red';
    } else {
      // color = '../../../../assets/yellowStar.png';
      color = 'yellow';
    }
    this.el.nativeElement.style.backgroundColor = color;
  }
}
