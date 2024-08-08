import { Injectable } from '@angular/core';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private supabaseService: SupabaseService) {}

  async getCourses() {
    const { data, error } = await this.supabaseService.client
      .from('courses_tb')
      .select('*, classes_tb(*)');

    if (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }

    return data;
  }
}