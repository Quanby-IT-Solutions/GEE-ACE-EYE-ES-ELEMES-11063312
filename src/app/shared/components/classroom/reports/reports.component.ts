import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from '@supabase/supabase-js';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import jsPDF from 'jspdf';
import { GuestUser } from 'src/app/shared/models/model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit, OnDestroy {
  public courses: any[] = [];
  public instructorCourses: any[] = [];
  public selectedCourse: any = null;
  public expandedStudent: any = null;
  public role: string | null = null;
  public user: User | GuestUser | null = null;

  private userSubscription: Subscription | undefined;
  private routerSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.checkRoute();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

    const currentUser = await this.userService.getUser();
    this.user = currentUser;
    this.role = currentUser?.role;
    
    console.log('Reports - Authenticated User Role:', this.role);

    this.userSubscription = this.userService.currentUser.subscribe(user => {
      this.user = user;
    });

    this.courses = this.dataService.getCourses();
    console.log('Fetched courses:', this.courses);

    if (this.role === 'department_admin') {
      // Display all courses if the user is a department admin
      this.instructorCourses = this.courses;
    } else {
      // Otherwise, filter courses that the authenticated user is teaching
      const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
      this.instructorCourses = this.courses.filter(course =>
        course.instructor.toLowerCase() === fullName.toLowerCase()
      );
    }

    console.log('Courses to display:', this.instructorCourses);
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  checkRoute() {
    const mainRoutes = ['/', '/home', '/dashboard']; // Define your main routes here
    // Logic to check the active route
  }

  getStudentProgress(student: any): number {
    return student && student.progress ? parseInt(student.progress, 10) : 0;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  backToCourses() {
    this.selectedCourse = null;
    this.expandedStudent = null;
  }

  toggleStudentDetails(student: any) {
    this.expandedStudent = this.expandedStudent === student ? null : student;
  }

  isStudentExpanded(student: any): boolean {
    return this.expandedStudent === student;
  }

  getStudentAssignments(course: any, studentName: string) {
    return course.modules.flatMap((module: any) =>
      module.assignments.map((assignment: any) => ({
        title: `Assignment: ${assignment.name}`,
        score: assignment.scores.find((s: any) => s.name === studentName)?.score || 'N/A'
      }))
    );
  }

  getStudentQuizzes(course: any, studentName: string) {
    return course.modules.flatMap((module: any) =>
      module.exams
        .filter((exam: any) => exam.name.toLowerCase().includes('quiz'))
        .map((quiz: any) => ({
          title: `Quiz: ${quiz.name}`,
          score: quiz.scores.find((s: any) => s.name === studentName)?.score || 'N/A'
        }))
    );
  }

  getStudentExams(course: any, studentName: string) {
    return course.modules.flatMap((module: any) =>
      module.exams
        .filter((exam: any) => !exam.name.toLowerCase().includes('quiz'))
        .map((exam: any) => ({
          title: `Exam: ${exam.name}`,
          score: exam.scores.find((s: any) => s.name === studentName)?.score || 'N/A'
        }))
    );
  }

  generateCertificate(studentName: string) {
    if (this.selectedCourse) {
      const doc = new jsPDF('landscape');

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
      doc.text(studentName, 148.5, 90, { align: 'center' });

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
      doc.save(`${studentName}_${courseTitle}_Certificate.pdf`);
    }
  }
}
