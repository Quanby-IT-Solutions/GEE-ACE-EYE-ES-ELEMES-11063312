import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common'; // Ensure CommonModule is imported

interface Assessment {
  name: string;
  dueDate: Date;
}

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit, OnDestroy {
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  userRole: string | null = null;
  courses: any[] = [];
  selectedCourse: any = null;
  assessments: Assessment[] = [];

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
        this.userRole = this.getUserRole();
        this.fetchCourses();
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  fetchCourses() {
    try {
      this.courses = this.dataService.getCourses();
      console.log('Courses loaded:', this.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
    this.assessments = course.assessments || [];
    console.log('Selected course:', course);
    console.log('Assessments loaded:', this.assessments);
  }

  deselectCourse() {
    this.selectedCourse = null;
    this.assessments = [];
  }

  addAssessment(assessmentName: string) {
    if (assessmentName.trim()) {
      const newAssessment: Assessment = { name: assessmentName, dueDate: new Date() };
      this.assessments.push(newAssessment);
      console.log('Assessment added:', newAssessment);
      // Optionally, update the assessments in the data service if necessary
      if (this.selectedCourse) {
        this.selectedCourse.assessments.push(newAssessment);
        this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
        console.log('Course updated with new assessment:', this.selectedCourse);
      }
    }
  }

  removeAssessment(assessment: Assessment) {
    this.assessments = this.assessments.filter((a: Assessment) => a !== assessment);
    console.log('Assessment removed:', assessment);
    // Optionally, update the assessments in the data service if necessary
    if (this.selectedCourse) {
      this.selectedCourse.assessments = this.selectedCourse.assessments.filter((a: Assessment) => a !== assessment);
      this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
      console.log('Course updated after assessment removal:', this.selectedCourse);
    }
  }
}
