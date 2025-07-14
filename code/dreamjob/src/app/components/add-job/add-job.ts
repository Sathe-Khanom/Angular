import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../../service/job-service';
import { Router } from '@angular/router';
import { JobModelModule } from '../../model/job-model/job-model-module';

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
    private router: Router
  ) { }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      title: [''],
      description: [''],
      category: [''],
      jobtype: [''],
      requirement: [''],
      location: [''],
      pdate: [''],
      deadlinedate: ['']
    });


  }


  addJob(): void {

    const job: JobModelModule = { ...this.formGroup.value };

    this.jobService.saveJob(job).subscribe({

      next: (res) => {

        console.log("Job Saved ", res);
        this.formGroup.reset();
        this.router.navigate(['/viewjob']);

      },

      error: (error) => {

        console.log(error);

      }



    })


  }

}
