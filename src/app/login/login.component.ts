import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';
import { UsuarioService } from '../services/usuario.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  naoCadastrado = false;
  loginInvalido = false;
  credenciais: any = {};

  constructor(
    private autenticacaoService: AutenticacaoService,
    private securityService: SecurityService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  autenticar() {
    this.autenticacaoService.autenticar(this.credenciais)
      .subscribe(
        event => this.autenticarResult(event),
        error => this.autenticarFault(error)
      );
  }

  irParaFormularioNovoUsuario() {
    this.naoCadastrado = !this.naoCadastrado;
  }

  voltar() {
    this.naoCadastrado = !this.naoCadastrado;
  }

  criarNovoUsuario() {
    this.usuarioService.criarNovoUsuario(this.credenciais)
      // .pipe(
      //   finalize(() => this.voltar())
      // )
      .subscribe(
        () => {
          this.voltar();
        });
  }

  private autenticarResult(result: any) {
    this.securityService.adicionarUsuarioLogado(result);
    this.router.navigate(['/pages']);
  }

  private autenticarFault(error: any) {
    if (error.status === 401) {
      this.loginInvalido = true;
      setTimeout(() => this.loginInvalido = false, 5000);
    }
  }
}
