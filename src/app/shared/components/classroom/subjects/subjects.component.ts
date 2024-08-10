import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
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
export class SubjectsComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortMenuOpen: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courses = this.dataService.getCourses();
    this.filteredCourses = this.courses;
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
    this.router.navigate([routes.subject_modules], { state: { course } });
  }
}
