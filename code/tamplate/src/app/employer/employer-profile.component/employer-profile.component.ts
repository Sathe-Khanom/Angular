import { ChangeDetectorRef, Component } from '@angular/core';
import { EmployerService } from '../../service/employer.service';

@Component({
  selector: 'app-employer-profile.component',
  standalone: false,
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.css'
})
export class EmployerProfileComponent {
   
employer: any;

  constructor(
    private employerService: EmployerService,
    private cdr: ChangeDetectorRef){}

   ngOnInit(): void {
    this.getProfile();}

  getProfile() {

    this.employerService.getProfile().subscribe({
      next: (data) => {
        this.employer = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }



}
