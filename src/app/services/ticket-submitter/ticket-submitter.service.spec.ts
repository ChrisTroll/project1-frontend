import { TestBed } from '@angular/core/testing';

import { TicketSubmitterService } from './ticket-submitter.service';

describe('TicketSubmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketSubmitterService = TestBed.get(TicketSubmitterService);
    expect(service).toBeTruthy();
  });
});
