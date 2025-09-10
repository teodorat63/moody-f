import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, forkJoin, map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mood, Song, UserProfile } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHeaders() {
    const token = localStorage.getItem('token');
    console.log('My token', token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getProfile() {
    return this.http.get<UserProfile>(`${this.apiUrl}/users/me`, {
      headers: this.getHeaders(),
    });
  }

  getMoods() {
    return this.http.get<Mood[]>(`${this.apiUrl}/moods`);
  }

  getSongs(moodId: number): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}/moods/${moodId}/songs`).pipe(
      map((songs) =>
        songs.map((song) => ({
          ...song,
          url: `http://localhost:3000/audio/${song.url}`,
        }))
      )
    );
  }

  // getSongs(moodId: number): Promise<Song[]> {
  //   return firstValueFrom(this.http.get<Song[]>(`${this.apiUrl}moods/${moodId}/songs`));
  // }

  updateProfile(
    id: string | number,
    payload: Partial<Pick<UserProfile, 'name' | 'email'>>
  ): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${this.apiUrl}/users/${id}`, payload);
  }

  deleteProfile(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  createMood(payload: { name: string; emoji: string }): Observable<Mood> {
    return this.http.post<Mood>(`${this.apiUrl}/moods`, payload);
  }

  getUsersByMood(moodId: number) {
    return this.http.get<UserProfile[]>(
      `${this.apiUrl}/users/${moodId}/users`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getTrendingMoods() {
    //observable svih raspolozenja
    return this.getMoods().pipe(
      switchMap((moods) => {
        //brojimo koliko korisnika ima svako raspolozenje
        const requests = moods.map((mood) =>
          this.getUsersByMood(mood.id).pipe(
            map((users) => ({
              ...mood,
              userCount: users.length,
            }))
          )
        );
        return forkJoin(requests);
      }),
      //sortiraj
      map((moodStats) => moodStats.sort((a, b) => b.userCount - a.userCount))
    );
  }
}
