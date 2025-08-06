import { ChangeDetectorRef, Component } from '@angular/core';

import { JobSeeker } from '../../model/jobseeker.model';
import { JobseekerService } from '../../service/jobseeker.service';

@Component({
  selector: 'app-job-seeker-profile-component',
  standalone: false,
  templateUrl: './job-seeker-profile-component.html',
  styleUrl: './job-seeker-profile-component.css'
})
export class JobSeekerProfileComponent {

   jobSeeker?: JobSeeker;

  constructor(private jobSeekerService: JobseekerService, private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.jobSeekerService.getProfile().subscribe({
      next: (data) => {
        this.jobSeeker = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }

}
