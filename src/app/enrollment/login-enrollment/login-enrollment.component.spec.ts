import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnrollmentComponent } from './login-enrollment.component';

describe('LoginEnrollmentComponent', () => {
  let component: LoginEnrollmentComponent;
  let fixture: ComponentFixture<LoginEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
