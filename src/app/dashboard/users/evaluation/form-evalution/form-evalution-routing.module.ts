import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEvalutionComponent } from './form-evalution.component';

const routes: Routes = [
  { path: '', component: FormEvalutionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormEvalutionRoutingModule { }
