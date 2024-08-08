// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
// import { UserService } from 'src/app/shared/service/user/user.service';

// import { User } from '@supabase/supabase-js';
// import { GuestUser } from 'src/app/shared/models/model';
// import { DataService } from 'src/app/shared/service/data/data.service';
// import { CommonModule } from '@angular/common';
// import { routes } from 'src/app/shared/service/routes/routes';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.scss'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class CoursesComponent implements OnInit, OnDestroy {
//   public user: User | GuestUser | null = null;
//   private userSubscription: Subscription | undefined;
//   public addingCourse = false;
//   public courses: any[];

//   constructor(
//     private router: Router,
//     private supabaseService: SupabaseService,
//     private userService: UserService,
//     private dataService: DataService
//   ) {
//     this.courses = this.dataService.getCourses();
//   }

//   ngOnInit() {
//     this.userSubscription = this.supabaseService.currentUser.subscribe(
//       (user) => {
//         this.user = user;
//         console.log('Current user:', this.user);
//       }
//     );
//   }

//   ngOnDestroy() {
//     if (this.userSubscription) {
//       this.userSubscription.unsubscribe();
//     }
//   }

//   getUserRole(): string | null {
//     return this.userService.getUserRole();
//   }

//   goToCourseDetails(course: any) {
//     console.log('Navigating to course details with data:', course);
//     this.dataService.setCourse(course);
//     this.router.navigate([routes.course_details]).then(success => {
//       if (success) {
//         console.log('Navigation successful');
//       } else {
//         console.log('Navigation failed');
//       }
//     });
//   }

//   addCourse(course: string, subject: string, block: string, time: string, classCode: string) {
//     this.courses.push({
//       course,
//       subject,
//       block,
//       time,
//       classCode,
//       tasks: [],
//       assessments: []
//     });
//     this.addingCourse = false;
//   }

//   addLesson(course: any) {
//     console.log('Adding lesson to:', course);
//     // Implement lesson addition logic
//   }

//   addTask(course: any) {
//     console.log('Adding task to:', course);
//     // Implement task addition logic
//   }

//   addAssessment(course: any) {
//     console.log('Adding assessment to:', course);
//     // Implement assessment addition logic
//   }

//   joinClass(course: any) {
//     console.log('Joining class for:', course);
//     // Implement join class logic
//   }
// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';

import { routes } from 'src/app/shared/service/routes/routes';
import { CoursesService } from 'src/app/shared/service/query/course/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: true,
  imports: []
})
export class CoursesComponent implements OnInit, OnDestroy {
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  public addingCourse = false;
  public courses: any[];
  public coursesData: any[] | null = null;

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private userService: UserService,
    private dataService: DataService,
    private coursesService: CoursesService
  ) {
    this.courses = this.dataService.getCourses();
  }

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  async displayClasses() {
    try {
      this.coursesData = await this.coursesService.getCourses();
      console.log('Courses data:', this.coursesData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }


  goToCourseDetails(course: any) {
    console.log('Navigating to course details with data:', course);
    this.dataService.setCourse(course);
    this.router.navigate([routes.course_details]).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.log('Navigation failed');
      }
    });
  }

  addCourse(course: string, subject: string, block: string, time: string, classCode: string) {
    this.courses.push({
      course,
      subject,
      block,
      time,
      classCode,
      tasks: [],
      assessments: []
    });
    this.addingCourse = false;
  }

  addLesson(course: any) {
    console.log('Adding lesson to:', course);
    // Implement lesson addition logic
  }

  addTask(course: any) {
    console.log('Adding task to:', course);
    // Implement task addition logic
  }

  addAssessment(course: any) {
    console.log('Adding assessment to:', course);
    // Implement assessment addition logic
  }

  joinClass(course: any) {
    console.log('Joining class for:', course);
    // Implement join class logic
  }
}