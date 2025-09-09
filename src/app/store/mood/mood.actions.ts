import { createAction, props } from "@ngrx/store";
import { Mood } from "../../models";

export const pickMood = createAction(
  '[Mood] Pick mood',
  props<{ mood: Mood | null }>()
);

export const loadMoods = createAction(
  '[Mood] Load Moods',
);

export const loadMoodsSuccess = createAction(
  '[Mood] Load Moods Success',
  props<{ moods: Mood[] }>()
);

export const loadMoodsFailure = createAction(
  '[Mood] Load Moods Failure',
  props<{ error: string }>()
);
