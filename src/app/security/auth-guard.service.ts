import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { SecurityService } from './security.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: SecurityService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.obterUsuarioLogado();
    if (currentUser) {
      return true;
    }

    // Nao logado redireciona para o login com a URL atual
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
