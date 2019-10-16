import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorMediaNota]'
})
export class ColorMediaNotaDirective {

  @Input('appColorMediaNota') set mediaNotaFilma(v) {
    this.alterarCor(v);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  private alterarCor(mediaNotaFilma) {
    let color = '';
    if (mediaNotaFilma > 7) {
      // color = '../../../../assets/greenStar.png';
      color = '#0bde0b';
    } else if (mediaNotaFilma < 4) {
      // color = '../../../../assets/redStar.png';
      color = 'red';
    } else {
      // color = '../../../../assets/yellowStar.png';
      color = 'yellow';
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
