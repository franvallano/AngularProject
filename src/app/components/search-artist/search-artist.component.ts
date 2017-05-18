import { Component, OnInit } from '@angular/core';
import { SearchArtistService } from 'app/services/searchArtistService/search-artist.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  artist: string = "";
  results: any[] = [];
  error_text: string = "";


  constructor( private searchArtistService: SearchArtistService ) { }

  ngOnInit() {
  }

  searchArtists( artist : string ){
    if(artist){
      this.artist = artist;
      console.log('artist:' + this.artist)
      this.searchArtistService.getArtistsByName(artist).subscribe(
        artists => {
          this.results = artists;
        }
      ),
      error => {
        this.results = [];
        this.error_text = "Sorry! No artists found. Try again."
        console.log(error);
      }
    }
  }
}
