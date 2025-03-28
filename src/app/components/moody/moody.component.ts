import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moody',
  templateUrl: './moody.component.html',
  imports: [CommonModule],
  styleUrls: ['./moody.component.scss']
})
export class MoodyComponent implements OnInit {
  selectedMood: string | null = null;

  moods = [
    { name: 'Happy', icon: '😊' },
    { name: 'Sad', icon: '😢' },
    { name: 'Angry', icon: '😠' },
    { name: 'Excited', icon: '🤩' },
    { name: 'Relaxed', icon: '😌' },
    { name: 'Confused', icon: '😕' },
    { name: 'Surprised', icon: '😲' },
    { name: 'Bored', icon: '😐' },
    { name: 'Nervous', icon: '😬' },
    { name: 'Tired', icon: '😴' },
    { name: 'In Love', icon: '😍' },
    { name: 'Grateful', icon: '🙏' },
    { name: 'Proud', icon: '😎' },
    { name: 'Scared', icon: '😨' },
    { name: 'Silly', icon: '🤪' },
    { name: 'Hopeful', icon: '🤞' },
    // { name: 'Annoyed', icon: '🙄' },
    // { name: 'Determined', icon: '💪' },
    // { name: 'Lonely', icon: '🥺' },
    // { name: 'Frustrated', icon: '😤' },
    // { name: 'Shy', icon: '😊' },
    // { name: 'Lazy', icon: '🛌' },
    // { name: 'Sick', icon: '🤒' },
    // { name: 'Peaceful', icon: '☮️' }
  ];
  
  

  setMood(mood: string) {
    this.selectedMood = mood;
  }

  ngOnInit(): void {
    
  }
}
