import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { UserService } from 'src/app/shared/service/user/user.service'; // Import the UserService

interface Material {
  title: string;
  link: string;
}

interface Assignment {
  name: string;
  dueDate: Date | null;
}

interface Exam {
  name: string;
  dueDate: Date;
}

interface Module {
  title: string;
  description: string;
  about: string;
  materials: Material[];
  assignments: Assignment[];
  exams: Exam[];
}

interface Course {
  instructor: string;
  instructor_profile: string;
  course: string;
  subject: string;
  block: string;
  time: string;
  grade: string;
  enrolled: string;
  progress: string;
  imageUrl: string;
  modules: Module[];
  enrollmentKey: string;
  enrolledStudents: { name: string; email: string }[];
}

@Component({
  selector: 'app-explore-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  sortMenuOpen: boolean = false;

  enrollmentModalOpen: boolean = false;
  selectedCourse: Course | null = null;
  enrollmentKeyInput: string = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private userService: UserService // Inject the UserService
  ) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courses = this.dataService.getCourses();
    this.filteredCourses = [...this.courses];
  }

  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.course.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSortMenu(): void {
    this.sortMenuOpen = !this.sortMenuOpen;
  }

  sortCourses(order: 'asc' | 'desc' = 'asc'): void {
    this.filteredCourses.sort((a, b) =>
      order === 'asc'
        ? a.course.toLowerCase().localeCompare(b.course.toLowerCase())
        : b.course.toLowerCase().localeCompare(a.course.toLowerCase())
    );
    this.sortMenuOpen = false;
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
    this.enrollmentModalOpen = true;
  }

  closeEnrollmentModal(): void {
    this.enrollmentModalOpen = false;
    this.enrollmentKeyInput = '';
    this.selectedCourse = null;
  }

//   async enrollInCourse(): Promise<void> {
//     if (this.selectedCourse && this.enrollmentKeyInput === this.selectedCourse.enrollmentKey) {
//       try {
//         const currentUser = await this.userService.getUser(); // Fetch the authenticated user's details
        
//         // Construct the full name using first_name and last_name
//         const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
//         const student = { name: fullName, email: currentUser.email };

//         this.dataService.enrollStudentInCourse(this.courses.indexOf(this.selectedCourse), student);

//         // Mark the course as enrolled
//         this.selectedCourse.enrolled = 'yes';

//         this.dataService.updateCourse(this.selectedCourse); // Update the course in the service
//         alert(`${fullName} has been successfully enrolled in the course!`);
//         this.closeEnrollmentModal();
//         this.router.navigate([routes.subject_modules]); // Navigate to the subjects page
//       } catch (error) {
//         console.error('Error enrolling in course:', error);
//         alert('There was an issue enrolling in the course. Please try again.');
//       }
//     } else {
//       alert('Incorrect enrollment key. Please try again.');
//     }
// }

async enrollInCourse(): Promise<void> {
  if (this.selectedCourse && this.enrollmentKeyInput === this.selectedCourse.enrollmentKey) {
    try {
      const currentUser = await this.userService.getUser(); // Fetch the authenticated user's details
      
      // Construct the full name using first_name and last_name
      const fullName = `${currentUser.first_name} ${currentUser.last_name}`;
      const student = { name: fullName, email: currentUser.email };

      this.dataService.enrollStudentInCourse(this.courses.indexOf(this.selectedCourse), student);

      // Mark the course as enrolled
      this.selectedCourse.enrolled = 'yes';

      this.dataService.updateCourse(this.selectedCourse); // Update the course in the service
      alert(`${fullName} has been successfully enrolled in the course!`);
      this.closeEnrollmentModal();

      // Update the course list to reflect the enrollment
      this.fetchCourses();

    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('There was an issue enrolling in the course. Please try again.');
    }
  } else {
    alert('Incorrect enrollment key. Please try again.');
  }
}



  clearLocalStorage(): void {
    localStorage.clear(); 
    this.fetchCourses(); // Refresh the courses list
    alert('Local storage cleared. Courses have been refreshed.');
  }
}
