import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatementAccountsComponent } from './statement-accounts.component';

const routes: Routes = [{path: '', component: StatementAccountsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementAccountsRoutingModule { }
