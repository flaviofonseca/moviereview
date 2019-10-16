import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarMensagemComponent } from './snack-bar-mensagem.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SnackBarMensagemComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatSnackBarModule,
    SnackBarMensagemComponent
  ],
  entryComponents: [
    SnackBarMensagemComponent
  ]
})
export class SnackBarMensagemModule { }
