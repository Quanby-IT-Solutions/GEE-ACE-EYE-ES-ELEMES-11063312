import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnrollComponent } from './add-enroll.component';

const routes: Routes = [{path: '', component: AddEnrollComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEnrollRoutingModule { }
