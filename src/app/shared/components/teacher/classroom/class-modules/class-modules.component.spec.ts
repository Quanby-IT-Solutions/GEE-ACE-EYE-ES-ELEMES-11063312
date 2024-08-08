import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassModulesComponent } from './class-modules.component';

describe('ClassModulesComponent', () => {
  let component: ClassModulesComponent;
  let fixture: ComponentFixture<ClassModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
