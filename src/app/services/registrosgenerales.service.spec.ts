import { TestBed } from '@angular/core/testing';

import { RegistrosgeneralesService } from './registrosgenerales.service';

describe('RegistrosgeneralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrosgeneralesService = TestBed.get(RegistrosgeneralesService);
    expect(service).toBeTruthy();
  });
});
