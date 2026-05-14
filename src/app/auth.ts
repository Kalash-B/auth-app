import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    return storedUser.email === email && storedUser.password === password;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}