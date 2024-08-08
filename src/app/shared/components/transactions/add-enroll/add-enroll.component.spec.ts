import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollComponent } from './add-enroll.component';

describe('AddEnrollComponent', () => {
  let component: AddEnrollComponent;
  let fixture: ComponentFixture<AddEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEnrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
