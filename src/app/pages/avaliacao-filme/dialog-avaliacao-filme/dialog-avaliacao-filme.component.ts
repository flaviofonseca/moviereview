import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotaFilmeService } from 'src/app/core/services/nota-filme.service';
import { AvaliacaoFilme } from '../avaliacao-filme.model';
import { MensagemService } from 'src/app/shared/services';

export interface AvaliacaoFilmeData {
  codigoFilme: number;
  tituloFilme: string;
}

@Component({
  selector: 'app-dialog-avaliacao-filme',
  templateUrl: './dialog-avaliacao-filme.component.html',
  styleUrls: ['./dialog-avaliacao-filme.component.scss'],
  providers: [NotaFilmeService]
})
export class DialogAvaliacaoFilmeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAvaliacaoFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AvaliacaoFilmeData,
    private fb: FormBuilder,
    private notaFilmeService: NotaFilmeService,
    private mensagemService: MensagemService
  ) {
    this.criarFormulario();
  }

  ngOnInit() {
  }

  criarFormulario() {
    this.formGroup = this.fb.group({
      comentario: [],
      notaFilme: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)])
    });
  }

  avaliarFilme() {
    const avaliacao: AvaliacaoFilme = this.formGroup.getRawValue();
    avaliacao.codigoFilme = this.data.codigoFilme;

    this.notaFilmeService.avaliarFilme(avaliacao)
      .subscribe(
        () => {
          this.mensagemService.showMensagemSucesso('Avaliação realizada!!!');
          this.fecharDialog();
        },
        () => this.fecharDialog()
      );
  }

  fecharDialog() {
    this.dialogRef.close();
  }

}
