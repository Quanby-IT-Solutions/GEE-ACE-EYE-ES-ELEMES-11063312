// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
// import { UserService } from 'src/app/shared/service/user/user.service';
// import { DataService } from 'src/app/shared/service/data/data.service';
// import { User } from '@supabase/supabase-js';
// import { GuestUser } from 'src/app/shared/models/model';
// import { Subscription } from 'rxjs';

// interface Task {
//   name: string;
//   dueDate: Date;
// }

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.scss']
// })
// export class TasksComponent implements OnInit, OnDestroy {
//   public user: User | GuestUser | null = null;
//   private userSubscription: Subscription | undefined;
//   userRole: string | null = null;
//   courses: any[] = [];
//   selectedCourse: any = null;
//   tasks: Task[] = [];

//   constructor(
//     private supabaseService: SupabaseService,
//     private userService: UserService,
//     private dataService: DataService
//   ) {}

//   ngOnInit() {
//     this.userSubscription = this.supabaseService.currentUser.subscribe(
//       (user) => {
//         this.user = user;
//         console.log('Current user:', this.user);
//         this.userRole = this.getUserRole();
//         this.fetchCourses();
//       },
//       (error) => {
//         console.error('Error fetching user:', error);
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

//   fetchCourses() {
//     try {
//       this.courses = this.dataService.getCourses();
//       console.log('Courses loaded:', this.courses);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   }

//   selectCourse(course: any) {
//     this.selectedCourse = course;
//     this.tasks = course.tasks || [];
//     console.log('Selected course:', course);
//     console.log('Tasks loaded:', this.tasks);
//   }

//   deselectCourse() {
//     this.selectedCourse = null;
//     this.tasks = [];
//   }

//   addTask(taskName: string) {
//     if (taskName.trim()) {
//       const newTask: Task = { name: taskName, dueDate: new Date() };
//       this.tasks.push(newTask);
//       console.log('Task added:', newTask);
//       // Optionally, update the tasks in the data service if necessary
//       if (this.selectedCourse) {
//         this.selectedCourse.tasks.push(newTask);
//         this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
//         console.log('Course updated with new task:', this.selectedCourse);
//       }
//     }
//   }

//   removeTask(task: Task) {
//     this.tasks = this.tasks.filter((t: Task) => t !== task);
//     console.log('Task removed:', task);
//     // Optionally, update the tasks in the data service if necessary
//     if (this.selectedCourse) {
//       this.selectedCourse.tasks = this.selectedCourse.tasks.filter((t: Task) => t !== task);
//       this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
//       console.log('Course updated after task removal:', this.selectedCourse);
//     }
//   }
// }



import { Component, OnInit, OnDestroy } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Subscription } from 'rxjs';

interface Task {
  name: string;
  dueDate: Date;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  userRole: string | null = null;
  courses: any[] = [];
  selectedTask: any = null;
  filterCourse: string = 'all';
  tasks: Task[] = [];
  collapsables:any = {
    "No Due Date" : true,
    "This Week" : true,
    "Later" : true,
    "Earlier" : true,
  }

  collapsableItems:any = {
    "No Due Date" : [],
    "This Week" : [],
    "Later" : [],
    "Earlier" : [],
  }



  taskSummary:any = {
    completed : 36,
    total: 37
  };

  testResults:any = {
    completed: 36,
  };

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
        this.userRole = this.getUserRole();
        this.fetchCourses();
        this.getCollapsableItems();
        console.log('HATDOG',this.collapsableItems)
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }




  setFilterCourse(event:any){
    this.filterCourse = event.target.value;
    this.getCollapsableItems();
  }

  toggleCollapsable(section:string) {
    this.collapsables[section] = !this.collapsables[section] 
  }

  getCollapsables(){
    return  Object.keys(this.collapsables);
  }

  getCollapsableItems(){
    this.collapsableItems = {
      "No Due Date" : [],
      "This Week" : [],
      "Later" : [],
      "Earlier" : [],
    }
    for(let course of this.courses){
      if(this.filterCourse !='all' && course.course != this.filterCourse){
        continue;
      }
      for(let task of course.tasks ?? []){
        task.course = course.course;
        task.instructor = course.instructor;
        if(!task.dueDate){
          this.collapsableItems['No Due Date'].push(task);
          continue;
        }
        const today = new Date();
        const startOfThisWeek = new Date(today);
        const day = startOfThisWeek.getDay();
        const diff = startOfThisWeek.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        startOfThisWeek.setDate(diff);
        startOfThisWeek.setHours(0, 0, 0, 0);
        const lastOfLastWeek = new Date(startOfThisWeek);
        lastOfLastWeek.setDate(lastOfLastWeek.getDate() + 7);
        if (task.dueDate >= startOfThisWeek && task.dueDate <= lastOfLastWeek){
          this.collapsableItems['This Week'].push(task);
        } else if (task.dueDate >= lastOfLastWeek) {
          this.collapsableItems['Later'].push(task);
        } else {
          this.collapsableItems['Earlier'].push(task);
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  formatDate(date: Date): string {
    if(date == null){
      return 'No Due Date';
    }
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  fetchCourses() {
    try {
      this.courses = this.dataService.getCourses();
      console.log('Courses loaded:', this.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  selectTask(task:any){
    this.selectedTask = task;
  }


  deselectTask() {
    this.selectedTask = null;
  }

  addTask(taskName: string) {
    if (taskName.trim()) {
      const newTask: Task = { name: taskName, dueDate: new Date() };
      this.tasks.push(newTask);
      console.log('Task added:', newTask);
      // Optionally, update the tasks in the data service if necessary
      // if (this.selectedCourse) {
      //   this.selectedCourse.tasks.push(newTask);
      //   this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
      //   console.log('Course updated with new task:', this.selectedCourse);
      // }
    }
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter((t: Task) => t !== task);
    console.log('Task removed:', task);
    // Optionally, update the tasks in the data service if necessary
    // if (this.selectedCourse) {
    //   this.selectedCourse.tasks = this.selectedCourse.tasks.filter((t: Task) => t !== task);
    //   this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
    //   console.log('Course updated after task removal:', this.selectedCourse);
    // }
  }
}
