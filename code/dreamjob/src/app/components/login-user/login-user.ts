import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: false,
  templateUrl: './login-user.html',
  styleUrl: './login-user.css'
})
export class LoginUser {

  formGroup: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
  if (this.formGroup.valid) {
    const { email, password } = this.formGroup.value;

    this.userService.login(email, password).subscribe(users => {
      if (users.length > 0) {
        // Login success
        localStorage.setItem('loggedInUser', JSON.stringify(users[0]));
        this.router.navigate(['/userprofile']);
      } else {
        // Login failed
        alert('Invalid email or password');
      }
    }, error => {
      console.error('Login error:', error);
      alert('Server error! Please try again later.');
    });
  }
}



}
