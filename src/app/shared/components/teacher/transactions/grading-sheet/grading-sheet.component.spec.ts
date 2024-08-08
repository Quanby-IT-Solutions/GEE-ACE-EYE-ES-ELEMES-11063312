import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingSheetComponent } from './grading-sheet.component';

describe('GradingSheetComponent', () => {
  let component: GradingSheetComponent;
  let fixture: ComponentFixture<GradingSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradingSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
