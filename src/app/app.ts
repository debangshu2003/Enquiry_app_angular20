import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Enquiry_app_angular20');

  constructor(private readonly router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('enquiryApp') === 'admin' || localStorage.getItem('enquiryApp') === 'true';
  }

  userName(): string {
    const savedUser = localStorage.getItem('loggedInUser');

    if (!savedUser) {
      return 'Guest';
    }

    try {
      const parsedUser = JSON.parse(savedUser) as { username?: string };
      return parsedUser.username?.trim() || 'User';
    } catch {
      return 'User';
    }
  }

  logout(): void {
    localStorage.removeItem('enquiryApp');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
