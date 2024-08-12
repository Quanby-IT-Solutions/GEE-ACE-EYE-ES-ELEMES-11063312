import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-calendar',
  templateUrl: './training-calendar.component.html',
  styleUrls: ['./training-calendar.component.scss'], 
  standalone: true,
  imports: [CommonModule]
})
export class TrainingCalendarComponent implements OnInit {
  currentDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDates: Date[] = [];
  trainingEvents: { date: Date, course: string, instructor: string, enrollmentKey: string }[] = [];

  modalOpen = false;
  selectedDate: Date | null = null;
  selectedEvents: any[] = [];

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trainingEvents = this.dataService.trainingSchedule(); // Load the training schedule
    this.generateCalendarDates(this.currentDate);
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
  }

  async enrollInTraining(event: any): Promise<void> {
    try {
      const currentUser = await this.userService.getUser(); // Fetch the authenticated user's details

      // Construct the full name using first_name and last_name
      const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
      const student = { name: fullName, email: currentUser.email };

      this.dataService.enrollStudentInCourse(
        this.trainingEvents.indexOf(event), 
        student
      );

      // Mark the course as enrolled
      alert(`${fullName} has been successfully enrolled in ${event.course}!`);
      this.closeModal();
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('There was an issue enrolling in the course. Please try again.');
    }
  }
}
