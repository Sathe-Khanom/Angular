import { Component, OnInit } from '@angular/core';
import { Job } from '../../../model/job.model';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../../services/job-service';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-jobdetails',
  standalone: false,
  templateUrl: './jobdetails.html',
  styleUrl: './jobdetails.css'
})
export class Jobdetails implements OnInit {

  job: Job | undefined;
 
  constructor(private route: ActivatedRoute, private jobService: JobService, private authService: AuthService) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(jobId).subscribe(data => {
      this.job = data;
    });
  }

 canApply() {
  return this.authService.isLoggedIn();
}

applyNow() {
  if (!this.canApply()) {
    alert('Please login to apply.');
    return;
  }
  // Store application locally for demo
  const user = this.authService.getCurrentUser();
  const appliedJobs = JSON.parse(localStorage.getItem('applications') || '{}');

  if (!appliedJobs[user.id]) appliedJobs[user.id] = [];
  if (!appliedJobs[user.id].includes(this.job?.id)) {
    appliedJobs[user.id].push(this.job?.id);
    localStorage.setItem('applications', JSON.stringify(appliedJobs));
    alert('Applied successfully!');
  } else {
    alert('You have already applied for this job.');
  }

}
 }
