import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobDetailsService } from '../../../service/job-details-service';
import { Router } from '@angular/router';
import { JobDetails } from '../../../model/jobDetails.model';

@Component({
  selector: 'app-add-job-details',
  standalone: false,
  templateUrl: './add-job-details.html',
  styleUrl: './add-job-details.css'
})
export class AddJobDetails implements OnInit {
    formGroup !: FormGroup;

     constructor(
    private jobDetailsService: JobDetailsService,
    private formBuilder: FormBuilder,
    private router: Router,
       
  ) { } 

    ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

    title: [''],
    company: [''],
    location: [''],
    posted: [''],
    salary: [''],
    description: [''],
    responsibilitiesInput: [''],
    requirementsInput: [''],
    benefits: [''],
    deadline: [''],
    companyEmail: [''],
    companyPhone: [''],
    companyAddress: [''],
    website: ['']

    });


  }
    addJobDetails(): void {

    const jobdetails: JobDetails = { ...this.formGroup.value };

    this.jobDetailsService.saveJobDetails(jobdetails).subscribe({

      next: (res) => {

        console.log("Job Details Saved ", res);
        this.formGroup.reset();
        this.router.navigate(['/allstu']);

      },

      error: (error) => {

        console.log(error);

      }



    })


  }



    


  }


