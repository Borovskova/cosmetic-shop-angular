import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCareComponent } from './body-care.component';

describe('BodyCareComponent', () => {
  let component: BodyCareComponent;
  let fixture: ComponentFixture<BodyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
