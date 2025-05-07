import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongState } from './song.reducer';
import { AppState } from '../app.state';


const selectSongs = (state: AppState) => state.songs;

export const selectAllSongs = createSelector(
  selectSongs,
  (state: SongState) => state.songs
);

// export const selectLoading = createSelector(
//   selectSongState,
//   (state) => state.loading
// );
