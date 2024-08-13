
import { TasksRoutingModule } from './tasks-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskViewComponent } from 'src/app/shared/components/classroom/task-view/task-view.component';


@NgModule({
  declarations: [
    TasksComponent,
    
  ],
  imports: [
    CommonModule,
    TaskViewComponent,
    FormsModule,
    TasksRoutingModule

  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
