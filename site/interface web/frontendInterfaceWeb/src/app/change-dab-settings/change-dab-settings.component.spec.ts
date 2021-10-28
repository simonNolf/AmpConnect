import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDabSettingsComponent } from './change-dab-settings.component';

describe('ChangeDabSettingsComponent', () => {
  let component: ChangeDabSettingsComponent;
  let fixture: ComponentFixture<ChangeDabSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDabSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDabSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
