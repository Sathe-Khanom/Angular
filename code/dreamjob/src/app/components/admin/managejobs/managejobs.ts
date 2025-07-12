import { Component, OnInit } from '@angular/core';
import { Job } from '../../../model/job.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../../services/job-service';

@Component({
  selector: 'app-managejobs',
  standalone: false,
  templateUrl: './managejobs.html',
  styleUrl: './managejobs.css'
})
export class Managejobs implements OnInit {

jobs: Job[] = [];
  jobForm: FormGroup;
  isEditMode = false;
  currentJobId: number | null = null;

  constructor(private jobService: JobService, private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      posted: ['', Validators.required],
      salary: ['', Validators.required],
      description: ['', Validators.required],
      responsibilities: ['', Validators.required],
      requirements: ['', Validators.required],
      benefits: ['', Validators.required],
      deadline: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email]],
      companyPhone: ['', Validators.required],
      companyAddress: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  submit() {
    const formValue = this.jobForm.value;

    // responsibilities and requirements should be array of strings, so we split by comma
    formValue.responsibilities = formValue.responsibilities.split(',').map((r: string) => r.trim());
    formValue.requirements = formValue.requirements.split(',').map((r: string) => r.trim());

    if (this.isEditMode && this.currentJobId) {
      this.jobService.updateJob(this.currentJobId, formValue).subscribe(() => {
        this.resetForm();
        this.loadJobs();
      });
    } else {
      this.jobService.addJob(formValue).subscribe(() => {
        this.resetForm();
        this.loadJobs();
      });
    }
  }

  editJob(job: Job) {
    this.isEditMode = true;
    this.currentJobId = job.id;
    this.jobForm.patchValue({
      ...job,
      responsibilities: job.responsibilities.join(', '),
      requirements: job.requirements.join(', ')
    });
  }

  deleteJob(id: number) {
    if (confirm('Are you sure to delete this job?')) {
      this.jobService.deleteJob(id).subscribe(() => {
        this.loadJobs();
      });
    }
  }

  resetForm() {
    this.jobForm.reset();
    this.isEditMode = false;
    this.currentJobId = null;
  }


}
