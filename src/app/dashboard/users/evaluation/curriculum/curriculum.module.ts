import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumComponent } from './curriculum.component';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { DataService } from 'src/app/shared/service/data/data.service';


@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ],
  providers: [
    DataService
  ],
  exports: [
    CurriculumComponent
  ]
})
export class CurriculumModule { }




