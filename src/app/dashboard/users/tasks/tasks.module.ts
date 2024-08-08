
import { TasksRoutingModule } from './tasks-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule

  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
