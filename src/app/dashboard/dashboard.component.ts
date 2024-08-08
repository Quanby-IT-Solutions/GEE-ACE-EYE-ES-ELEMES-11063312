import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { SupabaseService } from '../shared/service/api-supabase/supabase.service';  // Import SupabaseService
import { routes } from '../shared/service/routes/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public routes = routes;
  public searchQuery = '';
  public isOpen: { [key: string]: boolean } = {
    media: false,
    users: false,
    settings: false,
    noMainRoute: false
  };

  constructor(private supabaseService: SupabaseService, private router: Router) {}  // Inject SupabaseService and Router

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  searchRoutes() {
    const matchedRouteKey = Object.keys(this.routes).find((key) => key.toLowerCase().includes(this.searchQuery.toLowerCase()));
    if (matchedRouteKey) {
      // Navigate to the matched route
    }
  }

  async logout() {
    await this.supabaseService.signOut();
    this.router.navigate(['/']);  // Redirect to login page after logout
  }
}
