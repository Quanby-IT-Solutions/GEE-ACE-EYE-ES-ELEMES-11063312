import { Component } from '@angular/core';

@Component({
  selector: 'app-test-scores',
  templateUrl: './test-scores.component.html',
  styleUrls: ['./test-scores.component.scss']
})
export class TestScoresComponent {
  testScores = [
    {
      class: 'Fundamentals of Programming',
      instructor: 'Anne Hathaway',
      quizName: 'Final Exam',
      percentage: 90,
      score: '90/100',
      duration: '01:25:30',
      completedDate: 'Mon Oct 30, 2024 at 1:30pm',
      finalGrade: 98
    },
    {
      class: 'Intro to Programming',
      instructor: 'Hello World',
      quizName: 'Midterm Exam',
      percentage: 10,
      score: '90/100',
      duration: '01:25:30',
      completedDate: 'Mon Oct 30, 2024 at 1:30pm',
      finalGrade: 74
    },
    {
      class: 'Software Engineering',
      instructor: 'Deepdood',
      quizName: 'Quiz 1',
      percentage: 60,
      score: '90/100',
      duration: '01:25:30',
      completedDate: 'Mon Oct 30, 2024 at 1:30pm',
      finalGrade: 88
    },
    {
      class: 'Fundamentals of Programming',
      instructor: 'Winnie the Pooh',
      quizName: 'Final Exam',
      percentage: 40,
      score: '90/100',
      duration: '01:25:30',
      completedDate: 'Mon Oct 30, 2024 at 1:30pm',
      finalGrade: 81
    }
  ];

  getProgressBarClass(percentage: number) {
    if (percentage >= 90) {
      return 'bg-green-500';
    } else if (percentage >= 60) {
      return 'bg-blue-500';
    } else if (percentage >= 40) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  }
}
