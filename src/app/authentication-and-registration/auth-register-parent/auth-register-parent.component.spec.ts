import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterParentComponent } from './auth-register-parent.component';

describe('AuthRegisterParentComponent', () => {
  let component: AuthRegisterParentComponent;
  let fixture: ComponentFixture<AuthRegisterParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRegisterParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthRegisterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
