import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEnrollmentComponent } from './login-enrollment.component';

const routes: Routes = [{path:'',component:LoginEnrollmentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEnrollmentRoutingModule { }
  