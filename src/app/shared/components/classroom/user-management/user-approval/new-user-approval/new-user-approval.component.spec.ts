import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserApprovalComponent } from './new-user-approval.component';

describe('NewUserApprovalComponent', () => {
  let component: NewUserApprovalComponent;
  let fixture: ComponentFixture<NewUserApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUserApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
