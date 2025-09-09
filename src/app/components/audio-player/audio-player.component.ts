import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

export interface Song {
  title: string;
  url: string;
  artist?: string;
}

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  imports: [CommonModule]
})
export class AudioPlayerComponent implements OnInit {
  @Input() songs: Song[] = [];
  currentSongIndex = 0;
  audio = new Audio();
  currentTime = 0;
  duration = 0;
  isPlaying = false;

  ngOnInit() {
    if (this.songs.length > 0) {
      this.loadSong(0);
    }

    this.audio.addEventListener('loadedmetadata', () => {
    this.duration = this.audio.duration;
    });

    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
    });

    this.audio.addEventListener('ended', () => {
    this.playNext();
  });
  }

  ngOnDestroy() {
    this.audio.pause();
    this.audio.src = '';
    this.audio.load();
  }

  loadSong(index: number) {
    this.currentSongIndex = index;
    this.audio.src = this.songs[index].url;
    this.audio.load();
    this.play();
  }

  playNext() {
    if(this.currentSongIndex < this.songs.length -1){
      this.loadSong(this.currentSongIndex + 1);
    }
    else
    {
      this.loadSong(0);
    }

  }

  playPrevious() {
  const prevIndex = this.currentSongIndex - 1;
  if (prevIndex >= 0) {
    this.loadSong(prevIndex);
  }
}


  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  togglePlay() {
    this.isPlaying ? this.pause() : this.play();
  }

  seek(event: any) {
    const value = event.target.value;
    this.audio.currentTime = value;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
