import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from 'src/app/shared/pipes/safe-url.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-manage-courses',
  standalone: true,
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss'],
  imports: [CommonModule, SafeUrlPipe, PdfViewerModule]
})
export class ManageCoursesComponent implements OnInit {
  course: any = null;
  selectedTab: string = 'about'; // Default tab
  selectedModuleIndex: number = 0; // Track the selected module
  selectedMaterial: any = null; // Track the selected material

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

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
    this.selectedMaterial = null; // Reset selected material when changing tabs
  }

  selectModule(index: number): void {
    this.selectedModuleIndex = index;
    this.sortMaterialsByDate(); // Sort materials when the module changes
    this.selectedMaterial = null; // Reset selected material when changing modules
  }

  goToNextModule(): void {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
      this.sortMaterialsByDate(); // Sort materials when navigating to the next module
      this.selectedMaterial = null; // Reset selected material when moving to the next module
    }
  }

  selectMaterial(material: any): void {
    this.selectedMaterial = material;
    console.log('Attempting to load material:', material.link);
  
    if (!material.link) {
      console.error('No link provided for this material');
    } else {
      // If possible, load directly to check.
      fetch(material.link)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Material loaded successfully:', material.link);
        })
        .catch((error) => {
          console.error('Error loading material:', error);
        });
    }
  }
  
  

  downloadMaterial(material: any, event: Event): void {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = material.link;
    link.download = material.title;
    link.click();
    console.log('Download link clicked:', material.link);
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

  closeMaterialView(): void {
    this.selectedMaterial = null;
  }

  private sortMaterialsByDate(): void {
    const materials = this.course.modules[this.selectedModuleIndex].materials;
    materials.sort((a: any, b: any) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime());
    materials.forEach((material: any, index: number) => {
      material.index = index + 1; // Add numbering based on sorted order
    });
  }
}
