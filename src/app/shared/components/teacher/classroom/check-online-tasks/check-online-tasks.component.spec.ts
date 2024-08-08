import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOnlineTasksComponent } from './check-online-tasks.component';

describe('CheckOnlineTasksComponent', () => {
  let component: CheckOnlineTasksComponent;
  let fixture: ComponentFixture<CheckOnlineTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckOnlineTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckOnlineTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
