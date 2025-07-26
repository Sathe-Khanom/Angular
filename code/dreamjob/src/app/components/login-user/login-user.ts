import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login-user',
  standalone: false,
  templateUrl: './login-user.html',
  styleUrl: './login-user.css'
})
export class LoginUser {

  loginForm: FormGroup;
 
   errorMessage: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
  if (this.loginForm.invalid) {
    this.errorMessage = 'Please fill in all required fields correctly.';
    return;
  }

  const userDetails = this.loginForm.value;

  this.authService.login(userDetails).subscribe({
    next: (res) => {
      console.log('User logged in successfully:', res);
      
      this.authService.storeToken(res.token);

      const role = this.authService.getUserRole();
      console.log('User role:', role);

      if (role === 'user') {
        this.router.navigate(['/userprofile']);
      } else if (role === 'admin') {
        this.router.navigate(['/adminprofile']);
      } else {
        this.errorMessage = 'Unknown user role.';
      }

      this.loginForm.reset();
    },
    error: (err) => {
      console.error('Error logging in:', err);
      this.errorMessage = 'Invalid email or password.';
    }
  });
}



}
