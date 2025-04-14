import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService, Mood } from '../../services/api-service.service';

@Component({
  selector: 'app-moody',
  templateUrl: './moody.component.html',
  imports: [CommonModule],
  styleUrls: ['./moody.component.scss']
})
export class MoodyComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService){}

  isLoading?: boolean;
  data?: Mood[];
  
  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getMoods().subscribe(
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
  

  private moodSound = new Audio('/assets/click.wav')
  private createSound = new Audio('/assets/etheral-woosh.wav')
  
  selectedMood: string | null = null;

  // moods = [
  //   { name: 'Happy', icon: '😊' },
  //   { name: 'Sad', icon: '😢' },
  //   { name: 'Angry', icon: '😠' },
  //   { name: 'Excited', icon: '🤩' },
  //   { name: 'Relaxed', icon: '😌' },
  //   { name: 'Confused', icon: '😕' },
  //   { name: 'Surprised', icon: '😲' },
  //   { name: 'Bored', icon: '😐' },
  //   { name: 'Nervous', icon: '😬' },
  //   { name: 'Tired', icon: '😴' },
  //   { name: 'In Love', icon: '😍' },
  //   { name: 'Grateful', icon: '🙏' },
  //   { name: 'Proud', icon: '😎' },
  //   { name: 'Scared', icon: '😨' },
  //   { name: 'Silly', icon: '🤪' },
  //   { name: 'Hopeful', icon: '🤞' },
  //   // { name: 'Annoyed', icon: '🙄' },
  //   // { name: 'Determined', icon: '💪' },
  //   // { name: 'Lonely', icon: '🥺' },
  //   // { name: 'Frustrated', icon: '😤' },
  //   // { name: 'Shy', icon: '😊' },
  //   // { name: 'Lazy', icon: '🛌' },
  //   // { name: 'Sick', icon: '🤒' },
  //   // { name: 'Peaceful', icon: '☮️' }
  // ];
  




  setMood(mood: string) {
    this.selectedMood = mood;
    console.log('You have selected', mood)
    this.moodSound.load();
    this.moodSound.play();
  }

  createPlaylist(){
    this.createSound.load();
    this.createSound.play();


    this.router.navigate(['/generate'])
  }

  
}
