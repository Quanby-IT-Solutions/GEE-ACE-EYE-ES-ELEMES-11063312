import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { UserService } from 'src/app/shared/service/user/user.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { GuestUser } from 'src/app/shared/models/model';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

interface Course {
  instructor: string;
  instructor_profile: string;
  course: string;
  subject: string;
  block: string;
  time: string;
  enrolled: string;
  grade: string;
  progress: string;
  imageUrl: string;
  modules: any[]; // Define a more specific interface if needed
}

interface EvaluationMetrics {
  quantitative: {
    assessmentPassRate: string;
    averageTestScore: string;
    averageTimeToCompletion: string;
    proficiencyRate: string;
    completionRate: string;
    enrollmentRate: string;
    learnerSatisfactionRate: string;
  };
  qualitative: Array<{ learner: string; feedback: string }>;
  completionTrend: Array<{ month: string; rate: number }>;
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit, OnDestroy {
  @ViewChild("chart") chart: ApexChart | undefined;
  public chartOptions: Partial<ChartOptions>;

  public user: User | null = null;
  public role: string | null = null;
  public courses: Course[] = [];
  public selectedCourse: Course | null = null;
  public evaluationMetrics: EvaluationMetrics | null = null;
  private userSubscription: Subscription | undefined;

  constructor(private userService: UserService, private dataService: DataService) {
    this.chartOptions = {
      series: [
        {
          name: "Completion Rate",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Course Completion Trend"
      },
      xaxis: {
        categories: []
      }
    };
  }

  async ngOnInit() {
    const _user = await this.userService.getUser();
    this.setUserAndRole(_user);
    this.fetchCourses();
    this.userSubscription = this.userService.currentUser.subscribe(
      (user) => {
        this.setUserAndRole(user);
        this.fetchCourses();
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  fetchCourses(): void {
    const currentUserEmail = this.user ? this.user.email : null;
    if (currentUserEmail) {
      this.courses = this.dataService.getCourses().filter(course =>
        course.enrolledStudents.some((student: { email: string }) => student.email === currentUserEmail)
      );
    } else {
      this.courses = [];
    }
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
    if (this.hasRole('instructor')) {
      this.fetchEvaluationMetrics(course.course);
    }
  }

  fetchEvaluationMetrics(courseName: string): void {
    // In a real application, you would fetch this data from your backend
    // For now, we'll use mock data
    this.evaluationMetrics = {
      quantitative: {
        assessmentPassRate: '85%',
        averageTestScore: '75%',
        averageTimeToCompletion: '30 days',
        proficiencyRate: '80%',
        completionRate: '95%',
        enrollmentRate: '90%',
        learnerSatisfactionRate: '85%'
      },
      qualitative: [
        { learner: 'Jane Smith', feedback: 'Great course!' },
        { learner: 'Bob Johnson', feedback: 'The videos were very helpful.' },
        { learner: 'Emily Davis', feedback: 'I wish there were more quizzes.' },
        { learner: 'Mike Brown', feedback: 'The instructor was very knowledgeable.' },
        { learner: 'Sarah Wilson', feedback: 'I loved the group projects.' },
        { learner: 'Chris Taylor', feedback: 'The course was too easy.' }
      ],
      completionTrend: [
        { month: 'Jan', rate: 80 },
        { month: 'Feb', rate: 95 },
        { month: 'Mar', rate: 85 },
        { month: 'Apr', rate: 90 },
        { month: 'May', rate: 85 },
        { month: 'Jun', rate: 80 },
        { month: 'Jul', rate: 95 }
      ]
    };

    this.updateChartData();
  }

  updateChartData(): void {
    if (this.evaluationMetrics) {
      this.chartOptions.series = [{
        name: "Completion Rate",
        data: this.evaluationMetrics.completionTrend.map(item => item.rate)
      }];
      this.chartOptions.xaxis = {
        categories: this.evaluationMetrics.completionTrend.map(item => item.month)
      };
    }
  }

  hasRole(role: string): boolean {
    return this.role === role;
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.includes(this.role!);
  }

  private isUser(user: any): user is User {
    return user && 'app_metadata' in user && 'user_metadata' in user;
  }

  private setUserAndRole(user: User | GuestUser | null): void {
    if (this.isUser(user)) {
      this.user = user;
      this.role = user.role || null;
    } else {
      this.user = null;
      this.role = null;
    }
  }
}