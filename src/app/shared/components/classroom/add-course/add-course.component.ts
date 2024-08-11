import { Component } from '@angular/core';
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
  coverPhotoUrl: string | null = null;
  courseTitle: string = '';
  courseDescription: string = '';
  courseCourse: string = '';
  courseSection: string ='';

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
