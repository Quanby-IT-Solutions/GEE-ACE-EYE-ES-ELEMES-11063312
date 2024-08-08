import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBankComponent } from './test-bank.component';

const routes: Routes = [{path: '', component: TestBankComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestBankRoutingModule { }
