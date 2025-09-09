import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoodyComponent } from './components/moody/moody.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { noAuthGuard } from './guards/no-auth.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { GeneratedPlaylistComponent } from './components/generated-playlist/generated-playlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate:[noAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [noAuthGuard] },
  { path: 'dashboard', component: MoodyComponent, canActivate: [authGuard] },
  { path: 'me', component:MyProfileComponent, canActivate: [authGuard]},
  { path: 'generate', component:GeneratedPlaylistComponent, canActivate: [authGuard]},
  { path: '**', component: NotFoundComponent }

]


