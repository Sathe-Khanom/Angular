import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job-service';
import { Job } from '../../../model/job.model';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-appliedjobs',
  standalone: false,
  templateUrl: './appliedjobs.html',
  styleUrl: './appliedjobs.css'
})
export class Appliedjobs implements OnInit {

  appliedJobs: Job[] = [];

  constructor(private jobService: JobService, private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
  if (!user) {
    this.appliedJobs = [];
    return;
  }
  const appliedJobs = JSON.parse(localStorage.getItem('applications') || '{}');
  const appliedJobIds: number[] = appliedJobs[user.id] || [];
    this.jobService.getJobs().subscribe(jobs => {
      this.appliedJobs = jobs.filter(job => appliedJobIds.includes(job.id));
    });
  }

}
