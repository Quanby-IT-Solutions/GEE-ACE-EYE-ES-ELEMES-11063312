import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressPaymentComponent } from './express-payment.component';

describe('ExpressPaymentComponent', () => {
  let component: ExpressPaymentComponent;
  let fixture: ComponentFixture<ExpressPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpressPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
