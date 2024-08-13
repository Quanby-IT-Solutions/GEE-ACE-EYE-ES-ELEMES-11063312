import { Component, Input, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { DataService } from 'src/app/shared/service/data/data.service';
@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  @Input() selectedTask: any = null;
  @Input() role: string = 'student';
  @Input() editing:boolean = false;
  @Input() saveData:any = null;
  commentField: string = '';
  filter:string = '';

  constructor(
    private router:Router,
    private dataService:DataService
  ){}

  isDue(task:any){
    if(task.dueDate == null || task.submitted){
      return false;
    }
    if(typeof task.dueDate == 'string' ){
      task.dueDate = new Date(task.dueDate);
    }
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today > task.dueDate;
  }

  formatDate(date: Date |string): string {
    if(typeof date === 'string') { 
      date = new Date(date);
    }
    if(date == null){
      return 'No Due Date';
    }
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formated = new Intl.DateTimeFormat('en-US', options).format(date);
    const today = new Intl.DateTimeFormat('en-US', options).format(new Date())
    if(formated == today){
      return 'Today'
    }
    
    return formated;
  }

  handleAddFiles(event:any){ 
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      if(this.selectedTask.files){
        this.selectedTask.files.push(...Array.from(input.files).reduce((acc:any[], curr)=>{
          acc.push({name: curr.name, link: `${curr.name}`});
          return acc;
        } , []))
      }else{
        this.selectedTask.files = [...Array.from(input.files).reduce((acc:any[], curr)=>{
          acc.push({name: curr.name, link: `${curr.name}`});
          return acc;
        } , [])];
      }
    }
    this.saveData();
  }

  handleResourceFiles(event:any){ 
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      if(this.selectedTask.resources){
        this.selectedTask.resources.push(...Array.from(input.files).reduce((acc:any[], curr)=>{
          acc.push({name: curr.name, link: `${curr.name}`});
          return acc;
        } , []));
      }else{
        this.selectedTask.resources = [...Array.from(input.files).reduce((acc:any[], curr)=>{
          acc.push({name: curr.name, link: `${curr.name}`});
          return acc;
        } , [])];
      }
    }
    this.saveData();
  }

  removeFile(file:any){
    this.selectedTask.files.splice(this.selectedTask.files.indexOf(file), 1);
  }

  removeResource(file:any){
    this.selectedTask.resources.splice(this.selectedTask.resources.indexOf(file), 1);
  }

  addComment(){
    console.log(this.commentField)
    if(this.commentField.trim() == ''){
      return;
    }
    if(this.selectedTask.comments){
      this.selectedTask.comments.push({
        sender: this.role=='student' ? 'Kenneth James Belga' : 'Anton Caesar Cabais',
        time: new Date(),
        message: this.commentField,
      });
    }else{
      this.selectedTask.comments = [{
        sender: this.role=='student' ? 'Kenneth James Belga' : 'Anton Caesar Cabais',
        time: new Date(),
        message : this.commentField
      }];
    }

    this.commentField = '';
    this.saveData();
  }

  getTime(now:Date|string): string {
    if(typeof now == 'string'){
      now = new Date(now);
    }
    return formatDate(now, 'h:mm a', 'en-US');
  }
  submitWork(){
    if(!this.selectedTask.files?.length){
      return;
    }
    this.selectedTask.submitted = !this.selectedTask.submitted;

    if(this.selectedTask.submitted){
      // submit actions
      // show submitted 
    }else{
      // unsubmit actions
    }
    this.saveData();
  }
  takeExam(){
    this.router.navigate([routes.quiz]);
    this.selectedTask.submitted = true;
  }

}
