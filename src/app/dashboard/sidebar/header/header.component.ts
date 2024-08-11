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
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModalComponent } from 'src/app/shared/components/classroom/profile/profile-modal/profile-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-header',
  standalone: true,
  imports: [ProfileModalComponent, CommonModule],
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
    private router: Router,
    private route:ActivatedRoute
  ) {}

  openProfileModal:boolean = false;
  
  openModal(){
    if(this.router.url.startsWith('/dashboard/profile')){
      this.openProfileModal = false;
      return;
    }
    this.openProfileModal = !this.openProfileModal;
  }

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

  navigateToProfile(tab:number) {
    this.router.navigate([routes.profile, {active:tab}]);
    this.openProfileModal = false;
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
