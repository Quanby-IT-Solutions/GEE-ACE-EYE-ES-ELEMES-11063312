import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { routes } from 'src/app/shared/service/routes/routes';

import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class OurHeaderComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;

  @Output() search = new EventEmitter<string>();

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  navigateToProfile() {
    this.router.navigate([routes.profile]);
  }

  navigateToMessage() {
    this.router.navigate([routes.messaging]);
  }

  searchRoutes() {
    this.search.emit(this.searchQuery);
  }

  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onInput(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }
}
