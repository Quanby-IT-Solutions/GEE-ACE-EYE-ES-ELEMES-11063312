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
import { ModalService } from 'src/app/shared/service/modal/modal.service';
import { CreateAssignmentComponent } from '../../../modal/create-assignment/create-assignment.component';

@Component({
  selector: 'app-subject-modules',
  standalone: true,
  templateUrl: './subject-modules.component.html',
  styleUrls: ['./subject-modules.component.scss'],
  imports: [CommonModule, SafeUrlPipe, PdfViewerModule, FormsModule]
})
export class SubjectModulesComponent implements OnInit {
  course: any = null;
  selectedTab: string = 'about'; // Default tab
  selectedModuleIndex: number = 0; // Track the selected module
  selectedMaterial: any = null; // Track the selected material
  isEditing: boolean = false; // Track if editing mode is enabled

  searchTerm: string = '';
  allUsers: any[] = []; // Track all users
  showEnrollModal: boolean = false;

  private userSubscription: Subscription | undefined;

  public user: User | GuestUser | null = null;
  role: string | null = null;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private userService: UserService,
    private supabaseService: SupabaseService,
    private dataService: DataService,
    private modalService:ModalService

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

    if (!this.course) {
      this.router.navigate(['/']);  // Redirect if course data is missing
    } else {
      // Ensure consistent structure for students
      this.course.enrolledStudents = this.course.enrolledStudents || [];

      // Fetch all users
      this.allUsers = await this.userService.getAllUsers();
    }
  }

  fetchCourseData(): any {
    return null; // Replace this with actual data fetching logic
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.selectedMaterial = null; // Reset selected material when changing tabs
  }

  selectModule(index: number): void {
    this.selectedModuleIndex = index;
    this.sortMaterialsByDate(); // Sort materials when the module changes
    this.selectedMaterial = null; // Reset selected material when changing modules
  }

  goToNextModule(): void {
    if (this.selectedModuleIndex < this.course.modules.length - 1) {
      this.selectedModuleIndex++;
      this.sortMaterialsByDate(); // Sort materials when navigating to the next module
      this.selectedMaterial = null; // Reset selected material when moving to the next module
    }
  }

  selectMaterial(material: any): void {
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

  downloadMaterial(material: any, event: Event): void {
    event.stopPropagation();
    const link = document.createElement('a');
    link.href = material.link;
    link.download = material.title;
    link.click();
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

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
  }

  addAssignment(): void {
    const modal$ = this.modalService.openModal( CreateAssignmentComponent ,{test:'data'}).subscribe(res =>{
      console.log(res);
      modal$.unsubscribe();
    })
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

  // enrollStudent(user: any): void {
  //   // Check if the user is already enrolled
  //   const alreadyEnrolled = this.course.enrolledStudents.some((student: any) => student.email === user.email);

  //   if (!alreadyEnrolled) {
  //       // Add the user to the enrolledStudents list
  //       this.course.enrolledStudents.push({
  //           name: user.name,
  //           email: user.email,
  //           progress: 0 // You can adjust the default progress if needed
  //       });

  //       // Save the updated course data to local storage
  //       localStorage.setItem('courseData', JSON.stringify(this.course));

  //       // Remove the user from the allUsers list to prevent re-enrollment
  //       const index = this.allUsers.indexOf(user);
  //       if (index !== -1) {
  //           this.allUsers.splice(index, 1);
  //       }
  //   }
  // }

  // openEnrollModal(): void {
  //   this.userService.getAllUsers().then(users => {
  //     this.allUsers = users; // Fetch and assign all users to the allUsers array
  //   }).catch(error => {
  //     console.error('Failed to fetch users:', error);
  //   });
  //   this.showEnrollModal = true;
  // }

  enrollStudent(user: any): void {
    // Check if the user is already enrolled
    const alreadyEnrolled = this.course.enrolledStudents.some((student: any) => student.email === user.email);

    if (!alreadyEnrolled) {
        // Construct the full name using first_name and last_name
        const fullName = `${user.first_name} ${user.last_name}`;
        
        // Add the user to the enrolledStudents list
        this.course.enrolledStudents.push({
            name: fullName,
            email: user.email,
            progress: 0 // You can adjust the default progress if needed
        });

        // Update the course data in the service
        this.dataService.updateCourse(this.course);

        // Remove the user from the allUsers list to prevent re-enrollment
        this.allUsers = this.allUsers.filter((u: any) => u.email !== user.email);

        // Notify the user
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

  getMaterialIcon(type: string): string {
    switch (type) {
      case 'pdf':
        return 'fa-book';
      case 'video':
        return 'fa-video';
      case 'image':
        return 'fa-image';
      default:
        return 'fa-file';
    }
  }

  closeMaterialView(): void {
    this.selectedMaterial = null;
  }

  private sortMaterialsByDate(): void {
    const materials = this.course.modules[this.selectedModuleIndex].materials;
    materials.sort((a: any, b: any) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime());
    materials.forEach((material: any, index: number) => {
      material.index = index + 1;
    });
  }
}
