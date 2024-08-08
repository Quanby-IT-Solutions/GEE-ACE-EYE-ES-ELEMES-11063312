import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAttendanceComponent } from './class-attendance.component';

const routes: Routes = [{path: '' , component: ClassAttendanceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassAttendanceRoutingModule { }
