import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascaraNewComponent } from './mascara-new.component';

describe('MascaraNewComponent', () => {
  let component: MascaraNewComponent;
  let fixture: ComponentFixture<MascaraNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascaraNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascaraNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
