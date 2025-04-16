import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserProfile{
  id: number;
  name: string | null;
  email: string;
  createdAt: string;
}

export interface Mood{
  id: number;
  name: string;
  emoji: string;
}

export interface Song{
  id: number;
  title: string;
  artist: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem('token');
    console.log("My token", token);
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getProfile() {
    return this.http.get<UserProfile>(`${this.apiUrl}users/me`, { headers: this.getHeaders() });
  }

  getMoods(){
    return this.http.get<Mood[]>(`${this.apiUrl}moods`)
  }

  getSongs(mood: Mood){
    
      return this.http.get<Song[]>(`${this.apiUrl}moods/${mood.id}/songs`)
    
    
    
  }

  
}
