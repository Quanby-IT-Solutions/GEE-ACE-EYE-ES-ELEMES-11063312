import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data/data.service';
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
  grade: string;
  enrolled: string;
  progress: string;
  imageUrl: string;
  modules: Module[];
}

@Component({
  selector: 'app-explore-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortMenuOpen: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courses = this.dataService.getCourses(); // Fetches both enrolled and not enrolled courses
    this.filteredCourses = [...this.courses]; // Make sure to copy the courses array
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
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
    this.sortMenuOpen = false; // Close the sort menu after sorting
  }

  selectCourse(course: Course): void {
    this.router.navigate([routes.explore_courses_modules], { state: { course } });
  }
}





