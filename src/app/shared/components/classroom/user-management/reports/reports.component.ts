import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserStatistics {
  totalUsers: number;
  newUsers: number;
  usersByRole: { role: string; count: number }[];
  usersByStatus: { status: string; count: number }[];
}

interface IndividualReport {
  name: string;
  email: string;
  lastSeen: string;
  progress: number;
  pace: string;
  averageScore: number;
  role: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent implements OnInit {
  userStats: UserStatistics = {
    totalUsers: 2350,
    newUsers: 900,
    usersByRole: [
      { role: 'Administrator', count: 50 },
      { role: 'Instructor', count: 375 },
      { role: 'Learner', count: 1500 },
    ],
    usersByStatus: [
      { status: 'Active', count: 2000 },
      { status: 'Unconfirmed', count: 300 },
      { status: 'Disabled', count: 50 },
    ],
  };

  individualReports: IndividualReport[] = [
    {
      name: 'Alice Lee',
      email: 'alicelee@gmail.com',
      lastSeen: '2 days ago',
      progress: 70,
      pace: 'On track',
      averageScore: 85,
      role: 'Learner',
    },
    {
      name: 'Bob Smith',
      email: 'bobsmith@gmail.com',
      lastSeen: '1 day ago',
      progress: 40,
      pace: 'Behind',
      averageScore: 75,
      role: 'Learner',
    },
    {
      name: 'Charlie Brown',
      email: 'charliebrown@gmail.com',
      lastSeen: '3 days ago',
      progress: 90,
      pace: 'Ahead',
      averageScore: 95,
      role: 'Learner',
    },
    {
      name: 'David Johnson',
      email: 'davidjohnson@gmail.com',
      lastSeen: '1 hour ago',
      progress: 100,
      pace: 'Completed',
      averageScore: 92,
      role: 'Instructor',
    },
    {
      name: 'Emma Davis',
      email: 'emmadavis@gmail.com',
      lastSeen: 'Just now',
      progress: 100,
      pace: 'Completed',
      averageScore: 98,
      role: 'Administrator',
    },
  ];

  totalUsersData = [
    { month: 'Jun', users: 2000 },
    { month: 'Jul', users: 2200 },
    { month: 'Aug', users: 2100 },
    { month: 'Sep', users: 2350 },
  ];

  newUsersData = [
    { month: 'Jun', users: 500 },
    { month: 'Jul', users: 800 },
    { month: 'Aug', users: 600 },
    { month: 'Sep', users: 900 },
  ];

  activeRole: string = 'Learner';

  constructor() {}

  ngOnInit(): void {}

  getMaxUsers(): number {
    return Math.max(
      ...this.totalUsersData.map((d) => d.users),
      ...this.newUsersData.map((d) => d.users)
    );
  }

  getHeight(users: number): string {
    const maxUsers = this.getMaxUsers();
    return `${(users / maxUsers) * 100}%`;
  }

  getTotalUsersByRole(): number {
    return this.userStats.usersByRole.reduce(
      (sum, role) => sum + role.count,
      0
    );
  }

  getRolePercentage(count: number): string {
    return `${(count / this.userStats.totalUsers) * 100}%`;
  }

  getStatusPercentage(count: number): string {
    return `${(count / this.userStats.totalUsers) * 100}%`;
  }

  setActiveRole(role: string): void {
    this.activeRole = role;
  }

  getFilteredReports(): IndividualReport[] {
    return this.individualReports.filter(
      (report) => report.role === this.activeRole
    );
  }
}
