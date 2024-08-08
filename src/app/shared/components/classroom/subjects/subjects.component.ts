import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TaskSummary {
  completed: number;
  total: number;
}

interface TestResults {
  completed: number;
}

interface Class {
  code: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent {
  taskSummary: TaskSummary = {
    completed: 36,
    total: 37,
  };

  testResults: TestResults = {
    completed: 12,
  };

  classes: Class[] = [
    {
      code: 'CCS 1101 1A',
      name: 'Fundamentals of Programming',
      icon: 'assets/programming-icon.png',
    },
    {
      code: 'CIC 1101 1B',
      name: 'Introduction to Computing',
      icon: 'assets/computing-icon.png',
    },
    {
      code: 'CIC 1101',
      name: 'Introduction to Computing',
      icon: 'assets/computing-icon.png',
    },
    // Add more dummy classes as needed
  ];
}
