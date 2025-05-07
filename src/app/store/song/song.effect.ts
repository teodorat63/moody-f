// song.effects.ts./song.actions
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadSongs, loadSongsSuccess, loadSongsFailure } from './song.actions';
import { ApiService } from '../../services/api-service.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
console.log('[SongEffects] File loaded');

@Injectable()
export class SongEffects {
  constructor(private store: Store<AppState>) {}

  private actions$ = inject(Actions);
  private songService = inject(ApiService);


  //this code will run when loadSongs is dispatched
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSongs),
      switchMap(({ moodId }) => {
        console.log('[Effect] loadSongs triggered with moodId:', moodId);
        return this.songService.getSongs(moodId).pipe(
          map((songs) => loadSongsSuccess({ songs })),
          catchError((error) => of(loadSongsFailure({ error })))
        );
      })
    )
  );

}
