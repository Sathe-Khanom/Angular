import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  regForm!: FormGroup;

  constructor(
   private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ) {

    this.regForm = this.formBuilder.group({

      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      education: ['', Validators.required],
      experience: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
    })

  }


   onSubmit() {
    if (this.regForm.valid) {
      this.authService.registration(this.regForm.value).subscribe(() => {
        alert('User registered successfully!');
        this.router.navigate(['/userprofile']);
      });
    }
  }
  }









