import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGigComponent } from './find-gigs.component';

describe('FindGigComponent', () => {
  let component: FindGigComponent;
  let fixture: ComponentFixture<FindGigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindGigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
