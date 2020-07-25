import { TestBed } from '@angular/core/testing';

import { ModifierGroupsService } from './modifier-groups.service';

describe('ModifierGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifierGroupsService = TestBed.get(ModifierGroupsService);
    expect(service).toBeTruthy();
  });
});
