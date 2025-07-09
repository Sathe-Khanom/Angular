import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Job } from '../../../model/job.model';
import { JobService } from '../../../service/job-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-job',
  standalone: false,
  templateUrl: './update-job.html',
  styleUrl: './update-job.css'
})
export class UpdateJob implements OnInit{

 id: string = '';
job: Job = new Job();

constructor(

    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.loadJobById();
  }

  loadJobById() {
    this.id = this.route.snapshot.params['id'];
    this.jobService.getJobById(this.id).subscribe({
      next: (res) => {
        this.job = res;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    });

  }       


  

  updateJob(): void {
    this.jobService.updateJob(this.id, this.job)
      .subscribe({
        next: () => this.router.navigate(['/alljob']),
        error: err => console.error('Update failed', err)
      });
  }





}
