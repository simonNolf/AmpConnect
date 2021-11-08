import { TestBed } from '@angular/core/testing';

import { SettingHttpService } from './settings-http.service';

describe('HttpPostService', () => {
  let service: SettingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
