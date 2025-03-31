import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email=""
  password=""

  constructor(private authService: AuthService, private router: Router){}

  register()
  {
    this.authService.register({name: '', email: this.email, password: this.password}).subscribe({
      next: (response)=>
      {
        this.authService.saveToken(response.token);
        this.router.navigate(['/dashboard']);

      },
      error: (err)=>  console.error(err)
    })
  }

}
