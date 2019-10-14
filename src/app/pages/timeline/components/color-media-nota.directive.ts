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
      color = 'green';
    } else if (mediaNotaFilma < 4) {
      color = 'red';
    } else {
      color = 'yellow';
    }
    this.el.nativeElement.style.backgroundColor = color;
  }
}
