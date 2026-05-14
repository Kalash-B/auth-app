import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user);
    alert('Registration Successful');
    this.router.navigate(['/login']);
  }
}