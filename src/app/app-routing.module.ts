// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/service/guards/auth.guard'; // Import AuthGuard
import { InstructorSpeechlabComponent } from './shared/components/instructor/instructor-speechlab/instructor-speechlab.component';

const routes: Routes = [
  {
    // Root Path
    path: '',
    loadChildren: () =>
      import('./shared/components/components.module').then((m) => m.ComponentsModule)
  },

    

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./shared/components/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: 'instructor-speechlab', component: InstructorSpeechlabComponent
  },
  // Wildcard Path
  {
    path: '**',
    redirectTo: 'error/404',
  },
  {
    path: 'dashboard/enrollments/student-list',
    loadChildren: () => import('./dashboard/admin/enrollments/student-list/student-list.module').then(m => m.StudentListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
