import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDates: Date[] = [];
  currentDate = new Date();
  schedules: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.schedules = this.dataService.getSchedules();
    this.generateCalendarDates();
  }

  generateCalendarDates() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    this.calendarDates = [];
    for (let d = new Date(firstDay.getFullYear(), firstDay.getMonth(), 1); d <= lastDay; d.setDate(d.getDate() + 1)) {
      this.calendarDates.push(new Date(d));
    }

    // Pad with days from previous and next months
    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevDate = new Date(year, month, -i);
      this.calendarDates.unshift(prevDate);
    }

    while (this.calendarDates.length < 42) {
      const nextDate = new Date(year, month + 1, this.calendarDates.length - firstDayOfWeek + 1);
      this.calendarDates.push(nextDate);
    }
  }

  getEventsForDate(date: Date) {
    const events: any[] = [];
    this.schedules.forEach(schedule => {
      schedule.tasks.forEach((task: any) => {
        if (this.isSameDay(new Date(task.dueDate), date)) {
          events.push({ ...task, course: schedule.course, time: schedule.time });
        }
      });
      schedule.assessments.forEach((assessment: any) => {
        if (this.isSameDay(new Date(assessment.dueDate), date)) {
          events.push({ ...assessment, course: schedule.course, time: schedule.time });
        }
      });
    });
    return events;
  }

  isSameDay(date1: Date, date2: Date) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return this.isSameDay(date, today);
  }

  getEventClass(course: string): string {
    const colors: { [key: string]: string } = {
      'Mathematics 101': 'bg-red-100 text-red-800',
      'Physics 201': 'bg-blue-100 text-blue-800',
      'Chemistry 301': 'bg-green-100 text-green-800',
      'Biology 101': 'bg-yellow-100 text-yellow-800',
      'Computer Science 101': 'bg-purple-100 text-purple-800',
      'History 101': 'bg-indigo-100 text-indigo-800',
      'Geography 101': 'bg-pink-100 text-pink-800',
      'Literature 101': 'bg-teal-100 text-teal-800'
    };
    return colors[course] || 'bg-gray-100 text-gray-800';
  }

  changeMonth(delta: number) {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + delta, 1);
    this.generateCalendarDates();
  }
}