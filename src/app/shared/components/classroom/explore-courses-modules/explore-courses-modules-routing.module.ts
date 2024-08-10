import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreCoursesModulesComponent } from './explore-courses-modules.component';

const routes: Routes = [{path: '', component: ExploreCoursesModulesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreCoursesModulesRoutingModule { }
