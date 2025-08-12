import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from '../../service/employer.service';

@Component({
  selector: 'app-add-employer.component',
  standalone: false,
  templateUrl: './add-employer.component.html',
  styleUrl: './add-employer.component.css'
})
export class AddEmployerComponent {

  userForm: FormGroup;
  employerForm: FormGroup;
  photoFile!: File;
  message: string = '';

  constructor(private fb: FormBuilder, private employerService: EmployerService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.employerForm = this.fb.group({
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      industryType: ['', Validators.required]
    });
  }

  onPhotoSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
      console.log('Selected file:', this.photoFile);
    }
  }

  onSubmit(): void {
    if (!this.photoFile) {
      this.message = 'Please upload a photo.';
      return;
    }

    if (this.userForm.invalid || this.employerForm.invalid) {
      this.message = 'Please fill out all required fields.';
      return;
    }

    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      password: this.userForm.value.password,
      role: 'EMPLOYER'
    };

    const employer = {
      contactPerson: this.userForm.value.name,
      email: this.userForm.value.email,
      phoneNumber: this.userForm.value.phone,
      companyName: this.employerForm.value.companyName,
      address: this.employerForm.value.address,
      website: this.employerForm.value.website,
      industryType: this.employerForm.value.industryType
    };

    this.employerService.registerEmployer(user, employer, this.photoFile).subscribe({
      next: res => {
        this.message = res.Message || 'Registration successful!';
        this.userForm.reset();
        this.employerForm.reset();
        this.photoFile = undefined!;
      },
      error: err => {
        this.message = 'Registration failed: ' + (err.error?.Message || err.message);
      }
    });
  }
}
