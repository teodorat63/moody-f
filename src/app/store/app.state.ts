import { MoodState } from "./mood/mood.reducer";
import { SongState } from "./song/song.reducer";

export interface AppState{
  song: SongState;
  mood: MoodState;
}
