import { Component, OnInit } from '@angular/core';

import { JobDetailsService } from '../../../service/job-details-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: false,
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails implements OnInit {

  jobdetails: JobDetails | undefined;

  constructor(private jobDetailsService: JobDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['id'];

    this.jobDetailsService.getJobDetailsById(jobId).subscribe(data => {
      this.jobdetails = data;
    });
  }
}
