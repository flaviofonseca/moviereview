import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAvaliacaoFilmeComponent } from './dialog-avaliacao-filme/dialog-avaliacao-filme.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAvaliacaoFilmeService } from './dialog-avaliacao-filme/dialog-avaliacao-filme.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DialogAvaliacaoFilmeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [DialogAvaliacaoFilmeService],
  entryComponents: [DialogAvaliacaoFilmeComponent],
  exports: [
    DialogAvaliacaoFilmeComponent
  ]
})
export class AvaliacaoFilmeModule { }
