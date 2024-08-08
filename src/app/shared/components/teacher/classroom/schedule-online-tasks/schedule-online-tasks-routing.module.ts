import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleOnlineTasksComponent } from './schedule-online-tasks.component';

const routes: Routes = [{path: '', component: ScheduleOnlineTasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleOnlineTasksRoutingModule { }
