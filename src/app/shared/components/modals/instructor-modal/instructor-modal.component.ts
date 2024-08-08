/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-instructor-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-modal.component.html',
  styleUrl: './instructor-modal.component.scss',
  
})
export class InstructorModalComponent {
  @Input() contentTemplate!: TemplateRef<any>;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
