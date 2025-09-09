import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMoods, pickMood } from '../../store/mood/mood.actions';
import { Observable, map } from 'rxjs';
import { selectAllMoods, selectMoodStatus, selectPickedMood } from '../../store/mood/mood.selector';
import { AppState } from '../../store/app.state';
import { Mood } from '../../models';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-moody',
  templateUrl: './moody.component.html',
  imports: [CommonModule],
  styleUrls: ['./moody.component.scss']
})
export class MoodyComponent implements OnInit {

  selectedMood$: Observable<Mood | null>;
  allMoods$: Observable<Mood[]>;
  loading$: Observable<boolean>;

  constructor(private router: Router, private apiService: ApiService, private store: Store<AppState>){
    this.selectedMood$ = this.store.select(selectPickedMood);
    this.allMoods$ = this.store.select(selectAllMoods);
    this.loading$ = this.store.select(selectMoodStatus).pipe(
    map(status => status === 'loading')
  );
  }


  ngOnInit(): void {
    this.store.dispatch(loadMoods());

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
