import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';

@Component({
  selector: 'app-instructor-speechlab',
  standalone: true,
  imports: [],
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
    ])
  ]
})
export class InstructorSpeechlabComponent {
  ready = false;
  showLine = false;
  eventLine:string = '';
  class:string = 'Class name';
  showSideNav:boolean = false;

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
