import { TestBed, inject } from '@angular/core/testing';

import { ContentFetchService } from './content-fetch.service';

describe('ContentFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentFetchService]
    });
  });

  it('should be created', inject([ContentFetchService], (service: ContentFetchService) => {
    expect(service).toBeTruthy();
  }));
});
