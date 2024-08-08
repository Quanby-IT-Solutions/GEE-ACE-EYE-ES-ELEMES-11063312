import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCoursesComponent } from './card-courses.component';

const routes: Routes = [{path: '', component: CardCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardCoursesRoutingModule { }
