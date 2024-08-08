import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideAttendanceComponent } from './override-attendance.component';

describe('OverrideAttendanceComponent', () => {
  let component: OverrideAttendanceComponent;
  let fixture: ComponentFixture<OverrideAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverrideAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverrideAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
