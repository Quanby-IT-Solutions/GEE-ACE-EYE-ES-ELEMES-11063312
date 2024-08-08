
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  evaluations: any[] = [];
  selectedEvaluation: any = null;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.evaluations = this.dataService.getDeptEvaluations();
  }

  selectEvaluation(evaluation: any) {
    this.selectedEvaluation = evaluation;
  }

  deselectEvaluation() {
    this.selectedEvaluation = null;
  }

  updateRating(question: string, rating: number) {
    if (this.selectedEvaluation) {
      const evaluation = this.selectedEvaluation;
      const index = evaluation.evaluations.findIndex((e: any) => e.question === question);
      if (index !== -1) {
        evaluation.evaluations[index].rating = rating;
        this.dataService.setDeptEvaluation(evaluation);
      }
    }
  }
}
