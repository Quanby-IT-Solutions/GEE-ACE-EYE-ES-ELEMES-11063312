import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { NewUserApprovalComponent } from './user-approval/new-user-approval/new-user-approval.component';
import { ReportsComponent } from './reports/reports.component';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  role: string;
  position: string;
  department: string;
  courseCompleted: number;
  courseInProgress: number;
  courseNotStarted: number;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UserProfileComponent,
    NewUserApprovalComponent,
    ReportsComponent
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  showAddUserModal = false;
  selectedUser: User | null = null;
  activeView: 'allUsers' | 'reports' | 'newUserApproval' = 'allUsers';

  newUser: User = {
    id: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    role: '',
    position: '',
    department: '',
    courseCompleted: 0,
    courseInProgress: 0,
    courseNotStarted: 0,
  };

  // Sample user data (replace with actual data in your application)
  users: User[] = [
    {
      id: 'user123',
      firstName: 'Bob',
      lastName: 'Smith',
      middleName: 'Curtson',
      email: 'bobsmith@gmail.com',
      role: 'Instructor',
      position: 'Junior Developer',
      department: 'IT',
      courseCompleted: 3,
      courseInProgress: 1,
      courseNotStarted: 0,
    },
    {
      id: 'user124',
      firstName: 'Alice',
      lastName: 'Johnson',
      middleName: 'Mayfield',
      email: 'alicejohnson@gmail.com',
      role: 'Student',
      position: 'Intern',
      department: 'Engineering',
      courseCompleted: 0,
      courseInProgress: 0,
      courseNotStarted: 0,
    },
    // Add more sample users as needed
  ];

  setActiveView(view: 'allUsers' | 'reports' | 'newUserApproval') {
    this.activeView = view;
  }

  openModal() {
    this.showAddUserModal = true;
  }

  closeModal() {
    this.showAddUserModal = false;
    this.resetNewUser();
  }

  resetNewUser() {
    this.newUser = {
      id: '',
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      role: '',
      position: '',
      department: '',
      courseCompleted: 0,
      courseInProgress: 0,
      courseNotStarted: 0,
    };
  }

  onSubmit() {
    // Generate a new ID (in a real app, this would typically be done by the backend)
    this.newUser.id = 'user' + (this.users.length + 1);

    // Add the new user to the users array
    this.users.push({ ...this.newUser });

    console.log('New user added:', this.newUser);

    // Close the modal and reset the form
    this.closeModal();
  }

  updateUser(updatedUser: User) {
    // Find the user in the users array and update their information
    const index = this.users.findIndex((u) => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser };
    }
    // If this is the selected user, update that as well
    if (this.selectedUser && this.selectedUser.id === updatedUser.id) {
      this.selectedUser = { ...updatedUser };
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  closeUserProfile() {
    this.selectedUser = null;
  }
}
