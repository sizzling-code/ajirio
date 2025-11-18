import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGigsComponent } from './find-gigs.component';

describe('FindGigsComponent', () => {
  let component: FindGigsComponent;
  let fixture: ComponentFixture<FindGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindGigsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
