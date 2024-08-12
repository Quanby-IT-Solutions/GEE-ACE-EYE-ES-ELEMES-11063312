import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  courseTitle: string = '';
  courseDescription: string = '';
  courseCourse: string = '';
  courseSection: string = '';
  enrollmentKey: string = ''; 
  coverPhotoUrl: string | null = null;

  modules: any[] = [];
  currentModuleIndex: number | null = null;
  currentItemIndex: number | null = null;

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

  isUploadModalOpen: boolean = false; 
  uploadTarget: { type: string, moduleIndex: number, itemIndex: number } | null = null; 

  constructor(private dataService: DataService) {}

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
    const newModule = {
      title: '',
      materials: [],
      assignments: [],
      exams: []
    };
    this.modules.push(newModule);
    this.currentModuleIndex = this.modules.length - 1;
  }

  addMaterial(moduleIndex: number): void {
    this.modules[moduleIndex].materials.push({
      title: '',
      description: '',
      fileName: ''
    });
    this.currentItemIndex = this.modules[moduleIndex].materials.length - 1;
  }

  addAssignment(moduleIndex: number): void {
    this.modules[moduleIndex].assignments.push({
      title: '',
      description: '',
      fileName: ''
    });
    this.currentItemIndex = this.modules[moduleIndex].assignments.length - 1;
  }

  addExam(moduleIndex: number): void {
    this.modules[moduleIndex].exams.push({
      title: '',
      description: '',
      fileName: ''
    });
    this.currentItemIndex = this.modules[moduleIndex].exams.length - 1;
  }

  deleteModule(moduleIndex: number): void {
    this.modules.splice(moduleIndex, 1);
  }

  deleteMaterial(moduleIndex: number, materialIndex: number): void {
    this.modules[moduleIndex].materials.splice(materialIndex, 1);
  }

  deleteAssignment(moduleIndex: number, assignmentIndex: number): void {
    this.modules[moduleIndex].assignments.splice(assignmentIndex, 1);
  }

  deleteExam(moduleIndex: number, examIndex: number): void {
    this.modules[moduleIndex].exams.splice(examIndex, 1);
  }

  openUploadModal(type: string, moduleIndex: number, itemIndex: number): void {
    this.uploadTarget = { type, moduleIndex, itemIndex };
    this.isUploadModalOpen = true;
  }

  closeUploadModal(): void {
    this.isUploadModalOpen = false;
    this.uploadTarget = null;
  }

  triggerFileUpload(contentType: { type: string; label: string; description: string }): void {
    const inputElement = this.getInputElement(contentType.type);
    if (inputElement) {
      inputElement.click();
    }
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
    if (input.files && input.files.length > 0 && this.uploadTarget !== null) {
      const fileName = input.files[0].name;
      const { type, moduleIndex, itemIndex } = this.uploadTarget;

      if (type === 'material') {
        this.modules[moduleIndex].materials[itemIndex].fileName = fileName;
      } else if (type === 'assignment') {
        this.modules[moduleIndex].assignments[itemIndex].fileName = fileName;
      } else if (type === 'exam') {
        this.modules[moduleIndex].exams[itemIndex].fileName = fileName;
      }
    }
  }

  saveCourse(): void {
    const newCourse = {
      instructor: 'Anton Caesar Cabais',
      instructor_profile: 'assets/img/bini.jpeg',
      course: this.courseTitle,
      subject: this.courseCourse,
      block: this.courseSection,
      enrollmentKey: this.enrollmentKey,
      time: '10:00 - 11:00',
      grade: 'N/A',
      progress: '0',
      imageUrl: this.coverPhotoUrl,
      enrolled: 'no',
      modules: this.modules,
      enrolledStudents: []
    };
    
    console.log('New Course:', newCourse); // Debugging: Log the new course to verify the data structure

    this.dataService.addCourse(newCourse);
    
    console.log('Course list after addition:', this.dataService.getCourses()); // Debugging: Log the updated list of courses
  }

  cancelCourseCreation(): void {
    console.log('Course creation cancelled');
  }
}
