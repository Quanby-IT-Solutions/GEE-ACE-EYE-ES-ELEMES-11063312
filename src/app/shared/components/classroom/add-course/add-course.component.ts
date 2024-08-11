import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CourseMaterial {
  title: string;
  description: string;
  fileName: string;
}

interface CourseModule {
  title: string;
  materials: CourseMaterial[];
  assignments: CourseMaterial[];
  exams: CourseMaterial[];
}

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AddCourseComponent {
  @ViewChild('videoInput') videoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('audioInput') audioInput!: ElementRef<HTMLInputElement>;
  @ViewChild('pdfInput') pdfInput!: ElementRef<HTMLInputElement>;
  @ViewChild('wordInput') wordInput!: ElementRef<HTMLInputElement>;
  @ViewChild('excelInput') excelInput!: ElementRef<HTMLInputElement>;
  @ViewChild('powerPointInput') powerPointInput!: ElementRef<HTMLInputElement>;
  @ViewChild('documentInput') documentInput!: ElementRef<HTMLInputElement>;
  @ViewChild('zipInput') zipInput!: ElementRef<HTMLInputElement>;
  @ViewChild('presentationInput') presentationInput!: ElementRef<HTMLInputElement>;
  @ViewChild('slidesInput') slidesInput!: ElementRef<HTMLInputElement>;
  @ViewChild('scormInput') scormInput!: ElementRef<HTMLInputElement>;
  @ViewChild('spreadsheetInput') spreadsheetInput!: ElementRef<HTMLInputElement>;
  @ViewChild('adobeCaptivateInput') adobeCaptivateInput!: ElementRef<HTMLInputElement>;

  coverPhotoUrl: string | null = null;
  courseTitle: string = '';
  courseDescription: string = '';
  courseCourse: string = '';
  courseSection: string = '';

  modules: CourseModule[] = [
    {
      title: '',
      materials: [],
      assignments: [],
      exams: []
    }
  ];

  currentUploadType: string = '';
  currentModuleIndex: number = -1;
  currentItemIndex: number = -1;
  isUploadModalOpen: boolean = false;

  contentTypes = [
    { type: 'video', label: 'Video', description: 'Add a video' },
    { type: 'audio', label: 'Audio', description: 'Add an audio file' },
    { type: 'pdf', label: 'PDF', description: 'Add a PDF' },
    { type: 'word', label: 'Word', description: 'Add a Word file' },
    { type: 'excel', label: 'Excel', description: 'Add an Excel file' },
    { type: 'powerPoint', label: 'PowerPoint', description: 'Add a PowerPoint file' },
    { type: 'document', label: 'Document', description: 'Add a document' },
    { type: 'zip', label: 'Zip', description: 'Add a zip file' },
    { type: 'presentation', label: 'Presentation', description: 'Add a presentation' },
    { type: 'slides', label: 'Slides', description: 'Add slides' },
    { type: 'scorm', label: 'SCORM', description: 'Add SCORM package' },
    { type: 'spreadsheet', label: 'Spreadsheet', description: 'Add a spreadsheet' },
    { type: 'adobeCaptivate', label: 'Adobe Captivate', description: 'Add Adobe Captivate file' },
  ];

  onCoverPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.coverPhotoUrl = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  addModule(): void {
    this.modules.push({
      title: '',
      materials: [],
      assignments: [],
      exams: []
    });
  }

  addMaterial(moduleIndex: number): void {
    this.modules[moduleIndex].materials.push({
      title: '',
      description: '',
      fileName: ''
    });
  }

  addAssignment(moduleIndex: number): void {
    this.modules[moduleIndex].assignments.push({
      title: '',
      description: '',
      fileName: ''
    });
  }

  addExam(moduleIndex: number): void {
    this.modules[moduleIndex].exams.push({
      title: '',
      description: '',
      fileName: ''
    });
  }

  openUploadModal(type: string, moduleIndex: number, itemIndex: number): void {
    this.currentUploadType = type;
    this.currentModuleIndex = moduleIndex;
    this.currentItemIndex = itemIndex;
    this.isUploadModalOpen = true;
  }

  closeUploadModal(): void {
    this.isUploadModalOpen = false;
  }

  triggerFileUpload(contentType: { type: string }): void {
    const inputElement = this.getInputElement(contentType.type);
    if (inputElement) {
      inputElement.click();
    }
    this.closeUploadModal();
  }

  getInputElement(type: string): HTMLInputElement | null {
    switch (type) {
      case 'video':
        return this.videoInput.nativeElement;
      case 'audio':
        return this.audioInput.nativeElement;
      case 'pdf':
        return this.pdfInput.nativeElement;
      case 'word':
        return this.wordInput.nativeElement;
      case 'excel':
        return this.excelInput.nativeElement;
      case 'powerPoint':
        return this.powerPointInput.nativeElement;
      case 'document':
        return this.documentInput.nativeElement;
      case 'zip':
        return this.zipInput.nativeElement;
      case 'presentation':
        return this.presentationInput.nativeElement;
      case 'slides':
        return this.slidesInput.nativeElement;
      case 'scorm':
        return this.scormInput.nativeElement;
      case 'spreadsheet':
        return this.spreadsheetInput.nativeElement;
      case 'adobeCaptivate':
        return this.adobeCaptivateInput.nativeElement;
      default:
        return null;
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const fileName = input.files && input.files.length > 0 ? input.files[0].name : '';

    if (fileName && this.currentModuleIndex > -1 && this.currentItemIndex > -1) {
      switch (this.currentUploadType) {
        case 'material':
          this.modules[this.currentModuleIndex].materials[this.currentItemIndex].fileName = fileName;
          break;
        case 'assignment':
          this.modules[this.currentModuleIndex].assignments[this.currentItemIndex].fileName = fileName;
          break;
        case 'exam':
          this.modules[this.currentModuleIndex].exams[this.currentItemIndex].fileName = fileName;
          break;
      }
    }
  }

  saveCourse(): void {
    console.log('Course saved', {
      title: this.courseTitle,
      description: this.courseDescription,
      section: this.courseSection,
      course: this.courseCourse,
      coverPhoto: this.coverPhotoUrl,
      modules: this.modules
    });
  }

  cancelCourseCreation(): void {
    console.log('Course creation cancelled');
  }
}
