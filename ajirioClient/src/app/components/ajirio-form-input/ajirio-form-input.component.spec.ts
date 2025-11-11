import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjirioFormInputComponent } from './ajirio-form-input.component';

describe('AjirioFormInputComponent', () => {
  let component: AjirioFormInputComponent;
  let fixture: ComponentFixture<AjirioFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjirioFormInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjirioFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
