import { MoodState } from "./mood/mood.reducer";
import { SongState } from "./song/song.reducer";

export interface AppState{
  songs: SongState;
  mood: MoodState;
}
