import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodyComponent } from './moody.component';

describe('MoodyComponent', () => {
  let component: MoodyComponent;
  let fixture: ComponentFixture<MoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
