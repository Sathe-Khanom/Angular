import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from '../../../service/job-service';
import { Router } from '@angular/router';
import { Job } from '../../../model/job.model';
import { error } from 'console';

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
    
  ) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

       title: [''],
        description: [''],
        category: [''],
        status: [''],
        location: [''],
        pdate: [''],
        deadlinedate:['']    
      
      });
}

addJob(): void {
 const job: Job = {...this.formGroup.value};  

this.jobService.saveJob(job).subscribe({

next:(res) => {
console.log("Job Saved", res);
this.formGroup.reset();
this.router.navigate(['/']); //path name/allstu
},

error:(error) => {
  console.log(error);
}


})
}
}