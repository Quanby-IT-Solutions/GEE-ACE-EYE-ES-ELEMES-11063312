import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicGradesListingComponent } from './periodic-grades-listing.component';

const routes: Routes = [{path: '', component: PeriodicGradesListingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicGradesListingRoutingModule { }
