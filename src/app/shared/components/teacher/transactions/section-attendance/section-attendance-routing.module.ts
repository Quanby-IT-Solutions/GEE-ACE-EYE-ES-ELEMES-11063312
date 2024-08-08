import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAttendanceComponent } from './section-attendance.component';

const routes: Routes = [{path: '', component: SectionAttendanceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionAttendanceRoutingModule { }
