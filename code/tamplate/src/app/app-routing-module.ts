import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { AddjobseekerComponent } from './jobseekr/addjobseeker.component/addjobseeker.component';
import { JobSeekerProfileComponent } from './jobseekr/job-seeker-profile-component/job-seeker-profile-component';
import { LoginComponent } from './auth/login.component/login.component';

const routes: Routes = [
  {path: 'allUser' , component:AlluserComponent},
  {path: '' , component:AddjobseekerComponent},
  {path: 'jobsekpro' , component:JobSeekerProfileComponent},
  {path: 'login' , component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
