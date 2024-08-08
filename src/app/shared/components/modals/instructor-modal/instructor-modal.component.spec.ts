import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorModalComponent } from './instructor-modal.component';

describe('InstructorModalComponent', () => {
  let component: InstructorModalComponent;
  let fixture: ComponentFixture<InstructorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
