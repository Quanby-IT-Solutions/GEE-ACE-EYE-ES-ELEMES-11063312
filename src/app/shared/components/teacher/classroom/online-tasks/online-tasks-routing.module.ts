import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTasksComponent } from './online-tasks.component';

const routes: Routes = [{path: '', component: OnlineTasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTasksRoutingModule { }
