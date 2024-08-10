// src/app/dashboard/dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/service/guards/auth.guard';
import { HelpModule } from '../shared/components/classroom/help/help.module';
import { SupportModule } from '../shared/components/pages/support/support.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      //teacher

      {
        path: 'forums',
        loadChildren: () =>
          import('src/app/dashboard/users/forums/forums.module').then(
            (m) => m.ForumsModule
          ),
      },

      // new SIAS

      {
        path: 'subjects',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/subjects/subjects.module'
          ).then((m) => m.SubjectsModule),
      },

      {
        path: 'learning-module',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/learning-modules/learning-modules.module'
          ).then((m) => m.LearningModulesModule),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/profile/profile.module'
          ).then((m) => m.ProfileModule),
      },

      {
        path: 'messaging',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/messaging/messaging.module'
          ).then((m) => m.MessagingModule),
      },

      {
        path: 'online-tasks',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/online-tasks/online-tasks.module'
          ).then((m) => m.OnlineTasksModule),
      },

      {
        path: 'test-scores',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/test-scores/test-scores.module'
          ).then((m) => m.TestScoresModule),
      },

      {
        path: 'test-scores',
        loadChildren: () =>
          import(
            'src/app/shared/components/classroom/test-scores/test-scores.module'
          ).then((m) => m.TestScoresModule),
      },

      {
        path: 'pre-enlistment',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/pre-enlistment/pre-enlistment.module'
          ).then((m) => m.PreEnlistmentModule),
      },

      {
        path: 'add-enroll',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/add-enroll/add-enroll.module'
          ).then((m) => m.AddEnrollModule),
      },

      {
        path: 'disable-id',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/disable-id/disable-id.module'
          ).then((m) => m.DisableIdModule),
      },

      {
        path: 'teacher-evaluation',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/teacher-evaluation/teacher-evaluation.module'
          ).then((m) => m.TeacherEvaluationModule),
      },

      {
        path: 'online-payment',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/online-payment/online-payment.module'
          ).then((m) => m.OnlinePaymentModule),
      },

      {
        path: 'express-payment',
        loadChildren: () =>
          import(
            'src/app/shared/components/transactions/express-payment/express-payment.module'
          ).then((m) => m.ExpressPaymentModule),
      },

      // start reports

      {
        path: 'class-absences',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/class-absences/class-absences.module'
          ).then((m) => m.ClassAbsencesModule),
      },

      {
        path: 'term-grades',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/term-grades/term-grades.module'
          ).then((m) => m.TermGradesModule),
      },

      {
        path: 'in-out-monitoring',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/in-out-monitoring/in-out-monitoring.module'
          ).then((m) => m.InOutMonitoringModule),
      },

      {
        path: 'final-grades',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/final-grades/final-grades.module'
          ).then((m) => m.FinalGradesModule),
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
          import(
            'src/app/shared/components/reports/curriculum-evaluation/curriculum-evaluation.module'
          ).then((m) => m.CurriculumEvaluationModule),
      },

      {
        path: 'statement-accounts',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/statement-accounts/statement-accounts.module'
          ).then((m) => m.StatementAccountsModule),
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
          path: 'tests',
          loadChildren: () =>
            import('src/app/shared/components/reports/purchase-report/purchase-report.module').then(
              (m) => m.PurchaseReportModule
            ),
        },
  
  
        // end reports

      {
        path: 'purchases-report',
        loadChildren: () =>
          import(
            'src/app/shared/components/reports/purchase-report/purchase-report.module'
          ).then((m) => m.PurchaseReportModule),
      },

      // end reports

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
            import('src/app/shared/components/teacher/classroom/subject-modules/subject-modules.module').then(
              (m) => m.SubjectModulesModule
            ),
        },

        {
          path: 'class-modules',
          loadChildren: () =>
            import('src/app/shared/components/teacher/classroom/class-modules/class-modules.module').then(
              (m) => m.ClassModulesModule
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

    {
      path: 'help',
      loadChildren: () =>
        import('src/app/shared/components/classroom/help/help.component').then(
          (m) => HelpModule
        ),
    },
    {
      path: 'support',
      loadChildren: () =>
        import('src/app/shared/components/pages/support/support.component').then(
          (m) => SupportModule
        ),
    },
      // end new SIAS

      {
        path: 'assessments',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/assessments/assessments.module'
          ).then((m) => m.AssessmentsModule),
      },

      {
        path: 'meet',
        loadChildren: () =>
          import('src/app/dashboard/users/meet/meet.module').then(
            (m) => m.MeetModule
          ),
      },

      {
        path: 'attendance',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/attendance/attendance.module'
          ).then((m) => m.AttendanceModule),
      },

      {
        path: 'clearance',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/clearance/clearance.module'
          ).then((m) => m.ClearanceModule),
      },

      {
        path: 'document-management',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/document-management/document-management.module'
          ).then((m) => m.DocumentManagementModule),
      },

      {
        path: 'kiosk',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/kiosk/kiosk.module'
          ).then((m) => m.KioskModule),
      },

      {
        path: 'queuing',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/queuing/queuing.module'
          ).then((m) => m.QueuingModule),
      },

      {
        path: 'schedules',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/schedules/schedules.module'
          ).then((m) => m.SchedulesModule),
      },

      {
        path: 'scholarships',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/student_information/scholarships/scholarships.module'
          ).then((m) => m.ScholarshipsModule),
      },

      {
        path: 'class-records',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/class-records/class-records.module'
          ).then((m) => m.ClassRecordsModule),
      },

      {
        path: 'grades',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/grades/grades.module'
          ).then((m) => m.GradesModule),
      },

      {
        path: 'report-generation',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/grading-system/report-generation/report-generation.module'
          ).then((m) => m.ReportGenerationModule),
      },

      {
        path: 'absences',
        loadChildren: () =>
          import('src/app/dashboard/users/absences/absences.module').then(
            (m) => m.AbsencesModule
          ),
      },

      {
        path: 'calendar',
        loadChildren: () =>
          import('src/app/dashboard/users/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },

      {
        path: 'notification',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/notification/notification.module'
          ).then((m) => m.NotificationModule),
      },

      {
        path: 'curriculum',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/evaluation/curriculum/curriculum.module'
          ).then((m) => m.CurriculumModule),
      },

      {
        path: 'teacher',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/evaluation/teacher/teacher.module'
          ).then((m) => m.TeacherModule),
      },

      {
        path: 'cls',
        loadChildren: () =>
          import('src/app/dashboard/users/classes/classes.module').then(
            (m) => m.ClassesModule
          ),
      },

      {
        path: 'c',
        loadChildren: () =>
          import('src/app/dashboard/users/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },

      {
        path: 'c/details',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/courses/course-details/course-details.module'
          ).then((m) => m.CourseDetailsModule),
      },
      {
        path: 'c/details/modules',
        loadChildren: () =>
          import('src/app/dashboard/users/courses/modules/modules.module').then(
            (m) => m.ModulesModule
          ),
      },

      {
        path: 'c/details/modules/ytLink',
        loadChildren: () =>
          import(
            'src/app/dashboard/users/courses/modules/yt-link/yt-link.module'
          ).then((m) => m.YtLinkModule),
      },

      //end teacher

      // student

      {
        path: 'mentors',
        loadChildren: () =>
          import('src/app/dashboard/users/mentors/mentors.module').then(
            (m) => m.MentorsModule
          ),
      },

      {
        path: 'message',
        loadChildren: () =>
          import('src/app/dashboard/users/message/message.module').then(
            (m) => m.MessageModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('src/app/dashboard/users/quiz/quiz.module').then(
            (m) => m.QuizModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('src/app/dashboard/users/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'submission',
        loadChildren: () =>
          import('src/app/dashboard/users/submission/submission.module').then(
            (m) => m.SubmissionModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('src/app/dashboard/users/tasks/tasks.module').then(
            (m) => m.TasksModule
          ),
      },
      // school_admin:

      {
        path: 'admission',
        loadChildren: () =>
          import('../admission/admission.module').then(
            (m) => m.AdmissionModule
          ),
      },
      {
        path: 'enrollment',
        loadChildren: () =>
          import('../enrollment/enrollment.module').then(
            (m) => m.EnrollmentModule
          ),
      },

      // General Routes
      {
        path: 'media-manager',
        loadChildren: () =>
          import('./admin/media-manager/media-manager.module').then(
            (m) => m.MediaManagerModule
          ),
      },

      {
        path: 'media-manager/create',
        loadChildren: () =>
          import('./admin/media-manager/create/create.module').then(
            (m) => m.CreateModule
          ),
      },
      {
        path: 'media-manager/settings',
        loadChildren: () =>
          import('./admin/media-manager/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // Users Routes
      {
        path: 'users/instructors',
        loadChildren: () =>
          import('./admin/users/instructors/instructors.module').then(
            (m) => m.InstructorsModule
          ),
      },
      {
        path: 'users/instructors/payout',
        loadChildren: () =>
          import('./admin/users/instructors/payout/payout.module').then(
            (m) => m.PayoutModule
          ),
      },
      {
        path: 'users/students',
        loadChildren: () =>
          import('./admin/users/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'users/staffs',
        loadChildren: () =>
          import('./admin/users/staffs/staffs.module').then(
            (m) => m.StaffsModule
          ),
      },
      {
        path: 'users/roles',
        loadChildren: () =>
          import('./admin/users/roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'users/delete-account-requests',
        loadChildren: () =>
          import(
            './admin/users/delete-account-requests/delete-account-requests.module'
          ).then((m) => m.DeleteAccountRequestsModule),
      },

      // Departments Routes
      {
        path: 'departments',
        loadChildren: () =>
          import('./admin/departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },

      // Courses Routes
      {
        path: 'courses/categories',
        loadChildren: () =>
          import('./admin/courses/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'courses/levels',
        loadChildren: () =>
          import('./admin/courses/levels/levels.module').then(
            (m) => m.LevelsModule
          ),
      },
      {
        path: 'courses/settings',
        loadChildren: () =>
          import('./admin/courses/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'courses/subjects',
        loadChildren: () =>
          import('./admin/courses/subjects/subjects.module').then(
            (m) => m.SubjectsModule
          ),
      },

      // Quizzes Routes
      {
        path: 'quizzes/question-groups',
        loadChildren: () =>
          import('./admin/quizzes/question-groups/question-groups.module').then(
            (m) => m.QuestionGroupsModule
          ),
      },
      {
        path: 'quizzes/question-banks',
        loadChildren: () =>
          import('./admin/quizzes/question-banks/question-banks.module').then(
            (m) => m.QuestionBanksModule
          ),
      },
      {
        path: 'quizzes/setups',
        loadChildren: () =>
          import('./admin/quizzes/setups/setups.module').then(
            (m) => m.SetupsModule
          ),
      },
      {
        path: 'quizzes/results',
        loadChildren: () =>
          import('./admin/quizzes/results/results.module').then(
            (m) => m.ResultsModule
          ),
      },

      // Virtual Classes Routes
      {
        path: 'virtual-classes',
        loadChildren: () =>
          import('./admin/virtual-classes/virtual-classes.module').then(
            (m) => m.VirtualClassesModule
          ),
      },

      // Zoom Settings Routes
      {
        path: 'zoom-settings',
        loadChildren: () =>
          import('./admin/zoom-settings/zoom-settings.module').then(
            (m) => m.ZoomSettingsModule
          ),
      },

      // Certificates Routes
      {
        path: 'certificates',
        loadChildren: () =>
          import('./admin/certificates/certificates.module').then(
            (m) => m.CertificatesModule
          ),
      },
      {
        path: 'certificates/fonts',
        loadChildren: () =>
          import('./admin/certificates/fonts/fonts.module').then(
            (m) => m.FontsModule
          ),
      },
      {
        path: 'certificates/settings',
        loadChildren: () =>
          import('./admin/certificates/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // Revenue Routes
      {
        path: 'revenue',
        loadChildren: () =>
          import('./admin/revenue/revenue.module').then((m) => m.RevenueModule),
      },
      {
        path: 'revenue/instructors',
        loadChildren: () =>
          import('./admin/revenue/instructors/instructors.module').then(
            (m) => m.InstructorsModule
          ),
      },
      {
        path: 'revenue/statistics',
        loadChildren: () =>
          import('./admin/revenue/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },

      // Enrollments Routes
      {
        path: 'enrollments',
        loadChildren: () =>
          import('./admin/enrollments/enrollments.module').then(
            (m) => m.EnrollmentsModule
          ),
      },
      {
        path: 'enrollments/refund-n-cancellation',
        loadChildren: () =>
          import(
            './admin/enrollments/refund-n-cancellation/refund-n-cancellation.module'
          ).then((m) => m.RefundNCancellationModule),
      },
      {
        path: 'enrollments/refund-settings',
        loadChildren: () =>
          import(
            './admin/enrollments/refund-settings/refund-settings.module'
          ).then((m) => m.RefundSettingsModule),
      },

      // Communication Routes
      {
        path: 'communication/notifications',
        loadChildren: () =>
          import(
            './admin/communication/notifications/notifications.module'
          ).then((m) => m.NotificationsModule),
      },
      {
        path: 'communication/private-messages',
        loadChildren: () =>
          import(
            './admin/communication/private-messages/private-messages.module'
          ).then((m) => m.PrivateMessagesModule),
      },

      // Payment Routes
      {
        path: 'payment/online',
        loadChildren: () =>
          import('./admin/payment/online/online.module').then(
            (m) => m.OnlineModule
          ),
      },
      {
        path: 'payment/offline',
        loadChildren: () =>
          import('./admin/payment/offline/offline.module').then(
            (m) => m.OfflineModule
          ),
      },
      {
        path: 'payment/bank',
        loadChildren: () =>
          import('./admin/payment/bank/bank.module').then((m) => m.BankModule),
      },
      {
        path: 'payment/commission',
        loadChildren: () =>
          import('./admin/payment/commission/commission.module').then(
            (m) => m.CommissionModule
          ),
      },

      // Questions Routes
      {
        path: 'questions',
        loadChildren: () =>
          import('./admin/questions/questions.module').then(
            (m) => m.QuestionsModule
          ),
      },
      {
        path: 'questions/settings',
        loadChildren: () =>
          import('./admin/questions/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // CMO Routes
      {
        path: 'cmo/header-menu',
        loadChildren: () =>
          import('./admin/cmo/header-menu/header-menu.module').then(
            (m) => m.HeaderMenuModule
          ),
      },
      {
        path: 'cmo/menu-settings',
        loadChildren: () =>
          import('./admin/cmo/menu-settings/menu-settings.module').then(
            (m) => m.MenuSettingsModule
          ),
      },
      {
        path: 'cmo/sliders',
        loadChildren: () =>
          import('./admin/cmo/sliders/sliders.module').then(
            (m) => m.SlidersModule
          ),
      },
      {
        path: 'cmo/sliders/settings',
        loadChildren: () =>
          import('./admin/cmo/sliders/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'cmo/page-content',
        loadChildren: () =>
          import('./admin/cmo/page-content/page-content.module').then(
            (m) => m.PageContentModule
          ),
      },
      {
        path: 'cmo/testimonials',
        loadChildren: () =>
          import('./admin/cmo/testimonials/testimonials.module').then(
            (m) => m.TestimonialsModule
          ),
      },
      {
        path: 'cmo/social-settings',
        loadChildren: () =>
          import('./admin/cmo/social-settings/social-settings.module').then(
            (m) => m.SocialSettingsModule
          ),
      },
      {
        path: 'cmo/pages',
        loadChildren: () =>
          import('./admin/cmo/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'cmo/become-instructor',
        loadChildren: () =>
          import('./admin/cmo/become-instructor/become-instructor.module').then(
            (m) => m.BecomeInstructorModule
          ),
      },
      {
        path: 'cmo/sponsors',
        loadChildren: () =>
          import('./admin/cmo/sponsors/sponsors.module').then(
            (m) => m.SponsorsModule
          ),
      },
      {
        path: 'cmo/popup-content',
        loadChildren: () =>
          import('./admin/cmo/popup-content/popup-content.module').then(
            (m) => m.PopupContentModule
          ),
      },
      {
        path: 'cmo/footer-settings',
        loadChildren: () =>
          import('./admin/cmo/footer-settings/footer-settings.module').then(
            (m) => m.FooterSettingsModule
          ),
      },
      {
        path: 'cmo/login-page',
        loadChildren: () =>
          import('./admin/cmo/login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: 'cmo/faq',
        loadChildren: () =>
          import('./admin/cmo/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'cmo/header-footer-style',
        loadChildren: () =>
          import(
            './admin/cmo/header-footer-style/header-footer-style.module'
          ).then((m) => m.HeaderFooterStyleModule),
      },

      // Gamification Routes
      {
        path: 'gamification',
        loadChildren: () =>
          import('./admin/gamification/gamification.module').then(
            (m) => m.GamificationModule
          ),
      },
      {
        path: 'gamification/badges',
        loadChildren: () =>
          import('./admin/gamification/badges/badges.module').then(
            (m) => m.BadgesModule
          ),
      },
      {
        path: 'gamification/history',
        loadChildren: () =>
          import('./admin/gamification/history/history.module').then(
            (m) => m.HistoryModule
          ),
      },

      // Settings Routes
      {
        path: 'settings/system',
        loadChildren: () =>
          import('./admin/settings/system/system.module').then(
            (m) => m.SystemModule
          ),
      },
      {
        path: 'settings/api',
        loadChildren: () =>
          import('./admin/settings/api/api.module').then((m) => m.ApiModule),
      },
      {
        path: 'settings/sms',
        loadChildren: () =>
          import('./admin/settings/sms/sms.module').then((m) => m.SmsModule),
      },
      {
        path: 'settings/vimeo',
        loadChildren: () =>
          import('./admin/settings/vimeo/vimeo.module').then(
            (m) => m.VimeoModule
          ),
      },
      {
        path: 'settings/vdocipher',
        loadChildren: () =>
          import('./admin/settings/vdocipher/vdocipher.module').then(
            (m) => m.VdocipherModule
          ),
      },
      {
        path: 'settings/localization',
        loadChildren: () =>
          import('./admin/settings/localization/localization.module').then(
            (m) => m.LocalizationModule
          ),
      },
      {
        path: 'settings/module-manager',
        loadChildren: () =>
          import('./admin/settings/module-manager/module-manager.module').then(
            (m) => m.ModuleManagerModule
          ),
      },
      {
        path: 'settings/sidebar-manager',
        loadChildren: () =>
          import(
            './admin/settings/sidebar-manager/sidebar-manager.module'
          ).then((m) => m.SidebarManagerModule),
      },
      {
        path: 'settings/themes',
        loadChildren: () =>
          import('./admin/settings/themes/themes.module').then(
            (m) => m.ThemesModule
          ),
      },
      {
        path: 'settings/themes-customize',
        loadChildren: () =>
          import(
            './admin/settings/themes-customize/themes-customize.module'
          ).then((m) => m.ThemesCustomizeModule),
      },
      {
        path: 'settings/themes-font',
        loadChildren: () =>
          import('./admin/settings/themes-font/themes-font.module').then(
            (m) => m.ThemesFontModule
          ),
      },
      {
        path: 'settings/newsletter',
        loadChildren: () =>
          import('./admin/settings/newsletter/newsletter.module').then(
            (m) => m.NewsletterModule
          ),
      },
      {
        path: 'settings/newsletter/mailchimp',
        loadChildren: () =>
          import('./admin/settings/newsletter/mailchimp/mailchimp.module').then(
            (m) => m.MailchimpModule
          ),
      },
      {
        path: 'settings/newsletter/get-response',
        loadChildren: () =>
          import(
            './admin/settings/newsletter/get-response/get-response.module'
          ).then((m) => m.GetResponseModule),
      },
      {
        path: 'settings/newsletter/acelle',
        loadChildren: () =>
          import('./admin/settings/newsletter/acelle/acelle.module').then(
            (m) => m.AcelleModule
          ),
      },
      {
        path: 'settings/newsletter/subscriber',
        loadChildren: () =>
          import(
            './admin/settings/newsletter/subscriber/subscriber.module'
          ).then((m) => m.SubscriberModule),
      },
      {
        path: 'settings/push-notification',
        loadChildren: () =>
          import(
            './admin/settings/push-notification/push-notification.module'
          ).then((m) => m.PushNotificationModule),
      },
      {
        path: 'settings/utilities',
        loadChildren: () =>
          import('./admin/settings/utilities/utilities.module').then(
            (m) => m.UtilitiesModule
          ),
      },
      {
        path: 'settings/preloader',
        loadChildren: () =>
          import('./admin/settings/preloader/preloader.module').then(
            (m) => m.PreloaderModule
          ),
      },
      {
        path: 'settings/geo-location',
        loadChildren: () =>
          import('./admin/settings/geo-location/geo-location.module').then(
            (m) => m.GeoLocationModule
          ),
      },
      {
        path: 'settings/error-log',
        loadChildren: () =>
          import('./admin/settings/error-log/error-log.module').then(
            (m) => m.ErrorLogModule
          ),
      },
      {
        path: 'settings/ip-block',
        loadChildren: () =>
          import('./admin/settings/ip-block/ip-block.module').then(
            (m) => m.IpBlockModule
          ),
      },
      {
        path: 'settings/maintenance',
        loadChildren: () =>
          import('./admin/settings/maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
      },
      {
        path: 'settings/update-system',
        loadChildren: () =>
          import('./admin/settings/update-system/update-system.module').then(
            (m) => m.UpdateSystemModule
          ),
      },
      {
        path: 'settings/city',
        loadChildren: () =>
          import('./admin/settings/city/city.module').then((m) => m.CityModule),
      },
      {
        path: 'settings/cache',
        loadChildren: () =>
          import('./admin/settings/cache/cache.module').then(
            (m) => m.CacheModule
          ),
      },
      {
        path: 'settings/queue',
        loadChildren: () =>
          import('./admin/settings/queue/queue.module').then(
            (m) => m.QueueModule
          ),
      },
      {
        path: 'settings/cron-job',
        loadChildren: () =>
          import('./admin/settings/cron-job/cron-job.module').then(
            (m) => m.CronJobModule
          ),
      },
      {
        path: 'settings/captcha',
        loadChildren: () =>
          import('./admin/settings/captcha/captcha.module').then(
            (m) => m.CaptchaModule
          ),
      },
      {
        path: 'settings/social-login',
        loadChildren: () =>
          import('./admin/settings/social-login/social-login.module').then(
            (m) => m.SocialLoginModule
          ),
      },
      {
        path: 'settings/payout-accounts',
        loadChildren: () =>
          import(
            './admin/settings/payout-accounts/payout-accounts.module'
          ).then((m) => m.PayoutAccountsModule),
      },
      {
        path: 'settings/cookie',
        loadChildren: () =>
          import('./admin/settings/cookie/cookie.module').then(
            (m) => m.CookieModule
          ),
      },
      {
        path: 'settings/analytics',
        loadChildren: () =>
          import('./admin/settings/analytics/analytics.module').then(
            (m) => m.AnalyticsModule
          ),
      },
      {
        path: 'settings/pusher',
        loadChildren: () =>
          import('./admin/settings/pusher/pusher.module').then(
            (m) => m.PusherModule
          ),
      },
      {
        path: 'settings/gdrive',
        loadChildren: () =>
          import('./admin/settings/gdrive/gdrive.module').then(
            (m) => m.GdriveModule
          ),
      },
      {
        path: 'settings/seo',
        loadChildren: () =>
          import('./admin/settings/seo/seo.module').then((m) => m.SeoModule),
      },
      {
        path: 'settings/currencies',
        loadChildren: () =>
          import('./admin/settings/currencies/currencies.module').then(
            (m) => m.CurrenciesModule
          ),
      },
      {
        path: 'settings/timezone',
        loadChildren: () =>
          import('./admin/settings/timezone/timezone.module').then(
            (m) => m.TimezoneModule
          ),
      },
      {
        path: 'settings/activation',
        loadChildren: () =>
          import('./admin/settings/activation/activation.module').then(
            (m) => m.ActivationModule
          ),
      },
      {
        path: 'settings/general',
        loadChildren: () =>
          import('./admin/settings/general/general.module').then(
            (m) => m.GeneralModule
          ),
      },
      {
        path: 'settings/email',
        loadChildren: () =>
          import('./admin/settings/email/email.module').then(
            (m) => m.EmailModule
          ),
      },
      {
        path: 'settings/email-template',
        loadChildren: () =>
          import('./admin/settings/email-template/email-template.module').then(
            (m) => m.EmailTemplateModule
          ),
      },
      {
        path: 'settings/payout',
        loadChildren: () =>
          import('./admin/settings/payout/payout.module').then(
            (m) => m.PayoutModule
          ),
      },
      {
        path: 'settings/backup',
        loadChildren: () =>
          import('./admin/settings/backup/backup.module').then(
            (m) => m.BackupModule
          ),
      },
      {
        path: 'enrollments/student-list',
        loadChildren: () =>
          import('./admin/enrollments/student-list/student-list.module').then(
            (m) => m.StudentListModule
          ),
      },
    ],
    
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
