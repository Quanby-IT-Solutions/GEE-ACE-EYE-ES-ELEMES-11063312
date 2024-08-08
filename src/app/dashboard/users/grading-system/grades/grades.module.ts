import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { GradesRoutingModule } from './grades-routing.module';
import { DataService } from 'src/app/shared/service/data/data.service';


@NgModule({
  declarations: [GradesComponent],
  imports: [
    CommonModule,
    GradesRoutingModule
  ],
  providers: [
    DataService
  ],
  exports: [
    GradesComponent
  ]
})
export class GradesModule { }



