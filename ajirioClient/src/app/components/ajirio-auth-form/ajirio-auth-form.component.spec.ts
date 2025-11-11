import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjirioAuthFormComponent } from './ajirio-auth-form.component';

describe('AjirioAuthFormComponent', () => {
  let component: AjirioAuthFormComponent;
  let fixture: ComponentFixture<AjirioAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjirioAuthFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjirioAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
