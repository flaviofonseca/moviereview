import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FilmeService } from 'src/app/services/filme.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NotificacaoService } from '../../layout/notificacao/notificacao.service';

@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.component.html',
  styleUrls: ['./filme-cadastro.component.scss']
})
export class FilmeCadastroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private notificacaoService: NotificacaoService
  ) {
    this.criarFormulario();
  }

  private criarFormulario() {
    this.formGroup = this.fb.group({
      tituloFilme: [null, Validators.required],
      linkImagem: [null, Validators.required],
      duracaoFilme: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ])
    });
  }

  ngOnInit() {
  }

  novoFilme() {
    this.formGroup.reset();
  }

  salvarFilme() {
    this.filmeService.salvarFilme(this.formGroup.getRawValue())
      .subscribe(() => {
        console.log('Salvo com sucesso');
        this.notificacaoService.showAlertInfo('Salvo com sucesso!!!');
      });
  }

}
