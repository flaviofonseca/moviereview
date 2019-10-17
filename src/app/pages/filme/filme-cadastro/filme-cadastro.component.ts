import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmeService } from 'src/app/core/services/filme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/services';
@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.component.html',
  styleUrls: ['./filme-cadastro.component.scss']
})
export class FilmeCadastroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private mensagemService: SnackBarService
  ) {
    this.criarFormulario();
    this.extrairParametros();
  }

  extrairParametros() {
    this.router.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.consultarFilme(params.id);
      });

    // Forma que retorna um valor como objeto
    // this.router.queryParamMap
    //   .subscribe(params => {
    //     console.log(`cadastro parammap ${JSON.stringify(params)}`);
    //   });
  }

  tituloPagina = () => {
    const id = this.formGroup.get('id').value;
    return `${id ? 'Edição do filme ' + id : 'Cadastro de filme'}`;
  }

  private consultarFilme(id) {
    this.filmeService.consultarFilme(id)
      // setValue funciona desde de que todas as
      // propriedades que estao vindo  no retorno
      // existam no formulario
      .subscribe(result => this.formGroup.setValue(result));
  }

  private criarFormulario() {
    this.formGroup = this.fb.group({
      id: [],
      tituloFilme: [null, Validators.required],
      linkImagem: [null, Validators.required],
      duracaoFilme: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(999)
      ])
    });
  }

  ngOnInit() {
  }

  novoFilme() {
    this.formGroup.reset();
  }

  salvarFilme() {
    const filme = this.formGroup.getRawValue();

    if (filme.id) {
      this.filmeService.editarFilme(this.formGroup.getRawValue())
        .subscribe(() => {
          this.mensagemService.showMensagemSucesso('Salvo com sucesso!!!');
        });
    } else {
      this.filmeService.salvarFilme(this.formGroup.getRawValue())
        .subscribe(() => {
          this.mensagemService.showMensagemSucesso('Salvo com sucesso!!!');
        });
    }

  }

}
