import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobModelModule } from '../../model/job-model/job-model-module';
import { JobService } from '../../service/job-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-job',
  standalone: false,
  templateUrl: './update-job.html',
  styleUrl: './update-job.css'
})
export class UpdateJob implements OnInit {

 id: string = '';
  job: JobModelModule = new JobModelModule();

  constructor(
    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadJobById();
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id') || '';
      
    //   if (this.id) {
    //     this.loadStudentById();
    //   }
    // });
  }

  loadJobById() {
    this.id = this.route.snapshot.params['id'];
  
    this.jobService.getJobById(this.id).subscribe({
      next: (res) => {
        this.job = res;
        this.cdr.markForCheck(); // Uncomment if using OnPush
      },
      error: (err) => {
        console.error('Error fetching job:', err);
      }
    });
  }

  updateJob(): void {
    this.jobService.updateJob(this.id, this.job)
      .subscribe({
        next: () => this.router.navigate(['/viewjob']),
        error: err => console.error('Update failed', err)
      });
  }

}
