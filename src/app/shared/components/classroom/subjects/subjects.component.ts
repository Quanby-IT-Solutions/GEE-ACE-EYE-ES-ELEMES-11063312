import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';

interface TaskSummary {
  completed: number;
  total: number;
}

interface TestResults {
  completed: number;
}

interface Task {
  name: string;
  dueDate: Date;
}

interface Assessment {
  name: string;
  dueDate: Date;
}

interface Course {
  course: string;
  subject: string;
  block: string;
  time: string;
  grade: string;
  tasks: Task[];
  assessments: Assessment[];
  progress: string;
  imageUrl: string;
}

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  taskSummary: TaskSummary = {
    completed: 36,
    total: 37,
  };

  testResults: TestResults = {
    completed: 12,
  };

  courses: Course[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courses = this.dataService.getCourses();
  }

  selectCourse(course: Course): void {
    this.router.navigate([routes.subject_modules], { state: { course } });
  }
}
