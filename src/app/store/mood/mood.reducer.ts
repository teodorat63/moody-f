import { createReducer, on } from '@ngrx/store';
import { Mood } from '../../services/api-service.service';
import { loadMoods, loadMoodsFailure, loadMoodsSuccess, pickMood } from './mood.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';


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

  // Pick a mood (can also deselect if mood is null)
  on(pickMood, (state, { mood }) => ({
    ...state,
    pickedMood: mood
  })),

  // Trigger loading state
  on(loadMoods, (state) => ({
    ...state,
    status: 'loading' as const,
    error: null
  })),

  // On success, populate moods and update status
  on(loadMoodsSuccess, (state, { moods }) =>
    moodAdapter.setAll(moods, {
      ...state,
      status: 'success' as const,
      error: null
    })
  ),

  // On failure, set error and update status
  on(loadMoodsFailure, (state, { error }) => ({
    ...state,
    status: 'error' as const,
    error
  }))
);

