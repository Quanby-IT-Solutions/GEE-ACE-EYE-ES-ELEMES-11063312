import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/service/data/data.service';
import { UserService } from 'src/app/shared/service/user/user.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  courses: any[] = [];
  instructorCourses: any[] = []; 
  selectedCourse: any = null;
  expandedStudent: any = null;

  constructor(
    private dataService: DataService,     
    private userService: UserService
  ) {}

  async ngOnInit() {
    // Fetch the authenticated user's details
    const currentUser = await this.userService.getUser();

    // Fetch all courses
    this.courses = this.dataService.getCourses();

    // Filter courses that the authenticated user is teaching
    const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
    this.instructorCourses = this.courses.filter(course =>
      course.instructor === fullName
    );
  }

  getStudentProgress(student: any): number {
    return student && student.progress ? parseInt(student.progress, 10) : 0;
  }

  getStudentScore(course: any, studentName: string): any[] {
    const scores: any[] = [];
    
    course.modules.forEach((module: any) => {
      module.assignments.forEach((assignment: any) => {
        const studentScore = assignment.scores.find((score: any) => score.name === studentName);
        if (studentScore) {
          scores.push({ type: 'Assignment', title: assignment.name, score: studentScore.score });
        }
      });
      module.exams.forEach((exam: any) => {
        const studentScore = exam.scores.find((score: any) => score.name === studentName);
        if (studentScore) {
          scores.push({ type: 'Exam', title: exam.name, score: studentScore.score });
        }
      });
    });

    return scores;
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
      module.assignments
        .map((assignment: any) => ({
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
  
}
