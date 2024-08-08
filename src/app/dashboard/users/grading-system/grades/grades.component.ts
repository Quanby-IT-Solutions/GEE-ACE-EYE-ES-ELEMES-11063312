// grades.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: { course: string; grade: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.grades = this.dataService.getCourses().map(course => ({
      course: course.course,
      grade: course.grade || 'N/A' // Use 'N/A' if grade is not available
    }));
  }
}