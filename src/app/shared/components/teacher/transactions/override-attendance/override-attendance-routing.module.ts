import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverrideAttendanceComponent } from './override-attendance.component';

const routes: Routes = [{path: '' , component: OverrideAttendanceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverrideAttendanceRoutingModule { }
