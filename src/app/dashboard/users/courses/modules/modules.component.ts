import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { CourseDataService } from 'src/app/shared/service/course-data/course-data.service';
@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
  course: any;

  constructor(private router: Router, private courseDataService: CourseDataService) {} // Inject the service



  gotoytModule(){
    this.router.navigate([routes.course_ytLink]);
  }
}


