import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InOutMonitoringComponent } from './in-out-monitoring.component';

const routes: Routes = [{path: '', component: InOutMonitoringComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InOutMonitoringRoutingModule { }
