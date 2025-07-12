import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job-service';
import { Job } from '../../../model/job.model';

@Component({
  selector: 'app-joblist',
  standalone: false,
  templateUrl: './joblist.html',
  styleUrl: './joblist.css'
})
export class Joblist implements OnInit {

  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

}
