import { ChangeDetectorRef, Component } from '@angular/core';
import { JobService } from '../../service/job-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-job',
  standalone: false,
  templateUrl: './view-job.html',
  styleUrl: './view-job.css'
})
export class ViewJob {

  jobs: any;

  constructor(
    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllJob();
  }

  loadAllJob() {

    this.jobs = this.jobService.getAllJob();

  }

  deleteJob(id: string): void {
    this.jobService.deleteJob(id).subscribe({
      next: () => {

        console.log('Job deleted');
        this.loadAllJob();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log('Error deleting job:', err);
      }
    });
  }

  getJobById(id: string): void {
    this.jobService.getJobById(id).subscribe({
      next: (res) => {
        console.log(res)
        console.log("Data get Successfull");
        this.router.navigate(['/update', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }

  getJobDetailsById(id: string): void {
    this.jobService.getJobById(id).subscribe({
      next: (res) => {
        console.log(res)
        console.log("Data get Successfull");
        this.router.navigate(['/jobdetails', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }

}
