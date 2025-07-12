import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]],
      phone: [''],
      location: ['']
    });
  }

  ngOnInit(): void {
    // TODO: Load user profile from API or localStorage
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (userData) {
      this.profileForm.patchValue(userData);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedProfile = this.profileForm.getRawValue();
      // TODO: Save updatedProfile to backend or localStorage
      localStorage.setItem('user', JSON.stringify(updatedProfile));
      alert('Profile updated!');
    }
  }

}
