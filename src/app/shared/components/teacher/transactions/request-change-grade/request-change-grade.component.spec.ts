import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeGradeComponent } from './request-change-grade.component';

describe('RequestChangeGradeComponent', () => {
  let component: RequestChangeGradeComponent;
  let fixture: ComponentFixture<RequestChangeGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestChangeGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestChangeGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
