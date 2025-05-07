import { createAction, props } from "@ngrx/store";
import { Mood } from "../../services/api-service.service";

export const pickMood = createAction(
  '[Mood] Pick mood',
  props<{ mood: Mood | null }>()
);

