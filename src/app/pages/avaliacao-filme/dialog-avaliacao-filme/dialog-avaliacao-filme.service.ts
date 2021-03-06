import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAvaliacaoFilmeComponent } from './dialog-avaliacao-filme.component';
import { Subject } from 'rxjs';

@Injectable()
export class DialogAvaliacaoFilmeService {

  teste;
  constructor(
    public dialog: MatDialog
  ) { }

  openDialogAvaliacaoFilme(filme) {
    const return$ = new Subject();

    const options = {
      width: '600px',
      data: {
        codigoFilme: filme.codigoFilme,
        tituloFilme: filme.tituloFilme
      }
    };
    const dialogRef = this.dialog.open(DialogAvaliacaoFilmeComponent, options);
    dialogRef.afterOpened().subscribe(() => {
      return$.next(dialogRef.componentInstance);
    });

    return return$;
  }
}
