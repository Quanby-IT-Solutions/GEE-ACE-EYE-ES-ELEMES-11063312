import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GwaComponent } from './gwa.component';

const routes: Routes = [{path: '', component: GwaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GwaRoutingModule { }
