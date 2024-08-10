import { Component } from '@angular/core';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileModalComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  logout(){
    alert();
  }
}
