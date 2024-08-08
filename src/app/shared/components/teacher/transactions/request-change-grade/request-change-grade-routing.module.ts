import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestChangeGradeComponent } from './request-change-grade.component';

const routes: Routes = [{path: '', component: RequestChangeGradeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestChangeGradeRoutingModule { }
