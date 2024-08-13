import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/service/user/user.service';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from '../../../classroom/task-view/task-view.component';

@Component({
  selector: 'app-subject-modules',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [FormsModule, PdfViewerModule, CommonModule, TaskViewComponent]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;
  selectedTab = 'about';
  selectedModuleIndex = 0;
  selectedMaterial: any = null;
  isEditing = false;
  searchTerm = '';
  allUsers: any[] = [];
  showEnrollModal = false;
  private userSubscription: Subscription | undefined;
  user: any = null;
  role: string | null = null;

  tabs = [
    { key: 'materials', label: 'Materials' },
    { key: 'assignments', label: 'Assignments' },
    { key: 'quiz', label: 'Quiz' },
    { key: 'exams', label: 'Exams' },
    { key: 'studentManagement', label: 'Student Management' }
  ];

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private supabaseService: SupabaseService,
    private dataService: DataService
  ) {}

  getUserRole() {
    return this.role;
  }

  async ngOnInit() {
    const _user = await this.userService.getUser();
    this.role = _user.role;
  
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.user = user;
    });
  
    this.course = history.state.course || this.fetchCourseData();
    console.log('THIS COURSE',this.course);
    if (!this.course) {
      this.router.navigate(['/']);
    } else {
      this.course.enrolledStudents = this.course.enrolledStudents || [];
  
      // Initialize filteredEnrolledStudents with the full list of enrolled students
      this.filteredEnrolledStudents = [...this.course.enrolledStudents];
  
      this.allUsers = await this.userService.getAllUsers();
    }
  }
  
  

  fetchCourseData() {
    return null;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.selectedMaterial = null;
    this.selectedTask = null;
    this.showTaskDetails = false;
  }

  selectModule(index: number) {
    this.selectedModuleIndex = index;
    this.sortMaterialsByDate();
    this.selectedMaterial = null;
  }

  goToNextModule() {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
      this.sortMaterialsByDate();
      this.selectedMaterial = null;
    }
  }

  selectMaterial(material: any) {
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

  downloadMaterial(material: any, event: Event) {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = material.link;
    link.download = material.title;
    link.click();
  }

  replaceMaterialFile(material: any, event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        material.link = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    if(!this.isEditing){
      this.saveData();
    }
  }

  addExam() {
    this.course.modules[this.selectedModuleIndex].exams.push({
      name: '',
      dueDate: ''
    });
  }

  removeExam(index: number) {
    this.course.modules[this.selectedModuleIndex].exams.splice(index, 1);
  }

  // enrollStudent(user: any) {
  //   const alreadyEnrolled = this.course.enrolledStudents.some(
  //     (student: any) => student.email === user.email
  //   );

  //   if (!alreadyEnrolled) {
  //     const fullName = `${user.first_name} ${user.last_name}`;
  //     this.course.enrolledStudents.push({
  //       name: fullName,
  //       email: user.email,
  //       progress: 0
  //     });

  //     this.dataService.updateCourse(this.course);
  //     this.allUsers = this.allUsers.filter((u: any) => u.email !== user.email);
  //     alert(`${fullName} has been successfully enrolled in the course.`);
  //   }
  // }

  enrollStudent(user: any) {
    const alreadyEnrolled = this.course.enrolledStudents.some(
      (student: any) => student.email === user.email
    );
  
    if (!alreadyEnrolled) {
      const fullName = `${user.first_name} ${user.last_name}`;
      const newStudent = {
        name: fullName,
        email: user.email,
        progress: 0
      };
  
      // Add the new student to the enrolledStudents array
      this.course.enrolledStudents.push(newStudent);
  
      // Also add the new student to the filteredEnrolledStudents array
      this.filteredEnrolledStudents.push(newStudent);
  
      // Update the course data in the service
      this.dataService.updateCourse(this.course);
  
      // Remove the user from the allUsers list to prevent re-enrollment
      this.allUsers = this.allUsers.filter((u: any) => u.email !== user.email);
  
      // Optionally, close the modal after enrolling the student
      this.closeEnrollModal();
  
      alert(`${fullName} has been successfully enrolled in the course.`);
    }
  }
  

  openEnrollModal() {
    this.showEnrollModal = true;
  }

  closeEnrollModal() {
    this.showEnrollModal = false;
  }

  filteredEnrolledStudents: any[] = [];


  searchStudents() {
    const term = this.searchTerm.toLowerCase();
  
    if (term === '') {
      // Reset the filtered array to show all students if the search term is empty
      this.filteredEnrolledStudents = [...this.course.enrolledStudents];
    } else {
      this.filteredEnrolledStudents = this.course.enrolledStudents.filter(
        (student: any) =>
          student.name.toLowerCase().includes(term) ||
          student.email.toLowerCase().includes(term)
      );
    }
  }
  
  

  getMaterialIcon(type: string): string {
    return {
      pdf: 'fa-book',
      video: 'fa-video',
      image: 'fa-image'
    }[type] || 'fa-file';
  }

  closeMaterialView() {
    this.selectedMaterial = null;
  }

  private sortMaterialsByDate() {
    const materials = this.course.modules[this.selectedModuleIndex].materials;
    materials.sort((a: any, b: any) =>
      new Date(a.uploadDate).getTime() > new Date(b.uploadDate).getTime() ? 1 : -1
    );
    materials.forEach((material: any, index: number) => {
      material.index = index + 1;
    });
  }

  // Assignments methods
  showTaskDetails = false;
  selectedTask: any = null;

  showDetails(index: number) {
    console.log( 'SHOW',this.course);
    this.course.modules[this.selectedModuleIndex].assignments[index].course = this.course.course;
    this.course.modules[this.selectedModuleIndex].assignments[index].type = 'assignment';
    this.selectedTask =
      this.course.modules[this.selectedModuleIndex].assignments[index];
    console.log('Selected Assignment:', this.selectedTask);
    this.showTaskDetails = true;
  }
  showExamDetails(index: number) {
    console.log( 'SHOW',this.course);
    this.course.modules[this.selectedModuleIndex].exams[index].course = this.course.course;
    this.course.modules[this.selectedModuleIndex].exams[index].type = 'exam';
    this.selectedTask =
      this.course.modules[this.selectedModuleIndex].exams[index];
    console.log('Selected Assignment:', this.selectedTask);
    this.showTaskDetails = true;
  }

  hideDetails() {
    this.selectedTask = null;
    this.showTaskDetails = false;
  }

  fileUploaded = false;  // Track if a file has been uploaded
  uploadedFileName: string | null = null; // Store the uploaded file name
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedTask.submittedFile = file;
      this.fileUploaded = true; // Mark that a file has been uploaded
      this.uploadedFileName = file.name; // Store the file name
    }
  }
  
  changeFile() {
    this.fileUploaded = false; // Reset the file upload state
    this.uploadedFileName = null; // Clear the uploaded file name
  }
  
  submitAssignment() {
    if (this.selectedTask && this.selectedTask.submittedFile) {
      this.selectedTask.submitted = true;
      alert('Assignment submitted successfully!');
      // Optionally reset fileUploaded state if needed for future uploads
    } else {
      alert('Please select a file to submit.');
    }
  }

  saveData(){
    console.log(this.course)
    this.dataService.updateCourse(this.course);
  }
  
}

