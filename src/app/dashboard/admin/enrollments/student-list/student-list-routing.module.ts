import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    children: [
      {
        path: 'student-data/:studentId',
        loadChildren: () =>
          import('./student-data/student-data.module').then(
            (m) => m.StudentDataModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentListRoutingModule { }