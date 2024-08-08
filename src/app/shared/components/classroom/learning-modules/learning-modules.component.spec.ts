import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningModulesComponent } from './learning-modules.component';

describe('LearningModulesComponent', () => {
  let component: LearningModulesComponent;
  let fixture: ComponentFixture<LearningModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
