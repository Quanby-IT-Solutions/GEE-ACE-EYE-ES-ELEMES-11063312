import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectModulesComponent } from './subject-modules.component';

const routes: Routes = [{path: '', component: SubjectModulesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectModulesRoutingModule { }
