import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAvaliacaoFilmeComponent } from './dialog-avaliacao-filme/dialog-avaliacao-filme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DialogAvaliacaoFilmeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [DialogAvaliacaoFilmeComponent]
})
export class AvaliacaoFilmeModule { }
