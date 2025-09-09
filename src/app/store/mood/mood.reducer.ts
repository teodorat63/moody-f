import { createReducer, on } from '@ngrx/store';
import { loadMoods, loadMoodsFailure, loadMoodsSuccess, pickMood } from './mood.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Mood } from '../../models';


export interface MoodState extends EntityState<Mood>{
  pickedMood: Mood | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const moodAdapter = createEntityAdapter<Mood>();

export const initialState: MoodState = moodAdapter.getInitialState({
  pickedMood: null,
  error: null,
  status: 'pending'
})


export const moodReducer = createReducer(
  initialState,


  on(pickMood, (state, { mood }) => ({
    ...state,
    pickedMood: mood
  })),

  on(loadMoods, (state) => ({
    ...state,
    status: 'loading' as const,
    error: null
  })),

  on(loadMoodsSuccess, (state, { moods }) =>
    moodAdapter.setAll(moods, {
      ...state,
      status: 'success' as const,
      error: null
    })
  ),

  on(loadMoodsFailure, (state, { error }) => ({
    ...state,
    status: 'error' as const,
    error
  }))
);

