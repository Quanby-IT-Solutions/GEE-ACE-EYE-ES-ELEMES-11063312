import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestItemAnalysisComponent } from './test-item-analysis.component';

const routes: Routes = [{path: '', component: TestItemAnalysisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestItemAnalysisRoutingModule { }
