import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-avaliacao-filme',
  templateUrl: './dialog-avaliacao-filme.component.html',
  styleUrls: ['./dialog-avaliacao-filme.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DialogAvaliacaoFilmeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAvaliacaoFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.criarFormulario();
  }

  ngOnInit() {
  }

  criarFormulario() {
    this.formGroup = this.fb.group({
      comentario: [],
      notaFilme: [null, new FormControl([Validators.required, Validators.min(1), Validators.max(10)])]
    });
  }

}
