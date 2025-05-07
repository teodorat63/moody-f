import { selectAllSongs } from './../../store/song/song.selectors';
import { Component } from '@angular/core';
import { ApiService, Mood, Song } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadSongs } from '../../store/song/song.actions';

@Component({
  selector: 'app-generated-playlist',
  imports: [CommonModule],
  templateUrl: './generated-playlist.component.html',
  styleUrl: './generated-playlist.component.scss'
})
export class GeneratedPlaylistComponent {

  // //new
  // songs$: Observable<Song[]>;
  // loading$: Observable<boolean>;

  constructor(private router: Router, private sanitizer: DomSanitizer, private store: Store){
    //new
    //
    
  }


  // //old
  // playlistMood: Mood;
  // isLoading?: boolean;
  // data?: Song[];

  // ngOnInit() {

  //   this.store.dispatch(loadSongs(this.playlistMood?.id))
  //   this.playlistMood = history.state.playlistMood;

  //   //console.log('Generating playlist for ', this.playlistMood?.name)

  //   //this.store.dispatch(loadSongs({moodId: 1}));


  //   // this.isLoading = true;

  //   // if(this.playlistMood){
  //   //   this.apiService.getSongs(this.playlistMood.id).subscribe(
  //   //     {
  //   //       next: (response) =>
  //   //       {
  //   //         this.isLoading=false;
  //   //         this.data=response;
  //   //       },
  //   //       error: (err) => {
  //   //         this.isLoading = false;
  //   //         console.error(err)
  //   //       }
  //   //     }
  //   //   );
  //   // }
  // }

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
