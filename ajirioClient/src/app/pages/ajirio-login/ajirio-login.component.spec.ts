import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjirioLoginComponent } from './ajirio-login.component';

describe('AjirioLoginComponent', () => {
  let component: AjirioLoginComponent;
  let fixture: ComponentFixture<AjirioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjirioLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjirioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
