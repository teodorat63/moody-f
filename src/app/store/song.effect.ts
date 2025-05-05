// song.effects.ts./song.actions
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadSongs, loadSongsSuccess, loadSongsFailure } from './song.actions';
import { ApiService } from '../services/api-service.service';
console.log('[SongEffects] File loaded');

@Injectable()
export class SongEffects {
  constructor(
    
  ) {}

  private actions$ = inject(Actions);
  private songService = inject(ApiService);

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSongs),
      switchMap(({ moodId }) => {
        console.log('[Effect] loadSongs triggered with moodId:', moodId);

        const response$ = this.songService.getSongs(moodId);

        if (!response$) {
          console.error('[Effect] ApiService.getSongs returned undefined!');
          return of(loadSongsFailure({ error: 'Service returned undefined' }));
        }

        return response$.pipe(
          map((songs) => {
            console.log('[Effect] Songs fetched successfully:', songs);
            return loadSongsSuccess({ songs });
          }),
          catchError((error) => {
            console.error('[Effect] Error fetching songs:', error);
            return of(loadSongsFailure({ error: error.message }));
          })
        );
      })
    )
  );

}
