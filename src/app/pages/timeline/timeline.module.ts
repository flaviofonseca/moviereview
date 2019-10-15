import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { Routes, RouterModule } from '@angular/router';
import { ColorMediaNotaDirective } from './components/color-media-nota.directive';
import { NotaMediaPipe } from './components/nota-media.pipe';
import { MatButtonModule } from '@angular/material/button';
import { AvaliacaoFilmeModule } from '../avaliacao-filme/avaliacao-filme.module';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent
  }
];

@NgModule({
  declarations: [
    TimelineComponent,
    ColorMediaNotaDirective,
    NotaMediaPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AvaliacaoFilmeModule,
    RouterModule.forChild(routes)
  ]
})
export class TimelineModule { }
