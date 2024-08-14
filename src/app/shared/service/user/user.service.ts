// src/app/shared/service/user/user.service.ts
import { Injectable } from '@angular/core';
import { SupabaseService } from '../api-supabase/supabase.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from '../../models/model';
import { BehaviorSubject, Observable, firstValueFrom, from, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  setUser(user: any) {
    throw new Error('Method not implemented.');
  }
  private user = new BehaviorSubject<User | GuestUser | null>(null);
  public currentUser = this.user.asObservable();

  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.currentUser.subscribe((user) => {
      this.user.next(user);
    });
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    return user !== null && 'user_type' in user;
  }

  getUserRole(): string | null {
    const user = this.user.value;
    if (this.isGuestUser(user)) {
      return user.user_type;
    }
    return user?.email || null;
  }

  async getUser() {
    const userAuth = await firstValueFrom( this.supabaseService.currentUser);
    const { data, error } = await this.supabaseService.client
      .from('users_tb')
      .select('*')
      .eq('auth_user_id', userAuth?.id)
      .single();

    if (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }

    return data;
  }
 

  async getAllUsers() {
    const { data, error } = await this.supabaseService.client
      .from('users_tb')
      .select('*');
        
    if (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
    console.log(data);
    return data;
  }


  updateUserStatus(userId: string, status: string): Observable<any> {
    console.log('Updating user status:', userId, status); // Debugging log

    const updatePromise = this.supabaseService.client
      .from('users_tb')  // Make sure this is your actual table name
      .update({ status: status })
      .eq('user_id', userId);  // Ensure 'user_id' is the correct column

    return from(updatePromise).pipe(
      tap({
        next: (result) => {
          console.log('Update result:', result);  // Log the result for debugging
        },
        error: (err) => {
          console.error('Error updating user status:', err);  // Log errors
        }
      })
    );
  }
  
  
}
