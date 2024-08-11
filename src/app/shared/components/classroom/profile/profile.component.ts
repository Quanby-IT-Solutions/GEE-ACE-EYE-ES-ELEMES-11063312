import { Component, OnInit } from '@angular/core';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileModalComponent,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  

  currentTab:number = 0;

  toggles:any =  {
    'password' :true,
    'username' :true,
    'email' :true,
    'language' :true,
    'timezone' :true,
    'delete' :true,
    'current_password': false,
    'new_password' : false,

  }

  profile:any ={
    fullname : '',
    location : '',
    birthday : '',
    phone_number : '',
    bio : '',
  }

  account:any = {
    current_password: '',
    new_password: '',
    username: '',
    email: '',
    language:'',
    timezone: '',
    delete:'',
  }

  notification:any = {
    mobile_push:'',
    email: 0,
    news:[],
  }

  
  constructor(
    private route:ActivatedRoute
  ){
    
  }

  ngOnInit(){
    this.currentTab = Number(this.route.snapshot.paramMap.get('active')??'0') ;
  }

  handleNewsTick(ticked:number){
    if(this.notification.news.includes(ticked)){
      this.notification.news.splice(this.notification.news.indexOf(ticked), 1)
    }else{
      this.notification.news.push(ticked);
    }
  }

  handleEmailNotifTick(ticked:number){
    this.notification.email = ticked;
  }

  toggle(section:string){
    this.toggles[section] = !this.toggles[section];
  }

  switchTab(tab:number):void {
    this.currentTab = tab;
  }

  logout(){
    alert();
  }
}
