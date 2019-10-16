import { Component, OnInit, Input } from '@angular/core';
import { DialogAvaliacaoFilmeService } from '../../avaliacao-filme/dialog-avaliacao-filme/dialog-avaliacao-filme.service';
import { NotaFilmeService } from 'src/app/services/nota-filme.service';

@Component({
  selector: 'app-item-timeline',
  templateUrl: './item-timeline.component.html',
  styleUrls: ['./item-timeline.component.scss']
})
export class ItemTimelineComponent implements OnInit {

  @Input() item;

  avaliacoes = [];
  constructor(
    private dialogAvaliacaoService: DialogAvaliacaoFilmeService,
    private notaFilmeService: NotaFilmeService
  ) { }

  ngOnInit() {
    this.buscarComentarios();
  }

  buscarComentarios() {
    this.notaFilmeService.consultarAvaliacoes(this.item.codigoFilme)
      .subscribe(result => {
        console.table(result);
        this.avaliacoes = result;
      });
  }

  avaliarFilme(filme) {
    this.dialogAvaliacaoService.openDialogAvaliacaoFilme(filme);
  }


}
