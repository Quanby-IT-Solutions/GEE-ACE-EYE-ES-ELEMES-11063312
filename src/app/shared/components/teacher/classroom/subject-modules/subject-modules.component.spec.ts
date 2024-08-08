import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectModulesComponent } from './subject-modules.component';

describe('SubjectModulesComponent', () => {
  let component: SubjectModulesComponent;
  let fixture: ComponentFixture<SubjectModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
