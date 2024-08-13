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
import { title } from 'process';

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
    'User-Management': 'fa-solid fa-user',
    Home: 'fa-solid fa-house',
    Courses: 'fas fa-book',
    Classes: 'fas fa-chalkboard-teacher',
    'Class Records': 'fa-solid fa-clipboard',
    'Report Generation': 'fa-solid fa-file',
    Theme: 'fa-solid fa-wand-magic-sparkles',
    Integration: 'fa-solid fa-cloud',
    System: 'fa-solid fa-sliders',
    General: 'fa-solid fa-sliders',
    Offerings: 'fa-solid fa-envelope-open',
    'Custom Styling': 'fa-brands fa-css3-alt',
    Logo: 'fa-solid fa-shapes',
    Footer: 'fa-solid fa-square',
    Social: 'fa-solid fa-hashtag',
    Languages: 'fa-solid fa-language',
    Admissions: 'fa-solid fa-building-columns',
    Enrollments: 'fa-solid fa-school',
    'Document Management': 'fa-solid fa-folder',
    'Learning Management': 'fa-solid fa-folder',
    Transactions: 'fa-solid fa-money-check-dollar',
    Scholarships: 'fa-solid fa-money-check',
    'Clearance Status': 'fa-solid fa-torii-gate',
    Attendance: 'fa-solid fa-hand',
    Notifications: 'fa-solid fa-bell',
    Kiosk: 'fa-solid fa-house',
    Queue: 'fa-solid fa-arrow-up-wide-short',
    Tasks: 'fa-solid fa-thumbtack',
    Details: 'fa-solid fa-user',
    Assessments: 'fa-solid fa-pen-to-square',
    Assignments: 'fa-solid fa-pen-to-square',
    Curriculum: 'fas fa-book-open',
    Teacher: 'fa-solid fa-person-chalkboard',
    Meet: 'fa-solid fa-video',
    Evaluation: 'fa-solid fa-dna',
    Forums: 'fa-solid fa-comment',
    Grades: 'fas fa-chart-line',
    MissedClass: 'fas fa-user-times',
    Calendar: 'far fa-calendar-alt',
    Dashboard: 'fas fa-home',
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
    Progress: 'fa-solid fa-bars-progress',
    Reports: 'fa-solid fa-flag',
    Tools: 'fa-solid fa-screwdriver-wrench',
  };

  public student_no = [
    { title: 'Home', route: this.routes.dashboard },
    { title: 'Course Offerings', route: this.routes.explore_courses },

    {
      title: 'My Courses',
      subItems: [
        { title: 'Materials', route: this.routes.subjects },
        { title: 'Assignments', route: this.routes.tasks },
        { title: 'Evaluation', route: this.routes.evaluation}
      ],
    },
    { title: 'Progress', route: this.routes.progress },

    { title: 'Training Calendar', route: this.routes.training_calendar },

  ];

  public instructor = [
    { title: 'Home', route: this.routes.dashboard },
    { title: 'Add Course', route: this.routes.add_course },
    { title: 'Manage Course', route: this.routes.subjects },
  //   { 
  //     title: 'My Courses',
  //       subItems: [       
  //     { title: 'Materials', route: this.routes.subjects },
  //     { title: 'Assignments', route: this.routes.tasks },
  // ], 
  //    },
    { title: 'Student Progress', route: this.routes.assessments },
    { title: 'Reports', route: this.routes.meet },
    { title: 'Evaluation', route: this.routes.evaluation },
    { title: 'Help', route: this.routes.meet }, // arog kaine padi
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
      subItems: [{ title: 'Courses', route: this.routes.courses }],
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
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'User-Management', route: this.routes.user_management },
    { title: 'Manage Courses', route: this.routes.subjects },
    { title: 'Certificates', route: this.routes.certificates },
    { title: 'Reports', route: this.routes.meet },
    { title: 'Site Settings', route: this.routes.sitesettings },

    // {
    //   title: 'General',
    //   subItems: [
    //     { title: 'Campuses', route: this.routes.curriculum },
    //     { title: 'Departments', route: this.routes.curriculum },
    //     { title: 'Periods', route: this.routes.curriculum },
    //     { title: 'Gates', route: this.routes.curriculum },
    //     { title: 'Visitors', route: this.routes.teacher },
    //     { title: 'Documents', route: this.routes.teacher },
    //     { title: 'Clearance Items', route: this.routes.teacher },
    //     { title: 'Cultural Minorities', route: this.routes.teacher },
    //     { title: 'Citizenship', route: this.routes.teacher },
    //     { title: 'Provinces', route: this.routes.teacher },
    //     { title: 'Municipalities', route: this.routes.teacher },
    //     { title: 'Calendar of Activities', route: this.routes.teacher },
    //     { title: 'Graduation Template', route: this.routes.teacher },
    //   ],
    // },

    // {
    //   title: 'Offerings',
    //   subItems: [
    //     { title: 'Rooms', route: this.routes.curriculum },
    //     { title: 'Intructors', route: this.routes.curriculum },
    //     { title: 'Courses', route: this.routes.curriculum },
    //     { title: 'Strands', route: this.routes.curriculum },
    //     { title: 'Subjects', route: this.routes.curriculum },
    //     { title: 'Pre-Requisites', route: this.routes.curriculum },
    //     { title: 'Equivalent', route: this.routes.curriculum },
    //     { title: 'Create Sections', route: this.routes.curriculum },
    //     { title: 'Edit Sections', route: this.routes.curriculum },
    //     { title: 'Advisers', route: this.routes.curriculum },
    //   ],
    // },

    // {
    //   title: 'Learning Management',
    //   subItems: [
    //     { title: 'Resources', route: this.routes.curriculum },
    //     { title: 'Subject Modules', route: this.routes.curriculum },
    //     { title: 'Competencies', route: this.routes.curriculum },
    //     { title: 'Tests', route: this.routes.curriculum },
    //     { title: 'Test Bank', route: this.routes.curriculum },
    //     { title: 'Copy Contents', route: this.routes.curriculum },
    //     { title: 'Grading System', route: this.routes.curriculum },
    //     { title: 'Create Sections', route: this.routes.curriculum },
    //     { title: 'Edit Sections', route: this.routes.curriculum },
    //     { title: 'Advisers', route: this.routes.curriculum },
    //   ],
    // },

    // {
    //   title: 'Transactions',
    //   subItems: [
    //     { title: 'Student Access', route: this.routes.curriculum },
    //     { title: 'Parent Access', route: this.routes.curriculum },
    //     { title: 'Enrolled Students', route: this.routes.curriculum },
    //     { title: 'Admission', route: this.routes.curriculum },
    //     { title: 'Class Schedule', route: this.routes.curriculum },
    //     { title: 'Pre-Enlistment', route: this.routes.curriculum },
    //     { title: 'Enrollment', route: this.routes.curriculum },
    //     { title: 'Grades', route: this.routes.curriculum },
    //     { title: 'Learning Management', route: this.routes.curriculum },
    //     { title: 'Student Accounts', route: this.routes.curriculum },
    //     { title: 'Discounts / Scholarship', route: this.routes.curriculum },
    //     { title: 'Teacher Evaluation', route: this.routes.curriculum },
    //     { title: 'Student Clearance', route: this.routes.curriculum },
    //   ],
    // },

    // {
    //   title: 'Reports',
    //   subItems: [
    //     { title: 'Registrar', route: this.routes.curriculum },
    //     { title: 'Student Ledger', route: this.routes.curriculum },
    //     { title: 'Account IN/OUT Report', route: this.routes.curriculum },
    //     { title: 'Visitor IN/OUT Report', route: this.routes.curriculum },
    //     { title: 'Purchases Report', route: this.routes.curriculum },
    //     { title: 'Teacher Evaluation', route: this.routes.curriculum },
    //   ],
    // },

    // {
    //   title: 'Tools',
    //   subItems: [
    //     { title: 'Download Backup', route: this.routes.curriculum },
    //     { title: 'Rebuild LMS Cache', route: this.routes.curriculum },
    //     { title: 'Activity Log', route: this.routes.curriculum },
    //     { title: 'Options', route: this.routes.curriculum },
    //   ],
    // },
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

  superAdminTabs() {
    let superadmin: any[] = [];
    for (const roleTabs of [
      this.student_no,
      this.instructor,
      this.school_admin,
      this.department_admin,
    ]) {
      superadmin = [
        ...superadmin,
        ...roleTabs.filter(
          (item) =>
            !superadmin
              .reduce((acc, curr) => {
                return [...acc, curr.title];
              }, [])
              .includes(item.title)
        ),
      ];
    }
    return superadmin;
  }

  role: string | null = null;

  getUserType() {
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

    // Log the role only once after fetching the user
    console.log('Sidebar - Authenticated User Role:', _user.role);
    this.role = _user.role;

    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
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

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  handleSearch() {}

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
