import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule here
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

  contentTypes = [
    { type: 'video', label: 'Video', description: 'Add a video', fileName: '' },
    { type: 'audio', label: 'Audio', description: 'Add an audio file', fileName: '' },
    { type: 'pdf', label: 'PDF', description: 'Add a PDF', fileName: '' },
    { type: 'word', label: 'Word', description: 'Add a Word file', fileName: '' },
    { type: 'excel', label: 'Excel', description: 'Add an Excel file', fileName: '' },
    { type: 'powerPoint', label: 'PowerPoint', description: 'Add a PowerPoint file', fileName: '' },
    { type: 'document', label: 'Document', description: 'Add a document', fileName: '' },
    { type: 'zip', label: 'Zip', description: 'Add a zip file', fileName: '' },
    { type: 'presentation', label: 'Presentation', description: 'Add a presentation', fileName: '' },
    { type: 'slides', label: 'Slides', description: 'Add slides', fileName: '' },
    { type: 'scorm', label: 'SCORM', description: 'Add SCORM package', fileName: '' },
    { type: 'spreadsheet', label: 'Spreadsheet', description: 'Add a spreadsheet', fileName: '' },
    { type: 'adobeCaptivate', label: 'Adobe Captivate', description: 'Add Adobe Captivate file', fileName: '' },
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

  triggerFileUpload(contentType: { type: string; label: string; description: string, fileName: string }): void {
    const inputElement = this.getInputElement(contentType.type);
    if (inputElement) {
      inputElement.click();
    }
  }

  onFileSelected(contentType: { type: string; label: string; description: string, fileName: string }, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      contentType.fileName = input.files[0].name;
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

  saveCourse(): void {
    console.log('Course saved', {
      title: this.courseTitle,
      description: this.courseDescription,
      section: this.courseSection,
      course: this.courseCourse,
      coverPhoto: this.coverPhotoUrl,
    });
  }

  cancelCourseCreation(): void {
    console.log('Course creation cancelled');
  }
}
