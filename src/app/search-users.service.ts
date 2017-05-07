import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchUsersService {

  private searchUsersEndPoint = "https://api.github.com/search/users?q=";
  private getUserDetailsEndPoint = "https://api.github.com/users/";

  constructor(private http: Http) { }

  getUsersByPlaceAndLanguage(place: string, language: string) {
    let url;
    if (place && !language) {
      url = `${this.searchUsersEndPoint}location:${place}`
    } else if (!place && language) {
      url = `${this.searchUsersEndPoint}language:${language}`
    } else {
      url = `${this.searchUsersEndPoint}location:${place}+language:${language}`
    }
    return this.http.get(url).map(this.extractData).catch(this.handleError);
  }

  getUserDetail(username: string) {
    let url;
    if (username) {
      url = `${this.getUserDetailsEndPoint}${username}`;
      return this.http.get(url).map((res: Response) => res.json()).catch(this.handleError);
    }
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
    let body = res.json();
    return body.items || {};
  }

}
