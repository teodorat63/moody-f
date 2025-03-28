import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',
    pathMatch:'full',
    loadComponent: () => {
      return import('./components/moody/moody.component').then(m => m.MoodyComponent)
    }
  },
  {
    path:'signup',
    loadComponent: () => {
      return import('./components/register/register.component').then(m => m.RegisterComponent)
    }
  }
  
];
