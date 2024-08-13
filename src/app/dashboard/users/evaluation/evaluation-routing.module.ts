import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationComponent } from './evaluation.component';

const routes: Routes = [
  { path: '', component: EvaluationComponent },
  { 
    path: 'form-evalution', 
    loadChildren: () => import('./form-evalution/form-evalution.module').then(m => m.FormEvalutionModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
