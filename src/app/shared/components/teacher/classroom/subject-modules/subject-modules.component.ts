import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-modules',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [CommonModule],
  providers: [DatePipe]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;

  constructor(private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.course = history.state.course;
    if (!this.course) {
      this.router.navigate(['/']);
    }
  }
}
