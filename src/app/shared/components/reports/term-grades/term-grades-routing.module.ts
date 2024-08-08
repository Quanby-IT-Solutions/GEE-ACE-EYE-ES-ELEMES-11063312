import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermGradesComponent } from './term-grades.component';

const routes: Routes = [{path: '', component: TermGradesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermGradesRoutingModule { }
