import { Routes, RouterModule } from '@angular/router';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { HomeComponent } from './components/home/home.component';
import { SpotifySearchComponent } from './components/spotify-search/spotify-search.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'github', component: SearchUsersComponent },
{ path: 'spotify', component: SpotifySearchComponent },
{ path: '**', pathMatch:'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
