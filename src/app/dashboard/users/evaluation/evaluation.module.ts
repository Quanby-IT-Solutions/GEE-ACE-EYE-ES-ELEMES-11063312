import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationComponent } from './evaluation.component';

@NgModule({
  declarations: [
    EvaluationComponent  // Declare the component here
  ],
  imports: [
    CommonModule,
    FormsModule,  // Import FormsModule for ngModel and ngValue usage
    EvaluationRoutingModule
  ],
  exports: [
    EvaluationComponent
  ]
})
export class EvaluationModule { }
