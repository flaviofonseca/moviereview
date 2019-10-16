import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RotasService } from '../services';

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

  constructor(
    private router: Router,
    private rotasService: RotasService

  ) { }

  ngOnInit() {
  }

  salvar() {
    this.salvarEvent.emit();
  }

  novo() {
    this.novoEvent.emit();
  }

  retorneParaPaginaAnterior() {
    this.router.navigate([this.rotasService.getPreviousUrl()]);
  }
}
