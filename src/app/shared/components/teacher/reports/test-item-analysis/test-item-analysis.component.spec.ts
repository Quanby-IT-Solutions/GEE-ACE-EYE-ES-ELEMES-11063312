import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestItemAnalysisComponent } from './test-item-analysis.component';

describe('TestItemAnalysisComponent', () => {
  let component: TestItemAnalysisComponent;
  let fixture: ComponentFixture<TestItemAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestItemAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestItemAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
