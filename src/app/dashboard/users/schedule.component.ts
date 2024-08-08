// schedule.component.ts
import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: any[] = [];
  conflict: boolean = false;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe(
      (data) => {
        this.schedule = data;
        this.conflict = this.scheduleService.checkForConflicts(this.schedule);
      },
      (error) => {
        console.error('Error fetching schedule', error);
      }
    );
  }
}
