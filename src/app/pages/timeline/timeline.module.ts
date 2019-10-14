import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { Routes, RouterModule } from '@angular/router';
import { ColorMediaNotaDirective } from './components/color-media-nota.directive';
import { NotaMediaPipe } from './components/nota-media.pipe';

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
    RouterModule.forChild(routes)
  ]
})
export class TimelineModule { }
