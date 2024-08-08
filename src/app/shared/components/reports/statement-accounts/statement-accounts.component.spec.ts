import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementAccountsComponent } from './statement-accounts.component';

describe('StatementAccountsComponent', () => {
  let component: StatementAccountsComponent;
  let fixture: ComponentFixture<StatementAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatementAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
