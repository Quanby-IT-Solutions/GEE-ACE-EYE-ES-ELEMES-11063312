import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEnlistmentComponent } from './pre-enlistment.component';

describe('PreEnlistmentComponent', () => {
  let component: PreEnlistmentComponent;
  let fixture: ComponentFixture<PreEnlistmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreEnlistmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreEnlistmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
