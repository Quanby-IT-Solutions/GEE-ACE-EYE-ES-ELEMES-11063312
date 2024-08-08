
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { UserService } from 'src/app/shared/service/user/user.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { GuestUser } from 'src/app/shared/models/model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface IconMap {
  [key: string]: string;
}

@Component({
  selector: 'app-our-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class OurSidebarComponent implements OnInit, OnDestroy, OnChanges {
  isSidebarExpanded: boolean = true;
  isMobile: boolean = false;

  @Input() searchQuery: string = '';

  routes = routes;
  public isOpen: { [key: string]: boolean } = {
    media: false,
    users: false,
    settings: false,
    noMainRoute: false,
  };
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;
  private routerSubscription: Subscription | undefined;
  
  public currentRoute: string = '';

  iconMap: IconMap = {
    Courses: 'fas fa-book',
    Classes: 'fas fa-chalkboard-teacher',
    'Class Records': 'fa-solid fa-clipboard',
    'Report Generation': 'fa-solid fa-file',
    Theme: 'fa-solid fa-wand-magic-sparkles',
    Integration: 'fa-solid fa-cloud',
    System: 'fa-solid fa-sliders',
    'Custom Styling': 'fa-brands fa-css3-alt',
    Logo: 'fa-solid fa-shapes',
    Footer: 'fa-solid fa-square',
    Social: 'fa-solid fa-hashtag',
    Languages: 'fa-solid fa-language',
    Admissions: 'fa-solid fa-building-columns',
    Enrollments: 'fa-solid fa-school',
    'Document Management': 'fa-solid fa-folder',
    Scholarships: 'fa-solid fa-money-check',
    'Clearance Status': 'fa-solid fa-torii-gate',
    Attendance: 'fa-solid fa-hand',
    Notifications: 'fa-solid fa-bell',
    Kiosk: 'fa-solid fa-house',
    Queue: 'fa-solid fa-arrow-up-wide-short',
    Tasks: 'fa-solid fa-thumbtack',
    Details: 'fa-solid fa-user',
    Assessments: 'fa-solid fa-pen-to-square',
    Curriculum: 'fas fa-book-open',
    Teacher: 'fa-solid fa-person-chalkboard',
    Meet: 'fa-solid fa-video',
    Evaluation: 'fa-solid fa-dna',
    Forums: 'fa-solid fa-comment',
    Grades: 'fas fa-chart-line',
    MissedClass: 'fas fa-user-times',
    Calendar: 'far fa-calendar-alt',
    Dashboard: 'fas fa-tachometer-alt',
    Staffing: 'fas fa-chalkboard-teacher',
    Scheduling: 'fas fa-calendar-alt',
    Metrics: 'fas fa-chart-line',
    Curriculumship: 'fas fa-book-open',
    Grading: 'fas fa-chart-bar',
    Settings: 'fas fa-cog',
    Student: 'fas fa-user-graduate',
    Clearance: 'fas fa-check-circle',
    Alert: 'fas fa-bell',
    InfoQueue: 'fas fa-info-circle',
  };

  public student_no = [
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'Courses', route: this.routes.courses },
    { title: 'Tasks', route: this.routes.tasks },
    { title: 'Assessments', route: this.routes.assessments },
    { title: 'Meet', route: this.routes.meet },

    {
      title: 'Evaluation',
      subItems: [
        { title: 'Curriculum', route: this.routes.curriculum },
        { title: 'Teacher', route: this.routes.teacher },
      ],
    },
    {
      title: 'Details',
      subItems: [
        { title: 'Grades', route: this.routes.grades },
        { title: 'Clearance', route: this.routes.clearance },
      ],
    },
    { title: 'Schedules', route: this.routes.schedules },
    { title: 'Forums', route: this.routes.forums },
  ];

  public instructor = [
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'Courses', route: this.routes.courses },
    { title: 'Classes', route: this.routes.classes },
    { title: 'Tasks', route: this.routes.tasks },
    { title: 'Grades', route: this.routes.grades },
    { title: 'MissedClass', route: this.routes.absences },
    { title: 'Calendar', route: this.routes.calendar },
  ];

  public school_admin = [
    {
      title: 'Grading',
      isOpenKey: 'gradingSystem',
      subItems: [
        { title: 'Class Records', route: this.routes.class_records },
        { title: 'Report Generation', route: this.routes.report_generation },
      ],
    },

    {
      title: 'Courses',
      isOpenKey: 'CoursesSystem',
      subItems: [
        { title: 'Courses', route: this.routes.courses},
      ],
    },

    {
      title: 'Settings',
      isOpenKey: 'generalSettings',
      subItems: [
        { title: 'Theme', route: this.routes.settings_themes },
        { title: 'Integration', route: this.routes.report_generation },
        { title: 'System', route: this.routes.report_generation },
        { title: 'Custom Styling', route: this.routes.report_generation },
        { title: 'Logo', route: this.routes.report_generation },
        { title: 'Footer', route: this.routes.report_generation },
        { title: 'Social', route: this.routes.report_generation },
        { title: 'Languages', route: this.routes.report_generation },
      ],
    },

    {
      title: 'Student',
      isOpenKey: 'studentInfoSystem',
      subItems: [
        { title: 'Admissions', route: this.routes.admission },
        { title: 'Enrollments', route: this.routes.enrollment },
        {
          title: 'Document Management',
          route: this.routes.document_management,
        },
        { title: 'Assessments', route: this.routes.assessments },
        { title: 'Scholarships', route: this.routes.scholarships },
      ],
    },
    {
      title: 'Clearance',
      isOpenKey: 'clearanceSystem',
      subItems: [
        { title: 'Clearance Status', route: this.routes.clearance },
        { title: 'Clearance Status', route: this.routes.clearance },
      ],
    },
    {
      title: 'Alert',
      isOpenKey: 'attendanceNotifications',
      subItems: [
        { title: 'Attendance', route: this.routes.attendance },
        { title: 'Notifications', route: this.routes.notification },
      ],
    },

    {
      title: 'InfoQueue',
      isOpenKey: 'informationKiosk',
      subItems: [
        { title: 'Kiosk', route: this.routes.kiosk },
        { title: 'Queue', route: this.routes.queuing },
      ],
    },
  ];

  public department_admin = [
    {
      title: 'Dashboard',
      route: this.routes.dashboard,
    },
    {
      title: 'Staffing',
      route: this.routes.enrollment,
    },
    {
      title: 'Scheduling',
      route: this.routes.enrollment,
    },
    {
      title: 'Metrics',
      route: this.routes.enrollment,
    },
    {
      title: 'Curriculumship',
      route: this.routes.enrollment,
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private userService: UserService

  ) {}

  toggleSidebar() {
    if (!this.isMobile) {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  }

   role: string | null = null;

  getUserType() {
    console.log(('hain'),this.role);
   return this.role;
   
  }

  async ngOnInit() {
    this.checkScreenSize();
    const guestUserJson = sessionStorage.getItem('guestUser');
    if (guestUserJson) {
      const guestUser = JSON.parse(guestUserJson);
      this.supabaseService.setGuestUser(guestUser);
    }

    const _user = await this.userService.getUser();
    console.log(('Role ken:'), _user.role);
    this.role = _user.role;

    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
        const role = this.getTonUserRole();
        console.log('User role:', role);
      }
    );
  

   

    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });

    // Set default route to /dashboard if none is provided
    if (!this.currentRoute) {
      this.currentRoute = this.routes.dashboard;
      this.router.navigate([this.routes.dashboard]);
    }
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 480; // Adjust this breakpoint as needed
    if (this.isMobile) {
      this.isSidebarExpanded = false;
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery'] && this.searchQuery) {
      this.handleSearch();
    }
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    return user !== null && 'user_type' in user;
  }

  

  
 
  getTonUserRole(): string | null {
    if (this.user && 'role' in this.user && typeof this.user.role === 'string') {
      return this.user.role;
    }
    return null;
  }


  getUserRole(): string | null {
    return this.userService.getUserRole();
  }

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  handleSearch() {
    const userType = this.getUserRole();
    let allItems: any[] = [];

    if (userType === 'student') {
      allItems = this.student_no.flatMap((item) =>
        item.subItems ? [item, ...item.subItems] : [item]
      );
    } else if (userType === 'instructor') {
      allItems = this.instructor;
    } else if (userType === 'school_admin') {
      allItems = this.school_admin.flatMap((group) => [
        group,
        ...(group.subItems || []),
      ]);
    } else if (userType === 'department_admin') {
      allItems = this.department_admin;
    }

    const matchedItem = allItems.find((item) => {
      if ('subItems' in item) {
        return item.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      } else {
        return item.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      }
    });

    if (matchedItem) {
      if ('route' in matchedItem) {
        this.router.navigate([matchedItem.route]);
      } else if ('subItems' in matchedItem && matchedItem.subItems.length > 0) {
        this.router.navigate([matchedItem.subItems[0].route]);
      }
    }
  }

  async logout() {
    if (this.isGuestUser(this.user)) {
      sessionStorage.removeItem('guestUser');
      this.supabaseService.setGuestUser(null);
    } else {
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

  isActive(route: string | undefined): boolean {
    return route ? this.currentRoute === route : false;
  }

  trackByTitle(index: number, item: any): string {
    return item.title;
  }
}







