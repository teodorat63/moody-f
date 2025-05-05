import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { songReducer } from './store/song.reducer';
import { provideEffects } from '@ngrx/effects';
import { SongEffects } from './store/song.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ song: songReducer}),
    provideEffects(SongEffects),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()

  ]
};
