import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-job-seeker-profile-component',
  standalone: false,
  templateUrl: './job-seeker-profile-component.html',
  styleUrl: './job-seeker-profile-component.css'
})
export class JobSeekerProfileComponent {

   user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router

  ) { }

  ngOnInit(): void {

    console.log(this.authService.getToken());
    console.log(this.authService.getUserRole());
  
  }

  // loadUserProfile(): void {
  //   const sub = this.userSer.getUserProfile().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       if (res) {
  //         this.user = res;
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error loading user profile:', err);
  //     }
  //   });

  //   this.subscription.add(sub);
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
