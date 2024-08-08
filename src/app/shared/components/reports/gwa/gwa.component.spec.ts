import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwaComponent } from './gwa.component';

describe('GwaComponent', () => {
  let component: GwaComponent;
  let fixture: ComponentFixture<GwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
