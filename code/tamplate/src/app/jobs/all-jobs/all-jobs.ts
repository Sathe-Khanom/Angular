import { ChangeDetectorRef, Component } from '@angular/core';
import { Job } from '../../model/job.model';
import { JobService } from '../../service/job.service';
import { JobDTO } from '../../model/JobDTO';

@Component({
  selector: 'app-all-jobs',
  standalone: false,
  templateUrl: './all-jobs.html',
  styleUrl: './all-jobs.css'
})
export class AllJobs {



  jobs: JobDTO[] = [];

  constructor(private jobService: JobService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.cd.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }

}
