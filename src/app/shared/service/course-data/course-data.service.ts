// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseDataService {
//   private course: any;

//   setCourse(course: any) {
//     this.course = course;
//   }

//   getCourse() {
//     return this.course;
//   }
// }

import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  private course: any;

  constructor(private dataService: DataService) { }

  setCourse(course: any) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}
