import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export interface MensagemData {
  mensagem: string;
  tipoMensagem: string;
}

@Component({
  selector: 'app-snack-bar-mensagem',
  templateUrl: './snack-bar-mensagem.component.html',
  styleUrls: ['./snack-bar-mensagem.component.scss']
})
export class SnackBarMensagemComponent implements OnInit {

  constructor(
    private dialog: MatSnackBarRef<SnackBarMensagemComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: MensagemData
  ) { }

  ngOnInit() {
  }

  confirmVisualizacao() {
    this.dialog.dismiss();
  }

}
