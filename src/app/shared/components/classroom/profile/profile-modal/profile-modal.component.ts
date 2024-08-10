import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss'
})
export class ProfileModalComponent {
  @Input() logout:any;
  @Input() editProfile:any;
  @Input() accountSetting:any;
  @Input() notification:any;
  @Input() helpdesk:any;
  
}
