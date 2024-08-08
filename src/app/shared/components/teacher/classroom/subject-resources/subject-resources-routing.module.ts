import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectResourcesComponent } from './subject-resources.component';

const routes: Routes = [{path: '', component: SubjectResourcesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectResourcesRoutingModule { }
