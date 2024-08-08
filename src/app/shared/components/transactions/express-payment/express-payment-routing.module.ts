import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressPaymentComponent } from './express-payment.component';

const routes: Routes = [{path: '', component: ExpressPaymentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressPaymentRoutingModule { }
