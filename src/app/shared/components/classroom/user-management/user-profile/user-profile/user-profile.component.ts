import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  role: string;
  department: string;
  position: string;
  courseCompleted: number;
  courseInProgress: number;
  courseNotStarted: number;
}

interface Course {
  name: string;
  startDate: string;
  progress: number;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() user: User | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<User>();

  showCourseProgress = false;
  isEditing = false;
  editedUser: User = {} as User;

  courses: Course[] = [
    {
      name: 'Introduction to Data Science',
      startDate: 'Dec 15, 2021',
      progress: 75,
    },
    {
      name: 'Python for Data Science',
      startDate: 'Nov 10, 2021',
      progress: 100,
    },
    { name: 'SQL for Data Science', startDate: 'Oct 20, 2021', progress: 100 },
    {
      name: 'Statistics for Data Science',
      startDate: 'Sep 30, 2021',
      progress: 100,
    },
    {
      name: 'Data Science Fundamentals',
      startDate: 'Aug 20, 2021',
      progress: 100,
    },
  ];

  startEditing() {
    this.isEditing = true;
    this.editedUser = { ...this.user! };
  }

  cancelEditing() {
    this.isEditing = false;
  }

  onSubmit() {
    if (this.editedUser) {
      this.update.emit(this.editedUser);
      this.user = { ...this.editedUser };
      this.isEditing = false;
    }
  }

  closeProfile() {
    this.close.emit();
  }

  toggleCourseProgress() {
    this.showCourseProgress = !this.showCourseProgress;
  }
}
