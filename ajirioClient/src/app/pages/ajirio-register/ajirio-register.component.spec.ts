import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjirioRegisterComponent } from './ajirio-register.component';

describe('AjirioRegisterComponent', () => {
  let component: AjirioRegisterComponent;
  let fixture: ComponentFixture<AjirioRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjirioRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjirioRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
