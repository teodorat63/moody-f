import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { songReducer } from './store/song/song.reducer';
import { moodReducer } from './store/mood/mood.reducer';
import { provideEffects } from '@ngrx/effects';
import { SongEffects } from './store/song/song.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MoodEffects } from './store/mood/mood.effect';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ song: songReducer, mood: moodReducer }),
    provideEffects(SongEffects, MoodEffects),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStoreDevtools({
      maxAge: 25,
    }),
  ],
};
