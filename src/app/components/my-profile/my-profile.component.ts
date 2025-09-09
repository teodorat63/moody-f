import { AuthService } from './../../services/auth.service';
// src/app/features/my-profile/my-profile.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserProfile } from '../../models';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent implements OnInit {
  private apiService = inject(ApiService);
  private AuthService = inject(AuthService);

  isLoading = false;
  isSaving = false;
  isDeleting = false;
  errorMsg = '';
  successMsg = '';

  data?: UserProfile;
  formModel = { name: '', email: '' };

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getProfile().subscribe({
      next: (response) => {
        this.data = response;
        // inicijalizacija formModel-a iz dobijenog profila
        this.formModel.name = response?.name ?? '';
        this.formModel.email = response?.email ?? '';
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Neuspešno učitavanje profila.';
        this.isLoading = false;
      },
    });
  }

  save(form: NgForm) {
    if (!this.data?.id) return;
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    this.errorMsg = '';
    this.successMsg = '';

    const payload = {
      name: this.formModel.name,
      email: this.formModel.email,
    };

    this.apiService.updateProfile(this.data.id, payload).subscribe({
      next: (updated) => {
        this.data = updated; // osveži prikaz
        this.successMsg = 'Profil je uspešno sačuvan.';
        this.isSaving = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Greška pri čuvanju profila.';
        this.isSaving = false;
      },
    });
  }

  delete() {
    if (!this.data?.id) return;
    const confirmed = window.confirm(
      'Are you sure you want to delete your profile?'
    );
    if (!confirmed) return;

    this.isDeleting = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.apiService.deleteProfile(this.data.id).subscribe({
      next: () => {
        this.isDeleting = false;
        this.AuthService.logout();
        window.location.reload();
      },
      error: (err) => {
        console.error(err);
        this.isDeleting = false;
      },
    });
  }
}
