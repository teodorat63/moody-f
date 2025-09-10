import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoodsComponent } from './trending-moods.component';

describe('TrendingMoodsComponent', () => {
  let component: TrendingMoodsComponent;
  let fixture: ComponentFixture<TrendingMoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingMoodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingMoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
