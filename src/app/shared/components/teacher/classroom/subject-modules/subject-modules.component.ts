import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SafeUrlPipe } from 'src/app/shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-subject-modules',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [CommonModule, SafeUrlPipe, PdfViewerModule, FormsModule]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;
  selectedTab: string = 'about'; // Default tab
  selectedModuleIndex: number = 0; // Track the selected module
  selectedMaterial: any = null; // Track the selected material
  isEditing: boolean = false; // Track if editing mode is enabled

  searchTerm: string = '';
  filteredEnrolledStudents: any[] = [];
  filteredNotEnrolledStudents: any[] = [];
  showEnrollModal: boolean = false;

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.course = history.state.course || this.fetchCourseData();

    if (!this.course) {
      this.router.navigate(['/']);  // Redirect if course data is missing
    } else {
      // Ensure consistent structure for students
      this.course.enrolledStudents = this.course.enrolledStudents.map((student: any) => ({
        name: student.name,
        email: student.email || '',
        progress: student.progress || 0,
      }));

      this.course.notEnrolledStudents = this.course.notEnrolledStudents.map((student: any) => ({
        name: student.name,
        email: student.email || '',
        progress: student.progress || 0,
      }));

      // Initialize filtered students with full data from the course object
      this.filteredEnrolledStudents = [...this.course.enrolledStudents];
      this.filteredNotEnrolledStudents = [...this.course.notEnrolledStudents];
    }
  }

  fetchCourseData(): any {
    return null; // Replace this with actual data fetching logic
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
    if (!material.link) {
      console.error('No link provided for this material');
    } else {
      fetch(material.link)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
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
  }

  replaceMaterialFile(material: any, event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        material.link = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
  }

  addAssignment(): void {
    this.course.modules[this.selectedModuleIndex].assignments.push({
      name: '',
      dueDate: '',
    });
  }

  removeAssignment(index: number): void {
    this.course.modules[this.selectedModuleIndex].assignments.splice(index, 1);
  }

  addExam(): void {
    this.course.modules[this.selectedModuleIndex].exams.push({
      name: '',
      dueDate: '',
    });
  }

  removeExam(index: number): void {
    this.course.modules[this.selectedModuleIndex].exams.splice(index, 1);
  }

  enrollStudent(student: any): void {
    this.course.enrolledStudents.push(student);
    const index = this.course.notEnrolledStudents.indexOf(student);
    if (index !== -1) {
      this.course.notEnrolledStudents.splice(index, 1);
    }
    this.searchStudents(); // Update search results
  }

  openEnrollModal(): void {
    this.showEnrollModal = true;
  }

  closeEnrollModal(): void {
    this.showEnrollModal = false;
  }

  searchStudents(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredEnrolledStudents = this.course.enrolledStudents.filter((student: any) =>
      student.name.toLowerCase().includes(term) || student.email.toLowerCase().includes(term)
    );

    this.filteredNotEnrolledStudents = this.course.notEnrolledStudents.filter((student: any) =>
      student.name.toLowerCase().includes(term) || (student.email && student.email.toLowerCase().includes(term))
    );
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
      material.index = index + 1;
    });
  }
}
