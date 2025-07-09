import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../../../service/job-service';
import { Router } from '@angular/router';
import { Job } from '../../../model/job.model';

@Component({
  selector: 'app-add-job',
  standalone: false,
  templateUrl: './add-job.html',
  styleUrl: './add-job.css'
})
export class AddJob implements OnInit {

  formGroup !: FormGroup;


  constructor(

    private jobService: JobService,
    private formBuilder: FormBuilder,
    private router: Router,    
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      jobTitle: ['']
     

      });
}

addJob(): void {
    if (this.formGroup.invalid) {
      return; // Don't submit invalid form
    }

    const job: Job = { ...this.formGroup.value };

    this.jobService.saveJob(job).subscribe({
      next: (res) => {
        console.log("Job Saved", res);
        
        this.formGroup.reset();
       // this.cdr.reattach(); // or reattach() if that's correct for you
        this.router.navigate(['/alljob']);
      },
      error: (error) => {
        console.error("Error saving job", error);
        // Optionally show an error message to the user
      }
    });
  }


}
