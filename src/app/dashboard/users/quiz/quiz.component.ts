import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  examQuestions = this.dataService.getExamItems(); // Assuming you have imported or defined this array
  currentIndex = 0;
  currentQuestion = this.examQuestions[this.currentIndex];
  selectedOption = '';
  timeLeft = '1 hour'; // You can set this dynamically if needed

  constructor(
    private dataService:DataService
  ) {}

  ngOnInit(): void {}

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuestion = this.examQuestions[this.currentIndex];
      this.selectedOption = '';
    }
  }

  nextQuestion(): void {
    if (this.currentIndex < this.examQuestions.length - 1) {
      this.currentIndex++;
      this.currentQuestion = this.examQuestions[this.currentIndex];
      this.selectedOption = '';
    }
  }
}
