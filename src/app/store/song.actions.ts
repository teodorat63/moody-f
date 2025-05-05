import { createAction, props } from '@ngrx/store';
import { Song } from '../services/api-service.service';

export const loadSongs = createAction(
  '[Song] Load Songs',
  props<{ moodId: number }>()
);

export const loadSongsSuccess = createAction(
  '[Song] Load Songs Success',
  props<{ songs: Song[] }>()
);

export const loadSongsFailure = createAction(
  '[Song] Load Songs Failure',
  props<{ error: string }>()
);
