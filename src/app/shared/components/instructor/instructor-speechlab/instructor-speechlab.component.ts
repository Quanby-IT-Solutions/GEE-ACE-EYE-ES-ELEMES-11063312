/* eslint-disable @typescript-eslint/no-explicit-any */
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/shared/service/data/data.service';
import { InstructorModalComponent } from "../../modals/instructor-modal/instructor-modal.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-instructor-speechlab',
  standalone: true,
  imports: [FormsModule, CommonModule, InstructorModalComponent, FontAwesomeModule],
  templateUrl: './instructor-speechlab.component.html',
  styleUrl: './instructor-speechlab.component.scss',
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0,  }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0,  }))
      ])
    ])
  ]
}) 
export class InstructorSpeechlabComponent {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  
  modal: boolean = false;
  ready = false;
  showLine = false;
  eventLine:string = '';
  class:string = 'Class name';
  showSideNav:boolean = false;

  studentSeatLayout: number = null!;
  numberOfStudents: number = null!;
  studentsArray: number[] = [];


  seatLayout(line: number) {
    this.showLine = true;
    this.studentSeatLayout = line;
  }

  updateNumberOfStudents(event: any) {
    this.numberOfStudents = event.target.value;
  }

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  generateStudentArray() {
    this.studentsArray = Array(this.numberOfStudents).fill(0).map((_, i) => i);
  }

  clickEvent(clickEvent: string):void {
    this.eventLine = clickEvent;
    clickEvent === 'line_1' ? this.showLine = true : this.showLine = false || clickEvent === 'line_2' ? this.showLine = true : this.showLine = false || clickEvent === 'line_3' ? this.showLine = true : this.showLine = false
  }

  lines = [
    { clickEvent: 'line_1', lineNumber: '1 Line' },
    { clickEvent: 'line_2', lineNumber: '2 Line' },
    { clickEvent: 'line_3', lineNumber: '3 Line' },
  ]

  constructor (private dataService: DataService){}

  readyButton(){
    this.ready = !this.ready;
    console.log(this.ready)
  }

  autoSort(){
  
  }

  manualSort(){
  }

  cancelButton(){}
  
  saveButton(){}

  sideNav(){
    this.showSideNav = !this.showSideNav
  }

  
}
