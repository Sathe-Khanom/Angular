import { Component } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

 duplicateEmailError: string = '';
  constructor(private userService: UserService, private router:Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const userData = form.value;
      this.userService.createUser(userData).subscribe(
        (response) => {
          console.log('User signed up successfully:', response);
          const userRole = form.value.role;
          if(userRole=='employer'){
            this.router.navigate(['/employer']);
          }
          else{
            this.router.navigate(['/homecomp']);
          }

          
          // Optionally, navigate to a login page or provide feedback to the user
        },
        (error) => {
          console.error('Error signing up:', error);
          // Handle errors and provide feedback to the user
          if (error.error && error.error.message === 'Duplicate email') {
            this.duplicateEmailError = 'Email already exists. Please try another email.';
          } else {
            this.duplicateEmailError = 'An error occurred. Please try again later.';
          }
        }
      );
    }
  }

}
