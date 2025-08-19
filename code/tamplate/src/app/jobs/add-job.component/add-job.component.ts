import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job.component',
  standalone: false,
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {

jobForm: FormGroup;
  isSubmitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      salary: [null, [Validators.required, Validators.min(0)]],
      jobType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.jobForm.invalid) return;

    const jobData = this.jobForm.value;

    this.jobService.createJob(jobData).subscribe({
      next: () => {
        this.successMessage = 'Job posted successfully!';
        this.errorMessage = '';
        this.jobForm.reset();
        this.isSubmitted = false;
      },
      error: () => {
        this.successMessage = '';
        this.errorMessage = 'Failed to post job.';
      }
    });
  }
}
