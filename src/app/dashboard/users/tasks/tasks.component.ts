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



import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Subscription } from 'rxjs';
import { formatDate } from '@angular/common';
import { routes } from 'src/app/shared/service/routes/routes';
import { Router } from '@angular/router';

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
  @Input() type:string = 'all';
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  userRole: string | null = null;
  courses: any[] = [];
  selectedTask: any = null;
  filterCourse: string = 'all';
  tasks: Task[] = [];
  commentField: string = '';
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
    private dataService: DataService,
    private router:Router
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

  selectTask(task:any){
    this.selectedTask = task;
  }

  isDue(task:any){
    if(task.dueDate == null || task.submitted){
      return false;
    }
    if(typeof task.dueDate == 'string' ){
      task.dueDate = new Date(task.dueDate);
    }
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today > task.dueDate;
  }

  formatDate(date: Date |string): string {
    if(typeof date === 'string') { 
      date = new Date(date);
    }
    if(date == null){
      return 'No Due Date';
    }
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formated = new Intl.DateTimeFormat('en-US', options).format(date);
    const today = new Intl.DateTimeFormat('en-US', options).format(new Date())
    if(formated == today){
      return 'Today'
    }
    
    return formated;
  }

  getCollapsableItems(){
    this.collapsableItems = {
      "No Due Date" : [],
      "This Week" : [],
      "Later" : [],
      "Earlier" : [],
    }
    this.taskSummary = {
      completed : 0,
      total: 0
    };
    this.testResults = {
      completed : 0,
      total: 0
    };
    for(let course of this.courses){
      for(let module of course.modules ?? []){
        for(let task of module.assignments ?? []){
          if(this.filterCourse !='all' && course.course != this.filterCourse){
            const today = new Date();
            const startOfThisWeek = new Date(today);
            const day = startOfThisWeek.getDay();
            const diff = startOfThisWeek.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
            startOfThisWeek.setDate(diff);
            startOfThisWeek.setHours(0, 0, 0, 0);
            const lastOfLastWeek = new Date(startOfThisWeek);
            lastOfLastWeek.setDate(lastOfLastWeek.getDate() + 7);
            if(typeof task.dueDate == 'string' ){
              task.dueDate = new Date(task.dueDate);
            }
            if (task.dueDate >= startOfThisWeek && task.dueDate <= lastOfLastWeek){
              if(task.submitted){
                this.taskSummary.completed +=1;
              }
              this.taskSummary.total +=1
            }
            continue;
          }
          task.course = course.course;
          task.instructor = course.instructor;
          task.type = 'assignment';
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
          if(typeof task.dueDate == 'string' ){
            task.dueDate = new Date(task.dueDate);
          }
          if (task.dueDate >= startOfThisWeek && task.dueDate <= lastOfLastWeek){
            this.collapsableItems['This Week'].push(task);
            if(task.submitted){
              this.taskSummary.completed +=1;
            }
            this.taskSummary.total +=1
          } else if (task.dueDate >= lastOfLastWeek) {
            this.collapsableItems['Later'].push(task);
          } else {
            this.collapsableItems['Earlier'].push(task);
          }
        }
  
        for(let assessment of module.exams ?? []){
          if(this.filterCourse !='all' && course.course != this.filterCourse){
            if(assessment.submitted){
              this.testResults.completed +=1;
            }
            this.testResults.total +=1
            continue;
          }
          assessment.course = course.course;
          assessment.instructor = course.instructor;
          assessment.items = this.dataService.getExamItems();
          assessment.type = 'exam';
          if(!assessment.dueDate){
            this.collapsableItems['No Due Date'].push(assessment);
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
          if(typeof assessment.dueDate == 'string' ){
            assessment.dueDate = new Date(assessment.dueDate);
          }
          if (assessment.dueDate >= startOfThisWeek && assessment.dueDate <= lastOfLastWeek){
            this.collapsableItems['This Week'].push(assessment);
          } else if (assessment.dueDate >= lastOfLastWeek) {
            this.collapsableItems['Later'].push(assessment);
          } else {
            this.collapsableItems['Earlier'].push(assessment);
          }
          if(assessment.submitted){
            this.testResults.completed +=1;
          }
          this.testResults.total +=1
        }

        for(let quiz of module.quizzes ?? []){
          if(this.filterCourse !='all' && course.course != this.filterCourse){
            if(quiz.submitted){
              this.testResults.completed +=1;
            }
            this.testResults.total +=1
            continue;
          }
          quiz.course = course.course;
          quiz.instructor = course.instructor;
          quiz.items = this.dataService.getExamItems();
          quiz.type = 'exam';
          if(!quiz.dueDate){
            this.collapsableItems['No Due Date'].push(quiz);
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
          if(typeof quiz.dueDate == 'string' ){
            quiz.dueDate = new Date(quiz.dueDate);
          }
          if (quiz.dueDate >= startOfThisWeek && quiz.dueDate <= lastOfLastWeek){
            this.collapsableItems['This Week'].push(quiz);
          } else if (quiz.dueDate >= lastOfLastWeek) {
            this.collapsableItems['Later'].push(quiz);
          } else {
            this.collapsableItems['Earlier'].push(quiz);
          }
          if(quiz.submitted){
            this.testResults.completed +=1;
          }
          this.testResults.total +=1
        }
      }
    }


    // sort in order
    for(let collapsable of Object.keys(this.collapsableItems)){
      this.collapsableItems[collapsable] =  this.collapsableItems[collapsable]
      .sort((a:any,b:any)=>
         a.dueDate - b.dueDate
      )
    }
    
  }

  takeExam(){
    this.router.navigate([routes.quiz]);
    this.selectedTask.submitted = true;
  }

  
  submitWork(){
    if(!this.selectedTask.files?.length){
      return;
    }
    this.selectedTask.submitted = !this.selectedTask.submitted;

    if(this.selectedTask.submitted){
      // submit actions
      // show submitted 
    }else{
      // unsubmit actions
    }
  }

  handleAddFiles(event:any){ 
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      if(this.selectedTask.files){
        this.selectedTask.files.push(...Array.from(input.files))
      }else{
        this.selectedTask.files = [...Array.from(input.files)];
      }
    }
  }

  removeFile(file:any){
    this.selectedTask.files.splice(this.selectedTask.files.indexOf(file), 1);
  }

  addComment(){
    console.log(this.commentField)
    if(this.commentField.trim() == ''){
      return;
    }
    if(this.selectedTask.comments){
      this.selectedTask.comments.push({
        sender: 'Anton Caesar Cabais',
        time: new Date(),
        message: this.commentField,
      });
    }else{
      this.selectedTask.comments = [{
        sender:'Anton Caesar Cabais',
        time: new Date(),
        message : this.commentField
      }];
    }

    this.commentField = '';
  }

  getTime(now:Date|string): string {
    if(typeof now == 'string'){
      now = new Date(now);
    }
    return formatDate(now, 'h:mm a', 'en-US');
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
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




  deselectTask() {
    this.selectedTask = null;
    this.filterCourse = 'all';
    this.getCollapsableItems();
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
  saveData(){
    this.dataService.saveCoursesToStorage(this.courses);
  }
}
