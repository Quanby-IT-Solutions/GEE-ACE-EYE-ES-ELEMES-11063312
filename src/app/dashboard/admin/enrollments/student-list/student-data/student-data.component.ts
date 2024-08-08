import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../../../../../shared/service/api-supabase/supabase.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {
  studentId: string | null = null;
  studentData: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.studentId = params.get('studentId');
      if (this.studentId) {
        this.fetchStudentData();
      } else {
        this.error = 'No student ID provided';
        this.loading = false;
      }
    });
  }

  async fetchStudentData() {
    try {
      if (!this.studentId) throw new Error('No student ID provided');

      const { data, error } = await this.supabaseService.client
        .from('enrollment_tb')
        .select('*')
        .eq('id', this.studentId)
        .single();

      if (error) throw error;
      this.studentData = data;
    } catch (error: any) {
      this.error = error.message || 'An unknown error occurred';
    } finally {
      this.loading = false;
    }
  }
}