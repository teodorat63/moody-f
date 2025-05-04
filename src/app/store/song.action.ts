import { createAction, props } from "@ngrx/store";
import { Song } from "../services/api-service.service";


export const loadSongs = createAction("Load Songs");
export const loadSongsSucess = createAction("Load Songs Success");
export const selectSong = createAction("Select a song", props<Song>);



