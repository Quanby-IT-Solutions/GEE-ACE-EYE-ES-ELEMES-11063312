import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface EvaluationForm {
  course: string;
  overallRating: number | null;
  instructorRating: number | null;
  taRating: number | null;
  discussionRating: number | null;
  homeworkRating: number | null;
  examsRating: number | null;
  videosRating: number | null;
  overallSatisfaction: number | null;
  liked: string;
  improvement: string;
}

@Component({
  selector: 'app-form-evalution',
  templateUrl: './form-evalution.component.html',
  styleUrls: ['./form-evalution.component.scss']
})
export class FormEvalutionComponent implements OnInit {
  selectedCourse: any;
  userRole: string | null = null;

  evaluationForm: EvaluationForm = {
    course: '',
    overallRating: null,
    instructorRating: null,
    taRating: null,
    discussionRating: null,
    homeworkRating: null,
    examsRating: null,
    videosRating: null,
    overallSatisfaction: null,
    liked: '',
    improvement: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedCourse = navigation?.extras.state?.['course'];
    this.userRole = navigation?.extras.state?.['role'] || null;
  }

  ngOnInit(): void {
    if (!this.selectedCourse) {
      this.router.navigate(['/evaluation']);
    } else {
      this.evaluationForm.course = this.selectedCourse.course;
    }
  }

  submitEvaluation() {
    localStorage.setItem('courseEvaluation', JSON.stringify(this.evaluationForm));
    alert('Evaluation submitted and saved to local storage!');
  }
}
