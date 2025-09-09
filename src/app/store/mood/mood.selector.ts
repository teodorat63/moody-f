import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MoodState } from './mood.reducer';
import { Mood } from '../../models';

export const selectMood = (state: AppState) => state.mood;

export const selectPickedMood = createSelector(
  selectMood,
  (state: MoodState) => state.pickedMood
);

export const selectAllMoods = createSelector(
  selectMood,
  (state: MoodState) =>
    state.ids
      .map((id) => state.entities[id])
      .filter((mood): mood is Mood   => mood !== undefined) // Filter out undefined
);

export const selectMoodStatus = createSelector(
  selectMood,
  (state: MoodState) => state.status
);
