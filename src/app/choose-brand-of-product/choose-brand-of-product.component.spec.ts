import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBrandOfProductComponent } from './choose-brand-of-product.component';

describe('ChooseBrandOfProductComponent', () => {
  let component: ChooseBrandOfProductComponent;
  let fixture: ComponentFixture<ChooseBrandOfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBrandOfProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBrandOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
