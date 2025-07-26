import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile implements OnInit {
  
  
   user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router,
    private userSer: UserService
  ) { }

  ngOnInit(): void {
   this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userSer.getUserProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
