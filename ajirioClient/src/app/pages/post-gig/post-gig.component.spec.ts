import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGigComponent } from './post-gig.component';

describe('PostGigComponent', () => {
  let component: PostGigComponent;
  let fixture: ComponentFixture<PostGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostGigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
