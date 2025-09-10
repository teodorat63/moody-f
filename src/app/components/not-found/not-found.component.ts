import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrendingMoodsComponent } from '../trending-moods/trending-moods.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, TrendingMoodsComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {}
