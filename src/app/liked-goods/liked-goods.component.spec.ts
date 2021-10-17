import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedGoodsComponent } from './liked-goods.component';

describe('LikedGoodsComponent', () => {
  let component: LikedGoodsComponent;
  let fixture: ComponentFixture<LikedGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
