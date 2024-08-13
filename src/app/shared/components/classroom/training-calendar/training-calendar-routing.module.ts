import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingCalendarComponent } from './training-calendar.component';

  const routes: Routes = [{path: '', component: TrainingCalendarComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingCalendarRoutingModule { }
