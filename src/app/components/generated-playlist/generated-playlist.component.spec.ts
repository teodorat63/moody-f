import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPlaylistComponent } from './generated-playlist.component';

describe('GeneratedPlaylistComponent', () => {
  let component: GeneratedPlaylistComponent;
  let fixture: ComponentFixture<GeneratedPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
