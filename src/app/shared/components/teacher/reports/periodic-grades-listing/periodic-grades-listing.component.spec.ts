import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicGradesListingComponent } from './periodic-grades-listing.component';

describe('PeriodicGradesListingComponent', () => {
  let component: PeriodicGradesListingComponent;
  let fixture: ComponentFixture<PeriodicGradesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicGradesListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodicGradesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
