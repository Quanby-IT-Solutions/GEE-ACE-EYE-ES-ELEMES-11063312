import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { NewUserApprovalComponent } from './user-approval/new-user-approval/new-user-approval.component';
import { ReportsComponent } from './reports/reports.component';
import { UserService } from 'src/app/shared/service/user/user.service';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  position: string;
  department: string;
  courseCompleted: number;
  courseInProgress: number;
  courseNotStarted: number;
  status: string;
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
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  showAddUserModal = false;
  selectedUser: User | null = null;
  activeView: 'allUsers' | 'reports' | 'newUserApproval' = 'allUsers';

  newUser: User = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    position: '',
    department: '',
    courseCompleted: 0,
    courseInProgress: 0,
    courseNotStarted: 0,
    status: 'Offline',
  };

  users: User[] = []; // Initialize empty, will be populated by fetching users
  filteredUsers: User[] = []; // Users filtered by search

  searchTerm: string = '';

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.userService.getAllUsers(); // Fetch all users
    this.filteredUsers = [...this.users]; // Initialize filteredUsers
  }

  trackByUserId(index: number, user: User): string {
    return user.id;
  }

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
      first_name: '',
      last_name: '',
      email: '',
      role: '',
      position: '',
      department: '',
      courseCompleted: 0,
      courseInProgress: 0,
      courseNotStarted: 0,
      status: 'Offline',
    };
  }

  async onSubmit() {
    this.newUser.id = 'user' + (this.users.length + 1);

    this.users.push({ ...this.newUser });
    this.filteredUsers.push({ ...this.newUser }); // Also add to filteredUsers

    console.log('New user added:', this.newUser);

    // Close the modal and reset the form
    this.closeModal();
  }

  searchUsers() {
    const term = this.searchTerm.toLowerCase();
    if (term === '') {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(
        user =>
          user.first_name.toLowerCase().includes(term) ||
          user.last_name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term)
      );
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  closeUserProfile() {
    this.selectedUser = null;
  }

  updateUser(updatedUser: any) {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = {
        ...this.users[index],
        first_name: updatedUser.firstName,
        last_name: updatedUser.lastName,
        status: updatedUser.status,
      };
    }
    if (this.selectedUser && this.selectedUser.id === updatedUser.id) {
      this.selectedUser = { ...this.users[index] };
    }
  }
}
