import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalGradesComponent } from './final-grades.component';

const routes: Routes = [{path: '', component: FinalGradesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalGradesRoutingModule { }
