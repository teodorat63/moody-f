import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongState } from './song.reducer';

const selectSongState = createFeatureSelector<SongState>('song');

export const selectSongs = createSelector(
  selectSongState,
  (state) => state.songs
);

export const selectLoading = createSelector(
  selectSongState,
  (state) => state.loading
);
