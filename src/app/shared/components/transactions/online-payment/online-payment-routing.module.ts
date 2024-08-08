import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlinePaymentComponent } from './online-payment.component';

const routes: Routes = [{path: '' , component: OnlinePaymentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlinePaymentRoutingModule { }
