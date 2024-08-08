import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningModulesComponent } from './learning-modules.component';

const routes: Routes = [{path: '', component: LearningModulesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningModulesRoutingModule { }
