import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj:any =  {
    username: "",
    password: ""
  }

  router = inject(Router);


  onLogin() {
    if (this.loginObj.username === 'admin' && this.loginObj.password === '223344') {
      const username = this.loginObj.username.trim();

      localStorage.setItem('enquiryApp', 'admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));

      alert('Login successful!');
      this.router.navigate(['/enquiry-list']);
    } else {
      alert('Wrong Credentials.');
    }
  }
}
