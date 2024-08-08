import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OurHeaderComponent } from './sidebar/header/header.component';
import { OurSidebarComponent } from './sidebar/sidebar.component';

import { CalendarComponent } from './users/calendar/calendar.component';
import { CardComponent } from './users/card/card.component';
import { CardCoursesComponent } from './users/card-courses/card-courses.component';
import { CourseModalComponent } from '../shared/components/modals/course-modal/course-modal.component';

@NgModule({
  declarations: [DashboardComponent, CourseModalComponent, CalendarComponent, CardComponent, CardCoursesComponent],
  imports: [CommonModule, FormsModule, DashboardRoutingModule, OurHeaderComponent, OurSidebarComponent,  ],
})
export class DashboardModule {}
