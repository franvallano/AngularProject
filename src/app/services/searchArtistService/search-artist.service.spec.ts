import { TestBed, inject } from '@angular/core/testing';

import { SearchArtistService } from './search-artist.service';

describe('SearchArtistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchArtistService]
    });
  });

  it('should ...', inject([SearchArtistService], (service: SearchArtistService) => {
    expect(service).toBeTruthy();
  }));
});
