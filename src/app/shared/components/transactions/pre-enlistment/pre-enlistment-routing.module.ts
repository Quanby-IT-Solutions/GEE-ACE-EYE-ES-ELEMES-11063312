import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreEnlistmentComponent } from './pre-enlistment.component';

const routes: Routes = [{path: '', component: PreEnlistmentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreEnlistmentRoutingModule { }
