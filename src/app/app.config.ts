import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { songReducer } from './store/song/song.reducer';
import { moodReducer } from './store/mood/mood.reducer';
import { provideEffects } from '@ngrx/effects';
import { SongEffects } from './store/song/song.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ song: songReducer, mood: moodReducer }),
    provideEffects(SongEffects),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
    }),
  ]
};
