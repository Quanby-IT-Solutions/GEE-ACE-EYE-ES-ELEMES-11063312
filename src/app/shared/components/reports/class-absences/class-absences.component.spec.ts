import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAbsencesComponent } from './class-absences.component';

describe('ClassAbsencesComponent', () => {
  let component: ClassAbsencesComponent;
  let fixture: ComponentFixture<ClassAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
