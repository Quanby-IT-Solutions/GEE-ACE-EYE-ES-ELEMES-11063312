import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./blog/blog.module').then((m) => m.BlogModule),
      // },

      {
        path: 'explore-courses',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/explore-courses/explore-courses.module'
          ).then((m) => m.ExploreCoursesModule),
      },

      {
        path: 'explore-courses',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/explore-courses/explore-courses.module'
          ).then((m) => m.ExploreCoursesModule),
      },

      {
        path: 'user-management',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/user-management/user-management.module'
          ).then((m) => m.UserManagementModule),
      },


      {
        path: 'manage-courses',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/manage-courses/manage-courses.module'
          ).then((m) => m.ManageCoursesModule),
      },


      {
        path: 'progress',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/progress/progress.module'
          ).then((m) => m.ProgressModule),
      },

      {
        path: 'training-calendar',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/training-calendar/training-calendar.module'
          ).then((m) => m.TrainingCalendarModule),
      },
   


      {
        path: 'add-course',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/add-course/add-course.module'
          ).then((m) => m.AddCourseModule),
      },

      {
        path: 'messaging',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/messaging/messaging.module'
          ).then((m) => m.MessagingModule),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/profile/profile.module'
          ).then((m) => m.ProfileModule),
      },


       // new SIAS
      
       {
        path: 'subjects',
        loadChildren: () =>
          import('src/app/shared/components/classroom/subjects/subjects.module').then(
            (m) => m.SubjectsModule
          ),
      },

      {
        path: 'learning-module',
        loadChildren: () =>
          import('src/app/shared/components/classroom/learning-modules/learning-modules.module').then(
            (m) => m.LearningModulesModule
          ),
      },

      {
        path: 'online-tasks',
        loadChildren: () =>
          import('src/app/shared/components/classroom/online-tasks/online-tasks.module').then(
            (m) => m.OnlineTasksModule
          ),
      },


      {
        path: 'test-scores',
        loadChildren: () =>
          import('src/app/shared/components/classroom/test-scores/test-scores.module').then(
            (m) => m.TestScoresModule
          ),
      },

      {
        path: 'pre-enlistment',
        loadChildren: () =>
          import('src/app/shared/components/transactions/pre-enlistment/pre-enlistment.module').then(
            (m) => m.PreEnlistmentModule
          ),
      },

      {
        path: 'add-enroll',
        loadChildren: () =>
          import('src/app/shared/components/transactions/add-enroll/add-enroll.module').then(
            (m) => m.AddEnrollModule
          ),
      },

      {
        path: 'disable-id',
        loadChildren: () =>
          import('src/app/shared/components/transactions/disable-id/disable-id.module').then(
            (m) => m.DisableIdModule
          ),
      },

      {
        path: 'online-payment',
        loadChildren: () =>
          import('src/app/shared/components/transactions/online-payment/online-payment.module').then(
            (m) => m.OnlinePaymentModule
          ),
      },

      {
        path: 'teacher-evaluation',
        loadChildren: () =>
          import('src/app/shared/components/transactions/teacher-evaluation/teacher-evaluation.module').then(
            (m) => m.TeacherEvaluationModule
          ),
      },

      {
        path: 'express-payment',
        loadChildren: () =>
          import('src/app/shared/components/transactions/express-payment/express-payment.module').then(
            (m) => m.ExpressPaymentModule
          ),
      },

         // start reports

         {
          path: 'class-absences',
          loadChildren: () =>
            import('src/app/shared/components/reports/class-absences/class-absences.module').then(
              (m) => m.ClassAbsencesModule
            ),
        },
  
        {
          path: 'term-grades',
          loadChildren: () =>
            import('src/app/shared/components/reports/term-grades/term-grades.module').then(
              (m) => m.TermGradesModule
            ),
        },

        {
          path: 'in-out-monitoring',
          loadChildren: () =>
            import('src/app/shared/components/reports/in-out-monitoring/in-out-monitoring.module').then(
              (m) => m.InOutMonitoringModule
            ),
        },
  
        {
          path: 'final-grades',
          loadChildren: () =>
            import('src/app/shared/components/reports/final-grades/final-grades.module').then(
              (m) => m.FinalGradesModule
            ),
        },
  
          {
          path: 'gwa',
          loadChildren: () =>
            import('src/app/shared/components/reports/gwa/gwa.module').then(
              (m) => m.GwaModule
            ),
        },
  
        {
          path: 'curriculum-evaluation',
          loadChildren: () =>
            import('src/app/shared/components/reports/curriculum-evaluation/curriculum-evaluation.module').then(
              (m) => m.CurriculumEvaluationModule
            ),
        },
  
  
        {
          path: 'statement-accounts',
          loadChildren: () =>
            import('src/app/shared/components/reports/statement-accounts/statement-accounts.module').then(
              (m) => m.StatementAccountsModule
            ),
        },
  
        {
          path: 'purchases-report',
          loadChildren: () =>
            import('src/app/shared/components/reports/purchase-report/purchase-report.module').then(
              (m) => m.PurchaseReportModule
            ),
        },
  

        // start - teacher - classroom

        {
          path: 'subject-resources',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/subject-resources/subject-resources.module').then(
              (m) => m.SubjectResourcesModule
            ),
        },


        {
          path: 'teacher-tests',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/tests/tests.module').then(
              (m) => m.TestsModule
            ),
        },

        {
          path: 'test-bank',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/test-bank/test-bank.module').then(
              (m) => m.TestBankModule
            ),
        },

        {
          path: 'subject-modules',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/subject-modules/subject-modules.component').then(
              (m) => m.SubjectModulesComponent
            ),
        },

        {
          path: 'class-modules',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/class-modules/class-modules.component').then(
              (m) => m.ClassModulesComponent
            ),
        },

        {
          path: 'class-list',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/class-list/class-list.module').then(
              (m) => m.ClassListModule
            ),
        },

        {
          path: 'teacher-online-tasks',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/online-tasks/online-tasks.component').then(
              (m) => m.OnlineTasksComponent
            ),
        },

        {
          path: 'schedule-online-tasks',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/schedule-online-tasks/schedule-online-tasks.component').then(
              (m) => m.ScheduleOnlineTasksComponent
            ),
        },

        {
          path: 'check-online-tasks',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/check-online-tasks/check-online-tasks.component').then(
              (m) => m.CheckOnlineTasksComponent
            ),
        },

        // end - teacher - classroom
    // start - teacher - transactions

    {
      path: 'grading-sheet',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/grading-sheet/grading-sheet.module').then(
          (m) => m.GradingSheetModule
        ),
    },

    {
      path: 'class-attendance',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/class-attendance/class-attendance.module').then(
          (m) => m.ClassAttendanceModule
        ),
    },

    {
      path: 'section-attendance',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/section-attendance/section-attendance.module').then(
          (m) => m.SectionAttendanceModule
        ),
    },

    {
      path: 'override-attendance',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/override-attendance/override-attendance.module').then(
          (m) => m.OverrideAttendanceModule
        ),
    },

    {
      path: 'request-change-grade',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/request-change-grade/request-change-grade.module').then(
          (m) => m.RequestChangeGradeModule
        ),
    },

    {
      path: 'adviser-comments',
      loadChildren: () =>
        import('src/app/shared/components/teacher/transactions/adviser-comments/adviser-comments.module').then(
          (m) => m.AdviserCommentsModule
        ),
    },

    // end - teacher - transactions

    // start - teacher - reports


    {
      path: 'teacher-class-absences',
      loadChildren: () =>
        import('src/app/shared/components/teacher/reports/class-absences/class-absences.module').then(
          (m) => m.ClassAbsencesModule
        ),
    },

    {
      path: 'test-item-analysis',
      loadChildren: () =>
        import('src/app/shared/components/teacher/reports/test-item-analysis/test-item-analysis.module').then(
          (m) => m.TestItemAnalysisModule
        ),
    },

    {
      path: 'report-card',
      loadChildren: () =>
        import('src/app/shared/components/teacher/reports/report-card/report-card.module').then(
          (m) => m.ReportCardModule
        ),
    },

    {
      path: 'permanent-record',
      loadChildren: () =>
        import('src/app/shared/components/teacher/reports/permanent-record/permanent-record.module').then(
          (m) => m.PermanentRecordModule
        ),
    },

    {
      path: 'periodic-grades-listing',
      loadChildren: () =>
        import('src/app/shared/components/teacher/reports/periodic-grades-listing/periodic-grades-listing.module').then(
          (m) => m.PeriodicGradesListingModule
        ),
    },

    // end - teacher -reports 

      // end new SIAS

       
      {
        path: 'mentors',
        loadChildren: () =>
          import('src/app/dashboard/users/mentors/mentors.module').then(
            (m) => m.MentorsModule
          ),
      },
        

      {
        path: 'instructor',
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },

      {
        path: 'admission',
        loadChildren: () =>
          import('src/app/admission/admission.module').then(
            (m) => m.AdmissionModule
          ),
      },
      {
        path: 'enrollment',
        loadChildren: () =>
          import('src/app/enrollment/enrollment.module').then(
            (m) => m.EnrollmentModule
          ),
      },
      
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home-list/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
