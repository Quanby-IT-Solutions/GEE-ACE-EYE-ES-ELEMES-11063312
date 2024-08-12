import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit {
  currentSection: string = 'emailConfig';

  ngOnInit() {
    this.showSection(this.currentSection);
  }

  showSection(section: string) {
    this.currentSection = section;
  }
}
