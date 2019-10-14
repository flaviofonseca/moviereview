import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudFormularioComponent } from './crud-formulario/crud-formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CrudFormularioComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ], exports: [
    CrudFormularioComponent,

    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
