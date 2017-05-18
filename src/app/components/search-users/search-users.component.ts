import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from 'app/services/searchUserService/search-users.service'

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  place: string;
  language: string;
  results: any[] = [];
  selectedUser: any;
  selected: any;
  error_text: string = "";

  constructor(private searchUserService: SearchUsersService) { }

  ngOnInit() { }

  search(place: string, language: string) {
    this.selectedUser = false;
    this.selected = true;
    this.error_text = "";
    if (place || language) {
      this.language = language;
      this.place = place;
      console.log('place:' + place, 'language:' + this.language);
      this.searchUserService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        }
      ),
        error => {
          this.results = [];
          this.error_text = "Sorry! No users found. Try again."
          console.log(error);
        }
    }
  }

  getDetails(username: string) {
    this.searchUserService.getUserDetail(username).subscribe(
      userDetails => {
        this.selectedUser = userDetails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }
}
