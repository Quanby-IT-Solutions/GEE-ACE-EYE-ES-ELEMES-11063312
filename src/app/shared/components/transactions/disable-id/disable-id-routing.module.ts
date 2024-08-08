import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisableIdComponent } from './disable-id.component';

const routes: Routes = [{path: '', component: DisableIdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisableIdRoutingModule { }
