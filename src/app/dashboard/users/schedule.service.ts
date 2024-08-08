// schedule.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Schedule {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'https://api.example.com/schedule'; // Replace with backend API

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl).pipe(
      map(schedule => schedule.map(item => ({
        ...item,
        startTime: new Date(item.startTime),
        endTime: new Date(item.endTime)
      })))
    );
  }

  checkForConflicts(schedule: Schedule[]): boolean {
    for (let i = 0; i < schedule.length; i++) {
      for (let j = i + 1; j < schedule.length; j++) {
        if (
          (schedule[i].startTime < schedule[j].endTime && schedule[i].endTime > schedule[j].startTime)
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
