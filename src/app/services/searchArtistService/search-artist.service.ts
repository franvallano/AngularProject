import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchArtistService {

  private searchArtistEndPoint = "https://api.spotify.com/v1/search?type=artist&q=";

  constructor(private http : Http) { }

  getArtistsByName(artist: string){
    let url;
    console.log(artist)
    if(artist != ""){
      url = `${this.searchArtistEndPoint}artist:${artist}`
      //url = "https://api.spotify.com/v1/type=artist&search?q="+artist;
      console.log(url);
    }
    return this.http.get(url).map(this.extractData).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let msg;

    if (error instanceof Response) {
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      msg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
      msg = error.message ? error.message : error.toString();
    }
    console.log(msg);
    return Observable.throw(msg);
  }

  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body.artists.items || {};
  }
}
