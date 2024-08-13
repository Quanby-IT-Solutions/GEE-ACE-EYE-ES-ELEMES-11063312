import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Subscription } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { UserService } from 'src/app/shared/service/user/user.service';
import { GuestUser } from 'src/app/shared/models/model';
import { Router } from '@angular/router';

import { routes } from 'src/app/shared/service/routes/routes';

interface Material {
  title: string;
  link: string;
}

interface Assignment {
  name: string;
  dueDate: Date | null;
}

interface Exam {
  name: string;
  dueDate: Date;
}

interface Module {
  title: string;
  description: string;
  about: string;
  materials: Material[];
  assignments: Assignment[];
  exams: Exam[];
}

interface Course {
  instructor: string;
  instructor_profile: string;
  course: string;
  subject: string;
  block: string;
  time: string;
  enrolled: string;
  grade: string;
  progress: string;
  imageUrl: string;
  modules: Module[];
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortMenuOpen: boolean = false;  

  constructor(
    private dataService: DataService,
    private router: Router, 
    private userService: UserService
  ) {}

  private userSubscription: Subscription | undefined;

  public user: User | GuestUser | null = null;  
  role: string | null = null;
  currentUser: any; // To hold the current user's details


  getUserRole() {
    return this.role;
  }

  async ngOnInit() {

    this.currentUser = await this.userService.getUser();


    const _user = await this.userService.getUser();
    this.user = _user;
    this.role = _user.role;
  
    this.fetchCourses(); // Fetch courses after setting the user
  
    this.userSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.user = user;
        this.fetchCourses(); // Re-fetch courses if the user changes
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  fetchCourses(): void {
    if (!this.user) return;
  
    const instructorFullName = this.getInstructorFullName(this.user);
  
    if (this.role === 'department_admin') {
      // Display all courses for admin
      this.courses = this.dataService.getCourses();
    } else if (this.role === 'instructor') {
      // Display courses created by the instructor
      this.courses = this.dataService.getCourses().filter(course =>
        course.instructor === instructorFullName
      );
    } else if (this.role === 'student') {
      // Display courses where the student is enrolled
      this.courses = this.dataService.getCourses().filter(course =>
        course.enrolledStudents.some((student: { email: string }) => student.email === this.user!.email)
      );
    } else {
      // If no user is logged in, or there's an issue, don't show any courses
      this.courses = [];
    }
  
    this.filteredCourses = this.courses;
  }
  
  getInstructorFullName(user: User | GuestUser): string {
    if ('first_name' in this.currentUser && 'last_name' in this.currentUser) {
      return `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    }
    return '';
  }

  getDepartminAdmin(user: User | GuestUser): string {
    if ('first_name' in this.currentUser && 'last_name' in this.currentUser) {
      return `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    }
    return '';
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.course.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSortMenu(): void {
    this.sortMenuOpen = !this.sortMenuOpen;
  }

  sortCourses(order: 'asc' | 'desc' = 'asc'): void {
    this.filteredCourses.sort((a, b) =>
      order === 'asc'
        ? a.course.toLowerCase().localeCompare(b.course.toLowerCase())
        : b.course.toLowerCase().localeCompare(a.course.toLowerCase())
    );
    this.sortMenuOpen = false;
  }

  selectCourse(course: Course): void {
    this.router.navigate([routes.subject_modules], { state: { course } });
  }

  navigateToModules(): void {
    this.router.navigate([routes.add_course]);
  }
}