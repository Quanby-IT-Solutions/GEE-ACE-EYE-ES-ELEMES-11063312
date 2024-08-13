import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit, OnDestroy {
  examQuestions:any[] = this.dataService.getExamItems(); // Assuming you have imported or defined this array
  currentIndex = 0;
  currentQuestion:any = this.examQuestions[this.currentIndex];
  selectedOption = '';
  timeLeft = '1 hour'; 
  totalScore:number = 0;
  user:any;
  showResults:boolean = false;
  
  private totalSeconds: number = 3600; // 1 hour in seconds
  private remainingSeconds: number = this.totalSeconds;
  private timerInterval: any;
  constructor(
    private dataService:DataService,
    private supabaseService: SupabaseService,
    private router:Router
  ) {}


  private updateDisplayTime(): void {
    const hours = Math.floor(this.remainingSeconds / 3600);
    const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
    const seconds = this.remainingSeconds % 60;

    this.timeLeft = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  ngOnInit(): void {
    const user$ = this.supabaseService.currentUser.subscribe(user=> {
      this.user = user;
      console.log('USER',user);
      user$.unsubscribe();
    })
    this.timerInterval = setInterval(() => {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateDisplayTime();
      } else {
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
        }
        this.showResults = true;
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }


  prevQuestion(): void {
    if (this.currentIndex > 0) {
      if( this.currentQuestion.answer == this.currentQuestion.selectedAnswer){
        this.totalScore -=1;
      }
      this.currentIndex--;
      this.currentQuestion = this.examQuestions[this.currentIndex];
      this.selectedOption = '';
    }
  }

  nextQuestion(): void {
    if (this.currentIndex < this.examQuestions.length) {
      this.checkAnswer();
      this.currentIndex++;
      this.currentQuestion = this.examQuestions[this.currentIndex];
      this.selectedOption = '';
      this.triggerShake();
      if(this.currentIndex == this.examQuestions.length - 1){
        this.showResults = true;
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
        }
      }
    }
   
  }


  finishAttempt(){
    this.router.navigate([routes.tasks]);
  }

  checkAnswer(){
    if(this.currentQuestion.answer == this.currentQuestion.selectedAnswer){
      this.totalScore +=1;
    }
  }

  isShaking =false;
  triggerShake(): void {
    this.isShaking = true;
    setTimeout(() => {
      this.isShaking = false;
    }, 300);
  }
}
