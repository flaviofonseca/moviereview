import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud-formulario',
  templateUrl: './crud-formulario.component.html',
  styleUrls: ['./crud-formulario.component.scss']
})
export class CrudFormularioComponent implements OnInit {

  @Input() titulo;

  @Input() desabilitarBotaoSalvar = false;

  @Output() salvarEvent = new EventEmitter();

  @Output() novoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    this.salvarEvent.emit();
  }

  novo() {
    this.novoEvent.emit();
  }
}
