import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserStatistics {
  totalUsers: number;
  newUsers: number;
  usersByRole: { role: string; count: number }[];
  usersByStatus: { status: string; count: number }[];
}

interface BaseReport {
  name: string;
  email: string;
  lastSeen: string;
}

interface LearnerReport extends BaseReport {
  progress: number;
  pace: string;
  averageScore: number;
}

interface InstructorReport extends BaseReport {
  course: string;
  averageLearnerFeedback: string;
  courseProgress: number;
}

type Report = LearnerReport | InstructorReport;

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent implements OnInit {
  activeRole: 'Learner' | 'Instructor' | 'Administrator' = 'Learner';
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

  learnerReports: LearnerReport[] = [
    {
      name: 'Alice Lee',
      email: 'alicelee@gmail.com',
      lastSeen: '2 days ago',
      progress: 70,
      pace: 'On track',
      averageScore: 85,
    },
    {
      name: 'Bob Smith',
      email: 'bobsmith@gmail.com',
      lastSeen: '1 day ago',
      progress: 40,
      pace: 'Behind',
      averageScore: 75,
    },
    {
      name: 'Charlie Brown',
      email: 'charliebrown@gmail.com',
      lastSeen: '3 days ago',
      progress: 90,
      pace: 'Ahead',
      averageScore: 95,
    },
  ];

  instructorReports: InstructorReport[] = [
    {
      name: 'Bob Smith',
      email: 'bobsmith@gmail.com',
      lastSeen: '1 day ago',
      course: 'Python courses',
      averageLearnerFeedback: 'Great',
      courseProgress: 75,
    },
    {
      name: 'Charlie Brown',
      email: 'charliebrown@gmail.com',
      lastSeen: '3 days ago',
      course: 'Management courses',
      averageLearnerFeedback: 'Average',
      courseProgress: 85,
    },
    {
      name: 'David Johnson',
      email: 'davidjohnson@gmail.com',
      lastSeen: '5 days ago',
      course: 'Media editing Courses',
      averageLearnerFeedback: 'Bad',
      courseProgress: 80,
    },
    {
      name: 'Emma Davis',
      email: 'emmadavis@gmail.com',
      lastSeen: '4 days ago',
      course: 'UI/UX Courses',
      averageLearnerFeedback: 'Great',
      courseProgress: 78,
    },
    {
      name: 'Frank Wilson',
      email: 'frankwilson@gmail.com',
      lastSeen: '6 days ago',
      course: 'HTML & CSS Courses',
      averageLearnerFeedback: 'Great',
      courseProgress: 92,
    },
    {
      name: 'Grace Martinez',
      email: 'gracemartinez@gmail.com',
      lastSeen: '7 days ago',
      course: 'Programming Courses',
      averageLearnerFeedback: 'Average',
      courseProgress: 88,
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

  setActiveRole(role: 'Learner' | 'Instructor' | 'Administrator'): void {
    this.activeRole = role;
  }

  getFilteredReports(): Report[] {
    return this.activeRole === 'Instructor' ? this.instructorReports : this.learnerReports;
  }

  isInstructorReport(report: Report): report is InstructorReport {
    return (report as InstructorReport).course !== undefined;
  }

  isLearnerReport(report: Report): report is LearnerReport {
    return (report as LearnerReport).progress !== undefined;
  }
}