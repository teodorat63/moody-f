import { loadSongs, loadSongsSuccess, loadSongsFailure } from './song.actions';
import { createReducer, on } from '@ngrx/store';
import { Song } from '../services/api-service.service';

export interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

export const initialState: SongState = {
  songs: [],
  loading: false,
  error: null
};

export const songReducer = createReducer(
  initialState,
  on(loadSongs, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadSongsSuccess, (state, { songs }) => ({
    ...state,
    loading: false,
    songs
  })),
  on(loadSongsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
