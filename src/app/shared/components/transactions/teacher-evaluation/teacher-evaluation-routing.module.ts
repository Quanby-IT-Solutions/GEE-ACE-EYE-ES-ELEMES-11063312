import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherEvaluationComponent } from './teacher-evaluation.component';

const routes: Routes = [{path: '', component: TeacherEvaluationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherEvaluationRoutingModule { }
