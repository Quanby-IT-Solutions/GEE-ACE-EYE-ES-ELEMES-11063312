import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationComponent } from '../../components/modal/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) {}

  openModal(component:any,data: any): Observable<any> {
    const dialogRef = this.dialog.open(component, {
      width: '500px',
      data: data
    });

    return dialogRef.afterClosed();
  }

  openConfirmationModal(data: any) : Observable<any> {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '500px',
      data: data
    });

    return dialogRef.afterClosed();
  }

  
}
