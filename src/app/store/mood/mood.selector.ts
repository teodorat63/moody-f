import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { MoodState } from "./mood.reducer";

export const selectMood = (state: AppState) => state.mood;

export const selectPickedMood = createSelector(
  selectMood,
  (state: MoodState) => state.pickedMood
)
