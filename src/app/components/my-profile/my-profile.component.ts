import { Component, OnInit } from '@angular/core';
import { ApiService, UserProfile } from '../../services/api-service.service';
import { catchError, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit{

  constructor(private apiService: ApiService){}

  isLoading?: boolean;
  data?: UserProfile;

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getProfile().subscribe(
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
