import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOnlineTasksComponent } from './check-online-tasks.component';

const routes: Routes = [{path: '', component: CheckOnlineTasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckOnlineTasksRoutingModule { }
