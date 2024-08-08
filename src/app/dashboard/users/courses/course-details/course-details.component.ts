import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { routes } from 'src/app/shared/service/routes/routes';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule in imports array
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.course = this.dataService.getCourse(); // Retrieve the course data
    if (this.course) {
      console.log('Course data received in course-details:', this.course);
    } else {
      console.log('No course data found in course-details');
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate([routes.courses]);
  }

  gotoModule(){
    this.router.navigate([routes.course_modules]);
  }
}
