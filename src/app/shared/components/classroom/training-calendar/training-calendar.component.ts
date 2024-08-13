import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-training-calendar',
  templateUrl: './training-calendar.component.html',
  styleUrls: ['./training-calendar.component.scss'], 
  standalone: true,
  imports: [CommonModule, FormsModule]  // Add FormsModule to the imports
})
export class TrainingCalendarComponent implements OnInit {
  currentDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDates: Date[] = [];
  trainingEvents: { date: Date, course: string, instructor: string, enrollmentKey: string }[] = [];

  modalOpen = false;
  selectedDate: Date | null = null;
  selectedEvents: any[] = [];
  enrollmentKey: string = '';  // To store the enrollment key input by the user

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCourses();
    this.generateCalendarDates(this.currentDate);
  }

  fetchCourses(): void {
    this.trainingEvents = this.dataService.trainingSchedule(); // Fetch courses from local storage and set to trainingEvents
  }

  changeMonth(offset: number): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + offset, 1);
    this.generateCalendarDates(this.currentDate);
  }

  generateCalendarDates(date: Date): void {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    this.calendarDates = dates;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  getEventsForDate(date: Date): any[] {
    return this.trainingEvents.filter(event =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  }

  openModal(date: Date): void {
    this.selectedDate = date;
    this.selectedEvents = this.getEventsForDate(date);
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedDate = null;
    this.selectedEvents = [];
    this.enrollmentKey = ''; // Reset the enrollment key input
  }

  onEnrollmentKeyChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.enrollmentKey = inputElement.value;
  }

  async enrollInTraining(event: any): Promise<void> {
    if (this.enrollmentKey !== event.enrollmentKey) {
        alert('The enrollment key is incorrect. Please try again.');
        return;
    }

    try {
        const currentUser = await this.userService.getUser();

        const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
        const student = { name: fullName, email: currentUser.email };

        const courseList = this.dataService.getCourses();
        const updatedCourse = courseList.find(c => c.course === event.course);

        if (updatedCourse) {
            updatedCourse.enrolledStudents.push(student);
            updatedCourse.enrolled = 'yes';

            this.dataService.updateCourse(updatedCourse);

            this.fetchCourses();  // Reload training events after enrollment
            this.generateCalendarDates(this.currentDate);

            alert(`${fullName} has been successfully enrolled in ${event.course}!`);
            this.closeModal();

            this.router.navigate([routes.subjects]);
        } else {
            alert('Course not found. Please try again.');
        }
    } catch (error) {
        console.error('Error enrolling in course:', error);
        alert('There was an issue enrolling in the course. Please try again.');
    }
  }
}
