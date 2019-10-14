import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInvalido = false;
  credenciais: any = {};

  constructor(
    private autenticacaoService: AutenticacaoService,
    private securityService: SecurityService,
    private router: Router
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

  private autenticarResult(result: any) {
    this.securityService.adicionarUsuarioLogado(result);
    this.router.navigate(['/pages']);
  }

  private autenticarFault(error: any) {
    console.log(`erorr ${error}`);
    if (error.status === 401) {
      this.loginInvalido = true;
      setTimeout(() => this.loginInvalido = false, 5000);
    }
  }
}
