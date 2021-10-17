import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCareComponent } from './face-care.component';

describe('FaceCareComponent', () => {
  let component: FaceCareComponent;
  let fixture: ComponentFixture<FaceCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
