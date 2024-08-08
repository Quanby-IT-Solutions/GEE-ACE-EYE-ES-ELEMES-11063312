import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTasksComponent } from './online-tasks.component';

describe('OnlineTasksComponent', () => {
  let component: OnlineTasksComponent;
  let fixture: ComponentFixture<OnlineTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
