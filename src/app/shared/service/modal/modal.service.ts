import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

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

  
}
