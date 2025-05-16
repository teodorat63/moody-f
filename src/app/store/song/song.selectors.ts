import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongState } from './song.reducer';
import { AppState } from '../app.state';
import { Song } from '../../services/api-service.service';


const selectSongState = (state: AppState) => state.song;



export const selectAllSongs = createSelector(
  selectSongState,
  (state: SongState) => state.ids
    .map(id => state.entities[id])
    .filter((song): song is Song => song !== undefined) // Filter out undefined
);


// export const selectLoading = createSelector(
//   selectSongState,
//   (state) => state.loading
// );


// export const selectLoading = createSelector(
//   selectSongState,
//   (state) => state.loading
// );
