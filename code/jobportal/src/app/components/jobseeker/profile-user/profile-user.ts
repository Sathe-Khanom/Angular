import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../../model/user.model';
import { UserService } from '../../../service/user-service';

@Component({
  selector: 'app-profile-user',
  standalone: false,
  templateUrl: './profile-user.html',
  styleUrl: './profile-user.css'
})
export class ProfileUser  {
   user: User | null = null;
  private subscription: Subscription = new Subscription();

    constructor(
    private userService: UserService
  ) { }

    ngOnInit(): void {
    this.loadUserProfile();
  }


 loadUserProfile(): void {
    const sub = this.userService.getUserProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      },
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }

  


