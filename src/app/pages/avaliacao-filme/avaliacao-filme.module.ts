import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAvaliacaoFilmeComponent } from './dialog-avaliacao-filme/dialog-avaliacao-filme.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAvaliacaoFilmeService } from './dialog-avaliacao-filme/dialog-avaliacao-filme.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DialogAvaliacaoFilmeComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [DialogAvaliacaoFilmeService],
  entryComponents: [DialogAvaliacaoFilmeComponent],
  exports: [
    DialogAvaliacaoFilmeComponent
  ]
})
export class AvaliacaoFilmeModule { }
