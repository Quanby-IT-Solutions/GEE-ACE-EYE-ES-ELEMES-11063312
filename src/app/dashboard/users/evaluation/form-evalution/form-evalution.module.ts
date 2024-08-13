import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormEvalutionComponent } from './form-evalution.component';

@NgModule({
  declarations: [FormEvalutionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormEvalutionComponent]
})
export class FormEvalutionModule { }
