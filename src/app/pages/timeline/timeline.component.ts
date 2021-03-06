import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotaFilmeService } from 'src/app/core/services/nota-filme.service';
import { Subscription, interval } from 'rxjs';
import { take, switchMap, map, finalize } from 'rxjs/operators';
import { DialogAvaliacaoFilmeService } from '../avaliacao-filme/dialog-avaliacao-filme/dialog-avaliacao-filme.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [NotaFilmeService]
})
export class TimelineComponent implements OnInit, OnDestroy {

  atualizandoDados = false;
  ultimaVerificacao = new Date();

  listaAvaliacoes = [];
  resumoNotasFilmes$: Subscription;

  constructor(
    private dialogAvaliacaoService: DialogAvaliacaoFilmeService,
    private notaFilmeService: NotaFilmeService
  ) { }

  ngOnInit() {
    this.carregarResumoNotasFilmes()
      .subscribe(result => {
        this.carregarResumoNotasFilmesResult(result);
        this.iniciarVeririficacao();
      });
  }

  ngOnDestroy(): void {
    if (this.resumoNotasFilmes$) {
      this.resumoNotasFilmes$.unsubscribe();
    }

    this.dialogAvaliacaoService.dialog.closeAll();
  }

  carregarResumoNotasFilmes() {
    return this.notaFilmeService.obterResumoNotasFilmes();
  }

  iniciarVeririficacao() {
    const $ = interval(30000)
      .pipe(
        map(() => this.atualizandoDados = true),
        switchMap(() => this.carregarResumoNotasFilmes())
      );

    this.resumoNotasFilmes$ = $.subscribe(
      arg => this.carregarResumoNotasFilmesResult(arg),
      err => this.atualizandoDados = false
    );
  }

  carregarResumoNotasFilmesResult(event) {
    this.atualizandoDados = false;
    this.listaAvaliacoes = event;

    this.ultimaVerificacao = new Date();
  }

}
