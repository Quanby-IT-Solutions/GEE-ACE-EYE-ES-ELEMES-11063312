import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassModulesComponent } from './class-modules.component';

const routes: Routes = [{path: '', component: ClassModulesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassModulesRoutingModule { }
