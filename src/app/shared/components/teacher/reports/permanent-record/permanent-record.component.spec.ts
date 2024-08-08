import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentRecordComponent } from './permanent-record.component';

describe('PermanentRecordComponent', () => {
  let component: PermanentRecordComponent;
  let fixture: ComponentFixture<PermanentRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermanentRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
