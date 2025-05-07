import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongState } from './song.reducer';
import { AppState } from '../app.state';


const selectSongState = (state: AppState) => state.song;

export const selectAllSongs = createSelector(
  selectSongState,
  (state: SongState) => state.songs
);


// export const selectLoading = createSelector(
//   selectSongState,
//   (state) => state.loading
// );


// export const selectLoading = createSelector(
//   selectSongState,
//   (state) => state.loading
// );
