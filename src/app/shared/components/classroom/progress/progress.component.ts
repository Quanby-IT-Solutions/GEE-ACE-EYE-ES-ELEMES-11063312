import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  courses: any[] = [];
  enrolledCourses: any[] = []; // Initialize with an empty array
  selectedCourse: any = null;
  currentUser: any; // To hold the current user's details

  constructor(
    private dataService: DataService,     
    private userService: UserService // Inject UserService
  ) {}

  async ngOnInit() {
    // Fetch the authenticated user's details
    this.currentUser = await this.userService.getUser();

    // Fetch all courses
    this.courses = this.dataService.getCourses();

    // Filter courses that the authenticated user is enrolled in
    const fullName = `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    this.enrolledCourses = this.courses.filter(course =>
      course.enrolledStudents.some((student: { name: string }) => student.name === fullName)
    );
  }

  getUserProgress(course: any): number {
    const fullName = `${this.currentUser.first_name} ${this.currentUser.last_name}`;
    const student = course.enrolledStudents.find((student: { name: string }) => student.name === fullName);
    return student && student.progress ? parseInt(student.progress, 10) : 0;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
    
  backToCourses() {
    this.selectedCourse = null;
  }

  generateCertificate() {
    if (this.selectedCourse) {
      const doc = new jsPDF('landscape');

      const fullName = `${this.currentUser.first_name} ${this.currentUser.last_name}`;
      const courseTitle = this.selectedCourse.course;
      const instructorName = this.selectedCourse.instructor;
      const date = new Date().toLocaleDateString();

      doc.setFillColor(240, 240, 240);
      doc.rect(0, 0, 297, 210, 'F');

      doc.setFontSize(30);
      doc.setFont('helvetica', 'bold');
      doc.text('Certificate of Completion', 148.5, 40, { align: 'center' });

      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.text(`This certificate is proudly presented to`, 148.5, 70, { align: 'center' });

      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(fullName, 148.5, 90, { align: 'center' });

      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.text(`For successfully completing the course`, 148.5, 110, { align: 'center' });

      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text(courseTitle, 148.5, 130, { align: 'center' });

      doc.setFontSize(16);
      doc.setFont('helvetica', 'normal');
      doc.text(`Instructor: ${instructorName}`, 148.5, 150, { align: 'center' });

      doc.setFontSize(14);
      doc.text(`Date: ${date}`, 148.5, 170, { align: 'center' });

      // Adding a signature line
      doc.setFontSize(14);
      doc.text('Signature', 148.5, 190, { align: 'center' });
      doc.line(100, 180, 200, 180);

      // Save the PDF
      doc.save(`${fullName}_${courseTitle}_Certificate.pdf`);
    }
  }
}
