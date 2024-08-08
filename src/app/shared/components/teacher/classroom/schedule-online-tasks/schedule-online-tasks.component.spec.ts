import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOnlineTasksComponent } from './schedule-online-tasks.component';

describe('ScheduleOnlineTasksComponent', () => {
  let component: ScheduleOnlineTasksComponent;
  let fixture: ComponentFixture<ScheduleOnlineTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleOnlineTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleOnlineTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
