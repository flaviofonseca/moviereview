import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarMensagemComponent } from './snack-bar-mensagem.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  INFO_MENSAGEM = 'snack-info';
  SUCESSO_MENSAGEM = 'snack-sucesso';
  ALERTA_MENSAGEM = 'snack-alerta';

  constructor(private snackBar: MatSnackBar) { }

  showMensagemInfo(mensagem) {
    this.disparaSnackBarMensagem(mensagem, this.INFO_MENSAGEM);
  }

  showMensagemSucesso(mensagem) {
    this.disparaSnackBarMensagem(mensagem, this.SUCESSO_MENSAGEM);
  }

  showMensagemAlerta(mensagem) {
    this.disparaSnackBarMensagem(mensagem, this.ALERTA_MENSAGEM);
  }

  private disparaSnackBarMensagem(mensagem: any, tipoMensagem) {
    this.snackBar.openFromComponent(SnackBarMensagemComponent, {
      duration: 3000,
      data: { mensagem, tipoMensagem },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [tipoMensagem]
    });
  }
}
