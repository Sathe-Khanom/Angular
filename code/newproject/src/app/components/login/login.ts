import { Component } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

 constructor(private userService:UserService, private router: Router){}

  // 
  onSubmit(form: NgForm) {
    if (form.valid) {
      const userCredentials = form.value;
      
      this.userService.loginUser(userCredentials).subscribe(
        (response:User) => {
          console.log('User logged in successfully:', response);
          // Optionally, navigate to another page or perform other actions
          if(response.role==='employer'){
            this.router.navigate(['/employer']);

          }else{
            this.router.navigate(['/homecomp']);
          }
        },
        (error) => {
          console.error('Error logging in:', error);
          // Handle errors and provide feedback to the user
        }
      );
    }
  }


}
