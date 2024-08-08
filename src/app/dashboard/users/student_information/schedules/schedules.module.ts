import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesComponent } from './schedules.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { DataService } from 'src/app/shared/service/data/data.service';


@NgModule({
  declarations: [SchedulesComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ],
  providers: [
    DataService
  ],
  exports: [
    SchedulesComponent
  ]
})
export class SchedulesModule { }
