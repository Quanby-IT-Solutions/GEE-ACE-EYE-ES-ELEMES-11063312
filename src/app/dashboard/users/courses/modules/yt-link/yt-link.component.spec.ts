import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLinkComponent } from './yt-link.component';

describe('YtLinkComponent', () => {
  let component: YtLinkComponent;
  let fixture: ComponentFixture<YtLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
