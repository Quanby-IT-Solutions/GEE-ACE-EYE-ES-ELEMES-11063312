// src/app/services/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { routes } from '../routes/routes';

import {
  instructorCourseList,
  courseList,
  courseGrid,
  allInstructorList,
  allInstructorGrid,
  instructorTicket1,
  instructorTicket4,
  instructorTicket2,
  instructorTicket3,
  latestTransaction,
  Instructor_sideBar,
  Student_sideBar,
  apiResultFormat,
} from 'src/app/shared/models/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messages = '';
  message: BehaviorSubject<string>;
  constructor(private http: HttpClient) {

    this.loadCoursesFromLocalStorage();

    this.message = new BehaviorSubject(this.messages);

      // Initialize courses from localStorage or use default courses
      this.courses = this.getCoursesFromStorage() || this.defaultCourses;
      // If localStorage was empty and default courses were used, save them to localStorage
      console.log(this.courses);
      if (!localStorage.getItem('courses')) {
        this.saveCoursesToStorage();
      }
  }





  nextmessage(data: string) {
    this.message.next(data);
  }
  public instructorCourseList(): Observable<instructorCourseList> {
    return this.http
      .get<instructorCourseList>('assets/JSON/instructorCourseList.json')
      .pipe(
        map((res: instructorCourseList) => {
          return res;
        })
      );
  }
  public allCourseList(): Observable<courseList> {
    return this.http.get<courseList>('assets/JSON/courseList.json').pipe(
      map((res: courseList) => {
        return res;
      })
    );
  }
  public gridCourseList(): Observable<courseGrid> {
    return this.http.get<courseGrid>('assets/JSON/courseGrid.json').pipe(
      map((res: courseGrid) => {
        return res;
      })
    );
  }
  public allInstructorList(): Observable<allInstructorList> {
    return this.http
      .get<allInstructorList>('assets/JSON/allInstructorList.json')
      .pipe(
        map((res: allInstructorList) => {
          return res;
        })
      );
  }
  public allInstructorGrid(): Observable<allInstructorGrid> {
    return this.http
      .get<allInstructorGrid>('assets/JSON/allInstructorGrid.json')
      .pipe(
        map((res: allInstructorGrid) => {
          return res;
        })
      );
  }
  public instructorTicket1(): Observable<instructorTicket1> {
    return this.http
      .get<instructorTicket1>('assets/JSON/instructorTicket1.json')
      .pipe(
        map((res: instructorTicket1) => {
          return res;
        })
      );
  }
  public instructorTicket4(): Observable<instructorTicket4> {
    return this.http
      .get<instructorTicket4>('assets/JSON/instructorTicket4.json')
      .pipe(
        map((res: instructorTicket4) => {
          return res;
        })
      );
  }
  public instructorTicket2(): Observable<instructorTicket2> {
    return this.http
      .get<instructorTicket2>('assets/JSON/instructorTicket2.json')
      .pipe(
        map((res: instructorTicket2) => {
          return res;
        })
      );
  }
  public instructorTicket3(): Observable<instructorTicket3> {
    return this.http
      .get<instructorTicket3>('assets/JSON/instructorTicket3.json')
      .pipe(
        map((res: instructorTicket3) => {
          return res;
        })
      );
  }
  public latestTransactionsList(): Observable<latestTransaction> {
    return this.http
      .get<latestTransaction>('assets/JSON/latestTransaction.json')
      .pipe(
        map((res: latestTransaction) => {
          return res;
        })
      );
  }

  public InstructorAnnouncement(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-announcements.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public InstructorAssignment(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-assignment.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public InstructorWithdraw(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-withdraw.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public topCategories = [
    {
      img: 'assets/img/categories-icon.png',
      course: 'Angular Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Swift Development',
      instructors: '23 Instructors',
    },
    {
      img: 'assets/img/categories-icon-05.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'React Native',
      instructors: '80 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Angular Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'Swift Development',
      instructors: '23 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'Swift Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
  ];
  public trendingCourses = [
    {
      img1: 'assets/img/course/course-07.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user.jpg',
      name: 'John Michael',
      subject:
        'Learn JavaScript and Express to become a professional JavaScript',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-05.jpg',
      newPrice: '$100',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'Lavern M.',
      subject: 'The Complete App Design Course - UX, UI and Design Thinking',
      lesson: '8+ Lesson',
      time: '8hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user5.jpg',
      name: 'John Smith',
      subject: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-07.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-09.jpg',
      newPrice: '$100',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user4.jpg',
      name: 'Lavern M.',
      subject: 'The Complete App Design Course - UX, UI and Design Thinking',
      lesson: '8+ Lesson',
      time: '8hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user1.jpg',
      name: 'Lavern M.',
      subject:
        'Learn JavaScript and Express to become a professional JavaScript',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-09.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
  ];
  public featuredInstructor = [
    {
      img: 'assets/img/user/user7.jpg',
      name: 'David Lee',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'Daziy Millar',
      domain: 'PHP Expert',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user9.jpg',
      name: 'Patricia Mendoza',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user10.jpg',
      name: 'Skyler Whites',
      domain: 'UI Designer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Patricia Mendoza',
      domain: 'Java Developer',
      students: '40 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'David Lee',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user9.jpg',
      name: 'Daziy Millar',
      domain: 'PHP Expert',
      students: '40 Students',
    },
    {
      img: 'assets/img/user/user10.jpg',
      name: 'Patricia Mendoza',
      domain: 'Web Developer',
      students: '20 Students',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Skyler Whites',
      domain: 'UI Designer',
      students: '30 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'Patricia Mendoza',
      domain: 'Java Developer',
      students: '40 Students',
    },
  ];
  public latestBlogs = [
    {
      img: 'assets/img/blog/blog-01.jpg',
      content: 'Attract More Attention Sales And Profits',
      role: 'Marketing',
      date: 'Jun 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: '11 Tips to Help You Get New Clients',
      role: 'Sales Order',
      date: 'May 20, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Design',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Seo',
      date: 'Jul 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: 'Attract More Attention Sales And Profits',
      role: 'Marketing',
      date: 'Sep 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Marketing',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Analysis',
      date: 'May 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Sales',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Sales',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Marketing',
      date: 'April 15, 2022',
    },
  ];
  public featuredCourses = [
    {
      img1: 'assets/img/course/course-01.jpg',
      amount1: '$300',
      amount2: '$99.00',
      img2: 'assets/img/user/user1.jpg',
      name: 'Nicole Brown',
      content: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-02.jpg',
      amount1: '$400',
      amount2: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '11+ Lesson',
      time: '6hr 30min',
      rating1: '4.3',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-03.jpg',
      idle: 'FREE',
      img2: 'assets/img/user/user5.jpg',
      name: 'Jesse Stevens',
      content: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '16+ Lesson',
      time: '12hr 30min',
      rating1: '4.5',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-04.jpg',
      amount1: '$500 ',
      amount2: '$99.00',
      img2: 'assets/img/user/user4.jpg',
      name: 'Nicole Brown',
      content: 'Learn Angular Fundamentals From beginning to advance lavel',
      lesson: '10+ Lesson',
      time: '8hr 30min',
      rating1: '4.2',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-05.jpg',
      amount1: '$300 ',
      amount2: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'John Smith',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-06.jpg',
      idle: 'FREE',
      img2: 'assets/img/user/user6.jpg',
      name: 'Stella Johnson',
      content: 'C# Developers Double Your Coding Speed with Visual Studio',
      lesson: '7+ Lesson',
      time: '7hr 30min',
      rating1: '4.6',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
  ];
  public career = [
    {
      img: 'assets/img/icon/icon-1.svg',
      content: 'Stay motivated with engaging instructors',
    },
    {
      img: 'assets/img/icon/icon-2.svg',
      content: 'Keep up with in the latest in cloud',
    },
    {
      img: 'assets/img/icon/icon-3.svg',
      content: 'Get certified with 100+ certification courses',
    },
    {
      img: 'assets/img/icon/icon-4.svg',
      content: 'Build skills your way, from labs to courses',
    },
  ];
  public universitiesCompanies = [
    {
      img: 'assets/img/lead-01.png',
    },
    {
      img: 'assets/img/lead-02.png',
    },
    {
      img: 'assets/img/lead-03.png',
    },
    {
      img: 'assets/img/lead-04.png',
    },
    {
      img: 'assets/img/lead-05.png',
    },
    {
      img: 'assets/img/lead-06.png',
    },
  ];
  public testimonial = [
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Daziy Millar',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: 'assets/img/user/user3.jpg',
      name: 'john smith',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: 'assets/img/user/user2.jpg',
      name: 'David Lee',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  public bestSellingCourses = [
    {
      courses: 'Information About UI/UX  Design Degree',
      img: 'assets/img/course/course-10.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      img: 'assets/img/course/course-11.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Sketch from A to Z (2022): Become an app designer',
      img: 'assets/img/course/course-12.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
  ];
  public blogDetailsRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogGrid = [
    {
      img1: 'assets/img/blog/blog-08.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 14, 2022',
      content: 'Learn Webs Applications Development from Experts',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-09.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'May 24, 2022',
      content: 'Expand Your Career Opportunities With Python',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-10.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 14, 2022',
      content: 'Complete PHP Programming Career Guideline',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-11.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'Sep 18, 2022',
      content: 'Programming Content Guideline For Beginners',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-12.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 26, 2022',
      content: 'The Complete JavaScript Course for Beginners',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-13.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'Feb 14, 2022',
      content: 'Learn Mobile Applications Development from Experts',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  public blogGridRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogList = [
    {
      img1: 'assets/img/blog/blog-05.jpg',
      img2: 'assets/img/user/user.jpg',
      date: 'April 20, 2022',
      sub: 'Programming, Web Design',
      content: 'Learn Webs Applications Development from Experts',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-06.jpg',
      img2: 'assets/img/user/user1.jpg',
      date: 'May 20, 2021',
      sub: 'Programming, Courses',
      content: 'Expand Your Career Opportunities With Python',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-07.jpg',
      img2: 'assets/img/user/user3.jpg',
      date: 'Jun 14, 2022',
      sub: 'Programming, Web Design',
      content: 'Complete PHP Programming Career Guideline',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
  ];
  public blogListRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogMasonry = [
    {
      img1: 'assets/img/blog/blog-08.jpg',
      date1: 'Jun 14, 2022',
      sub1: 'Programming, Web Design',
      content1: 'Learn Webs Applications Development from Experts',
      img2: 'assets/img/blog/blog-11.jpg',
      date2: 'Sep 18, 2022',
      sub2: 'Programming, Courses',
      content2: 'Programming Content Guideline For Beginners',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-09.jpg',
      date1: 'May 24, 2022',
      sub1: 'Programming, Courses',
      content1: 'Expand Your Career Opportunities With Python',
      img2: 'assets/img/blog/blog-09.jpg',
      date2: 'May 24, 2022',
      sub2: 'Programming, Courses',
      content2: 'Expand Your Career Opportunities With Python',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-10.jpg',
      date1: 'Jun 14, 2022',
      sub1: 'Programming, Web Design',
      content1: 'Complete PHP Programming Career Guideline',
      img2: 'assets/img/blog/blog-13.jpg',
      date2: 'Feb 14, 2022',
      sub2: 'Programming, Courses',
      content2: 'Learn Mobile Applications Development from Experts',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
  ];
  public blogModern = [
    {
      img1: 'assets/img/blog/blog-14.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jan 20, 2022',
      sub: 'Programming, Angular',
    },
    {
      img1: 'assets/img/blog/blog-15.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: 'Jun 10, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-16.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Mobile Applications Development from Experts',
      date: 'March 14, 2022',
      sub: 'Programming, React',
    },
    {
      img1: 'assets/img/blog/blog-17.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: 'Jun 19, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-18.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Programming Content Guideline For Beginners',
      date: 'Nov 05, 2022',
      sub: 'Programming, Php',
    },
    {
      img1: 'assets/img/blog/blog-19.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'The Complete JavaScript Course for Beginners',
      date: 'Dec 11, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-14.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
      sub: 'Programming, Course',
    },
    {
      img1: 'assets/img/blog/blog-15.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: 'May 18, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-16.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Mobile Applications Development from Experts',
      date: 'Sep 23, 2022',
      sub: 'Programming, Course',
    },
  ];
  public notificationsToday = [
    {
      img: 'assets/img/user/user2.jpg',
      name: 'Rolands R',
      time: 'Today at 9:42 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Jenis R.',
      time: 'Today at 10:08 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
  ];
  public notificationsYesterday = [
    {
      img: 'assets/img/user/user3.jpg',
      name: 'Jesse Stevens',
      time: 'Yesterday at 9:42 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Rolands R',
      time: 'Yesterday at 5:40 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user11.jpg',
      name: 'John Michael',
      time: 'Yesterday at 7:40 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
  ];
  public pricingPlan = [
    {
      heading: 'Basic',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
    {
      heading: 'Team',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
    {
      heading: 'Pro',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
  ];
  public myCourse = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating: '4.0',
      ratingNum: '(15)',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '10+ Lesson',
      time: '7hr 20min',
      rating: '4.2',
      ratingNum: '(20)',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '05+ Lesson',
      time: '8hr 00min',
      rating: '4.0',
      ratingNum: '(10)',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Learn Angular Fundamentals From beginning to advance lavel',
      lesson: '30+ Lesson',
      time: '10hr 30min',
      rating: '4.3',
      ratingNum: '(25)',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '20+ Lesson',
      time: '7hr 00min',
      rating: '4.0',
      ratingNum: '(15)',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'C# Developers Double Your Coding Speed with Visual Studio',
      lesson: '50+ Lesson',
      time: '10hr 30min',
      rating: '4.5',
      ratingNum: '(30)',
    },
  ];
  public depositInstructor = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public depositHistory = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public depositInstructorDashboard = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public profileDetails = [
    {
      heading: '50',
      paragraph: 'Purchased Courses',
      content: 'View All',
      img: 'assets/img/students/book.svg',
    },
    {
      heading: '30',
      paragraph: 'Total Transactions',
      content: 'View All',
      img: 'assets/img/students/receipt-text.svg',
    },
    {
      heading: '20',
      paragraph: 'Total Deposit',
      content: 'View All',
      img: 'assets/img/students/empty-wallet-tick.svg',
    },
    {
      heading: '$2055',
      paragraph: 'Total Withdraw',
      content: 'View All',
      img: 'assets/img/students/empty-wallet-change.svg',
    },
    {
      heading: '30',
      paragraph: 'Total Student',
      content: 'View All',
      img: 'assets/img/students/profile-user.svg',
    },
    {
      heading: '50',
      paragraph: 'Total Approved Course',
      content: 'View All',
      img: 'assets/img/students/book.svg',
    },
  ];
  public referredUsers = [
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredID: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredID: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredID: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $5.00',
      postBalance: '$5.00',
      status: 'negative',
    },
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '- $25.00',
      postBalance: '$25.00',
      status: 'negative',
    },
    {
      referredID: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $150.00',
      postBalance: '$150.00',
    },
    {
      referredID: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredID: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredID: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $10.00',
      postBalance: '$10.00',
      status: 'negative',
    },
  ];
  public instructorCourse = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Information About UI/UX Design Degree',
      students: '3200',
      status: 'Live',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      progress: 'progress stip',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      students: '0',
      status: 'Draft',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      students: '1500',
      status: 'Live',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: ' C# Developers Double Your Coding Speed with Visual Studio',
      students: '0',
      status: 'Pending',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      students: '0',
      status: 'Deleted',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
  ];
  public instructorEarnings = [
    {
      courses: 'Information About UI/UX  Design Degree',
      img: 'assets/img/course/course-10.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      img: 'assets/img/course/course-11.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Sketch from A to Z (2022): Become an app designer',
      img: 'assets/img/course/course-12.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
  ];
  public instructorEdit = [
    {
      heading: 'Profile Overview',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorEditEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      letter: 'B',
      paragraph: 'International University - (2004 - 2010)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      letter: 'B',
      paragraph: 'International University - (2010 - 2012)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      letter: 'B',
      paragraph: 'International University - (2012-2015)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorEditExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorEditCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content1: 'Information About UI/UX Design Degree',
      newPrice: '$300',
      oldPrice: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content1: 'Wordpress for Beginners - Master Wordpress Quickly',
      newPrice: '$200',
      oldPrice: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
  ];
  public instructorEditReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
  ];
  public instructorEditOverview = [
    {
      heading: '32',
      paragraph: 'Courses',
      img: 'assets/img/instructor/courses-icon.png',
    },
    {
      heading: '11,604',
      paragraph: 'Total Students',
      img: 'assets/img/instructor/ttl-stud-icon.png',
    },
    {
      heading: '12,230',
      paragraph: 'Reviews',
      img: 'assets/img/instructor/review-icon.png',
    },
  ];
  public instructorEditContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public orders = [
    {
      courses: 'Information About UI/UX Design Degree',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },

    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      sales: '30',
      invoice: '#12421',
      date: '10-05-20',
      method: 'Visa',
    },

    {
      courses: ' Sketch from A to Z (2022): Become an app designer',
      sales: '24',
      invoice: '#11021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '  Learn Angular Fundamentals From beginning to advance lavel',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '   Build Responsive Real World Websites with HTML5 and CSS3',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '   C# Developers Double Your Coding Speed with Visual Studio',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses:
        ' Learn JavaScript and Express to become a professional JavaScript',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses:
        ' Learn and Understand AngularJS to become a professional developer',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '  Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: ' The Complete App Design Course - UX',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
  ];
  public withdrawHistory = [
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1800',
      method: 'Mastercard',
    },
    {
      id: '#1051',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1200',
      method: 'Mastercard',
    },
    {
      id: '#2061',
      date: '10-05-20',
      status: 'Pending',
      amount: '$1100',
      method: 'Visa',
    },
    {
      id: '#1021',
      date: '10-05-20',
      status: 'Cancel',
      amount: '$1200',
      method: 'Visa',
    },
    {
      id: '#1051',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1500',
      method: 'Mastercard',
    },
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$2200',
      method: 'Visa',
    },
    {
      id: '#2061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$3200',
      method: 'Mastercard',
    },
    {
      id: '#1161',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1400',
      method: 'Visa',
    },
    {
      id: '#3061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1300',
      method: 'Mastercard',
    },
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Cancel',
      amount: '$1200',
      method: 'Mastercard',
    },
  ];
  public instructorProfileEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      paragraph: 'International University - (2004 - 2010)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      paragraph: 'International University - (2010 - 2012)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      paragraph: 'International University - (2012-2015)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorProfileExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorProfileCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content: 'Information About UI/UX Design Degree',
      price1: '$300 ',
      price2: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$300 ',
      price2: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
  ];
  public instructorProfileReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
  ];
  public instructorProfile = [
    {
      heading: 'Profile Overview',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorProfileOverview = [
    {
      heading: '32',
      paragraph: 'Courses',
      img: 'assets/img/instructor/courses-icon.png',
    },
    {
      heading: '11,604',
      paragraph: 'Total Students',
      img: 'assets/img/instructor/ttl-stud-icon.png',
    },
    {
      heading: '12,230',
      paragraph: 'Reviews',
      img: 'assets/img/instructor/review-icon.png',
    },
  ];
  public instructorProfileContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public instructorReviews = [
    {
      name: 'Nicole Brown',
      img: 'assets/img/user/user1.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'Jesse Stevens',
      img: 'assets/img/user/user2.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'John Smith',
      img: 'assets/img/user/user3.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'Stella Johnson',
      img: 'assets/img/user/user4.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
  ];
  public instructorStudentGrid = [
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Wade Warren',
      place: 'United States',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user3.jpg',
      name: 'Dianna Smiley',
      place: 'Tunisia',
      date: '15/12/2019',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user2.jpg',
      name: 'Esther Howard',
      place: 'Spain',
      date: '6/10/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user5.jpg',
      name: 'Guy Hawkins',
      place: 'United States',
      date: '13/1/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user6.jpg',
      name: 'Jacob Jones',
      place: 'United Kingdom',
      date: '2/6/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user4.jpg',
      name: 'Kristin Watson',
      place: 'Iceland',
      date: '22/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user11.jpg',
      name: 'Rivao Luke',
      place: 'Brazil',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user12.jpg',
      name: 'Nia Sikhone',
      place: 'Italy',
      date: '10/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user13.jpg',
      name: 'Xiaon Merry',
      place: 'France',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
  ];
  public instructorStudentList = [
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img1.png',
    },
    {
      name: 'Dianna Smiley',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img2.png',
    },
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img3.png',
    },
    {
      name: 'Jacob Jones',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img4.png',
    },
    {
      name: 'Kristin Watson',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img5.png',
    },
    {
      name: 'Rivao Luke',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img6.png',
    },
    {
      name: 'Nia Sikhone',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img7.png',
    },
    {
      name: 'Xiaon Merry',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img8.png',
    },
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img9.png',
    },
    {
      name: 'Dianna Smiley',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img10.png',
    },
  ];
  public instructorTickets1 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorTickets2 = [
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorTickets3 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
  ];
  public instructorTickets4 = [
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorGrid = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Rolands R',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Smith',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Micheal',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user1.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Nicole Brown',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Monroe Parker',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorGrid2 = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Rolands R',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Smith',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Micheal',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user1.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Nicole Brown',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Monroe Parker',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorList = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Rolands R',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'John Smith',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'John Micheal',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
  ];
  public transactionInstructorProfile = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public transactionsInstructor = [
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $5.00',
      postBalance: '$5.00',
      status: 'negative',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '- $25.00',
      postBalance: '$25.00',
      status: 'negative',
    },
    {
      referredId: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $150.00',
      postBalance: '$150.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $10.00',
      postBalance: '$10.00',
      status: 'negative',
    },
  ];
  public withdrawalInstructorProfile = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public withdrawalInstructor = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public cart = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      idle: 'FREE',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '10+ Lesson',
      time: '7hr 20min',
      price1: '$300',
      price2: '$99.00',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      price1: '$300',
      price2: '$99.00',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
  ];
  public courseGrid = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      heading: 'Information About UI/UX Design Degree',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$200',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/user/user3.jpg',
      name: 'Jesse Stevens',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user4.jpg',
      name: 'Nicole Brown',
      heading: 'Learn Angular Fundamentals From ...',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/user/user5.jpg',
      name: 'John Smith',
      heading: 'Build Responsive Real World Websites with ...',
      price1: '$29.99',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/user/user6.jpg',
      name: 'Stella Johnson',
      heading: 'C# Developers Double Your Coding Speed with ...',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-16.jpg',
      img2: 'assets/img/user/user.jpg',
      name: 'John Michael',
      heading: 'Learn JavaScript and Express to become a...',
      price1: '$200',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user4.jpg',
      name: 'Jesse Stevens',
      heading: 'Learn and Understand AngularJS to become a ...',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-17.jpg',
      img2: 'assets/img/user/user6.jpg',
      name: 'Monroe Parker',
      heading: 'Responsive Web Design Essentials HTML5 CSS3 ...',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
  ];
  public welcomeLogin = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public register = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerFive = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerFour = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerOne = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerThree = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerTwo = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public courseList = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user1.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user2.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Sketch from A to Z (2022): Become an app designer',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Jesse Stevens',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user3.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Learn Angular Fundamentals From beginning to advance lavel',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Jesse Stevens',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user4.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Build Responsive Real World Websites with HTML5 and CSS3',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'John Smith',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user5.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'C# Developers Double Your Coding Speed with Visual Studio',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Stella Johnson',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user6.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1:
        'Learn JavaScript and Express to become a professional JavaScript',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'John Michael',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-16.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user7.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1:
        'Learn and Understand AngularJS to become a professional developer',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Nicole Brown',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user8.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Monroe Parker',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-17.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user9.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'The Complete App Design Course - UX, UI and Design Thinking',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Lavern M.',
      role: 'Instructor',
    },
  ];
  public latestCourses = [
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Introduction LearnPress – LMS plugin',
      content2: 'FREE',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content1: 'Become a PHP Master and Make Money',
      content2: '$200',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content1: 'Learning jQuery Mobile for Beginners',
      content2: 'FREE',
    },
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Improve Your CSS Workflow with SASS',
      content2: '$200',
    },
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Improve Your CSS Workflow with SASS',
      content2: '$200',
    },
  ];
  public courseWishlist = [
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      idle: 'FREE',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
  ];
  public purchaseHistory = [
    {
      img1: 'assets/img/course/course-10.jpg',
      content1: 'Information About UI/UX',
      content2: 'Design Degree',
      content3: 'Invoice',
      idle: 'FREE',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user1.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      content1: 'Wordpress for Beginners - Master Wordpress',
      content2: 'Quickly',
      content3: 'Invoice',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user2.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
      amount1: '$300',
      amount2: '$99.00',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      content1: 'Sketch from A to Z (2022): Become an app',
      content2: 'designer',
      content3: 'Invoice',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user3.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
      amount1: '$300',
      amount2: '$99.00',
    },
  ];
  public wishlist = [
    {
      img: 'assets/img/course/course-01.jpg',
      price: '$300',
      content1: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
    {
      img: 'assets/img/course/course-02.jpg',
      price: '$300',
      content1: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
    {
      img: 'assets/img/course/course-03.jpg',
      price: '$300',
      content1: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
  ];
  public jobCategoryGraphics = [
    {
      img1: 'assets/img/category/category-01.jpg',
      content1: 'Logo Design',
      count1: '25',
      img2: 'assets/img/category/category-02.jpg',
      content2: 'Business Cards & Stationery',
      count2: '25',
      img3: 'assets/img/category/category-03.jpg',
      content3: 'Brochure Design',
      count3: '25',
      img4: 'assets/img/category/category-04.jpg',
      content4: 'Social Media Design',
      count4: '25',
      img5: 'assets/img/category/category-05.jpg',
      content5: 'Graphics for Streamers',
      count5: '25',
      img6: 'assets/img/category/category-06.jpg',
      content6: 'Photoshop Editing',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategoryprogramming = [
    {
      img1: 'assets/img/category/category-03.jpg',
      content1: 'Brochure Design',
      count1: '25',
      img2: 'assets/img/category/category-04.jpg',
      content2: 'Social Media Design',
      count2: '25',
      img3: 'assets/img/category/category-05.jpg',
      content3: 'Graphics for Streamers',
      count3: '25',
      img4: 'assets/img/category/category-06.jpg',
      content4: 'Photoshop Editing',
      count4: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategorymarketing = [
    {
      img1: 'assets/img/category/category-04.jpg',
      content1: 'Social Media Design',
      count1: '25',
      img2: 'assets/img/category/category-05.jpg',
      content2: 'Graphics for Streamers',
      count2: '25',
      img3: 'assets/img/category/category-06.jpg',
      content3: 'Photoshop Editing',
      count3: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategoryanimation = [
    {
      img1: 'assets/img/category/category-04.jpg',
      content1: 'Social Media Design',
      count1: '25',
      img2: 'assets/img/category/category-05.jpg',
      content2: 'Graphics for Streamers',
      count2: '25',
      img3: 'assets/img/category/category-06.jpg',
      content3: 'Photoshop Editing',
      count3: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public courseStudent = [
    {
      img: 'assets/img/course/course-10.jpg',
      content: 'Information About UI/UX Design Degree',
      rating1: '4.0',
      rating2: 'Edit rating',
      progress: 'progress stip',
      completion: '35% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-11.jpg',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-12.jpg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-13.jpg',
      content: 'Learn Angular Fundamentals From ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-14.jpg',
      content: 'Build Responsive Real World Websites with...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-15.jpg',
      content: 'C# Developers Double Your Coding Speed with ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-16.jpg',
      content: 'Learn JavaScript and Express to become a ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-17.jpg',
      content: 'Responsive Web Design Essentials HTML5 CSS3 ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
  ];
  public depositStudent = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public depositStudentDashboard = [
    {
      img: 'assets/img/students/book.svg',
      count: '50',
      courses: 'Purchased Courses',
      content: 'View All',
    },
    {
      img: 'assets/img/students/receipt-text.svg',
      count: '30',
      courses: 'Total Transactions',
      content: 'View All',
    },
    {
      img: 'assets/img/students/empty-wallet-tick.svg',
      count: '20',
      courses: 'Total Deposit',
      content: 'View All',
    },
  ];
  public latestTransactions = [];
  public settingStudentInvoice = [
    {
      orderId: '#1001',
      date: '15-01-2020, 10:45pm',
      amount: '$50.00',
      status: 'Due',
    },
    {
      orderId: '#1002',
      date: '15-02-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1003',
      date: '15-03-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1004',
      date: '15-04-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1005',
      date: '15-05-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1006',
      date: '15-06-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1007',
      date: '15-07-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1008',
      date: '15-08-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1009',
      date: '15-09-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1010',
      date: '15-10-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
  ];
  public settingStudentEarnings = [
    {
      content1: 'Net Earnings',
      price: '$ 63,240',
      content2: 'Earning this month',
    },
    {
      content1: 'Balance',
      price: '$ 8,530',
      content2: 'Earning this month',
    },
    {
      content1: 'Avg Deal Size',
      price: '$ 2,600',
      content2: 'Earning this month',
    },
    {
      content1: 'Referral Signups',
      price: '$ 783',
      content2: 'Earning this month',
    },
  ];
  public settingStudentReferral = [
    {
      referrals: 'Guy Hawkins',
      img: 'assets/img/students/refer-img1.png',
      referredId: '09341',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '10',
      totalEarned: '$45.00',
    },
    {
      referrals: 'Dianna Smiley',
      img: 'assets/img/students/refer-img2.png',
      referredId: '09342',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '15',
      totalEarned: '$75.00',
    },
    {
      referrals: 'Guy Hawkin',
      img: 'assets/img/students/refer-img3.png',
      referredId: '09343',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '20',
      totalEarned: '$100.00',
    },
    {
      referrals: 'Jacob Jones',
      img: 'assets/img/students/refer-img4.png',
      referredId: '09344',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '1',
      totalEarned: '$44.00',
    },
    {
      referrals: 'Kristin Watson',
      img: 'assets/img/students/refer-img5.png',
      referredId: '09345',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '5',
      totalEarned: '$25.00',
    },
    {
      referrals: 'Rivao Luke',
      img: 'assets/img/students/refer-img6.png',
      referredId: '09346',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '500',
      totalEarned: '$160.00',
    },
    {
      referrals: 'Nia Sikhone',
      img: 'assets/img/students/refer-img7.png',
      referredId: '09347',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '187',
      totalEarned: '$150.00',
    },
    {
      referrals: 'Xiaon Merry',
      img: 'assets/img/students/refer-img8.png',
      referredId: '09348',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '10',
      totalEarned: '$45.00',
    },
    {
      referrals: 'Guy Hawkins',
      img: 'assets/img/students/refer-img9.png',
      referredId: '09349',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '15',
      totalEarned: '$10.00',
    },
    {
      referrals: 'Dianna Smiley',
      img: 'assets/img/students/refer-img10.png',
      referredId: '09350',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '98',
      totalEarned: '$10.00',
    },
  ];
  public settingStudentActive = [
    {
      content1: 'Started On',
      content2: 'Oct 1, 2022',
    },
    {
      content1: 'Price',
      content2: 'Monthly',
    },
    {
      content1: 'Access',
      content2: 'Access All Courses',
    },
    {
      content1: 'Billing Date',
      content2: 'Next Billing on Nov 1, 2022',
    },
  ];
  public settingStudentExpired = [
    {
      content1: 'Started On',
      content2: 'Oct 1, 2022',
    },
    {
      content1: 'Price',
      content2: 'Monthly',
    },
    {
      content1: 'Access',
      content2: 'Access All Courses',
    },
    {
      content1: 'Billing Date',
      content2: 'Next Billing on Nov 1, 2022',
    },
  ];
  public settingSupportTickets1 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public settingSupportTickets2 = [
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public settingSupportTickets3 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
  ];
  public settingSupportTickets4 = [
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public studentProfileEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      paragraph: 'International University - (2004 - 2010)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      paragraph: 'International University - (2010 - 2012)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      paragraph: 'International University - (2012-2015)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public studentProfileExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public studentProfileCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content: 'Information About UI/UX Design Degree',
      price1: '$300 ',
      price2: '$99.00',
      role: 'Instructor',
      lesson: '12+ Lesson',
      student: '50 Students',
      time: '9hr 30min',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$200 ',
      price2: '$99.00',
      role: 'Instructor',
      lesson: '12+ Lesson',
      student: '50 Students',
      time: '9hr 30min',
    },
  ];
  public studentProfileReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
  ];
  public studentProfileContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public studentGrid1 = [
    {
      img1: 'assets/img/user/user1.jpg',
      name: 'Charles Dickens',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      name: 'Gabriel Palmer',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'France',
    },

    {
      img1: 'assets/img/user/user3.jpg',
      name: 'James Lemire',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Italy',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Olivia Murphy',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Brazil',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Rebecca Swartz',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user6.jpg',
      name: 'Betty Richards',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },

    {
      img1: 'assets/img/user/user14.jpg',
      name: 'Jeffrey Montgomery',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United Kingdom',
    },

    {
      img1: 'assets/img/user/user11.jpg',
      name: 'Brooke Hayes',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },

    {
      img1: 'assets/img/user/user12.jpg',
      name: 'Gertrude D. Shorter',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user13.jpg',
      name: 'David L. Garza',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Spain',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Vivian E. Winders',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Tunisia',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Sean K. Leon',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },
  ];
  public studentGrid2 = [
    {
      img1: 'assets/img/user/user1.jpg',
      name: 'Charles Dickens',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      name: 'Gabriel Palmer',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'France',
    },

    {
      img1: 'assets/img/user/user3.jpg',
      name: 'James Lemire',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Italy',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Olivia Murphy',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Brazil',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Rebecca Swartz',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user6.jpg',
      name: 'Betty Richards',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },

    {
      img1: 'assets/img/user/user14.jpg',
      name: 'Jeffrey Montgomery',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United Kingdom',
    },

    {
      img1: 'assets/img/user/user11.jpg',
      name: 'Brooke Hayes',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },

    {
      img1: 'assets/img/user/user12.jpg',
      name: 'Gertrude D. Shorter',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user13.jpg',
      name: 'David L. Garza',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Spain',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Vivian E. Winders',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Tunisia',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Sean K. Leon',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },
  ];
  public studentList = [
    {
      img1: 'assets/img/students/student-01.jpg',
      name1: 'Charles Dickens',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Brazil',

      img3: 'assets/img/students/student-02.jpg',
      name2: 'Gabriel Palmer',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Italy',
    },
    {
      img1: 'assets/img/students/student-03.jpg',
      name1: 'James Lemire',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-04.jpg',
      name2: 'Olivia Murphy',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'France',
    },
    {
      img1: 'assets/img/students/student-05.jpg',
      name1: 'Rebecca Swartz',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Iceland',

      img3: 'assets/img/students/student-06.jpg',
      name2: 'Betty Richards',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Louisiana',
    },
    {
      img1: 'assets/img/students/student-07.jpg',
      name1: 'Jeffrey Montgomery',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Brazil',

      img3: 'assets/img/students/student-08.jpg',
      name2: 'Brooke Hayes',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'United States',
    },
    {
      img1: 'assets/img/students/student-09.jpg',
      name1: 'Gertrude Shorter',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-10.jpg',
      name2: 'David Garza',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Tunisia',
    },
    {
      img1: 'assets/img/students/student-11.jpg',
      name1: 'Vivian Winders',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-12.jpg',
      name2: 'Sean Leon',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Spain',
    },
  ];
  public transactionStudent = [
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD ',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal ',
      status: 'negative',
      amount: '- $5.00',
      postBalance: '$5.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      status: 'negative',
      amount: '- $25.00',
      postBalance: '$25.00',
    },
    {
      referredId: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin  ',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      amount: '+ $150.00',
      postBalance: ' $150.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal ',
      amount: '- $10.00',
      postBalance: '$10.00',
    },
  ];
  public forgotPassword = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public newPassword = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public verificationCode = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public sideBar: Array<any> = [
    {
      tittle: 'Home',
      base: 'home',
      // base2: 'home-two',
      // base3: 'home-three',
      // base4: 'home-four',
      showAsTab: false,
      separateRoute: true,
      // route: 'javascript:void(0)',
      route: routes.home,
      menu: [
        {
          menuValue: 'Home',
          route: routes.home,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home',
          subMenus: [],
        },
        {
          menuValue: 'Home Two',
          route: routes.home2,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-two',
          subMenus: [],
        },
        {
          menuValue: 'Home Three',
          route: routes.home3,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-three',
          subMenus: [],
        },
        {
          menuValue: 'Home Four',
          route: routes.home4,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-four',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Courses',
      base: 'instructor',
      showAsTab: false,
      separateRoute: true,
      route: routes.instructor_list,
      menu: [
        {
          menuValue: 'Instructor',
          // route: '/instructor/instructor-view/instructor-list',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-view',
          last: 'instructor-list',
          subMenus: [
            {
              menuValue: 'List',
              route: routes.instructor_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'instructor',
              page: 'instructor-view',
              last: 'instructor-list',
              subMenus: [],
            },
            {
              menuValue: 'Grid',
              route: routes.instructor_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'instructor',
              page: 'instructor-view',
              last: 'instructor-grid',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Dashboard',
          route: routes.instructor_dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-dashboard',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.instructorProfile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Course',
          route: routes.instructor_course,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-course',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.instructorWishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.instructor_reviews,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-reviews',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My  Attempts',
          route: routes.instructorQuizAttempts,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor--attempts',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.instructor_orders,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-orders',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Question & Answer',
          route: routes.instructorQA,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-qa',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Referrals',
          route: routes.instructorReferral,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-referral',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Messages',
          route: routes.instructor_chat,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-chat',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Support Ticket',
          route: routes.instructor_tickets,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-tickets',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Notifications',
          route: routes.instructor_notification,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-notification',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.instructorSettings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'settings',
          last: 'instructor-settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Student',
      base: 'student',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Student',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'student',
          page: 'student-view',
          last: 'students-list',
          subMenus: [
            {
              menuValue: 'List',
              route: routes.students_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'student',
              page: 'student-view',
              last: 'students-list',
              subMenus: [],
            },
            {
              menuValue: 'Grid',
              route: routes.students_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'student',
              page: 'student-view',
              last: 'students-grid',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Student Dashboard',
          route: routes.studentDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-dashboard',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.students_profile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Enrolled Courses',
          route: routes.studentCourses,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-courses',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.studentWishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.studentReviews,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-reviews',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My  Attempts',
          route: routes.students,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.studentOrderHistory,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-order-history',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Question & Answer',
          route: routes.studentsQA,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-qa',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Messages',
          route: routes.studentsMessage,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-message',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Referral',
          route: routes.students_referral,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-referral',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Support Tickets',
          route: routes.students_tickets,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-tickets',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.studentSettings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'settings',
          last: 'student-settings',
          subMenus: [],
        },
      ],
    },

    {
      tittle: 'Pages',
      base: 'pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Notifications',
          route: routes.page_notifications,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'notifications',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Pricing Plan',
          route: routes.page_pricing_plan,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'pricing-plan',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.page_wishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Course',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'pages',
          page: 'course',
          last: 'course-list',
          subMenus: [
            {
              menuValue: 'Add Course',
              route: routes.page_add_course,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'add-course',
              subMenus: [],
            },
            {
              menuValue: 'Course List',
              route: routes.page_course_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-list',
              subMenus: [],
            },
            {
              menuValue: 'Course Grid',
              route: routes.page_course_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-grid',
              subMenus: [],
            },
            {
              menuValue: 'Course Details',
              route: routes.page_course_details,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-details',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Error',
          hasSubRoute: true,
          showSubRoute: false,
          page: 'error',
          subMenus: [
            {
              menuValue: 'Coming Soon',
              route: routes.coming_soon,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'come-soon',
              last: '',
              subMenus: [],
            },
            {
              menuValue: '404',
              route: routes.error_404,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'error404',
              last: '',
              subMenus: [],
            },
            {
              menuValue: '500',
              route: routes.error_500,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'error500',
              last: '',
              subMenus: [],
            },
            {
              menuValue: 'Under Construction',
              route: routes.under_construction,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'under-construction',
              last: '',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'FAQ',
          route: routes.page_faq,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'faq',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Support',
          route: routes.page_support,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'support',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Category',
          route: routes.page_job_category,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'job-category',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Cart',
          route: routes.page_cart,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'cart',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Checkout',
          route: routes.page_checkout,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'checkout',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Login',
          route: routes.login,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'login',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Register',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'register-page',
          last: 'register',
          subMenus: [],
        },
        {
          menuValue: 'Forgot Password',
          route: routes.forgot_password,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'forgot-password',
          last: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Blog',
      base: 'blog',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Blog List',
          route: routes.blog_list,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-list',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Grid',
          route: routes.blog_grid,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-grid',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Masonry',
          route: routes.blog_masonry,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-masonry',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Modern',
          route: routes.blog_modern,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-modern',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Details',
          route: routes.blog_details,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-details',
          last: '',
          subMenus: [],
        },
      ],
    },
  ];
  public Instructor_sideBar = [
    {
      tittle: 'DASHBOARD',
      class: false,
      menu: [
        {
          menuValue: 'My Dashboard',
          route: routes.instructor_dashboard,
          icon: 'home',
          base: 'instructor-dashboard',
          subMenus: [],
        },
        {
          menuValue: 'My Courses',
          route: routes.instructor_course,
          icon: 'book',
          base: 'instructor-course',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.instructor_reviews,
          icon: 'star',
          base: 'instructor-reviews',
          subMenus: [],
        },
        {
          menuValue: 'Earnings',
          route: routes.instructor_earnings,
          icon: 'pie-chart',
          base: 'instructor-earnings',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.instructor_orders,
          icon: 'shopping-bag',
          base: 'instructor-orders',
          subMenus: [],
        },
        {
          menuValue: 'Students',
          route: routes.instructor_student_grid,
          icon: 'home',
          base: 'instructor-student-grid',
          subMenus: [],
        },
        {
          menuValue: 'Payouts',
          route: routes.instructor_payouts,
          icon: 'dollar-sign',
          base: 'instructor-payouts',
          subMenus: [],
        },
        {
          menuValue: 'Support Tickets',
          route: routes.instructor_tickets,
          icon: 'server',
          base: 'instructor-tickets',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'ACCOUNT SETTINGS',
      class: true,
      menu: [
        {
          menuValue: 'Edit Profile',
          route: routes.instructor_edit_profile,
          icon: 'settings',
          base: 'instructor-edit-profile',
          subMenus: [],
        },
        {
          menuValue: 'Security',
          route: routes.instructor_security,
          icon: 'user',
          base: 'instructor-security',
          subMenus: [],
        },
        {
          menuValue: 'Social Profiles',
          route: routes.instructor_social_profiles,
          icon: 'refresh-cw',
          base: 'instructor-social-profiles',
          subMenus: [],
        },
        {
          menuValue: 'Notifications',
          route: routes.instructor_notification,
          icon: 'bell',
          base: 'instructor-notification',
          subMenus: [],
        },
        {
          menuValue: 'Profile Privacy',
          route: routes.instructor_profile_privacy,
          icon: 'lock',
          base: 'instructor-profile-privacy',
          subMenus: [],
        },
        {
          menuValue: 'Delete Profile',
          route: routes.instructor_delete_profile,
          icon: 'trash-2',
          base: 'instructor-delete-profile',
          subMenus: [],
        },
        {
          menuValue: 'Linked Accounts',
          route: routes.instructor_linked_account,
          icon: 'user',
          base: 'instructor-linked-account',
          subMenus: [],
        },
        {
          menuValue: 'Sign Out',
          route: routes.home,
          icon: 'power',
          base: '',
          subMenus: [],
        },
      ],
    },
  ];

  public getInstructorSideBarData: BehaviorSubject<Array<Instructor_sideBar>> =
    new BehaviorSubject<Array<Instructor_sideBar>>(this.Instructor_sideBar);

  public Student_sideBar = [
    {
      tittle: 'ACCOUNT SETTINGS',
      class: false,
      menu: [
        {
          menuValue: 'Edit Profile',
          route: routes.students_edit_profile,
          icon: 'settings',
          base: 'setting-edit-profile',
          subMenus: [],
        },
        {
          menuValue: 'Security',
          route: routes.students_security,
          icon: 'user',
          base: 'setting-student-security',
          subMenus: [],
        },
        {
          menuValue: 'Social Profiles',
          route: routes.students_social_profile,
          icon: 'refresh-cw',
          base: 'setting-student-social-profile',
          subMenus: [],
        },
        {
          menuValue: 'Notifications',
          route: routes.students_notification,
          icon: 'bell',
          base: 'setting-student-notification',
          subMenus: [],
        },
        {
          menuValue: 'Profile Privacy',
          route: routes.students_privacy,
          icon: 'lock',
          base: 'setting-student-privacy',
          subMenus: [],
        },
        {
          menuValue: 'Delete Profile',
          route: routes.students_delete,
          icon: 'trash-2',
          base: 'setting-student-delete-profile',
          subMenus: [],
        },
        {
          menuValue: 'Linked Accounts',
          route: routes.students_accounts,
          icon: 'user',
          base: 'setting-student-accounts',
          subMenus: [],
        },
        {
          menuValue: 'Referrals',
          route: routes.students_referral,
          icon: 'user-plus',
          base: 'setting-student-referral',
          subMenus: [],
        },
        {
          menuValue: 'Sign Out',
          route: routes.login,
          icon: 'power',
          base: 'login',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'SUBSCRIPTION',
      class: false,
      menu: [
        {
          menuValue: 'My Subscriptions',
          route: routes.students_subscription,
          icon: 'calendar',
          base: 'setting-student-subscription',
          subMenus: [],
        },
        {
          menuValue: 'Billing Info',
          route: routes.students_billing,
          icon: 'credit-card',
          base: 'setting-student-billing',
          subMenus: [],
        },
        {
          menuValue: 'Payment',
          route: routes.students_payments,
          icon: 'credit-card',
          base: 'setting-student-payment',
          subMenus: [],
        },
        {
          menuValue: 'Invoice',
          route: routes.students_invoice,
          icon: 'clipboard',
          base: 'setting-student-invoice',
          subMenus: [],
        },
      ],
    },
  ];




  // courses, tasks, assessments, grades
  private course: any;
  private defaultCourses = [

    // information technology
    // {
    //   instructor: 'Anton Caesar Cabais',
    //   instructor_profile: 'assets/img/ton.jpg',
    //   course: 'Information Technology',
    //   subject: 'Information Technology',
    //   block: 'A',
    //   startDate: new Date(2024, 7, 20),
    //   time: '09:00 - 10:00',
    //   grade: '97',
    //   enrollmentKey: '12345',
    //   progress: '65',
    //   imageUrl: 'assets/img/program.jpg',
    //   enrolled: 'yes',
      
    //   modules: [
    //     {
    //       title: 'Introduction to Information Technology',
    //       description: 'Overview of IT Concepts',
    //       about: 'This module introduces you to the fundamental concepts of Information Technology, including hardware, software, networking, and databases.',
    //       materials: [
    //         { title: 'Introduction to IT - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
    //         { title: 'Introduction to IT - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
    //         { title: 'Introduction to IT - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
    //       ],
    //       assignments: [
    //         { name: 'IT Basics Homework 1', 
    //           dueDate: new Date(2024, 7, 11), 
    //           score: '10/12',  
    //           details: 'This assignment covers the basics of IT, including understanding computer hardware and software.',
    //           resources: [
    //             { name: 'IT Basics', link: 'assets/courses/teach.pdf' }
    //           ]            
    //         },
    //       ],
          
    //       exams: [
    //         { name: 'IT Basics Quiz', dueDate: new Date(2024, 7, 15), score: '52/60' }
    //       ]
    //     },
    //     {
    //       title: 'Networking Fundamentals',
    //       description: 'Understanding Network Structures',
    //       about: 'This module covers the basics of networking, including types of networks, network topologies, and network protocols.',
    //       materials: [
    //         { title: 'Networking Fundamentals - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
    //         { title: 'Networking Fundamentals - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
    //         { title: 'Networking Fundamentals - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
    //       ],
    //       assignments: [
    //         { name: 'Networking Homework', dueDate: new Date(2024, 7, 20), score: '10/15' },
    //         { name: 'Network Setup Assignment', dueDate: new Date(2024, 7, 25), score: '12/20' },
    //         { 
    //           name: 'Network Troubleshooting Homework', 
    //           dueDate: new Date(2024, 7, 28), 
    //           score: '13/15',
    //           resources: [
    //             { name: 'Network Troubleshooting Guide', link: 'assets/courses/teach.pdf' }
    //           ]
    //         }
    //       ],
          
    //       exams: [
    //         { name: 'Networking Fundamentals Test', dueDate: new Date(2024, 7, 28), score: '50/60' }
    //       ]
    //     },
    //     {
    //       title: 'Database Management',
    //       description: 'Introduction to Databases',
    //       about: 'In this module, you will learn about database management systems, including SQL, relational databases, and data modeling.',
    //       materials: [
    //         { title: 'Database Management - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
    //         { title: 'Database Management - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
    //         { title: 'Database Management - Supplementary Reading', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
    //       ],
    //       assignments: [
    //         { name: 'Database Design Homework', dueDate: new Date(2024, 8, 5), score: '10/12' },
    //         { name: 'SQL Query Assignment', dueDate: new Date(2024, 8, 10), score: '11/15' },
    //         { 
    //           name: 'Database Optimization Homework', 
    //           dueDate: new Date(2024, 8, 15), 
    //           score: '12/12',
    //           resources: [
    //             { name: 'SQL Optimization Guide', link: 'assets/courses/teach.pdf' }
    //           ]
    //         }
    //       ],
          
    //       exams: [
    //         { name: 'Database Management Exam', dueDate: new Date(2024, 8, 20), score: '32/60' }
    //       ]
    //     }
    //   ],
    //   enrolledStudents: [
       
    //     { name: 'Jose Rizal', email: 'joserizal@gmail.com', progress: '40' },
    //     { name: 'Emilia Aguinaldo', email: 'emiliaaguinaldo@gmail.com', progress: '50' },
    //     { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', progress: '30' },
    //     { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', progress: '70' },
    //     { name: 'William Cruz', email: 'williamcruz@gmail.com', progress: '90' },
    //     { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', progress: '60' },
    //     { name: 'Jaime Tan', email: 'jaimetan@gmail.com', progress: '40' },
    //     { name: 'Ava Garcia', email: 'avagarcia@gmail.com', progress: '80' },
    //     { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', progress: '50' },
    //     { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', progress: '70' },
    //     { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', progress: '30' },
  
    //     { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', progress: '70' },
    //     { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', progress: '50' },
    //     { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', progress: '40' },
    //     { name: 'Ethan Flores', email: 'ethanflores@gmail.com', progress: '60' },
    //     { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', progress: '80' }
    //   ]
      
    // },
    {
      instructor: 'Anton Caesar Cabais',
      instructor_profile: 'assets/img/ton.jpg',
      course: 'Information Technology',
      subject: 'Information Technology',
      block: 'A',
      startDate: new Date(2024, 7, 20),
      time: '09:00 - 10:00',
      grade: '97',
      enrollmentKey: '12345',
      progress: '65',
      imageUrl: 'assets/img/program.jpg',
      enrolled: 'yes',
      
      modules: [
        {
          title: 'Introduction to Information Technology',
          description: 'Overview of IT Concepts',
          about: 'This module introduces you to the fundamental concepts of Information Technology, including hardware, software, networking, and databases.',
          materials: [
            { title: 'Introduction to IT - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to IT - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Introduction to IT - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { 
              name: 'IT Basics Homework 1', 
              dueDate: new Date(2024, 7, 11), 
              score: '10/12',  
              details: 'This assignment covers the basics of IT, including understanding computer hardware and software.',
              resources: [
                { name: 'IT Basics', link: 'assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '9/12' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '10/12' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '8/12' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '11/12' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '12/12' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '10/12' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '9/12' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '11/12' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '10/12' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '11/12' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '8/12' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '11/12' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '10/12' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '9/12' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '10/12' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '11/12' }
              ]
            }
          ],
          exams: [
            { 
              name: 'IT Basics Quiz', 
              dueDate: new Date(2024, 7, 15), 
              score: '52/60',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '50/60' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '52/60' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '48/60' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '54/60' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '56/60' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '52/60' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '50/60' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '55/60' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '52/60' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '54/60' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '49/60' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '54/60' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '52/60' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '50/60' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '52/60' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '55/60' }
              ]
            }
          ]
        },
        {
          title: 'Networking Fundamentals',
          description: 'Understanding Network Structures',
          about: 'This module covers the basics of networking, including types of networks, network topologies, and network protocols.',
          materials: [
            { title: 'Networking Fundamentals - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Networking Fundamentals - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Networking Fundamentals - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { 
              name: 'Networking Homework', 
              dueDate: new Date(2024, 7, 20), 
              score: '10/15',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '9/15' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '10/15' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '8/15' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '12/15' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '13/15' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '10/15' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '9/15' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '12/15' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '11/15' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '12/15' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '8/15' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '12/15' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '11/15' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '9/15' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '10/15' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '12/15' }
              ]
            },
            { 
              name: 'Network Setup Assignment', 
              dueDate: new Date(2024, 7, 25), 
              score: '12/20',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '11/20' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '12/20' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '10/20' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '14/20' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '15/20' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '12/20' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '11/20' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '14/20' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '13/20' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '14/20' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '10/20' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '14/20' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '13/20' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '11/20' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '12/20' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '14/20' }
              ]
            },
            { 
              name: 'Network Troubleshooting Homework', 
              dueDate: new Date(2024, 7, 28), 
              score: '13/15',
              resources: [
                { name: 'Network Troubleshooting Guide', link: 'assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '12/15' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '13/15' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '11/15' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '14/15' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '15/15' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '13/15' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '12/15' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '14/15' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '13/15' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '14/15' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '11/15' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '14/15' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '13/15' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '12/15' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '13/15' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '14/15' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Networking Fundamentals Test', 
              dueDate: new Date(2024, 7, 28), 
              score: '50/60',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '48/60' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '50/60' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '46/60' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '52/60' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '54/60' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '50/60' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '48/60' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '53/60' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '50/60' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '52/60' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '45/60' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '52/60' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '50/60' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '48/60' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '50/60' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '53/60' }
              ]
            }
          ]
        },
        {
          title: 'Database Management',
          description: 'Introduction to Databases',
          about: 'In this module, you will learn about database management systems, including SQL, relational databases, and data modeling.',
          materials: [
            { title: 'Database Management - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Database Management - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Database Management - Supplementary Reading', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { 
              name: 'Database Design Homework', 
              dueDate: new Date(2024, 8, 5), 
              score: '10/12',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '9/12' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '10/12' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '8/12' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '11/12' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '12/12' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '10/12' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '9/12' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '11/12' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '10/12' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '11/12' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '8/12' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '11/12' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '10/12' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '9/12' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '10/12' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '11/12' }
              ]
            },
            { 
              name: 'SQL Query Assignment', 
              dueDate: new Date(2024, 8, 10), 
              score: '11/15',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '10/15' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '11/15' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '9/15' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '12/15' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '13/15' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '11/15' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '10/15' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '12/15' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '11/15' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '12/15' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '9/15' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '12/15' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '11/15' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '10/15' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '11/15' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '12/15' }
              ]
            },
            { 
              name: 'Database Optimization Homework', 
              dueDate: new Date(2024, 8, 15), 
              score: '12/12',
              resources: [
                { name: 'SQL Optimization Guide', link: 'assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '11/12' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '12/12' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '10/12' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '12/12' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '12/12' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '11/12' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '11/12' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '12/12' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '11/12' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '12/12' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '10/12' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '12/12' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '11/12' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '11/12' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '12/12' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '12/12' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Database Management Exam', 
              dueDate: new Date(2024, 8, 20), 
              score: '32/60',
              scores: [
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '30/60' },
                { name: 'Cabais Anton', email: 'student9@gmail.com', score: '32/60' },
                { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', score: '28/60' },
                { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', score: '35/60' },
                { name: 'William Cruz', email: 'williamcruz@gmail.com', score: '38/60' },
                { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', score: '32/60' },
                { name: 'Jaime Tan', email: 'jaimetan@gmail.com', score: '30/60' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '36/60' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '32/60' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '35/60' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '29/60' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '34/60' },
                { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', score: '32/60' },
                { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', score: '30/60' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '32/60' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '35/60' }
              ]
            }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'Jose Rizal', email: 'joserizal@gmail.com', progress: '40' },
        { name: 'Cabais Anton', email: 'student9@gmail.com', progress: '100' },
        { name: 'Daniela Bautista', email: 'danielabautista@gmail.com', progress: '30' },
        { name: 'Sophia Reyes', email: 'sophiareyes@gmail.com', progress: '70' },
        { name: 'William Cruz', email: 'williamcruz@gmail.com', progress: '90' },
        { name: 'Olivia Lopez', email: 'olivialopez@gmail.com', progress: '60' },
        { name: 'Jaime Tan', email: 'jaimetan@gmail.com', progress: '40' },
        { name: 'Ava Garcia', email: 'avagarcia@gmail.com', progress: '80' },
        { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', progress: '50' },
        { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', progress: '70' },
        { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', progress: '30' },
        { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', progress: '70' },
        { name: 'Mason Hernandez', email: 'masonhernandez@gmail.com', progress: '50' },
        { name: 'Charlotta Dela Rosa', email: 'charlottadelarosa@gmail.com', progress: '40' },
        { name: 'Ethan Flores', email: 'ethanflores@gmail.com', progress: '60' },
        { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', progress: '80' }
      ]
    },
    

    // cybersecurity

    {
      instructor: 'Edward Rogers',
      instructor_profile: 'assets/img/tonn.jpeg',
      course: 'Cybersecurity',
      subject: 'Cybersecurity',
      block: 'B',
      startDate: new Date(2024, 8, 1),
      time: '14:00 - 15:00',
      grade: '90',
      enrollmentKey: 'cyber2024',
      progress: '75',
      imageUrl: 'assets/img/cybersec.jpg',
      enrolled: 'yes',
      
      prerequisite: {
        course: 'Information Technology'
      },
    
      modules: [
        {
          title: 'Introduction to Cybersecurity',
          description: 'Understanding the basics of Cybersecurity',
          about: 'This module introduces the fundamental concepts of cybersecurity, including the importance of protecting digital information and systems from cyber threats.',
          materials: [
            { title: 'Cybersecurity Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 7, 25) },
            { title: 'Cybersecurity Basics - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 7, 26) },
            { title: 'Cybersecurity Terminology - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 7, 27) }
          ],
          assignments: [
            { 
              name: 'Cybersecurity Homework 1', 
              dueDate: new Date(2024, 7, 15), 
              score: '15/20',  
              details: 'This assignment covers the basic concepts and importance of cybersecurity.',
              resources: [
                { name: 'Cybersecurity Homework 1', link: 'assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '13/20' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '15/20' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '14/20' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '16/20' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '15/20' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '14/20' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '12/20' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '14/20' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '17/20' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '16/20' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '15/20' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '17/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Cybersecurity Quiz', 
              dueDate: new Date(2024, 8, 15), 
              score: '45/50',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '43/50' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '45/50' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '42/50' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '46/50' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '44/50' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '43/50' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '41/50' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '44/50' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '47/50' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '46/50' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '44/50' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '47/50' }
              ]
            }
          ]
        },
        {
          title: 'Network Security',
          description: 'Protecting network infrastructures from cyber threats',
          about: 'This module covers the principles of securing network infrastructures, including firewalls, intrusion detection systems, and secure communication protocols.',
          materials: [
            { title: 'Network Security - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 5) },
            { title: 'Network Security - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 8, 6) },
            { title: 'Firewalls and IDS - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 7) }
          ],
          assignments: [
            { 
              name: 'Network Security Homework', 
              dueDate: new Date(2024, 8, 20), 
              score: '18/25',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '16/25' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '18/25' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '17/25' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '19/25' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '18/25' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '17/25' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '15/25' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '17/25' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '20/25' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '19/25' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '18/25' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '20/25' }
              ]
            },
            { 
              name: 'Securing Networks', 
              dueDate: new Date(2024, 8, 25), 
              score: '20/25',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '18/25' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '20/25' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '19/25' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '21/25' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '20/25' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '19/25' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '17/25' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '19/25' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '22/25' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '21/25' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '20/25' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '22/25' }
              ]
            },
            { 
              name: 'Firewall Configuration Homework', 
              dueDate: new Date(2024, 8, 30), 
              score: '22/25',
              resources: [
                { name: 'Firewall Setup Guide', link: '/assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '20/25' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '22/25' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '21/25' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '23/25' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '22/25' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '21/25' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '19/25' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '21/25' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '24/25' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '23/25' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '22/25' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '24/25' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Network Security Test', 
              dueDate: new Date(2024, 9, 5), 
              score: '40/50',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '38/50' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '40/50' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '37/50' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '42/50' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '40/50' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '39/50' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '36/50' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '39/50' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '43/50' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '42/50' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '40/50' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '43/50' }
              ]
            }
          ]
        },
        {
          title: 'Application Security',
          description: 'Ensuring the security of software applications',
          about: 'In this module, you will learn how to secure software applications from vulnerabilities, including secure coding practices and threat modeling.',
          materials: [
            { title: 'Application Security - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 15) },
            { title: 'Application Security - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 8, 16) },
            { title: 'OWASP Top 10 - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 17) }
          ],
          assignments: [
            { 
              name: 'Secure Coding Homework', 
              dueDate: new Date(2024, 9, 10), 
              score: '19/20',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '18/20' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '19/20' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '18/20' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '20/20' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '19/20' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '18/20' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '17/20' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '18/20' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '20/20' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '19/20' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '19/20' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Threat Modeling Exercise', 
              dueDate: new Date(2024, 9, 15), 
              score: '18/20',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '17/20' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '18/20' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '17/20' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '19/20' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '18/20' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '17/20' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '16/20' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '18/20' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '19/20' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '18/20' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '18/20' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '19/20' }
              ]
            },
            { 
              name: 'Application Security Homework', 
              dueDate: new Date(2024, 9, 20), 
              score: '20/20',
              resources: [
                { name: 'Secure Coding Guide', link: '/assets/courses/teach.pdf' }
              ],
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '19/20' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '20/20' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '19/20' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '20/20' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '19/20' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '18/20' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '18/20' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '19/20' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '20/20' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '20/20' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '19/20' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '20/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Final Exam', 
              dueDate: new Date(2024, 9, 30), 
              score: '85/100',
              scores: [
                { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', score: '82/100' },
                { name: 'Maria Santos', email: 'mariasantos@gmail.com', score: '85/100' },
                { name: 'Jose Rizal', email: 'joserizal@gmail.com', score: '80/100' },
                { name: 'Ava Garcia', email: 'avagarcia@gmail.com', score: '87/100' },
                { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', score: '84/100' },
                { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', score: '85/100' },
                { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', score: '79/100' },
                { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', score: '83/100' },
                { name: 'Lucas Santos', email: 'lucassantos@gmail.com', score: '88/100' },
                { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', score: '86/100' },
                { name: 'Ethan Flores', email: 'ethanflores@gmail.com', score: '84/100' },
                { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', score: '89/100' }
              ]
            }
          ]
        }
      ],
    
      enrolledStudents: [
        { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', progress: '100' },
        { name: 'Maria Santos', email: 'mariasantos@gmail.com', progress: '60' },
        { name: 'Jose Rizal', email: 'joserizal@gmail.com', progress: '40' },
        { name: 'Ava Garcia', email: 'avagarcia@gmail.com', progress: '80' },
        { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', progress: '50' },
        { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', progress: '70' },
        { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', progress: '30' },
        { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', progress: '60' },
        { name: 'Lucas Santos', email: 'lucassantos@gmail.com', progress: '90' },
        { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', progress: '70' },
        { name: 'Ethan Flores', email: 'ethanflores@gmail.com', progress: '60' },
        { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', progress: '80' }
      ]
    },
    

  //  {
  //     instructor: 'Edward Rogers',
  //     instructor_profile: 'assets/img/tonn.jpeg',
  //     course: 'Cybersecurity ',
  //     subject: 'Cybersecurity',
  //     block: 'B',
  //     startDate: new Date(2024, 8, 1),
  //     time: '14:00 - 15:00',
  //     grade: '90',
  //     enrollmentKey: 'cyber2024',
  //     progress: '75',
  //     imageUrl: 'assets/img/cybersec.jpg',
  //     enrolled: 'yes',
      
  //     prerequisite: {
  //       course: 'Information Technology'
  //     },
    
  //     modules: [
  //       {
  //         title: 'Introduction to Cybersecurity',
  //         description: 'Understanding the basics of Cybersecurity',
  //         about: 'This module introduces the fundamental concepts of cybersecurity, including the importance of protecting digital information and systems from cyber threats.',
  //         materials: [
  //           { title: 'Cybersecurity Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 7, 25) },
  //           { title: 'Cybersecurity Basics - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 7, 26) },
  //           { title: 'Cybersecurity Terminology - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 7, 27) }
  //         ],
  //         assignments: [
  //           { 
  //             name: 'Cybersecurity Homework 1', 
  //             dueDate: new Date(2024, 7, 15), 
  //             score: '15/20',  
  //             details: 'This assignment covers the basic concepts and importance of cybersecurity.',
  //             resources: [
  //               { name: 'Cybersecurity Homework 1', link: 'assets/courses/teach.pdf' }
  //             ]
  //           },
  //         ],
  //         exams: [
  //           { name: 'Cybersecurity Quiz', dueDate: new Date(2024, 8, 15), score: '45/50' }
  //         ]
  //       },
  //       {
  //         title: 'Network Security',
  //         description: 'Protecting network infrastructures from cyber threats',
  //         about: 'This module covers the principles of securing network infrastructures, including firewalls, intrusion detection systems, and secure communication protocols.',
  //         materials: [
  //           { title: 'Network Security - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 5) },
  //           { title: 'Network Security - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 8, 6) },
  //           { title: 'Firewalls and IDS - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 7) }
  //         ],
  //         assignments: [
  //           { name: 'Network Security Homework', dueDate: new Date(2024, 8, 20), score: '18/25' },
  //           { name: 'Securing Networks', dueDate: new Date(2024, 8, 25), score: '20/25' },
  //           { 
  //             name: 'Firewall Configuration Homework', 
  //             dueDate: new Date(2024, 8, 30), 
  //             score: '22/25',
  //             resources: [
  //               { name: 'Firewall Setup Guide', link: '/assets/courses/teach.pdf' }
  //             ]
  //           }
  //         ],
  //         exams: [
  //           { name: 'Network Security Test', dueDate: new Date(2024, 9, 5), score: '40/50' }
  //         ]
  //       },
  //       {
  //         title: 'Application Security',
  //         description: 'Ensuring the security of software applications',
  //         about: 'In this module, you will learn how to secure software applications from vulnerabilities, including secure coding practices and threat modeling.',
  //         materials: [
  //           { title: 'Application Security - Lecture Notes', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 15) },
  //           { title: 'Application Security - Video Lecture', type: 'video', link: '/assets/courses/bini.mp4', uploadDate: new Date(2024, 8, 16) },
  //           { title: 'OWASP Top 10 - Supplementary Reading', type: 'pdf', link: '/assets/courses/teach.pdf', uploadDate: new Date(2024, 8, 17) }
  //         ],
  //         assignments: [
  //           { name: 'Secure Coding Homework', dueDate: new Date(2024, 9, 10), score: '19/20' },
  //           { name: 'Threat Modeling Exercise', dueDate: new Date(2024, 9, 15), score: '18/20' },
  //           { 
  //             name: 'Application Security Homework', 
  //             dueDate: new Date(2024, 9, 20), 
  //             score: '20/20',
  //             resources: [
  //               { name: 'Secure Coding Guide', link: '/assets/courses/teach.pdf' }
  //             ]
  //           }
  //         ],
  //         exams: [
  //           { name: 'Final Exam', dueDate: new Date(2024, 9, 30), score: '85/100' }
  //         ]
  //       }
  //     ],
    
  //     enrolledStudents: [
  //       { name: 'Juan Dela Cruz', email: 'juandelacruz@gmail.com', progress: '20' },
  //       { name: 'Maria Santos', email: 'mariasantos@gmail.com', progress: '60' },
  //       { name: 'Jose Rizal', email: 'joserizal@gmail.com', progress: '40' },
        
  //       { name: 'Ava Garcia', email: 'avagarcia@gmail.com', progress: '80' },
  //       { name: 'Benigno Ramos', email: 'benignoramos@gmail.com', progress: '50' },
  //       { name: 'Mia Fernandez', email: 'miafernandez@gmail.com', progress: '70' },
  //       { name: 'Elias Mendoza', email: 'eliasmendoza@gmail.com', progress: '30' },
  //       { name: 'Isabella Cruz', email: 'isabellacruz@gmail.com', progress: '60' },
  //       { name: 'Lucas Santos', email: 'lucassantos@gmail.com', progress: '90' },
  //       { name: 'Amelia Villanueva', email: 'ameliavillanueva@gmail.com', progress: '70' },
  
  //       { name: 'Ethan Flores', email: 'ethanflores@gmail.com', progress: '60' },
  //       { name: 'Abigail Navarro', email: 'abigailnavarro@gmail.com', progress: '80' }
  //     ]
      
  //   },

    // privacy and data protection

    {
      instructor: 'Kenneth James Belga',
      instructor_profile: 'assets/img/kenB.jpg',
      course: 'Privacy and Data Protection',
      subject: 'Data Protection',
      block: 'A',
      startDate: new Date(2024, 8, 10),
      time: '10:00 - 11:30',
      grade: '85',
      enrollmentKey: 'privacy2024',
      progress: '70',
      imageUrl: 'assets/img/dataprivacy.webp',
      enrolled: 'yes',
      
      modules: [
        {
          title: 'Introduction to Data Protection',
          description: 'Understanding the fundamentals of data protection',
          about: 'This module covers the basic concepts of data protection, including the importance of safeguarding personal information and regulatory frameworks.',
          materials: [
            { title: 'Data Protection Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/data_protection_basics.pdf', uploadDate: new Date(2024, 7, 30) },
            { title: 'Data Protection Basics - Video Lecture', type: 'video', link: '/assets/courses/data_protection_basics.mp4', uploadDate: new Date(2024, 7, 31) },
            { title: 'GDPR Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/gdpr_overview.pdf', uploadDate: new Date(2024, 8, 1) }
          ],
          assignments: [
            { 
              name: 'Data Protection Homework 1', 
              dueDate: new Date(2024, 8, 15), 
              score: '18/20',  
              details: 'This assignment focuses on understanding the principles of data protection and privacy regulations.',
              resources: [
                { name: 'Data Protection Homework 1', link: '/assets/courses/data_protection_basics.pdf'}
              ],
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '16/20' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '17/20' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '18/20' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '15/20' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '19/20' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '18/20' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '17/20' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '15/20' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '19/20' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '18/20' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '16/20' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '20/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Data Protection Quiz', 
              dueDate: new Date(2024, 8, 25), 
              score: '40/50',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '38/50' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '40/50' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '39/50' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '36/50' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '42/50' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '40/50' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '41/50' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '35/50' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '42/50' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '44/50' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '39/50' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '45/50' }
              ]
            }
          ]
        },
        {
          title: 'Privacy Laws and Regulations',
          description: 'Exploring global privacy laws and regulations',
          about: 'This module delves into the various privacy laws and regulations around the world, such as GDPR, CCPA, and others.',
          materials: [
            { title: 'Privacy Laws - Lecture Notes', type: 'pdf', link: '/assets/courses/privacy_laws_notes.pdf', uploadDate: new Date(2024, 8, 5) },
            { title: 'Privacy Laws - Video Lecture', type: 'video', link: '/assets/courses/privacy_laws_lecture.mp4', uploadDate: new Date(2024, 8, 6) },
            { title: 'CCPA Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/ccpa_overview.pdf', uploadDate: new Date(2024, 8, 7) }
          ],
          assignments: [
            { 
              name: 'Privacy Laws Homework', 
              dueDate: new Date(2024, 8, 20), 
              score: '22/25',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '20/25' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '21/25' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '22/25' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '19/25' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '23/25' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '21/25' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '23/25' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '18/25' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '22/25' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '24/25' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '21/25' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '25/25' }
              ]
            },
            { 
              name: 'GDPR vs CCPA Analysis', 
              dueDate: new Date(2024, 8, 25), 
              score: '24/25',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '23/25' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '24/25' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '22/25' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '21/25' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '24/25' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '23/25' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '24/25' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '20/25' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '23/25' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '25/25' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '22/25' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '25/25' }
              ]
            },
            { 
              name: 'Privacy Regulation Case Study', 
              dueDate: new Date(2024, 8, 30), 
              score: '23/25',
              resources: [
                { name: 'Privacy Case Study Guide', link: '/assets/courses/privacy_case_study_guide.pdf' }
              ],
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '21/25' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '22/25' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '23/25' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '20/25' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '23/25' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '24/25' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '23/25' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '19/25' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '22/25' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '24/25' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '21/25' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '25/25' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Privacy Laws Test', 
              dueDate: new Date(2024, 9, 5), 
              score: '42/50',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '40/50' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '42/50' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '39/50' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '38/50' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '43/50' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '41/50' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '42/50' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '37/50' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '42/50' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '45/50' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '39/50' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '46/50' }
              ]
            }
          ]
        },
        {
          title: 'Data Privacy in Practice',
          description: 'Implementing data privacy measures in organizations',
          about: 'In this module, you will learn practical approaches to implementing data privacy measures within organizations, including data handling and breach management.',
          materials: [
            { title: 'Data Privacy Implementation - Lecture Notes', type: 'pdf', link: '/assets/courses/data_privacy_implementation.pdf', uploadDate: new Date(2024, 8, 15) },
            { title: 'Data Privacy Implementation - Video Lecture', type: 'video', link: '/assets/courses/data_privacy_lecture.mp4', uploadDate: new Date(2024, 8, 16) },
            { title: 'Breach Management - Supplementary Reading', type: 'pdf', link: '/assets/courses/breach_management.pdf', uploadDate: new Date(2024, 8, 17) }
          ],
          assignments: [
            { 
              name: 'Data Privacy Audit Exercise', 
              dueDate: new Date(2024, 9, 10), 
              score: '19/20',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '17/20' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '19/20' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '18/20' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '16/20' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '20/20' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '19/20' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '18/20' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '15/20' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '19/20' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '20/20' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '18/20' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Data Breach Response Plan', 
              dueDate: new Date(2024, 9, 15), 
              score: '20/20',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '19/20' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '20/20' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '18/20' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '17/20' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '20/20' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '19/20' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '18/20' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '16/20' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '19/20' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '20/20' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '19/20' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Data Privacy Implementation Homework', 
              dueDate: new Date(2024, 9, 20), 
              score: '18/20',
              resources: [
                { name: 'Data Privacy Audit Guide', link: '/assets/courses/data_privacy_audit_guide.pdf' }
              ],
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '17/20' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '18/20' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '17/20' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '16/20' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '19/20' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '18/20' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '17/20' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '15/20' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '18/20' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '19/20' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '17/20' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '20/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Final Exam', 
              dueDate: new Date(2024, 9, 30), 
              score: '88/100',
              scores: [
                { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', score: '85/100' },
                { name: 'Liam Martinez', email: 'liammartinez@gmail.com', score: '87/100' },
                { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', score: '84/100' },
                { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', score: '83/100' },
                { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', score: '88/100' },
                { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', score: '86/100' },
                { name: 'Mia Diaz', email: 'miadiaz@gmail.com', score: '87/100' },
                { name: 'Lucas Perez', email: 'lucasperez@gmail.com', score: '82/100' },
                { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', score: '86/100' },
                { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', score: '89/100' },
                { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', score: '84/100' },
                { name: 'Oliver Morales', email: 'olivermorales@gmail.com', score: '90/100' }
              ]
            }
          ]
        }
      ],
      
      enrolledStudents: [
        { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', progress: '30' },
        { name: 'Liam Martinez', email: 'liammartinez@gmail.com', progress: '70' },
        { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', progress: '50' },
        { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', progress: '60' },
        { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', progress: '80' },
        { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', progress: '55' },
        { name: 'Mia Diaz', email: 'miadiaz@gmail.com', progress: '75' },
        { name: 'Lucas Perez', email: 'lucasperez@gmail.com', progress: '40' },
        { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', progress: '65' },
        { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', progress: '85' },
        { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', progress: '45' },
        { name: 'Oliver Morales', email: 'olivermorales@gmail.com', progress: '90' }
      ]
    },
    

    // {
    //   instructor: 'Kenneth James Belga',
    //   instructor_profile: 'assets/img/kenB.jpg',
    //   course: 'Privacy and Data Protection',
    //   subject: 'Data Protection',
    //   block: 'A',
    //   startDate: new Date(2024, 8, 10),
    //   time: '10:00 - 11:30',
    //   grade: '85',
    //   enrollmentKey: 'privacy2024',
    //   progress: '70',
    //   imageUrl: 'assets/img/dataprivacy.webp',
    //   enrolled: 'yes',
      
   
      
    //   modules: [
    //     {
    //       title: 'Introduction to Data Protection',
    //       description: 'Understanding the fundamentals of data protection',
    //       about: 'This module covers the basic concepts of data protection, including the importance of safeguarding personal information and regulatory frameworks.',
    //       materials: [
    //         { title: 'Data Protection Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/data_protection_basics.pdf', uploadDate: new Date(2024, 7, 30) },
    //         { title: 'Data Protection Basics - Video Lecture', type: 'video', link: '/assets/courses/data_protection_basics.mp4', uploadDate: new Date(2024, 7, 31) },
    //         { title: 'GDPR Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/gdpr_overview.pdf', uploadDate: new Date(2024, 8, 1) }
    //       ],
    //       assignments: [
    //         { 
    //           name: 'Data Protection Homework 1', 
    //           dueDate: new Date(2024, 8, 15), 
    //           score: '18/20',  
    //           details: 'This assignment focuses on understanding the principles of data protection and privacy regulations.',
    //           resources: [
    //             { name: 'Data Protection Homework 1', link: '/assets/courses/data_protection_basics.pdf'}
    //           ]
    //         },
    //       ],
    //       exams: [
    //         { name: 'Data Protection Quiz', dueDate: new Date(2024, 8, 25), score: '40/50' }
    //       ]
    //     },
    //     {
    //       title: 'Privacy Laws and Regulations',
    //       description: 'Exploring global privacy laws and regulations',
    //       about: 'This module delves into the various privacy laws and regulations around the world, such as GDPR, CCPA, and others.',
    //       materials: [
    //         { title: 'Privacy Laws - Lecture Notes', type: 'pdf', link: '/assets/courses/privacy_laws_notes.pdf', uploadDate: new Date(2024, 8, 5) },
    //         { title: 'Privacy Laws - Video Lecture', type: 'video', link: '/assets/courses/privacy_laws_lecture.mp4', uploadDate: new Date(2024, 8, 6) },
    //         { title: 'CCPA Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/ccpa_overview.pdf', uploadDate: new Date(2024, 8, 7) }
    //       ],
    //       assignments: [
    //         { name: 'Privacy Laws Homework', dueDate: new Date(2024, 8, 20), score: '22/25' },
    //         { name: 'GDPR vs CCPA Analysis', dueDate: new Date(2024, 8, 25), score: '24/25' },
    //         { 
    //           name: 'Privacy Regulation Case Study', 
    //           dueDate: new Date(2024, 8, 30), 
    //           score: '23/25',
    //           resources: [
    //             { name: 'Privacy Case Study Guide', link: '/assets/courses/privacy_case_study_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Privacy Laws Test', dueDate: new Date(2024, 9, 5), score: '42/50' }
    //       ]
    //     },
    //     {
    //       title: 'Data Privacy in Practice',
    //       description: 'Implementing data privacy measures in organizations',
    //       about: 'In this module, you will learn practical approaches to implementing data privacy measures within organizations, including data handling and breach management.',
    //       materials: [
    //         { title: 'Data Privacy Implementation - Lecture Notes', type: 'pdf', link: '/assets/courses/data_privacy_implementation.pdf', uploadDate: new Date(2024, 8, 15) },
    //         { title: 'Data Privacy Implementation - Video Lecture', type: 'video', link: '/assets/courses/data_privacy_lecture.mp4', uploadDate: new Date(2024, 8, 16) },
    //         { title: 'Breach Management - Supplementary Reading', type: 'pdf', link: '/assets/courses/breach_management.pdf', uploadDate: new Date(2024, 8, 17) }
    //       ],
    //       assignments: [
    //         { name: 'Data Privacy Audit Exercise', dueDate: new Date(2024, 9, 10), score: '19/20' },
    //         { name: 'Data Breach Response Plan', dueDate: new Date(2024, 9, 15), score: '20/20' },
    //         { 
    //           name: 'Data Privacy Implementation Homework', 
    //           dueDate: new Date(2024, 9, 20), 
    //           score: '18/20',
    //           resources: [
    //             { name: 'Data Privacy Audit Guide', link: '/assets/courses/data_privacy_audit_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Final Exam', dueDate: new Date(2024, 9, 30), score: '88/100' }
    //       ]
    //     }
    //   ],
      
    //   enrolledStudents: [
    //     { name: 'Sophia Lopez', email: 'sophialopez@gmail.com', progress: '30' },
    //     { name: 'Liam Martinez', email: 'liammartinez@gmail.com', progress: '70' },
    //     { name: 'Noah Garcia', email: 'noahgarcia@gmail.com', progress: '50' },
    //     { name: 'Olivia Hernandez', email: 'oliviahernandez@gmail.com', progress: '60' },
    //     { name: 'Emma Gonzales', email: 'emmagonzales@gmail.com', progress: '80' },
    //     { name: 'James Rodriguez', email: 'jamesrodriguez@gmail.com', progress: '55' },
    //     { name: 'Mia Diaz', email: 'miadiaz@gmail.com', progress: '75' },
    //     { name: 'Lucas Perez', email: 'lucasperez@gmail.com', progress: '40' },
    //     { name: 'Ethan Sanchez', email: 'ethansanchez@gmail.com', progress: '65' },
    //     { name: 'Ava Ramirez', email: 'avaramirez@gmail.com', progress: '85' },
    //     { name: 'Isabella Flores', email: 'isabellaflores@gmail.com', progress: '45' },
    //     { name: 'Oliver Morales', email: 'olivermorales@gmail.com', progress: '90' }
    //   ]
    // },

    // {
    //   instructor: 'Kenneth James Belga',
    //   instructor_profile: 'assets/img/kenB.jpg',
    //   course: 'Python Programming Language',
    //   subject: 'Programming',
    //   block: 'C',
    //   startDate: new Date(2024, 8, 15),
    //   time: '13:00 - 14:30',
    //   grade: '92',
    //   enrollmentKey: 'python2024',
    //   progress: '85',
    //   imageUrl: 'assets/img/pythonn.jpg', 
    //   enrolled: 'yes',
      
    //   prerequisite: {
    //     course: 'Introduction to Programming'
    //   },
      
    //   modules: [
    //     {
    //       title: 'Getting Started with Python',
    //       description: 'An introduction to Python programming',
    //       about: 'This module covers the basics of Python programming, including setting up the environment, understanding Python syntax, and writing simple programs.',
    //       materials: [
    //         { title: 'Python Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/python_basics.pdf', uploadDate: new Date(2024, 8, 5) },
    //         { title: 'Python Installation Guide - Video Tutorial', type: 'video', link: '/assets/courses/python_installation.mp4', uploadDate: new Date(2024, 8, 6) },
    //         { title: 'Python Syntax Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/python_syntax.pdf', uploadDate: new Date(2024, 8, 7) }
    //       ],
    //       assignments: [
    //         { 
    //           name: 'Python Basics Homework 1', 
    //           dueDate: new Date(2024, 8, 20), 
    //           score: '18/20',  
    //           details: 'This assignment involves writing basic Python programs to reinforce understanding of the syntax and simple operations.',
    //           resources: [
    //             {name: 'Python Basics Homework 1', link :'/assets/courses/python_basics.pdf'}
    //           ],
    //         },
    //       ],
    //       exams: [
    //         { name: 'Python Basics Quiz', dueDate: new Date(2024, 8, 30), score: '45/50' }
    //       ]
    //     },
    //     {
    //       title: 'Data Structures in Python',
    //       description: 'Understanding and using data structures in Python',
    //       about: 'This module explores Python’s built-in data structures like lists, tuples, dictionaries, and sets, and how to use them effectively in programming.',
    //       materials: [
    //         { title: 'Python Data Structures - Lecture Notes', type: 'pdf', link: '/assets/courses/python_data_structures.pdf', uploadDate: new Date(2024, 8, 10) },
    //         { title: 'Data Structures - Video Lecture', type: 'video', link: '/assets/courses/data_structures.mp4', uploadDate: new Date(2024, 8, 11) },
    //         { title: 'Advanced Data Structures - Supplementary Reading', type: 'pdf', link: '/assets/courses/advanced_data_structures.pdf', uploadDate: new Date(2024, 8, 12) }
    //       ],
    //       assignments: [
    //         { name: 'Data Structures Homework', dueDate: new Date(2024, 9, 5), score: '23/25' },
    //         { name: 'Building a Dictionary-based Application', dueDate: new Date(2024, 9, 10), score: '22/25' },
    //         { 
    //           name: 'List and Tuple Operations', 
    //           dueDate: new Date(2024, 9, 15), 
    //           score: '24/25',
    //           resources: [
    //             { name: 'Data Structures Guide', link: '/assets/courses/data_structures_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Data Structures Test', dueDate: new Date(2024, 9, 20), score: '47/50' }
    //       ]
    //     },
    //     {
    //       title: 'Object-Oriented Programming in Python',
    //       description: 'Implementing OOP concepts in Python',
    //       about: 'In this module, students learn how to implement object-oriented programming concepts in Python, such as classes, objects, inheritance, and polymorphism.',
    //       materials: [
    //         { title: 'OOP in Python - Lecture Notes', type: 'pdf', link: '/assets/courses/oop_python.pdf', uploadDate: new Date(2024, 9, 1) },
    //         { title: 'Classes and Objects - Video Lecture', type: 'video', link: '/assets/courses/classes_objects.mp4', uploadDate: new Date(2024, 9, 2) },
    //         { title: 'Inheritance and Polymorphism - Supplementary Reading', type: 'pdf', link: '/assets/courses/inheritance_polymorphism.pdf', uploadDate: new Date(2024, 9, 3) }
    //       ],
    //       assignments: [
    //         { name: 'OOP Concepts Homework', dueDate: new Date(2024, 9, 20), score: '20/20' },
    //         { name: 'Building a Python Class', dueDate: new Date(2024, 9, 25), score: '19/20' },
    //         { 
    //           name: 'OOP Project', 
    //           dueDate: new Date(2024, 9, 30), 
    //           score: '25/25',
    //           resources: [
    //             { name: 'OOP Project Guide', link: '/assets/courses/oop_project_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Final Exam', dueDate: new Date(2024, 10, 5), score: '90/100' }
    //       ]
    //     }
    //   ],
      
    //   enrolledStudents: [
    //     { name: 'John Smith', email: 'johnsmith@gmail.com', progress: '40' },
    //     { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '80' },
    //     { name: 'David Johnson', email: 'davidjohnson@gmail.com', progress: '60' },
    //     { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', progress: '55' },
    //     { name: 'Michael Brown', email: 'michaelbrown@gmail.com', progress: '70' },
    //     { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', progress: '65' },
    //     { name: 'James Anderson', email: 'jamesanderson@gmail.com', progress: '75' },
    //     { name: 'Linda Moore', email: 'lindamoore@gmail.com', progress: '45' },
    //     { name: 'Robert Jackson', email: 'robertjackson@gmail.com', progress: '85' },
    //     { name: 'Karen Lee', email: 'karenlee@gmail.com', progress: '90' },
    //     { name: 'Charles White', email: 'charleswhite@gmail.com', progress: '50' },
    //     { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', progress: '95' }
    //   ]
    // },

    {
      instructor: 'Kenneth James Belga',
      instructor_profile: 'assets/img/kenB.jpg',
      course: 'Python Programming Language',
      subject: 'Programming',
      block: 'C',
      startDate: new Date(2024, 8, 15),
      time: '13:00 - 14:30',
      grade: '92',
      enrollmentKey: 'python2024',
      progress: '85',
      imageUrl: 'assets/img/pythonn.jpg', 
      enrolled: 'yes',
      
      prerequisite: {
        course: 'Introduction to Programming'
      },
      
      modules: [
        {
          title: 'Getting Started with Python',
          description: 'An introduction to Python programming',
          about: 'This module covers the basics of Python programming, including setting up the environment, understanding Python syntax, and writing simple programs.',
          materials: [
            { title: 'Python Basics - Lecture Notes', type: 'pdf', link: '/assets/courses/python_basics.pdf', uploadDate: new Date(2024, 8, 5) },
            { title: 'Python Installation Guide - Video Tutorial', type: 'video', link: '/assets/courses/python_installation.mp4', uploadDate: new Date(2024, 8, 6) },
            { title: 'Python Syntax Overview - Supplementary Reading', type: 'pdf', link: '/assets/courses/python_syntax.pdf', uploadDate: new Date(2024, 8, 7) }
          ],
          assignments: [
            { 
              name: 'Python Basics Homework 1', 
              dueDate: new Date(2024, 8, 20), 
              details: 'This assignment involves writing basic Python programs to reinforce understanding of the syntax and simple operations.',
              resources: [
                { name: 'Python Basics Homework 1', link: '/assets/courses/python_basics.pdf' }
              ],
              score: '18/20',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '18/20' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '17/20' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '16/20' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '18/20' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '19/20' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '20/20' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '17/20' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '15/20' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '16/20' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '19/20' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '20/20' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '18/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Python Basics Quiz', 
              dueDate: new Date(2024, 8, 30), 
              score: '45/50',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '45/50' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '43/50' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '44/50' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '40/50' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '46/50' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '48/50' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '42/50' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '44/50' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '45/50' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '47/50' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '49/50' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '50/50' }
              ]
            }
          ]
        },
        {
          title: 'Data Structures in Python',
          description: 'Understanding and using data structures in Python',
          about: 'This module explores Python’s built-in data structures like lists, tuples, dictionaries, and sets, and how to use them effectively in programming.',
          materials: [
            { title: 'Python Data Structures - Lecture Notes', type: 'pdf', link: '/assets/courses/python_data_structures.pdf', uploadDate: new Date(2024, 8, 10) },
            { title: 'Data Structures - Video Lecture', type: 'video', link: '/assets/courses/data_structures.mp4', uploadDate: new Date(2024, 8, 11) },
            { title: 'Advanced Data Structures - Supplementary Reading', type: 'pdf', link: '/assets/courses/advanced_data_structures.pdf', uploadDate: new Date(2024, 8, 12) }
          ],
          assignments: [
            { 
              name: 'Data Structures Homework', 
              dueDate: new Date(2024, 9, 5), 
              score: '23/25',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '23/25' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '22/25' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '24/25' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '21/25' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '22/25' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '23/25' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '20/25' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '21/25' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '24/25' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '23/25' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '25/25' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '24/25' }
              ]
            },
            { 
              name: 'Building a Dictionary-based Application', 
              dueDate: new Date(2024, 9, 10), 
              score: '22/25',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '22/25' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '21/25' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '23/25' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '20/25' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '24/25' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '23/25' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '21/25' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '22/25' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '24/25' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '22/25' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '25/25' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '24/25' }
              ]
            },
            { 
              name: 'List and Tuple Operations', 
              dueDate: new Date(2024, 9, 15), 
              resources: [
                { name: 'Data Structures Guide', link: '/assets/courses/data_structures_guide.pdf' }
              ],
              score: '24/25',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '24/25' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '23/25' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '24/25' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '21/25' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '23/25' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '25/25' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '22/25' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '23/25' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '24/25' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '23/25' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '25/25' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '24/25' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Data Structures Test', 
              dueDate: new Date(2024, 9, 20), 
              score: '47/50',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '47/50' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '46/50' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '45/50' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '44/50' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '48/50' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '49/50' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '43/50' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '44/50' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '46/50' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '47/50' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '48/50' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '50/50' }
              ]
            }
          ]
        },
        {
          title: 'Object-Oriented Programming in Python',
          description: 'Implementing OOP concepts in Python',
          about: 'In this module, students learn how to implement object-oriented programming concepts in Python, such as classes, objects, inheritance, and polymorphism.',
          materials: [
            { title: 'OOP in Python - Lecture Notes', type: 'pdf', link: '/assets/courses/oop_python.pdf', uploadDate: new Date(2024, 9, 1) },
            { title: 'Classes and Objects - Video Lecture', type: 'video', link: '/assets/courses/classes_objects.mp4', uploadDate: new Date(2024, 9, 2) },
            { title: 'Inheritance and Polymorphism - Supplementary Reading', type: 'pdf', link: '/assets/courses/inheritance_polymorphism.pdf', uploadDate: new Date(2024, 9, 3) }
          ],
          assignments: [
            { 
              name: 'OOP Concepts Homework', 
              dueDate: new Date(2024, 9, 20), 
              score: '20/20',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '20/20' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '19/20' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '18/20' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '19/20' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '20/20' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '19/20' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '18/20' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '17/20' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '19/20' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '20/20' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '19/20' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Building a Python Class', 
              dueDate: new Date(2024, 9, 25), 
              score: '19/20',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '19/20' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '18/20' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '19/20' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '17/20' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '20/20' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '18/20' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '19/20' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '18/20' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '20/20' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '19/20' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '18/20' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'OOP Project', 
              dueDate: new Date(2024, 9, 30), 
              resources: [
                { name: 'OOP Project Guide', link: '/assets/courses/oop_project_guide.pdf' }
              ],
              score: '25/25',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '25/25' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '24/25' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '23/25' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '22/25' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '25/25' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '24/25' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '24/25' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '23/25' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '24/25' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '23/25' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '25/25' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '25/25' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Final Exam', 
              dueDate: new Date(2024, 10, 5), 
              score: '90/100',
              scores: [
                { name: 'John Smith', email: 'johnsmith@gmail.com', score: '90/100' },
                { name: 'Emily Davis', email: 'emilydavis@gmail.com', score: '88/100' },
                { name: 'David Johnson', email: 'davidjohnson@gmail.com', score: '87/100' },
                { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', score: '86/100' },
                { name: 'Michael Brown', email: 'michaelbrown@gmail.com', score: '89/100' },
                { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', score: '90/100' },
                { name: 'James Anderson', email: 'jamesanderson@gmail.com', score: '85/100' },
                { name: 'Linda Moore', email: 'lindamoore@gmail.com', score: '87/100' },
                { name: 'Robert Jackson', email: 'robertjackson@gmail.com', score: '90/100' },
                { name: 'Karen Lee', email: 'karenlee@gmail.com', score: '89/100' },
                { name: 'Charles White', email: 'charleswhite@gmail.com', score: '91/100' },
                { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', score: '92/100' }
              ]
            }
          ]
        }
      ],
      
      enrolledStudents: [
        { name: 'John Smith', email: 'johnsmith@gmail.com', progress: '40' },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '80' },
        { name: 'David Johnson', email: 'davidjohnson@gmail.com', progress: '60' },
        { name: 'Sarah Wilson', email: 'sarahwilson@gmail.com', progress: '55' },
        { name: 'Michael Brown', email: 'michaelbrown@gmail.com', progress: '70' },
        { name: 'Jessica Martinez', email: 'jessicamartinez@gmail.com', progress: '65' },
        { name: 'James Anderson', email: 'jamesanderson@gmail.com', progress: '75' },
        { name: 'Linda Moore', email: 'lindamoore@gmail.com', progress: '45' },
        { name: 'Robert Jackson', email: 'robertjackson@gmail.com', progress: '85' },
        { name: 'Karen Lee', email: 'karenlee@gmail.com', progress: '90' },
        { name: 'Charles White', email: 'charleswhite@gmail.com', progress: '50' },
        { name: 'Jennifer Harris', email: 'jenniferharris@gmail.com', progress: '95' }
      ]
    },
    

    // {
    //   instructor: 'Anton Caesar Cabais',
    //   instructor_profile: 'assets/img/tonn.jpeg',
    //   course: 'Introduction to Programming',
    //   subject: 'Programming',
    //   block: 'D',
    //   startDate: new Date(2024, 8, 20),
    //   time: '09:00 - 10:30',
    //   grade: '88',
    //   enrollmentKey: 'introprog2024',
    //   progress: '65',
    //   imageUrl: 'assets/img/introtoprog.png',
    //   enrolled: 'yes',
      
      
    //   modules: [
    //     {
    //       title: 'Understanding Programming Concepts',
    //       description: 'Introduction to basic programming concepts',
    //       about: 'This module covers fundamental programming concepts such as variables, data types, and control structures. It is designed for complete beginners.',
    //       materials: [
    //         { title: 'Programming Concepts - Lecture Notes', type: 'pdf', link: '/assets/courses/programming_concepts.pdf', uploadDate: new Date(2024, 8, 10) },
    //         { title: 'Variables and Data Types - Video Lecture', type: 'video', link: '/assets/courses/variables_datatypes.mp4', uploadDate: new Date(2024, 8, 11) },
    //         { title: 'Control Structures - Supplementary Reading', type: 'pdf', link: '/assets/courses/control_structures.pdf', uploadDate: new Date(2024, 8, 12) }
    //       ],
    //       assignments: [
    //         { 
    //           name: 'Basic Concepts Homework', 
    //           dueDate: new Date(2024, 8, 25), 
    //           score: '17/20',  
    //           details: 'This assignment focuses on understanding and applying basic programming concepts covered in the lectures.',
    //           resources: [
    //             {name: 'Basic Concepts Homework', link: '/assets/courses/programming_concepts.pdf'}
    //           ],
    //         },
    //       ],
    //       exams: [
    //         { name: 'Concepts Quiz', dueDate: new Date(2024, 9, 5), score: '42/50' }
    //       ]
    //     },
    //     {
    //       title: 'Introduction to Algorithms',
    //       description: 'Learning the basics of algorithms',
    //       about: 'This module introduces students to algorithms and their importance in programming. It covers basic algorithmic thinking and problem-solving techniques.',
    //       materials: [
    //         { title: 'Algorithms - Lecture Notes', type: 'pdf', link: '/assets/courses/algorithms_notes.pdf', uploadDate: new Date(2024, 8, 20) },
    //         { title: 'Algorithm Basics - Video Lecture', type: 'video', link: '/assets/courses/algorithm_basics.mp4', uploadDate: new Date(2024, 8, 21) },
    //         { title: 'Sorting and Searching Algorithms - Supplementary Reading', type: 'pdf', link: '/assets/courses/sorting_searching.pdf', uploadDate: new Date(2024, 8, 22) }
    //       ],
    //       assignments: [
    //         { name: 'Algorithm Practice Homework', dueDate: new Date(2024, 9, 10), score: '20/25' },
    //         { name: 'Sorting Algorithms Exercise', dueDate: new Date(2024, 9, 15), score: '22/25' },
    //         { 
    //           name: 'Algorithm Design Task', 
    //           dueDate: new Date(2024, 9, 20), 
    //           score: '23/25',
    //           resources: [
    //             { name: 'Algorithm Design Guide', link: '/assets/courses/algorithm_design_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Algorithm Quiz', dueDate: new Date(2024, 9, 25), score: '45/50' }
    //       ]
    //     },
    //     {
    //       title: 'Introduction to Programming Languages',
    //       description: 'An overview of various programming languages',
    //       about: 'This module gives an overview of different programming languages, their use cases, and the basics of writing code in languages like Python, JavaScript, and Java.',
    //       materials: [
    //         { title: 'Programming Languages Overview - Lecture Notes', type: 'pdf', link: '/assets/courses/programming_languages.pdf', uploadDate: new Date(2024, 9, 1) },
    //         { title: 'Python vs JavaScript - Video Lecture', type: 'video', link: '/assets/courses/python_vs_js.mp4', uploadDate: new Date(2024, 9, 2) },
    //         { title: 'Introduction to Python - Supplementary Reading', type: 'pdf', link: '/assets/courses/intro_python.pdf', uploadDate: new Date(2024, 9, 3) }
    //       ],
    //       assignments: [
    //         { name: 'Programming Languages Comparison Homework', dueDate: new Date(2024, 9, 20), score: '18/20' },
    //         { name: 'Basic Python Programming Task', dueDate: new Date(2024, 9, 25), score: '19/20' },
    //         { 
    //           name: 'Writing Simple Programs', 
    //           dueDate: new Date(2024, 9, 30), 
    //           score: '20/20',
    //           resources: [
    //             { name: 'Programming Basics Guide', link: '/assets/courses/programming_basics_guide.pdf' }
    //           ]
    //         }
    //       ],
    //       exams: [
    //         { name: 'Final Exam', dueDate: new Date(2024, 10, 10), score: '85/100' }
    //       ]
    //     }
    //   ],
      
    //   enrolledStudents: [
    //     { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', progress: '25' },
    //     { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', progress: '70' },
    //     { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', progress: '50' },
    //     { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', progress: '60' },
    //     { name: 'Emma Jones', email: 'emmajones@gmail.com', progress: '80' },
    //     { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', progress: '55' },
    //     { name: 'Mia Martinez', email: 'miamartinez@gmail.com', progress: '75' },
    //     { name: 'Ethan Davis', email: 'ethandavis@gmail.com', progress: '40' },
    //     { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', progress: '85' },
    //     { name: 'Noah Wilson', email: 'noahwilson@gmail.com', progress: '90' },
    //     { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', progress: '45' },
    //     { name: 'James Harris', email: 'jamesharris@gmail.com', progress: '95' }
    //   ]
    // }
    

    {
      instructor: 'Anton Caesar Cabais',
      instructor_profile: 'assets/img/tonn.jpeg',
      course: 'Introduction to Programming',
      subject: 'Programming',
      block: 'D',
      startDate: new Date(2024, 8, 20),
      time: '09:00 - 10:30',
      grade: '88',
      enrollmentKey: 'introprog2024',
      progress: '65',
      imageUrl: 'assets/img/introtoprog.png',
      enrolled: 'yes',
      
      modules: [
        {
          title: 'Understanding Programming Concepts',
          description: 'Introduction to basic programming concepts',
          about: 'This module covers fundamental programming concepts such as variables, data types, and control structures. It is designed for complete beginners.',
          materials: [
            { title: 'Programming Concepts - Lecture Notes', type: 'pdf', link: '/assets/courses/programming_concepts.pdf', uploadDate: new Date(2024, 8, 10) },
            { title: 'Variables and Data Types - Video Lecture', type: 'video', link: '/assets/courses/variables_datatypes.mp4', uploadDate: new Date(2024, 8, 11) },
            { title: 'Control Structures - Supplementary Reading', type: 'pdf', link: '/assets/courses/control_structures.pdf', uploadDate: new Date(2024, 8, 12) }
          ],
          assignments: [
            { 
              name: 'Basic Concepts Homework', 
              dueDate: new Date(2024, 8, 25), 
              score: '17/20',  
              details: 'This assignment focuses on understanding and applying basic programming concepts covered in the lectures.',
              resources: [
                { name: 'Basic Concepts Homework', link: '/assets/courses/programming_concepts.pdf' }
              ],
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '15/20' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '16/20' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '17/20' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '14/20' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '18/20' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '16/20' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '17/20' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '15/20' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '19/20' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '18/20' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '17/20' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '20/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Concepts Quiz', 
              dueDate: new Date(2024, 9, 5), 
              score: '42/50',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '40/50' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '42/50' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '38/50' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '39/50' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '44/50' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '41/50' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '43/50' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '37/50' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '46/50' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '45/50' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '39/50' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '48/50' }
              ]
            }
          ]
        },
        {
          title: 'Introduction to Algorithms',
          description: 'Learning the basics of algorithms',
          about: 'This module introduces students to algorithms and their importance in programming. It covers basic algorithmic thinking and problem-solving techniques.',
          materials: [
            { title: 'Algorithms - Lecture Notes', type: 'pdf', link: '/assets/courses/algorithms_notes.pdf', uploadDate: new Date(2024, 8, 20) },
            { title: 'Algorithm Basics - Video Lecture', type: 'video', link: '/assets/courses/algorithm_basics.mp4', uploadDate: new Date(2024, 8, 21) },
            { title: 'Sorting and Searching Algorithms - Supplementary Reading', type: 'pdf', link: '/assets/courses/sorting_searching.pdf', uploadDate: new Date(2024, 8, 22) }
          ],
          assignments: [
            { 
              name: 'Algorithm Practice Homework', 
              dueDate: new Date(2024, 9, 10), 
              score: '20/25',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '18/25' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '20/25' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '19/25' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '17/25' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '21/25' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '19/25' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '20/25' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '17/25' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '22/25' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '21/25' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '18/25' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '23/25' }
              ]
            },
            { 
              name: 'Sorting Algorithms Exercise', 
              dueDate: new Date(2024, 9, 15), 
              score: '22/25',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '20/25' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '22/25' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '21/25' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '19/25' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '23/25' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '21/25' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '22/25' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '20/25' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '24/25' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '23/25' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '20/25' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '25/25' }
              ]
            },
            { 
              name: 'Algorithm Design Task', 
              dueDate: new Date(2024, 9, 20), 
              score: '23/25',
              resources: [
                { name: 'Algorithm Design Guide', link: '/assets/courses/algorithm_design_guide.pdf' }
              ],
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '21/25' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '23/25' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '22/25' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '20/25' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '24/25' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '22/25' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '23/25' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '21/25' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '25/25' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '24/25' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '22/25' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '25/25' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Algorithm Quiz', 
              dueDate: new Date(2024, 9, 25), 
              score: '45/50',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '43/50' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '45/50' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '42/50' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '41/50' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '46/50' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '44/50' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '45/50' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '40/50' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '48/50' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '47/50' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '42/50' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '49/50' }
              ]
            }
          ]
        },
        {
          title: 'Introduction to Programming Languages',
          description: 'An overview of various programming languages',
          about: 'This module gives an overview of different programming languages, their use cases, and the basics of writing code in languages like Python, JavaScript, and Java.',
          materials: [
            { title: 'Programming Languages Overview - Lecture Notes', type: 'pdf', link: '/assets/courses/programming_languages.pdf', uploadDate: new Date(2024, 9, 1) },
            { title: 'Python vs JavaScript - Video Lecture', type: 'video', link: '/assets/courses/python_vs_js.mp4', uploadDate: new Date(2024, 9, 2) },
            { title: 'Introduction to Python - Supplementary Reading', type: 'pdf', link: '/assets/courses/intro_python.pdf', uploadDate: new Date(2024, 9, 3) }
          ],
          assignments: [
            { 
              name: 'Programming Languages Comparison Homework', 
              dueDate: new Date(2024, 9, 20), 
              score: '18/20',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '16/20' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '18/20' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '17/20' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '15/20' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '19/20' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '17/20' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '18/20' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '16/20' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '19/20' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '18/20' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '17/20' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Basic Python Programming Task', 
              dueDate: new Date(2024, 9, 25), 
              score: '19/20',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '18/20' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '19/20' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '18/20' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '17/20' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '20/20' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '18/20' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '19/20' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '17/20' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '20/20' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '19/20' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '18/20' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '20/20' }
              ]
            },
            { 
              name: 'Writing Simple Programs', 
              dueDate: new Date(2024, 9, 30), 
              score: '20/20',
              resources: [
                { name: 'Programming Basics Guide', link: '/assets/courses/programming_basics_guide.pdf' }
              ],
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '19/20' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '20/20' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '18/20' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '17/20' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '20/20' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '19/20' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '20/20' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '18/20' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '20/20' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '19/20' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '19/20' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '20/20' }
              ]
            }
          ],
          exams: [
            { 
              name: 'Final Exam', 
              dueDate: new Date(2024, 10, 10), 
              score: '85/100',
              scores: [
                { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', score: '83/100' },
                { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', score: '85/100' },
                { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', score: '82/100' },
                { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', score: '81/100' },
                { name: 'Emma Jones', email: 'emmajones@gmail.com', score: '86/100' },
                { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', score: '84/100' },
                { name: 'Mia Martinez', email: 'miamartinez@gmail.com', score: '85/100' },
                { name: 'Ethan Davis', email: 'ethandavis@gmail.com', score: '80/100' },
                { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', score: '88/100' },
                { name: 'Noah Wilson', email: 'noahwilson@gmail.com', score: '87/100' },
                { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', score: '82/100' },
                { name: 'James Harris', email: 'jamesharris@gmail.com', score: '90/100' }
              ]
            }
          ]
        }
      ],
      
      enrolledStudents: [
        { name: 'Olivia Smith', email: 'oliviasmith@gmail.com', progress: '25' },
        { name: 'Liam Johnson', email: 'liamjohnson@gmail.com', progress: '70' },
        { name: 'Sophia Williams', email: 'sophiawilliams@gmail.com', progress: '50' },
        { name: 'Benjamin Brown', email: 'benjaminbrown@gmail.com', progress: '60' },
        { name: 'Emma Jones', email: 'emmajones@gmail.com', progress: '80' },
        { name: 'Lucas Garcia', email: 'lucasgarcia@gmail.com', progress: '55' },
        { name: 'Mia Martinez', email: 'miamartinez@gmail.com', progress: '75' },
        { name: 'Ethan Davis', email: 'ethandavis@gmail.com', progress: '40' },
        { name: 'Ava Rodriguez', email: 'avarodriguez@gmail.com', progress: '85' },
        { name: 'Noah Wilson', email: 'noahwilson@gmail.com', progress: '90' },
        { name: 'Isabella Taylor', email: 'isabellataylor@gmail.com', progress: '45' },
        { name: 'James Harris', email: 'jamesharris@gmail.com', progress: '95' }
      ]
    }
    
    
    
    


    
    
  ];

  private courses: any[];


  addCourse(course: any): void {
    this.courses.push(course);
    this.saveCoursesToStorage(); // Save to localStorage
  }

  updateCourse(updatedCourse: any): void {
    const index = this.courses.findIndex(course => course.course === updatedCourse.course);
    if (index !== -1) {
      this.courses[index] = updatedCourse;
      this.saveCoursesToStorage();
    }
  }

  addModuleToCourse(courseIndex: number, module: any): void {
    this.courses[courseIndex].modules.push(module);
    this.saveCoursesToStorage(); // Save to localStorage
  }

  addMaterialToModule(courseIndex: number, moduleIndex: number, material: any): void {
    this.courses[courseIndex].modules[moduleIndex].materials.push(material);
    this.saveCoursesToStorage(); // Save to localStorage
  }

  addAssignmentToModule(courseIndex: number, moduleIndex: number, assignment: any): void {
    this.courses[courseIndex].modules[moduleIndex].assignments.push(assignment);
    this.saveCoursesToStorage(); // Save to localStorage
  }

  addExamToModule(courseIndex: number, moduleIndex: number, exam: any): void {
    this.courses[courseIndex].modules[moduleIndex].exams.push(exam);
    this.saveCoursesToStorage(); // Save to localStorage
  }

  getCourses(): any[] {
    return this.courses;
  }

  trainingSchedule(): { date: Date, course: string, instructor: string, enrollmentKey: string }[] {
    const courses = JSON.parse(localStorage.getItem('courses') || '[]');
    return courses.map((course: { startDate: string | Date; course: string; instructor: string; enrollmentKey: string }) => ({
      date: new Date(course.startDate),
      course: course.course,
      instructor: course.instructor,
      enrollmentKey: course.enrollmentKey
    }));
  }
  

  
  
  

  getStudents(): any[] {
    return [
      { name: 'Alice Johnson', email: 'AliceJohnson@gmail.com' },
      { name: 'Bob Brown', email: 'BobBrown@gmail.com' },
      // Add additional students as needed...
    ];
  }

  enrollStudentInCourse(courseIndex: number, student: any): void {
    const course = this.courses[courseIndex];
    course.enrolledStudents.push(student);
    this.saveCoursesToStorage(); // Save to localStorage
  }

   saveCoursesToStorage(courses:any = undefined): void {
    localStorage.setItem('courses', JSON.stringify( courses ?? this.courses));
  }

  private getCoursesFromStorage(): any[] | null {
    const storedCourses = localStorage.getItem('courses');

    return storedCourses ? JSON.parse(storedCourses) : null;
  }

  // Example method to get schedule information
  getSchedules() {
    return this.courses.map(course => {
      const tasks = course.modules.flatMap((module: { assignments: any; }) => module.assignments);
      const assessments = course.modules.flatMap((module: { exams: any; }) => module.exams);
  
      return {
        course: course.course,
        subject: course.subject,
        block: course.block,
        time: course.time,
        tasks: tasks.map((task: { name: any; dueDate: any; }) => ({
          name: task.name,
          dueDate: task.dueDate
        })),
        assessments: assessments.map((assessment: { name: any; dueDate: any; }) => ({
          name: assessment.name,
          dueDate: assessment.dueDate
        }))
      };
    });
  }


  deleteCourse(courseName: string): void {
    this.courses = this.courses.filter(course => course.course !== courseName);
    this.saveCoursesToLocalStorage();
  }

  private saveCoursesToLocalStorage(): void {
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }

  private loadCoursesFromLocalStorage(): void {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      this.courses = JSON.parse(savedCourses);
    }
  }


  private students = [
    { name: 'Alice Johnson' , email: 'Alice Johnson@gmail.com', },
    { name: 'Bob Brown', email: 'Bob Brown@gmail.com', },
    { name: 'Charles Wilson' , email: 'Charles@gmail.com',},
    { name: 'David Moore', email: 'Moore@gmail.com', },
    { name: 'Ella Taylor' , email: 'Taylor@gmail.com',},
    { name: 'Frank White' , email: 'White@gmail.com',},
    { name: 'Grace Green' , email: 'Green@gmail.com',},
    { name: 'Henry Adams' , email: 'Adams@gmail.com',},
    { name: 'Ivy Baker' , email: 'vBaker@gmail.com',},
    { name: 'Jack Carter', email: 'Carter@gmail.com', },
    { name: 'Katie Miller' , email: 'Miller@gmail.com',},
    { name: 'Liam Perez' , email: 'Perez@gmail.com',},
    { name: 'Nora Nelson' , email: 'Nelson@gmail.com',},
    { name: 'Owen Ramirez' , email: 'Ramirez@gmail.com',},
    { name: 'Peyton Mitchell' , email: 'Mitchell@gmail.com',},
    { name: 'Quinn Hughes', email: 'Hughes@gmail.com', },
    { name: 'Ryan vBryant', email: 'Bryant@gmail.com', },
    { name: 'Sarah Scott' , email: 'Scott@gmail.com',},
    { name: 'Tyler Evans' , email: 'Evans@gmail.com',},
    { name: 'Victoria Bell', email: 'Bell@gmail.com', },
    { name: 'Wyatt Russell' , email: 'Russell@gmail.com',},
    { name: 'Zoe Ward', email: 'Ward@gmail.com', },
    { name: 'Andrew Cox', email: 'Cox@gmail.com', },
    { name: 'Brooke Howard' , email: 'Howard@gmail.com',},
    { name: 'Chris Peterson' , email: 'Peterson@gmail.com',},
    { name: 'Diana Reed' , email: 'Reed@gmail.com',},
    { name: 'Eli Stewart', email: 'Stewart@gmail.com', },
    { name: 'Faith Rogers', email: 'Rogers@gmail.com', },
    { name: 'George Morgan' , email: 'Morgan@gmail.com',},
    { name: 'Hannah Cooper' , email: 'Cooper@gmail.com',},
    { name: 'John Doe', email: 'johndoe@gmail.com',  },
    { name: 'Jane Smith', email: 'janesmith@gmail.com', },
    { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', },
    { name: 'Emily Davis', email: 'emilydavis@gmail.com',  },
    { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', },
    { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com',  },
    { name: 'William Anderson', email: 'williamanderson@gmail.com',  },
    { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', },
    { name: 'James Lee', email: 'jameslee@gmail.com',  },
    { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com',  },
    { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com',  },
    { name: 'Mia Clark', email: 'miaclark@gmail.com', },
    { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', },
    { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com',},
    { name: 'Lucas Walker', email: 'lucaswalker@gmail.com',  },
    { name: 'Amelia Young', email: 'ameliayoung@gmail.com',  },
    { name: 'Mason Hall', email: 'masonhall@gmail.com',  },
    { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', },
    { name: 'Ethan King', email: 'ethanking@gmail.com',  },
    { name: 'Abigail Wright', email: 'abigailwright@gmail.com',  }
  ]
  
  


  private coursesRemoved = [

    {
      instructor: 'Chrisma Maxwell',
      instructor_profile: 'assets/img/bini.jpeg', 
      course: 'Physics 201',
      subject: 'Mechanics',
      block: 'B',
      time: '10:00 - 11:00',
      grade: '92',
      progress: '85',
      imageUrl: 'assets/img/physics.png',
      enrolled: 'no',

      modules: [
        {
          title: 'Introduction to Mechanics',
          description: 'Basic Concepts in Mechanics',
          about: 'This module introduces the foundational concepts in mechanics, including force, motion, and energy.',
          materials: [
            { title: 'Introduction to Mechanics - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to Mechanics - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Mechanics', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Mechanics Homework 1', dueDate: new Date(2024, 7, 15), score: '10/12'  },
            { name: 'Mechanics  1', dueDate: new Date(2024, 7, 18), score: '10/12'  }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25), score: '40/60'  }
          ]
        },
        {
          title: 'Newton’s Laws of Motion',
          description: 'Understanding Newton’s Laws',
          about: 'This module provides a detailed study of Newton’s three laws of motion and their practical applications.',
          materials: [
            { title: 'Newton’s Laws - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Newton’s Laws - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Newton’s Laws', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Newton Homework', dueDate: new Date(2024, 7, 30) , score: '10/12' },
            { name: 'Newton ', dueDate: new Date(2024, 8, 3), score: '10/12'  }
          ],
          exams: [
            { name: 'Laws of Motion Test', dueDate: new Date(2024, 8, 7), score: '23/40'  }
          ]
        },
        {
          title: 'Energy and Work',
          description: 'Conservation of Energy',
          about: 'This module explores the concepts of energy, work, and the conservation of mechanical energy.',
          materials: [
            { title: 'Energy and Work - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Energy and Work - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Energy and Work', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Energy Homework', dueDate: new Date(2024, 8, 12), score: '11/12'  },
            { name: 'Energy ', dueDate: new Date(2024, 8, 17), score: '12/12'  }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25), score: '10/60'  }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Joshua Corda',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'Chemistry 301',
      subject: 'Organic Chemistry',
      block: 'C',
      time: '11:00 - 12:00',
      grade: '91',
      progress: '85',
      imageUrl: 'assets/img/chemistry.png',
      enrolled: 'no',

      modules: [
        {
          title: 'Organic Molecules and Structures',
          description: 'Introduction to Organic Molecules',
          about: 'This module introduces the structure and bonding of organic molecules, including hydrocarbons and functional groups.',
          materials: [
            { title: 'Organic Molecules - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Organic Molecules - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Organic Molecules', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Molecules Homework', dueDate: new Date(2024, 7, 20), score: '10/12'  },
            { name: 'Molecules ', dueDate: new Date(2024, 7, 25) , score: '10/12' }
          ],
          exams: [
            { name: 'Molecules Test', dueDate: new Date(2024, 7, 30), score: '30/40'  }
          ]
        },
        {
          title: 'Chemical Reactions in Organic Chemistry',
          description: 'Types of Organic Reactions',
          about: 'This module covers various types of chemical reactions in organic chemistry, such as substitution, addition, and elimination reactions.',
          materials: [
            { title: 'Organic Reactions - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Organic Reactions - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Organic Reactions', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Reactions Homework', dueDate: new Date(2024, 8, 10) , score: '10/12' },
            { name: 'Reactions ', dueDate: new Date(2024, 8, 15) , score: '10/12' }
          ],
          exams: [
            { name: 'Reactions Test', dueDate: new Date(2024, 8, 20), score: '40/50'  }
          ]
        },
        {
          title: 'Stereochemistry',
          description: 'Understanding Molecular Geometry',
          about: 'This module focuses on the spatial arrangement of atoms in organic molecules and its implications in chemical reactions.',
          materials: [
            { title: 'Stereochemistry - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Stereochemistry - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Stereochemistry', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Stereochemistry Homework', dueDate: new Date(2024, 8, 25), score: '10/12'  },
            { name: 'Stereochemistry ', dueDate: new Date(2024, 8, 28) , score: '10/12' }
          ],
          exams: [
            { name: 'Summative Exam', dueDate: new Date(2024, 9, 5), score: '10/40'  }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Sean Palacay',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'Biology 101',
      subject: 'Botany',
      block: 'D',
      time: '12:00 - 13:00',
      grade: '90',
      progress: '85',
      imageUrl: 'assets/img/biology.png',
      enrolled: 'yes',

      modules: [
        {
          title: 'Introduction to Botany',
          description: 'Basics of Plant Biology',
          about: 'This module covers the basic principles of plant biology, including plant structure, function, and growth.',
          materials: [
            { title: 'Introduction to Botany - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to Botany - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Botany', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Botany Homework 1', dueDate: new Date(2024, 7, 15), score: '10/12'  },
            { name: 'Botany  1', dueDate: new Date(2024, 7, 18), score: '10/12'  }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25), score: '32/40'  }
          ]
        },
        {
          title: 'Plant Physiology',
          description: 'Understanding Plant Processes',
          about: 'This module explores the physiological processes in plants, such as photosynthesis, respiration, and water transport.',
          materials: [
            { title: 'Plant Physiology - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Plant Physiology - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Plant Physiology', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Physiology Homework', dueDate: new Date(2024, 7, 30), score: '10/20'  },
            { name: 'Physiology ', dueDate: new Date(2024, 8, 3) , score: '10/15' }
          ],
          exams: [
            { name: 'Physiology Test', dueDate: new Date(2024, 8, 7), score: '105/120'  }
          ]
        },
        {
          title: 'Plant Ecology',
          description: 'Plants and Their Environment',
          about: 'This module focuses on the interactions between plants and their environment, including topics like plant communities and ecosystems.',
          materials: [
            { title: 'Plant Ecology - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Plant Ecology - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Plant Ecology', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Ecology Homework', dueDate: new Date(2024, 8, 12), score: '10/25'  },
            { name: 'Ecology ', dueDate: new Date(2024, 8, 17), score: '12/30'  }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25) , score: '80/120' }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Kenneth Belga',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'Computer Science 101',
      subject: 'Programming',
      block: 'E',
      time: '13:00 - 14:00',
      grade: '93',
      progress: '85',
      imageUrl: 'assets/img/compsci.png',
      enrolled: 'yes',

      modules: [
        {
          title: 'Introduction to Programming',
          description: 'Getting Started with Code',
          about: 'This module introduces the fundamentals of programming, including basic syntax, variables, and control structures.',
          materials: [
            { title: 'Introduction to Programming - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to Programming - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Programming', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Programming Homework 1', dueDate: new Date(2024, 7, 15), score: '0/12'  },
            { name: 'Programming  1', dueDate: new Date(2024, 7, 18), score: '9/15'  }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25) , score: '119/120' }
          ]
        },
        {
          title: 'Data Structures',
          description: 'Organizing and Managing Data',
          about: 'This module covers essential data structures such as arrays, linked lists, and trees, and their applications in programming.',
          materials: [
            { title: 'Data Structures - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Data Structures - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Data Structures', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Data Structures Homework', dueDate: new Date(2024, 7, 30) , score: '4/12' },
            { name: 'Data Structures ', dueDate: new Date(2024, 8, 3) , score: '0/20' }
          ],
          exams: [
            { name: 'Data Structures Test', dueDate: new Date(2024, 8, 7), score: '2/120'  }
          ]
        },
        {
          title: 'Algorithms and Problem-Solving',
          description: 'Efficient Coding Techniques',
          about: 'This module focuses on developing algorithms to solve computational problems efficiently.',
          materials: [
            { title: 'Algorithms - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Algorithms - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Algorithms', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Algorithms Homework', dueDate: new Date(2024, 8, 12), score: '12/12'  },
            { name: 'Algorithms ', dueDate: new Date(2024, 8, 17) , score: '11/12' }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25) , score: '41/60' }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Anton Caesar Cabais',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'History 101',
      subject: 'World History',
      block: 'F',
      time: '14:00 - 15:00',
      grade: '88',
      progress: '85',
      imageUrl: 'assets/img/history.png',
      enrolled: 'yes',

      modules: [
        {
          title: 'Ancient Civilizations',
          description: 'Exploring the Foundations of History',
          about: 'This module explores the major ancient civilizations, including Mesopotamia, Egypt, and the Indus Valley.',
          materials: [
            { title: 'Ancient Civilizations - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Ancient Civilizations - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Ancient Civilizations', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Ancient Civilizations Essay', dueDate: new Date(2024, 7, 15), score: '10/12'  },
            { name: 'Ancient Civilizations ', dueDate: new Date(2024, 7, 18) , score: '10/12' }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25), score: '15/60'  }
          ]
        },
        {
          title: 'Medieval Times',
          description: 'History of the Middle Ages',
          about: 'This module covers the key events and developments during the Medieval period, including feudalism, the Crusades, and the rise of nation-states.',
          materials: [
            { title: 'Medieval Times - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Medieval Times - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Medieval Times', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Medieval Times Essay', dueDate: new Date(2024, 7, 30) , score: '10/12' },
            { name: 'Medieval Times ', dueDate: new Date(2024, 8, 3), score: '9/12'  }
          ],
          exams: [
            { name: 'Medieval Times Test', dueDate: new Date(2024, 8, 7) , score: '40/60' }
          ]
        },
        {
          title: 'Modern History',
          description: 'World Events from 1500 to Present',
          about: 'This module focuses on significant global events from the Renaissance to the present day, including revolutions, wars, and technological advancements.',
          materials: [
            { title: 'Modern History - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Modern History - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Modern History', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Modern History Essay', dueDate: new Date(2024, 8, 12) , score: '10/12' },
            { name: 'Modern History ', dueDate: new Date(2024, 8, 17) , score: '4/12' }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25), score: '12/60'  }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Joemar Cardino',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'Geography 101',
      subject: 'Physical Geography',
      block: 'G',
      time: '15:00 - 16:00',
      grade: '81',
      progress: '65',
      imageUrl: 'assets/img/georaphy.png',
      enrolled: 'yes',

      modules: [
        {
          title: 'Introduction to Physical Geography',
          description: 'Earth’s Physical Features',
          about: 'This module covers the basic physical features of the Earth, including landforms, climate, and ecosystems.',
          materials: [
            { title: 'Introduction to Physical Geography - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to Physical Geography - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on Physical Geography', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Geography Homework 1', dueDate: new Date(2024, 7, 15) , score: '10/12' },
            { name: 'Geography  1', dueDate: new Date(2024, 7, 18) , score: '10/12' }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25) , score: '30/40' }
          ]
        },
        {
          title: 'Weather and Climate',
          description: 'Understanding Atmospheric Processes',
          about: 'This module explores the processes that drive weather and climate, including the water cycle, atmospheric circulation, and climate change.',
          materials: [
            { title: 'Weather and Climate - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Weather and Climate - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Weather and Climate', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Weather Homework', dueDate: new Date(2024, 7, 30) , score: '10/12' },
            { name: 'Climate ', dueDate: new Date(2024, 8, 3) , score: '10/12' }
          ],
          exams: [
            { name: 'Weather Test', dueDate: new Date(2024, 8, 7) , score: '48/60' }
          ]
        },
        {
          title: 'Landforms and Landscapes',
          description: 'Formation and Evolution of Earth’s Surface',
          about: 'This module focuses on the processes that shape the Earth’s surface, such as plate tectonics, erosion, and sedimentation.',
          materials: [
            { title: 'Landforms and Landscapes - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Landforms and Landscapes - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Landforms', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Landforms Homework', dueDate: new Date(2024, 8, 12) , score: '12/40' },
            { name: 'Landforms ', dueDate: new Date(2024, 8, 17) , score: '15/30' }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25) , score: '34/50' }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    },
    {
      instructor: 'Kenneth Aycardo',
      instructor_profile: 'assets/img/bini.jpeg',
      course: 'Literature 101',
      subject: 'English Literature',
      block: 'H',
      time: '16:00 - 17:00',
      grade: '75',
      progress: '65',
      imageUrl: 'assets/img/literature.png',
      enrolled: 'yes',

      modules: [
        {
          title: 'Introduction to English Literature',
          description: 'Overview of English Literary Works',
          about: 'This module provides an introduction to the major works and authors in English literature, from Chaucer to modern times.',
          materials: [
            { title: 'Introduction to English Literature - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 5) },
            { title: 'Introduction to English Literature - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 6) },
            { title: 'Supplementary Reading on English Literature', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 7) }
          ],
          assignments: [
            { name: 'Literature Essay 1', dueDate: new Date(2024, 7, 15), score: '10/12'  },
            { name: 'Literature  1', dueDate: new Date(2024, 7, 18) , score: '9/13' }
          ],
          exams: [
            { name: '', dueDate: new Date(2024, 7, 25) , score: '12/20' }
          ]
        },
        {
          title: 'Poetry and Prose',
          description: 'Exploring Different Literary Forms',
          about: 'This module explores the various forms of poetry and prose, including sonnets, novels, and essays, with an emphasis on literary analysis.',
          materials: [
            { title: 'Poetry and Prose - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 10) },
            { title: 'Poetry and Prose - Video Lecture', type: 'video', link: 'assets/courses/bini.mp4', uploadDate: new Date(2024, 6, 11) },
            { title: 'Practice Problems on Poetry and Prose', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 12) }
          ],
          assignments: [
            { name: 'Poetry Analysis 1', dueDate: new Date(2024, 7, 30) , score: '10/12' },
            { name: 'Prose ', dueDate: new Date(2024, 8, 3) , score: '10/12' }
          ],
          exams: [
            { name: 'Poetry Test', dueDate: new Date(2024, 8, 7), score: '20/60'  }
          ]
        },
        {
          title: 'Shakespeare and His Contemporaries',
          description: 'The Golden Age of English Drama',
          about: 'This module focuses on the works of William Shakespeare and his contemporaries, examining their influence on English literature and culture.',
          materials: [
            { title: 'Shakespeare - Lecture Notes', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 15) },
            { title: 'Shakespeare - Video Lecture', type: 'video', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 16) },
            { title: 'Example Problems on Shakespeare', type: 'pdf', link: 'assets/courses/teach.pdf', uploadDate: new Date(2024, 6, 17) }
          ],
          assignments: [
            { name: 'Shakespeare Essay', dueDate: new Date(2024, 8, 12), score: '10/12'  },
            { name: 'Shakespeare ', dueDate: new Date(2024, 8, 17) , score: '10/12' }
          ],
          exams: [
            { name: 'Summative Test', dueDate: new Date(2024, 8, 25), score: '105/120'  }
          ]
        }
      ],
      enrolledStudents: [
        { name: 'John Doe', email: 'johndoe@gmail.com', progress: '20', },
        { name: 'Jane Smith', email: 'janesmith@gmail.com', progress: '60', },
        { name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', progress: '40', },
        { name: 'Emily Davis', email: 'emilydavis@gmail.com', progress: '50', },
        { name: 'Daniel Garcia', email: 'danielgarcia@gmail.com', progress: '30', },
        { name: 'Sophia Martinez', email: 'sophiamartinez@gmail.com', progress: '70', },
        { name: 'William Anderson', email: 'williamanderson@gmail.com', progress: '90', },
        { name: 'Olivia Thomas', email: 'oliviathomas@gmail.com', progress: '60', },
        { name: 'James Lee', email: 'jameslee@gmail.com', progress: '40', },
        { name: 'Ava Gonzalez', email: 'avagonzalez@gmail.com', progress: '80', },
        { name: 'Benjamin Harris', email: 'benjaminharris@gmail.com', progress: '50', },
        { name: 'Mia Clark', email: 'miaclark@gmail.com', progress: '70', },
        { name: 'Elijah Lewis', email: 'elijahlewis@gmail.com', progress: '30', },
        { name: 'Isabella Robinson', email: 'isabellarobinson@gmail.com', progress: '60', },
        { name: 'Lucas Walker', email: 'lucaswalker@gmail.com', progress: '90', },
        { name: 'Amelia Young', email: 'ameliayoung@gmail.com', progress: '70', },
        { name: 'Mason Hall', email: 'masonhall@gmail.com', progress: '50', },
        { name: 'Charlotte Allen', email: 'charlotteallen@gmail.com', progress: '40', },
        { name: 'Ethan King', email: 'ethanking@gmail.com', progress: '60', },
        { name: 'Abigail Wright', email: 'abigailwright@gmail.com', progress: '80', }
      ],
      
    
      
    }
  ]
  
  
  

  
  
  
  
  
  setCourse(course: any) {
    this.course = course;
  }
  
  getCourse() {
    return this.course;
  }

  // getSchedules() {
  //   return this.courses.map(course => {
  //     // Aggregate tasks and assessments from all modules
  //     const tasks = course.modules.flatMap(module => module.assignments);
  //     const assessments = course.modules.flatMap(module => module.exams);
  
  //     return {
  //       course: course.course,
  //       subject: course.subject,
  //       block: course.block,
  //       time: course.time,
  //       tasks: tasks.map(task => ({
  //         name: task.name,
  //         dueDate: task.dueDate
  //       })),
  //       assessments: assessments.map(assessment => ({
  //         name: assessment.name,
  //         dueDate: assessment.dueDate
  //       }))
  //     };
  //   });
  // }
  
  // getSchedules() {
  //   return this.courses.map(course => {
  //     // Aggregate tasks and assessments from all modules
  //     const tasks = course.modules.flatMap((module: { assignments: any; }) => module.assignments);
  //     const assessments = course.modules.flatMap((module: { exams: any; }) => module.exams);
  
  //     return {
  //       course: course.course,
  //       subject: course.subject,
  //       block: course.block,
  //       time: course.time,
  //       tasks: tasks.map((task: { name: any; dueDate: any; }) => ({
  //         name: task.name, // Ensure 'name' exists in each assignment object
  //         dueDate: task.dueDate // Ensure 'dueDate' exists in each assignment object
  //       })),
  //       assessments: assessments.map((assessment: { name: any; dueDate: any; }) => ({
  //         name: assessment.name, // Ensure 'name' exists in each exam object
  //         dueDate: assessment.dueDate // Ensure 'dueDate' exists in each exam object
  //       }))
  //     };
  //   });
  // }
  

  private evaluations = [
    {
      teacher: 'Mr. Smith',
      course: 'Mathematics 101',
      evaluations: [
        { question: 'Content clarity', rating: 5 },
        { question: 'Engagement', rating: 4 },
        { question: 'Knowledge of subject', rating: 5 },
        { question: 'Punctuality', rating: 4 },
        { question: 'Overall satisfaction', rating: 5 }
      ]
    },
    {
      teacher: 'Ms. Johnson',
      course: 'Physics 201',
      evaluations: [
        { question: 'Content clarity', rating: 4 },
        { question: 'Engagement', rating: 5 },
        { question: 'Knowledge of subject', rating: 5 },
        { question: 'Punctuality', rating: 3 },
        { question: 'Overall satisfaction', rating: 4 }
      ]
    },
  ];

  // evaluations dept and teacher 

  private dept_evaluations = [
    {
      department: 'Science Department',
      course: 'Biology 101',
      evaluations: [
        { question: 'Content clarity', rating: 5 },
        { question: 'Engagement', rating: 4 },
        { question: 'Knowledge of subject', rating: 5 },
        { question: 'Punctuality', rating: 4 },
        { question: 'Overall satisfaction', rating: 5 }
      ]
    },
    {
      department: 'Mathematics Department',
      course: 'Calculus 201',
      evaluations: [
        { question: 'Content clarity', rating: 4 },
        { question: 'Engagement', rating: 5 },
        { question: 'Knowledge of subject', rating: 5 },
        { question: 'Punctuality', rating: 3 },
        { question: 'Overall satisfaction', rating: 4 }
      ]
    }
  ];

  getEvaluations() {
    return this.evaluations;
  }

  setEvaluation(evaluation: any) {
    const index = this.evaluations.findIndex(e => e.teacher === evaluation.teacher && e.course === evaluation.course);
    if (index !== -1) {
      this.evaluations[index] = evaluation;
    } else {
      this.evaluations.push(evaluation);
    }
  }
  
  getDeptEvaluations() {
    return this.dept_evaluations;
  }
  
  setDeptEvaluation(evaluation: any) {
    const index = this.dept_evaluations.findIndex((e: any) => e.department === evaluation.department && e.course === evaluation.course);
    if (index !== -1) {
      this.dept_evaluations[index] = evaluation;
    }
  }

  private examQuestions = [
    {
      id: 'q1',
      question: 'What is the purpose of Angular\'s ngOnInit lifecycle hook?',
      options: {
        a: 'To initialize the component after Angular first displays the data-bound properties',
        b: 'To destroy the component before Angular removes it from the DOM',
        c: 'To detect changes in data-bound properties',
        d: 'To create a new module in Angular'
      },
      answer: 'a'
    },
    {
      id: 'q2',
      question: 'Which of the following is used to create a two-way data binding in Angular?',
      options: {
        a: '[]',
        b: '()',
        c: '[()]',
        d: '{{}}'
      },
      answer: 'c'
    },
    {
      id: 'q3',
      question: 'What command is used to create a new Angular project using Angular CLI?',
      options: {
        a: 'ng new',
        b: 'ng create',
        c: 'ng generate',
        d: 'ng init'
      },
      answer: 'a'
    },
    {
      id: 'q4',
      question: 'Which decorator is used to define a service in Angular?',
      options: {
        a: '@NgModule',
        b: '@Component',
        c: '@Injectable',
        d: '@Directive'
      },
      answer: 'c'
    },
    {
      id: 'q5',
      question: 'In Angular, which module is used for forms with two-way data binding?',
      options: {
        a: 'ReactiveFormsModule',
        b: 'FormsModule',
        c: 'HttpClientModule',
        d: 'RouterModule'
      },
      answer: 'b'
    },
    {
      id: 'q6',
      question: 'Which Angular CLI command is used to add a new component to a project?',
      options: {
        a: 'ng add component',
        b: 'ng generate component',
        c: 'ng create component',
        d: 'ng install component'
      },
      answer: 'b'
    },
    {
      id: 'q7',
      question: 'What is the purpose of Angular\'s Dependency Injection?',
      options: {
        a: 'To inject HTML into the DOM',
        b: 'To provide and manage dependencies in an Angular app',
        c: 'To dynamically load components',
        d: 'To configure routing in the app'
      },
      answer: 'b'
    },
    {
      id: 'q8',
      question: 'Which command would you use to serve an Angular application locally?',
      options: {
        a: 'ng serve',
        b: 'ng start',
        c: 'ng run',
        d: 'ng dev'
      },
      answer: 'a'
    },
    {
      id: 'q9',
      question: 'What is the default port that Angular CLI uses when serving an application?',
      options: {
        a: '3000',
        b: '8080',
        c: '4200',
        d: '8000'
      },
      answer: 'c'
    },
    {
      id: 'q10',
      question: 'Which directive is used to conditionally include/exclude a block of HTML in Angular?',
      options: {
        a: 'ngIf',
        b: 'ngFor',
        c: 'ngClass',
        d: 'ngSwitch'
      },
      answer: 'a'
    },
    {
      id: 'q11',
      question: 'What is the purpose of Angular\'s ngFor directive?',
      options: {
        a: 'To conditionally render HTML elements',
        b: 'To iterate over a list and render each item',
        c: 'To add a CSS class conditionally',
        d: 'To handle form validation'
      },
      answer: 'b'
    },
    {
      id: 'q12',
      question: 'Which Angular module is commonly used for making HTTP requests?',
      options: {
        a: 'FormsModule',
        b: 'RouterModule',
        c: 'HttpClientModule',
        d: 'ReactiveFormsModule'
      },
      answer: 'c'
    },
    {
      id: 'q13',
      question: 'Which lifecycle hook is called once, after the first ngOnChanges?',
      options: {
        a: 'ngOnInit',
        b: 'ngAfterContentInit',
        c: 'ngAfterViewInit',
        d: 'ngDoCheck'
      },
      answer: 'a'
    },
    {
      id: 'q14',
      question: 'Which Angular service is used to log messages in the console?',
      options: {
        a: 'ConsoleService',
        b: 'LogService',
        c: 'MessageService',
        d: 'LoggingService'
      },
      answer: 'd'
    },
    {
      id: 'q15',
      question: 'Which operator would you use in RxJS to filter emitted values?',
      options: {
        a: 'map',
        b: 'filter',
        c: 'reduce',
        d: 'scan'
      },
      answer: 'b'
    },
    {
      id: 'q16',
      question: 'In Angular, what is a pipe used for?',
      options: {
        a: 'To transform data in the template',
        b: 'To inject dependencies into components',
        c: 'To create reusable services',
        d: 'To handle routing'
      },
      answer: 'a'
    },
    {
      id: 'q17',
      question: 'Which of the following is not a valid Angular structural directive?',
      options: {
        a: 'ngIf',
        b: 'ngFor',
        c: 'ngSwitch',
        d: 'ngShow'
      },
      answer: 'd'
    },
    {
      id: 'q18',
      question: 'How do you bind a class to an HTML element conditionally in Angular?',
      options: {
        a: '[class]="condition ? \'className\' : \'\'"',
        b: '[ngClass]="condition ? \'className\' : \'\'"',
        c: '[class.className]="condition"',
        d: '[ngStyle]="condition ? \'className\' : \'\'"'
      },
      answer: 'c'
    },
    {
      id: 'q19',
      question: 'What does the Angular CLI command `ng build` do?',
      options: {
        a: 'It runs the application in development mode',
        b: 'It compiles the application into an output directory',
        c: 'It installs dependencies for the application',
        d: 'It serves the application on a local server'
      },
      answer: 'b'
    },
    {
      id: 'q20',
      question: 'Which file is the entry point of an Angular application?',
      options: {
        a: 'main.ts',
        b: 'app.module.ts',
        c: 'index.html',
        d: 'angular.json'
      },
      answer: 'a'
    },
    {
      id: 'q21',
      question: 'In Angular, what is the primary use of the `@Input` decorator?',
      options: {
        a: 'To define a public property that can be set via property binding',
        b: 'To emit events to the parent component',
        c: 'To inject services into a component',
        d: 'To initialize component properties'
      },
      answer: 'a'
    },
    {
      id: 'q22',
      question: 'Which of the following is not a valid Angular form of directive?',
      options: {
        a: 'ngModel',
        b: 'ngSubmit',
        c: 'ngForm',
        d: 'ngClick'
      },
      answer: 'd'
    },
    {
      id: 'q23',
      question: 'Which Angular module is used for routing and navigation?',
      options: {
        a: 'HttpClientModule',
        b: 'RouterModule',
        c: 'FormsModule',
        d: 'CommonModule'
      },
      answer: 'b'
    },
    {
      id: 'q24',
      question: 'What is the purpose of the Angular Router?',
      options: {
        a: 'To manage HTTP requests',
        b: 'To navigate between different views or pages in the application',
        c: 'To validate forms',
        d: 'To add animations to the application'
      },
      answer: 'b'
    },
    {
      id: 'q25',
      question: 'Which command is used to build an Angular application for production?',
      options: {
        a: 'ng build --prod',
        b: 'ng serve --prod',
        c: 'ng create --prod',
        d: 'ng start --prod'
      },
      answer: 'a'
    },
    {
      id: 'q26',
      question: 'In Angular, which decorator is used to define the metadata for a module?',
      options: {
        a: '@NgModule',
        b: '@Injectable',
        c: '@Component',
        d: '@Directive'
      },
      answer: 'a'
    },
    {
      id: 'q27',
      question: 'What is the default strategy for change detection in Angular?',
      options: {
        a: 'OnPush',
        b: 'Default',
        c: 'CheckOnce',
        d: 'Manual'
      },
      answer: 'b'
    },
    {
      id: 'q28',
      question: 'Which of the following is used to group multiple form controls in Angular?',
      options: {
        a: 'FormControl',
        b: 'FormGroup',
        c: 'FormBuilder',
        d: 'FormArray'
      },
      answer: 'b'
    },
    {
      id: 'q29',
      question: 'What is the main purpose of Angular\'s Ahead-of-Time (AOT) compilation?',
      options: {
        a: 'To compile the application during runtime',
        b: 'To compile the application code during build time, before it is downloaded and run by the browser',
        c: 'To increase the size of the application bundle',
        d: 'To decrease the speed of the application'
      },
      answer: 'b'
    },
    {
      id: 'q30',
      question: 'In Angular, which operator is used to catch errors in an Observable?',
      options: {
        a: 'map',
        b: 'catchError',
        c: 'retry',
        d: 'mergeMap'
      },
      answer: 'b'
    }
  ];

  getExamItems(){
    return this.examQuestions;
  }

  addExamItem(item:any){
    this.examQuestions.push(item);
  }

  editExamItem(item:any){
    const itemIndex = this.examQuestions.findIndex((_item) =>  _item.id == item.id);
    this.examQuestions[itemIndex] = item;                                     
  }


  
  
  // start  routes based from the template:


  // public sidebarItems = [
  //   {
  //     title: 'Media',
  //     icon: '&#9660;',
  //     isOpenKey: 'media',
  //     subItems: [
  //       { title: 'Media Manager', route: this.routes.media_manager },
  //       { title: 'Create Media', route: this.routes.media_manager_create },
  //       { title: 'Media Manager Settings', route: this.routes.media_manager_settings }
  //     ]
  //   },
  //   {
  //     title: 'Users',
  //     icon: '&#9660;',
  //     isOpenKey: 'users',
  //     subItems: [
  //       { title: 'Instructors', route: this.routes.users_instructors},
  //       { title: 'Insturctors Payout', route: this.routes.users_instructors_payout },
  //       { title: 'Students', route: this.routes.users_students },
  //       { title: 'Staffs', route: this.routes.users_staffs},
  //       { title: 'Roles', route: this.routes.users_roles },

  //       { title: 'Delete Account Requests', route: this.routes.users_delete_account_requests }

  //     ]
  //   },
  //   {
  //     title: 'Settings',
  //     icon: '&#9660;',
  //     isOpenKey: 'settings',
  //     subItems: [
  //       { title: 'System Settings', route: this.routes.settings_system },
  //       { title: 'API Settings', route: this.routes.settings_api },
  //       { title: 'SMS Settings', route: this.routes.settings_sms },
  //       { title: 'Vimeo Settings', route: this.routes.settings_vimeo },
  //       { title: 'Vdocipher Settings', route: this.routes.settings_vdocipher },
  //       { title: 'Localization Settings', route: this.routes.settings_localization },
  //       { title: 'Module Manager', route: this.routes.settings_module_manager },
  //       { title: 'Sidebar Manager', route: this.routes.settings_sidebar_manager },
  //       { title: 'Themes Settings', route: this.routes.settings_themes },
  //       { title: 'Themes Customize', route: this.routes.settings_themes_customize },
  //       { title: 'Themes Font', route: this.routes.settings_themes_font },
  //       { title: 'Newsletter Settings', route: this.routes.settings_newsletter },
  //       { title: 'Mailchimp Settings', route: this.routes.settings_newsletter_mailchimp },
  //       { title: 'GetResponse Settings', route: this.routes.settings_newsletter_get_response },
  //       { title: 'Acelle Settings', route: this.routes.settings_newsletter_acelle },
  //       { title: 'Subscriber Settings', route: this.routes.settings_newsletter_subscriber },
  //       { title: 'Push Notification Settings', route: this.routes.settings_push_notification },
  //       { title: 'Utilities Settings', route: this.routes.settings_utilities },
  //       { title: 'Preloader Settings', route: this.routes.settings_preloader },
  //       { title: 'Geo Location Settings', route: this.routes.settings_geo_location },
  //       { title: 'Error Log Settings', route: this.routes.settings_error_log },
  //       { title: 'IP Block Settings', route: this.routes.settings_ip_block },
  //       { title: 'Maintenance Settings', route: this.routes.settings_maintenance },
  //       { title: 'Update System Settings', route: this.routes.settings_update_system },
  //       { title: 'City Settings', route: this.routes.settings_city },
  //       { title: 'Cache Settings', route: this.routes.settings_cache },
  //       { title: 'Queue Settings', route: this.routes.settings_queue },
  //       { title: 'Cron Job Settings', route: this.routes.settings_cron_job },
  //       { title: 'Captcha Settings', route: this.routes.settings_captcha },
  //       { title: 'Social Login Settings', route: this.routes.settings_social_login },
  //       { title: 'Payout Accounts Settings', route: this.routes.settings_payout_accounts },
  //       { title: 'Cookie Settings', route: this.routes.settings_cookie },
  //       { title: 'Analytics Settings', route: this.routes.settings_analytics },
  //       { title: 'Pusher Settings', route: this.routes.settings_pusher },
  //       { title: 'Gdrive Settings', route: this.routes.settings_gdrive },
  //       { title: 'SEO Settings', route: this.routes.settings_seo },
  //       { title: 'Currencies Settings', route: this.routes.settings_currencies },
  //       { title: 'Timezone Settings', route: this.routes.settings_timezone },
  //       { title: 'Activation Settings', route: this.routes.settings_activation },
  //       { title: 'General Settings', route: this.routes.settings_general },
  //       { title: 'Email Settings', route: this.routes.settings_email },
  //       { title: 'Email Template Settings', route: this.routes.settings_email_template },
  //       { title: 'Payout Settings', route: this.routes.settings_payout },
  //       { title: 'Backup Settings', route: this.routes.settings_backup }
  //     ]
  //   },
  //   {
  //     title: 'No Main Route',
  //     icon: '&#9660;',
  //     isOpenKey: 'noMainRoute',
  //     subItems: [
  //       { title: 'Departments', route: this.routes.departments },
  //       { title: 'Course Categories', route: this.routes.courses_categories },
  //       { title: 'Course Levels', route: this.routes.courses_levels },
  //       { title: 'Course Settings', route: this.routes.courses_settings },
  //       { title: 'Course Subjects', route: this.routes.courses_subjects },
  //       { title: 'Question Groups', route: this.routes.zes_question_groups },
  //       { title: 'Question Banks', route: this.routes.zes_question_banks },
  //       { title: ' Setups', route: this.routes.zes_setups },
  //       { title: ' Results', route: this.routes.zes_results },
  //       { title: 'Virtual Classes', route: this.routes.virtual_classes },
  //       { title: 'Zoom Settings', route: this.routes.zoom_settings },
  //       { title: 'Certificates', route: this.routes.certificates },
  //       { title: 'Certificate Fonts', route: this.routes.certificates_fonts },
  //       { title: 'Certificate Settings', route: this.routes.certificates_settings },
  //       { title: 'Revenue', route: this.routes.revenue },
  //       { title: 'Instructors Revenue', route: this.routes.revenue_instructors },
  //       { title: 'Revenue Statistics', route: this.routes.revenue_statistics },
  //       { title: 'Enrollments', route: this.routes.enrollments },
  //       { title: 'Refund and Cancellation', route: this.routes.enrollments_refund_n_cancellation },
  //       { title: 'Refund Settings', route: this.routes.enrollments_refund_settings },
  //       { title: 'Notifications', route: this.routes.communication_notifications },
  //       { title: 'Private Messages', route: this.routes.communication_private_messages },
  //       { title: 'Manage Coupons', route: this.routes.coupons_manage },
  //       { title: 'Single Coupons', route: this.routes.coupons_single },
  //       { title: 'Personalized Coupons', route: this.routes.coupons_personalized },
  //       { title: 'Invite Code Coupons', route: this.routes.coupons_invite_code },
  //       { title: 'Invite Settings', route: this.routes.coupons_invite_settings },
  //       { title: 'Online Payment', route: this.routes.payment_online },
  //       { title: 'Offline Payment', route: this.routes.payment_offline },
  //       { title: 'Bank Payment', route: this.routes.payment_bank },
  //       { title: 'Payment Commission', route: this.routes.payment_commission },
  //       { title: 'Blogs', route: this.routes.blogs },
  //       { title: 'Blog Comments', route: this.routes.blogs_comments },
  //       { title: 'Questions', route: this.routes.questions },
  //       { title: 'Question Settings', route: this.routes.questions_settings },
  //       { title: 'Header Menu', route: this.routes.cmo_header_menu },
  //       { title: 'Menu Settings', route: this.routes.cmo_menu_settings },
  //       { title: 'Sliders', route: this.routes.cmo_sliders },
  //       { title: 'Slider Settings', route: this.routes.cmo_sliders_settings },
  //       { title: 'Page Content', route: this.routes.cmo_page_content },
  //       { title: 'Testimonials', route: this.routes.cmo_testimonials },
  //       { title: 'Social Settings', route: this.routes.cmo_social_settings },
  //       { title: 'Pages', route: this.routes.cmo_pages },
  //       { title: 'Become an Instructor', route: this.routes.cmo_become_instructor },
  //       { title: 'Sponsors', route: this.routes.cmo_sponsors },
  //       { title: 'Popup Content', route: this.routes.cmo_popup_content },
  //       { title: 'Footer Settings', route: this.routes.cmo_footer_settings },
  //       { title: 'Login Page', route: this.routes.cmo_login_page },
  //       { title: 'FAQ', route: this.routes.cmo_faq },
  //       { title: 'Header Footer Style', route: this.routes.cmo_header_footer_style },
  //       { title: 'Gamification', route: this.routes.gamification },
  //       { title: 'Gamification Badges', route: this.routes.gamification_badges },
  //       { title: 'Gamification History', route: this.routes.gamification_history }
  //     ]
  //   },
    
  // ];


  //   end  routes based from the template:

  public getStudentSideBarData: BehaviorSubject<Array<Student_sideBar>> =
    new BehaviorSubject<Array<Student_sideBar>>(this.Student_sideBar);
}



