import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAbsencesComponent } from './class-absences.component';

const routes: Routes = [{path: '', component: ClassAbsencesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassAbsencesRoutingModule { }
