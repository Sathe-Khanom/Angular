import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobDetailsService } from '../../../service/job-details-service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetails } from '../job-details/job-details';


@Component({
  selector: 'app-updatejobdetails',
  standalone: false,
  templateUrl: './updatejobdetails.html',
  styleUrl: './updatejobdetails.css'
})
export class Updatejobdetails implements OnInit{

  id: string = '';
jobdetails: JobDetails = new JobDetails();
  constructor(
    private jobDetailsService: JobDetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadJobDetailsById();


}

  loadJobDetailsById() {
    this.id = this.route.snapshot.params['id'];
  
    this.jobDetailsService.getJobDetailsById(this.id).subscribe({
      next: (res) => {
        this.jobdetails = res;
        this.cdr.markForCheck(); // Uncomment if using OnPush
      },
      error: (err) => {
        console.error('Error fetching jobdetails:', err);
      }
    });
  }

  updateStudent(): void {
    this.jobDetailsService.updateJobDetails(this.id, this.jobdetails)
      .subscribe({
        next: () => this.router.navigate(['']),
        error: err => console.error('Update failed', err)
      });
  }





}
