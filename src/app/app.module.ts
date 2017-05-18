import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { SearchUsersService } from './services/searchUserService/search-users.service';
import { SearchArtistService } from './services/searchArtistService/search-artist.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    NavbarComponent,
    HomeComponent,
    SearchArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [SearchUsersService, SearchArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
