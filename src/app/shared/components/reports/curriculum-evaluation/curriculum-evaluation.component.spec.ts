import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumEvaluationComponent } from './curriculum-evaluation.component';

describe('CurriculumEvaluationComponent', () => {
  let component: CurriculumEvaluationComponent;
  let fixture: ComponentFixture<CurriculumEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumEvaluationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculumEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
