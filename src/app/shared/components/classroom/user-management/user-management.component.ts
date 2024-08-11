import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  showAddUserModal = false;
  newUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    department: '',
  };

  openModal() {
    this.showAddUserModal = true;
  }

  closeModal() {
    this.showAddUserModal = false;
  }

  onSubmit() {
    console.log('New user:', this.newUser);
    // Here you would typically send the new user data to your backend
    this.closeModal();
    // Reset the form
    this.newUser = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      department: '',
    };
  }
}
