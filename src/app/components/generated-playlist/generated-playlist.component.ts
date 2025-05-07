import { selectMood, selectPickedMood } from './../../store/mood/mood.selector';
import { selectAllSongs } from './../../store/song/song.selectors';
import { Component, OnInit } from '@angular/core';
import { ApiService, Mood, Song } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadSongs } from '../../store/song/song.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-generated-playlist',
  imports: [CommonModule],
  templateUrl: './generated-playlist.component.html',
  styleUrl: './generated-playlist.component.scss'
})
export class GeneratedPlaylistComponent implements OnInit {


  constructor(private router: Router, private sanitizer: DomSanitizer, private store: Store<AppState>){
  }

  playlistMood$!: Observable<Mood | null>;
  songs$!: Observable<Song[]>;

  ngOnInit(): void {

      this.songs$ = this.store.select(selectAllSongs);
      this.playlistMood$ =  this.store.select(selectPickedMood);

      // Get selected mood just once
      this.playlistMood$.pipe(take(1)).subscribe(mood => {
        if (mood) {
          this.store.dispatch(loadSongs({ moodId: mood.id }));
        }
      });
    }


  getSafeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  extractYouTubeId(url: string): string {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
  }

  changeMood(){
    this.router.navigate(['/dashboard']);

  }



}
