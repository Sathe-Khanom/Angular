import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job-service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobModelModule } from '../../model/job-model/job-model-module';
import { SoaRecord } from 'dns';

@Component({
  selector: 'app-job-details',
  standalone: false,
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails implements OnInit {

  id!:string;
  jobs: JobModelModule = new JobModelModule();

  constructor(
    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.loadAllJob();
  }

  loadAllJob(): void {

    this.jobService.getJobById(this.id).subscribe({
      next: (data) => {
        this.jobs = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading jobs', err);
      }

    });

  }

  getJobById(id: string): void {
    this.router.navigate(['/update', id]);
  }


}

