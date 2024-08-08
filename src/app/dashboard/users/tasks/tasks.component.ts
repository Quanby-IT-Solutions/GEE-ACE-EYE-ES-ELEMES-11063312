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
  selectedCourse: any = null;
  tasks: Task[] = [];

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
      },
      (error) => {
        console.error('Error fetching user:', error);
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

  fetchCourses() {
    try {
      this.courses = this.dataService.getCourses();
      console.log('Courses loaded:', this.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
    this.tasks = course.tasks || [];
    console.log('Selected course:', course);
    console.log('Tasks loaded:', this.tasks);
  }

  deselectCourse() {
    this.selectedCourse = null;
    this.tasks = [];
  }

  addTask(taskName: string) {
    if (taskName.trim()) {
      const newTask: Task = { name: taskName, dueDate: new Date() };
      this.tasks.push(newTask);
      console.log('Task added:', newTask);
      // Optionally, update the tasks in the data service if necessary
      if (this.selectedCourse) {
        this.selectedCourse.tasks.push(newTask);
        this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
        console.log('Course updated with new task:', this.selectedCourse);
      }
    }
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter((t: Task) => t !== task);
    console.log('Task removed:', task);
    // Optionally, update the tasks in the data service if necessary
    if (this.selectedCourse) {
      this.selectedCourse.tasks = this.selectedCourse.tasks.filter((t: Task) => t !== task);
      this.dataService.setCourse(this.selectedCourse); // Update the course data in the service
      console.log('Course updated after task removal:', this.selectedCourse);
    }
  }
}
