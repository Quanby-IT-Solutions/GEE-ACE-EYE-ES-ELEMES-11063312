import { TeacherRoutingModule } from './teacher-routing.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { DataService } from 'src/app/shared/service/data/data.service';

@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule

  ],
  providers: [
    DataService
  ],
  exports: [
    TeacherComponent
  ]
})
export class TeacherModule { }
