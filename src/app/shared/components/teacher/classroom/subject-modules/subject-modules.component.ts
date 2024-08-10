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
  selectedTab: string = 'about'; // Default tab
  selectedModuleIndex: number = 0; // Track the selected module

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.course = history.state.course;
    if (!this.course) {
      this.router.navigate(['/']);
    } else {
      this.sortMaterialsByDate(); // Sort materials on initialization
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectModule(index: number): void {
    this.selectedModuleIndex = index;
    this.sortMaterialsByDate(); // Sort materials when the module changes
  }

  goToNextModule(): void {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
      this.sortMaterialsByDate(); // Sort materials when navigating to the next module
    }
  }

  private sortMaterialsByDate(): void {
    const materials = this.course.modules[this.selectedModuleIndex].materials;
    materials.sort((a: any, b: any) => a.uploadDate - b.uploadDate);
    materials.forEach((material: any, index: number) => {
      material.index = index + 1; // Add numbering based on sorted order
    });
  }

  getMaterialIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return 'fa-book';
      case 'video':
        return 'fa-video';
      case 'image':
        return 'fa-image';
      default:
        return 'fa-file';
    }
  }
}
