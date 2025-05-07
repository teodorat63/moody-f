import { createReducer, on } from '@ngrx/store';
import { Mood } from '../../services/api-service.service';
import { pickMood } from './mood.actions';

export interface MoodState {
  pickedMood: Mood | null;
}

export const initialState: MoodState = {
  pickedMood: null
};

export const moodReducer = createReducer(
  initialState,
  on(pickMood, (state, { mood }) => {
    console.log('Reducer mood: picked:', mood);
    return {
      ...state,
      pickedMood: mood
    };
  })
);

