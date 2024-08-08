import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../shared/service/api-supabase/supabase.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { GuestUser } from '../shared/models/model';
import { UserService } from '../shared/service/user/user.service';
import { User } from '@supabase/supabase-js';

interface EnrollmentRecord {
  course: string;
}

interface CourseWithCount {
  name: string;
  count: number;
}

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  courses: CourseWithCount[] = [];
  filteredCourses: CourseWithCount[] = [];
  paginatedCourses: CourseWithCount[] = [];
  searchTerm: string = '';
  public routes = routes;
  public user: User | GuestUser | null = null;

  // Pagination
  itemsPerPage: number = 8;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private supabaseService: SupabaseService, private userService: UserService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  async fetchCourses() {
    try {
      const { data, error } = await this.supabaseService.client
        .from('enrollment_tb')
        .select('course')
        .returns<EnrollmentRecord[]>();

      if (error) {
        throw new Error(error.message);
      }

      if (data) {
        const courseCounts = data.reduce((acc, item) => {
          acc[item.course] = (acc[item.course] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        this.courses = Object.entries(courseCounts).map(([name, count]) => ({ name, count }));
        this.filteredCourses = [...this.courses];
        this.updatePagination();
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  searchCourses() {
    if (!this.searchTerm.trim()) {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = this.courses.filter(course => 
        course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedCourses = this.filteredCourses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.updatePagination();
    }
  }
  
}