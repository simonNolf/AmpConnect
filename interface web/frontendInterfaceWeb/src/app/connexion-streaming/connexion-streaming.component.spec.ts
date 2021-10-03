import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionStreamingComponent } from './connexion-streaming.component';

describe('ConnexionStreamingComponent', () => {
  let component: ConnexionStreamingComponent;
  let fixture: ComponentFixture<ConnexionStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
