import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-courses-modules',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './explore-courses-modules.component.html',
  styleUrls: ['./explore-courses-modules.component.scss']
})
export class ExploreCoursesModulesComponent implements OnInit {
  course: any;
  selectedModuleIndex: number = 0;
  selectedTab: string = 'about';
  showEnrollModal: boolean = false;
  enrollmentKey: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.course = navigation?.extras?.state?.['course'];
  }

  ngOnInit(): void {}

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  openEnrollModal(): void {
    this.showEnrollModal = true;
  }

  closeEnrollModal(): void {
    this.showEnrollModal = false;
  }

  proceedEnrollment(): void {
    console.log('Enrollment key entered:', this.enrollmentKey);
    this.closeEnrollModal();
    // Handle enrollment logic here if needed
  }

  getMaterialIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return 'fa-file-pdf';
      case 'video':
        return 'fa-video';
      default:
        return 'fa-file';
    }
  }
}
