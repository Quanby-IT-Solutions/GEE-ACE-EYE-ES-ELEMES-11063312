


import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';


interface Course {
  course: string;
  subject: string;
  block: string;
  time: string;
  grade: string;
  tasks: any[];
  assessments: any[];
  progress: string;
  imageUrl: string;
}

@Component({
  selector: 'app-card-courses',
  templateUrl: './card-courses.component.html',
  styleUrls: ['./card-courses.component.scss']
})
export class CardCoursesComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  courses: Course[] = [];
  currentIndex = 0;
  itemsPerPage = 3;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
    this.updateItemsPerPage();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerPage();
    this.currentIndex = Math.min(this.currentIndex, this.courses.length - this.itemsPerPage);
    this.updateCarouselPosition();
  }

  updateItemsPerPage() {
    if (window.innerWidth < 768) {
      this.itemsPerPage = 1;
    } else if (window.innerWidth < 1024) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarouselPosition();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.courses.length - this.itemsPerPage) {
      this.currentIndex++;
      this.updateCarouselPosition();
    }
  }

  updateCarouselPosition() {
    const container = this.carouselContainer.nativeElement;
    const itemWidth = 100 / this.itemsPerPage;
    container.style.transform = `translateX(-${this.currentIndex * itemWidth}%)`;
  }
}
