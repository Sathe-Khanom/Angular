import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Job } from '../../../model/job.model';
import { JobService } from '../../../service/job-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-job',
  standalone: false,
  templateUrl: './view-all-job.html',
  styleUrl: './view-all-job.css'
})
export class ViewAllJob implements OnInit {

jobs: any;


constructor(

    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef

){}

  ngOnInit(): void {
    this.loadAllJob();
  }

 loadAllJob(): void{
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

  getJobById(id: string):void{
    this.jobService.getJobById(id).subscribe({
      next : (res) =>{
        console.log(res)
        console.log("Data get Successfull");
        this.router.navigate(['updatejob',id]);
      },

      error: (err) =>{

        console.log(err);
      }

    });

  } 




}
