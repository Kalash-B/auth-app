import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.html'
})
export class ProfileComponent {

  user: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }
}