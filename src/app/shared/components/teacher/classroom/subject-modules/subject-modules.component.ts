import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SafeUrlPipe } from 'src/app/shared/pipes/safe-url.pipe';
import { Subscription } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { UserService } from 'src/app/shared/service/user/user.service';
import { GuestUser } from 'src/app/shared/models/model';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-course-management',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [CommonModule, SafeUrlPipe, PdfViewerModule, FormsModule]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;
  selectedTab: string = 'materials';
  selectedModuleIndex: number = 0;
  selectedMaterial: any = null;
  showAssignmentDetails: boolean = false;
  selectedAssignment: any = null;
  isEditing: boolean = false;
  searchTerm: string = '';
  allUsers: any[] = [];
  showEnrollModal: boolean = false;
  tabs: string[] = ['Materials', 'Assignments', 'Quiz', 'Exams', 'Student Management'];

  private userSubscription: Subscription | undefined;

  public user: User | GuestUser | null = null;
  role: string | null = null;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private supabaseService: SupabaseService,
    private dataService: DataService,
  ) {}

  async ngOnInit() {
    const _user = await this.userService.getUser();
    this.role = _user.role;

    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.user = user;
    });

    this.course = history.state.course || await this.fetchCourseData();

    if (!this.course) {
      this.router.navigate(['/']);
    } else {
      this.course.enrolledStudents = this.course.enrolledStudents || [];
      this.allUsers = await this.userService.getAllUsers();
    }
  }

  async fetchCourseData(): Promise<any> {
    // Implement your data fetching logic here
    return null;
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.selectedMaterial = null;
    this.showAssignmentDetails = false;
  }

  selectModule(index: number): void {
    this.selectedModuleIndex = index;
    this.sortMaterialsByDate();
    this.selectedMaterial = null;
    this.showAssignmentDetails = false;
  }

  goToNextModule(): void {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
      this.sortMaterialsByDate();
      this.selectedMaterial = null;
      this.showAssignmentDetails = false;
    }
  }

  selectMaterial(material: any): void {
    this.selectedMaterial = material;
  }

  closeMaterialView(): void {
    this.selectedMaterial = null;
  }

  showDetails(index: number): void {
    this.selectedAssignment = this.course.modules[this.selectedModuleIndex].assignments[index];
    this.showAssignmentDetails = true;
  }

  hideDetails(): void {
    this.selectedAssignment = null;
    this.showAssignmentDetails = false;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && this.selectedAssignment) {
      this.selectedAssignment.submittedFile = file;
    }
  }

  submitAssignment(): void {
    if (this.selectedAssignment && this.selectedAssignment.submittedFile) {
      this.selectedAssignment.submitted = true;
      alert('Assignment submitted successfully!');
    } else {
      alert('Please select a file to submit.');
    }
  }

  getMaterialIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return 'fa-file-pdf';
      case 'video':
        return 'fa-video';
      case 'image':
        return 'fa-image';
      default:
        return 'fa-file';
    }
  }

  private sortMaterialsByDate(): void {
    const materials = this.course.modules[this.selectedModuleIndex].materials;
    materials.sort((a: any, b: any) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime());
    materials.forEach((material: any, index: number) => {
      material.index = index + 1;
    });
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

  enrollStudent(user: any): void {
    const alreadyEnrolled = this.course.enrolledStudents.some((student: any) => student.email === user.email);

    if (!alreadyEnrolled) {
      const fullName = `${user.first_name} ${user.last_name}`;
      
      this.course.enrolledStudents.push({
        name: fullName,
        email: user.email,
        progress: 0
      });

      this.dataService.updateCourse(this.course);

      this.allUsers = this.allUsers.filter((u: any) => u.email !== user.email);

      alert(`${fullName} has been successfully enrolled in the course.`);
    }
  }

  openEnrollModal(): void {
    this.showEnrollModal = true;
  }

  closeEnrollModal(): void {
    this.showEnrollModal = false;
  }

  searchStudents(): void {
    const term = this.searchTerm.toLowerCase();

    this.allUsers = this.allUsers.filter((student: any) =>
      student.name.toLowerCase().includes(term) || student.email.toLowerCase().includes(term)
    );
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

  downloadMaterial(material: any, event: Event): void {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = material.link;
    link.download = material.title;
    link.click();
  }

  getUserRole(): string | null {
    return this.role;
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}