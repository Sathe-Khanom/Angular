import { Component } from '@angular/core';
import { JobService } from '../../service/job-service';

@Component({
  selector: 'app-view-job',
  standalone: false,
  templateUrl: './view-job.html',
  styleUrl: './view-job.css'
})
export class ViewJob {

 jobs: any;

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent(){

    this.jobs = this.jobService.getAllJob();

  }

}
