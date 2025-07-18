import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth-service';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-registration-user',
  standalone: false,
  templateUrl: './registration-user.html',
  styleUrl: './registration-user.css'
})
export class RegistrationUser {

regForm !: FormGroup;

constructor(
  private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
){
  this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      photo: ['', Validators.required],


    })

}

onSubmit(): void {
    if (this.regForm.valid) {
      
      const user: User = {
        ...this.regForm.value,
        role: 'user'
      };

      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']); // Navigate to a protected route after registration
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else {
      alert("Complte mandatory Field");
    }
  }

}
