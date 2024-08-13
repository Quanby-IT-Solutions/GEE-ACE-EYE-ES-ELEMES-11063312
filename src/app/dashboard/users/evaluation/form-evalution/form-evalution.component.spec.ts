import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEvalutionComponent } from './form-evalution.component';

describe('FormEvalutionComponent', () => {
  let component: FormEvalutionComponent;
  let fixture: ComponentFixture<FormEvalutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEvalutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEvalutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
