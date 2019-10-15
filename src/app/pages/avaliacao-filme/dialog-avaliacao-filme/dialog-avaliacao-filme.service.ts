import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAvaliacaoFilmeComponent } from './dialog-avaliacao-filme.component';
import { Subject } from 'rxjs';

@Injectable()
export class DialogAvaliacaoFilmeService {

  constructor(
    private dialog: MatDialog
  ) { }

  openDialogAvaliacaoFilme() {
    const return$ = new Subject();

    const options = {};
    const dialogRef = this.dialog.open(DialogAvaliacaoFilmeComponent, options);
    dialogRef.afterOpened().subscribe(() => {
      return$.next(dialogRef.componentInstance);
    });

    return return$;
  }
}