import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PendingUser {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-new-user-approval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-user-approval.component.html',
  styleUrl: './new-user-approval.component.scss',
})
export class NewUserApprovalComponent implements OnInit {
  pendingUsers: PendingUser[] = [
    { id: 'user123', firstName: 'Jane', lastName: 'Doe', middleName: 'L', role: 'Learner', position: 'N/A', department: 'Engineering' },
    { id: 'user124', firstName: 'John', lastName: 'Doe', middleName: 'M', role: 'Learner', position: 'N/A', department: 'Product' },
    { id: 'user125', firstName: 'Bob', lastName: 'Smith', middleName: 'N', role: 'Learner', position: 'N/A', department: 'Data' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  approveUser(user: PendingUser): void {
    // Implement approval logic here
    console.log('Approving user:', user);
  }

  declineUser(user: PendingUser): void {
    // Implement decline logic here
    console.log('Declining user:', user);
  }
}
