import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [],
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.scss'
})
export class CreateAssignmentComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onConfirm(): void {
    this.dialogRef.close({ confirmed: true });
  }
}
