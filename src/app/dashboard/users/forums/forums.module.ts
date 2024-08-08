import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumsComponent } from './forums.component';
import { DataService } from 'src/app/shared/service/data/data.service';


@NgModule({
  declarations: [ForumsComponent],
  imports: [
    CommonModule,
    ForumsRoutingModule
  ],
  providers: [
    DataService
  ],
  exports: [
    ForumsComponent
  ]
})
export class ForumsModule { }
