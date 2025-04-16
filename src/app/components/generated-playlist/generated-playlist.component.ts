import { Component } from '@angular/core';
import { ApiService, Mood, Song } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-generated-playlist',
  imports: [CommonModule],
  templateUrl: './generated-playlist.component.html',
  styleUrl: './generated-playlist.component.scss'
})
export class GeneratedPlaylistComponent {

  constructor(private router: Router, private apiService: ApiService, private sanitizer: DomSanitizer){}

  playlistMood: Mood | null = null;
  isLoading?: boolean;
  data?: Song[];

  ngOnInit() {
    this.playlistMood = history.state.playlistMood;

    console.log('Generating playlist for ', this.playlistMood?.name)

    this.isLoading = true;

    if(this.playlistMood){
      this.apiService.getSongs(this.playlistMood).subscribe(
        {
          next: (response) =>
          {
            this.isLoading=false;
            this.data=response;
          },
          error: (err) => {
            this.isLoading = false;
            console.error(err)
          }
        }
      );
    }
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
