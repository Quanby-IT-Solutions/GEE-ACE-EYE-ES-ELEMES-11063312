import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumEvaluationComponent } from './curriculum-evaluation.component';

const routes: Routes = [{path: '', component: CurriculumEvaluationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumEvaluationRoutingModule { }
