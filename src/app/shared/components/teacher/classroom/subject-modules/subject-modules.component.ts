import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-modules',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [CommonModule]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;
  selectedTab: string = 'about'; // default tab
  selectedModuleIndex: number = 0; // Track the selected module

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.course = history.state.course;
    if (!this.course) {
      this.router.navigate(['/']);
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectModule(index: number): void {
    this.selectedModuleIndex = index;
  }

  goToNextModule(): void {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
    }
  }
}
