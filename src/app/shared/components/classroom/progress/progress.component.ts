import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  courses: any[] = [];
  enrolledCourses: any[] = []; // Initialize with an empty array
  selectedCourse: any = null;
  currentUser: any; // To hold the current user's details

  constructor(
    private dataService: DataService,     
    private userService: UserService // Inject UserService
  ) {}

  async ngOnInit() {
    // Fetch the authenticated user's details
    this.currentUser = await this.userService.getUser();

    // Fetch all courses
    this.courses = this.dataService.getCourses();

    // Filter courses that the authenticated user is enrolled in
    const fullName = `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    this.enrolledCourses = this.courses.filter(course =>
      course.enrolledStudents.some((student: { name: string }) => student.name === fullName)
    );
  }

  getUserProgress(course: any): number {
    const fullName = `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    const student = course.enrolledStudents.find((student: { name: string }) => student.name === fullName);
    return student && student.progress ? parseInt(student.progress, 10) : 0;
  }
  

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
    
  backToCourses() {
    this.selectedCourse = null;
  }
}
