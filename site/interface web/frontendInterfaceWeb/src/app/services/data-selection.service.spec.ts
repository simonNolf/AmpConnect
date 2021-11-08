import { TestBed } from '@angular/core/testing';

import { DataSelectionService } from './data-selection.service';

describe('DataSelectionService', () => {
  let service: DataSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
