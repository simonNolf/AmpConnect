import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYoutubeSettingsComponent } from './change-youtube-settings.component';

describe('ChangeYoutubeSettingsComponent', () => {
  let component: ChangeYoutubeSettingsComponent;
  let fixture: ComponentFixture<ChangeYoutubeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeYoutubeSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeYoutubeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
