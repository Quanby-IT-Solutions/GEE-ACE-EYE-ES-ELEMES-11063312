import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCoursesModulesComponent } from './explore-courses-modules.component';

describe('ExploreCoursesModulesComponent', () => {
  let component: ExploreCoursesModulesComponent;
  let fixture: ComponentFixture<ExploreCoursesModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreCoursesModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreCoursesModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
