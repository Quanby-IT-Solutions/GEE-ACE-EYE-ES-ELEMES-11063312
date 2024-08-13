import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectModulesRoutingModule } from './subject-modules-routing.module';
import { TaskViewComponent } from '../../../classroom/task-view/task-view.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubjectModulesRoutingModule,
    TaskViewComponent
  ]
})
export class SubjectModulesModule { }
