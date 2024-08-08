import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../shared/service/routes/routes';
import { Subscription } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../shared/service/api-supabase/supabase.service';
import { GuestUser } from '../shared/models/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public routes = routes;
  public searchQuery = '';
  public isOpen: { [key: string]: boolean } = {
    media: false,
    users: false,
    settings: false,
    noMainRoute: false,
  };
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    const guestUserJson = sessionStorage.getItem('guestUser');
    if (guestUserJson) {
      const guestUser = JSON.parse(guestUserJson);
      console.log('Found guest user in session storage:', guestUser);
      this.supabaseService.setGuestUser(guestUser);
    }

    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        console.log('Received user from SupabaseService:', user);
        this.user = user;
        console.log('Current user:', this.user);
        console.log('Is guest user:', this.isGuestUser(this.user));
        console.log('User type:', this.getUserType());
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    console.log('Checking if user is guest:', user);
    return user !== null && 'user_type' in user;
  }

  getUserType(): string | null {
    if (this.isGuestUser(this.user)) {
      return this.user.user_type;
    }
    return this.user?.email || null;
  }

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  searchRoutes() {
    const matchedRouteKey = Object.keys(this.routes).find((key) =>
      key.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    if (matchedRouteKey) {
      // Navigate to the matched route
      console.log('Matched route:', matchedRouteKey);
    }
  }

  async logout() {
    if (this.isGuestUser(this.user)) {
      // Handle guest user logout
      console.log('Logging out guest user');
      sessionStorage.removeItem('guestUser');
      this.supabaseService.setGuestUser(null);
    } else {
      // Handle authenticated user logout
      try {
        await this.supabaseService.signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
    this.user = null;
    this.router.navigate(['/home']);
  }

  loginAsGuest(userType: string) {
    const guestUser: GuestUser = {
      id: 'guest-' + Date.now(),
      email: `guest-${userType}@example.com`,
      user_type: userType,
    };
    sessionStorage.setItem('guestUser', JSON.stringify(guestUser));
    this.supabaseService.setGuestUser(guestUser);
    this.router.navigate(['/dashboard']);
  }
}
