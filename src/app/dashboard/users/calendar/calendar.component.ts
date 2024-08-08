

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

interface Event {
  time: string;
  title: string;
  description: string;
  date: Date;
  type: string;
  course: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentMonth: Date = new Date();
  calendar: CalendarDay[][] = [];
  daysOfWeek: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  events: Event[] = [];
  selectedDate: Date = new Date();
  selectedDateEvents: Event[] = [];
  todayEvents: Event[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.generateEvents();
    this.generateCalendar();
    this.selectDate(new Date());
  }

  generateEvents() {
    const schedules = this.dataService.getSchedules();
    schedules.forEach(schedule => {
      schedule.tasks.forEach((task: any) => {
        this.events.push({
          time: schedule.time,
          title: task.name,
          description: `Task for ${schedule.course}`,
          date: new Date(task.dueDate),
          type: 'Tasks',
          course: schedule.course
        });
      });
      schedule.assessments.forEach((assessment: any) => {
        this.events.push({
          time: schedule.time,
          title: assessment.name,
          description: `Assessment for ${schedule.course}`,
          date: new Date(assessment.dueDate),
          type: 'Assessments',
          course: schedule.course
        });
      });
    });
    this.updateTodayEvents();
  }

  updateTodayEvents() {
    const today = new Date();
    this.todayEvents = this.events.filter(event => this.isSameDay(event.date, today));
  }

  generateCalendar() {
    this.calendar = [];
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const startDate = this.getStartDate(firstDay);
    const endDate = this.getEndDate(lastDay);

    let currentDate = startDate;
    let week: CalendarDay[] = [];

    while (currentDate <= endDate) {
      if (week.length === 7) {
        this.calendar.push(week);
        week = [];
      }
      week.push({
        date: new Date(currentDate),
        isCurrentMonth: currentDate.getMonth() === this.currentMonth.getMonth()
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (week.length > 0) {
      this.calendar.push(week);
    }
  }

  getStartDate(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  getEndDate(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() + (day === 0 ? 0 : 7 - day);
    return new Date(date.setDate(diff));
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.selectedDateEvents = this.events.filter(event => this.isSameDay(event.date, date));
  }

  isSelectedDate(date: Date): boolean {
    return this.isSameDay(this.selectedDate, date);
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  getDisplayDateTitle(): string {
    const today = new Date();
    if (this.isSameDay(this.selectedDate, today)) {
      return 'Today';
    } else if (this.selectedDate > today) {
      return 'Upcoming';
    } else {
      return 'Past';
    }
  }
}
