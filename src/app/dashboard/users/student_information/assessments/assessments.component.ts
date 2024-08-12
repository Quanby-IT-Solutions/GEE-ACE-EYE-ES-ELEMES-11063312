import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Subscription } from 'rxjs';

interface Assessment {
  name: string;
  dueDate: Date;
}

interface Course {
  course: string;
  instructor: string;
  instructor_profile: string;
  imageUrl: string;
  assessments: Assessment[];
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
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedCourse: Course | null = null;
  assessments: Assessment[] = [];
  filteredAssessments: Assessment[] = [];
  searchTerm: string = '';
  sortMenuOpen: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
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
      this.filteredCourses = this.courses;
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
    this.assessments = course.assessments || [];
    this.filteredAssessments = this.assessments;
    this.searchTerm = '';
  }

  deselectCourse() {
    this.selectedCourse = null;
    this.assessments = [];
    this.filteredAssessments = [];
    this.searchTerm = '';
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter(course =>
      course.course.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterAssessments() {
    if (this.selectedCourse) {
      this.filteredAssessments = this.selectedCourse.assessments.filter(assessment =>
        assessment.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  toggleSortMenu() {
    this.sortMenuOpen = !this.sortMenuOpen;
  }

  sortCourses(order: 'asc' | 'desc') {
    this.filteredCourses.sort((a, b) => {
      if (order === 'asc') {
        return a.course.localeCompare(b.course);
      } else {
        return b.course.localeCompare(a.course);
      }
    });
    this.sortMenuOpen = false;
  }

  sortAssessments(order: 'asc' | 'desc') {
    this.filteredAssessments.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    this.sortMenuOpen = false;
  }
}