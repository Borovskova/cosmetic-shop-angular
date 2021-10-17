import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNotifierComponent } from './login-notifier.component';

describe('LoginNotifierComponent', () => {
  let component: LoginNotifierComponent;
  let fixture: ComponentFixture<LoginNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNotifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
