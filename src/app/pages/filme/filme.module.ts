import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilmeCadastroComponent } from './filme-cadastro/filme-cadastro.component';
import { FilmeListagemComponent } from './filme-listagem/filme-listagem.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: FilmeListagemComponent,
  },
  {
    path: 'edicao',
    component: FilmeCadastroComponent
  }
];

@NgModule({
  declarations: [
    FilmeListagemComponent,
    FilmeCadastroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmeModule { }
