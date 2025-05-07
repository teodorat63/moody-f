import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Mood } from '../../services/api-service.service';
import { Store } from '@ngrx/store';
import { pickMood } from '../../store/mood/mood.actions';
import { Observable } from 'rxjs';
import { selectPickedMood } from '../../store/mood/mood.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-moody',
  templateUrl: './moody.component.html',
  imports: [CommonModule],
  styleUrls: ['./moody.component.scss']
})
export class MoodyComponent implements OnInit {

  selectedMood$: Observable<Mood | null>;

  constructor(private router: Router, private apiService: ApiService, private store: Store<AppState>){
    this.selectedMood$ = this.store.select(selectPickedMood);
  }

  isLoading?: boolean;
  data?: Mood[];

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getMoods().subscribe(
      {
        next: (response) => {
          this.isLoading = false;
          this.data = response;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
        }
      }
    );
  }

  private moodSound = new Audio('/assets/click.wav');
  private createSound = new Audio('/assets/etheral-woosh.wav');

  setMood(mood: Mood) {
    console.log('You have selected', mood.name);
    this.store.dispatch(pickMood({ mood }));
    this.moodSound.load();
    this.moodSound.play();
  }

  createPlaylist(){
    this.createSound.load();
    this.createSound.play();
    this.router.navigate(['/generate']);
  }
}
