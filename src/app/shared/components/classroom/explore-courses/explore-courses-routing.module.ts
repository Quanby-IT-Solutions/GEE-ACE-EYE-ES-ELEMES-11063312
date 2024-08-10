import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreCoursesComponent } from './explore-courses.component';

const routes: Routes = [{path: '', component: ExploreCoursesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreCoursesRoutingModule { }
