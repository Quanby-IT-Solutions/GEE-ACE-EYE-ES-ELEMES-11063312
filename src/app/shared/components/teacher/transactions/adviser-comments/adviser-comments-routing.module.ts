import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviserCommentsComponent } from './adviser-comments.component';

const routes: Routes = [{path: '', component:AdviserCommentsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserCommentsRoutingModule { }
