import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSpeechlabComponent } from './instructor-speechlab.component';

describe('InstructorSpeechlabComponent', () => {
  let component: InstructorSpeechlabComponent;
  let fixture: ComponentFixture<InstructorSpeechlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSpeechlabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSpeechlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
