import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  courses: any[];
  selectedCourse: any = null;

  constructor(private dataService: DataService) {
    this.courses = this.dataService.getCourses();
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  backToCourses() {
    this.selectedCourse = null;
  }
}
