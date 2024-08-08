import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradingSheetComponent } from './grading-sheet.component';

const routes: Routes = [{path: '', component: GradingSheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradingSheetRoutingModule { }
