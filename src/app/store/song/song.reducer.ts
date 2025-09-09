import { loadSongs, loadSongsSuccess, loadSongsFailure } from './song.actions';
import { createReducer, on } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import { Song } from '../../models';

//Pre entity
// export interface SongState {
//   songs: Song[];
//   loading: boolean;
//   error: string | null;
// }

//bez adaptera
// export const initialState: SongState = {
//   ids: [],
//   entities: {},
//   loading: false,
//   error: null
// };


//sa Entitity bibliotekom
export interface SongState extends EntityState<Song>{
  loading: boolean;
  error: string | null;
}

export const songAdapter: EntityAdapter<Song> = createEntityAdapter<Song>();

export const initialState: SongState = songAdapter.getInitialState({
  loading: false,
  error: null,
});

export const songReducer = createReducer(
  initialState,
  //triger loading the todos
  on(loadSongs, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  //handle successfully loaded todos
  on(loadSongsSuccess, (state, { songs }) => {
    return songAdapter.setAll(songs, {
      ...state,
      loading: false,
      error: null,
    });
  }),
  //handle loading failure
  on(loadSongsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
