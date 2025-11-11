import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrantButtonComponent } from './vibrant-button.component';

describe('VibrantButtonComponent', () => {
  let component: VibrantButtonComponent;
  let fixture: ComponentFixture<VibrantButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VibrantButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VibrantButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
