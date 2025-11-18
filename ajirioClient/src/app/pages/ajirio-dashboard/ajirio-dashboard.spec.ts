import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjirioDashboard } from './ajirio-dashboard';

describe('AjirioDashboard', () => {
  let component: AjirioDashboard;
  let fixture: ComponentFixture<AjirioDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjirioDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjirioDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
