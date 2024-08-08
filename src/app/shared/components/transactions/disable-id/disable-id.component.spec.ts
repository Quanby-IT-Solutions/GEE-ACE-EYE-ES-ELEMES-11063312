import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableIdComponent } from './disable-id.component';

describe('DisableIdComponent', () => {
  let component: DisableIdComponent;
  let fixture: ComponentFixture<DisableIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisableIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisableIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
