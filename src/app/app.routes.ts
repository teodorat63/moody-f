import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',
    pathMatch:'full',
    loadComponent: () => {
      return import('./components/moody/moody.component').then(m => m.MoodyComponent)
    }
  },
  {
    path:'signin',
    loadComponent: () => {
      return import('./components/login/login.component').then(m => m.LoginComponent)
    }
  },
  {
    path:'signup',
    loadComponent: () => {
      return import('./components/register/register.component').then(m => m.RegisterComponent)
    }
  },
  {
    path:'dashboard',
    loadComponent: () => {
      return import('./components/moody/moody.component').then(m => m.MoodyComponent)
    }
  },
  {
    path:'**',
    loadComponent: () => {
      return import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
  }
  
];
