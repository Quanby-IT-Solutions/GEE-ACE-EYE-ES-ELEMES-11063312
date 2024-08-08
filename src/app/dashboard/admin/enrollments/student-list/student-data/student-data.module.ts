import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data.component';
import { StudentDataRoutingModule } from './student-data-routing.module';

@NgModule({
  declarations: [StudentDataComponent],
  imports: [
    CommonModule,
    StudentDataRoutingModule
  ]
})
export class StudentDataModule { }