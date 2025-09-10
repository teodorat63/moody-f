import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

interface TrendingMood {
  id: number;
  name: string;
  emoji: string;
  userCount: number;
}

@Component({
  selector: 'app-trending-moods',
  templateUrl: './trending-moods.component.html',
  imports: [CommonModule],
  styleUrls: ['./trending-moods.component.scss'],
})
export class TrendingMoodsComponent implements OnInit {
  trendingMoods$!: Observable<TrendingMood[]>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.trendingMoods$ = this.api.getTrendingMoods();
  }
}
