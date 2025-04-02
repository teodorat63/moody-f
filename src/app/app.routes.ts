import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoodyComponent } from './components/moody/moody.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { noAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[noAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [noAuthGuard] },
  { path: 'dashboard', component: MoodyComponent, canActivate: [authGuard] }, 
  { path: '**', component: NotFoundComponent } ]


// export const routes: Routes = [
//   {path: '',
//     pathMatch:'full',
//     loadComponent: () => {
//       return import('./components/moody/moody.component').then(m => m.MoodyComponent)
//     }
//   },
//   {
//     path:'login',
//     loadComponent: () => {
//       return import('./components/login/login.component').then(m => m.LoginComponent)
//     }
//   },
//   {
//     path:'register',
//     loadComponent: () => {
//       return import('./components/register/register.component').then(m => m.RegisterComponent)
//     }
//   },
//   {
//     path:'dashboard',
//     loadComponent: () => {
//       return import('./components/moody/moody.component').then(m => m.MoodyComponent)
//     }
//   },
//   {
//     path:'**',
//     loadComponent: () => {
//       return import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
//     },
//   }
  
// ];