import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviserCommentsComponent } from './adviser-comments.component';

describe('AdviserCommentsComponent', () => {
  let component: AdviserCommentsComponent;
  let fixture: ComponentFixture<AdviserCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviserCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdviserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
