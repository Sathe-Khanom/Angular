import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { AddjobseekerComponent } from './jobseekr/addjobseeker.component/addjobseeker.component';
import { JobSeekerProfileComponent } from './jobseekr/job-seeker-profile-component/job-seeker-profile-component';
import { LoginComponent } from './auth/login.component/login.component';
import { AddEmployerComponent } from './employer/add-employer.component/add-employer.component';
import { EmployerProfileComponent } from './employer/employer-profile.component/employer-profile.component';
import { AddJobComponent } from './jobs/add-job.component/add-job.component';
import { JobDetailsComponent } from './jobs/job-details.component/job-details.component';
import { AllJobs } from './jobs/all-jobs/all-jobs';

const routes: Routes = [
  {path: 'allUser' , component:AlluserComponent, data: { headerType: 'mainHeader' }},
  {path: 'addseeker' , component:AddjobseekerComponent, data: { headerType: 'mainHeader' }},
  {path: 'jobsekpro' , component:JobSeekerProfileComponent, data: { headerType: 'mainHeader' }},
  {path: 'login' , component:LoginComponent, data: { headerType: 'mainHeader' }},
  {path: 'addemp', component:AddEmployerComponent, data: { headerType: 'mainHeader' }},
  {path: 'emprofile', component: EmployerProfileComponent, data: { headerType: 'mainHeader' }},
  {path: 'addjob', component: AddJobComponent , data: { headerType: 'mainHeader' }},
  {path: 'jobdetails', component: JobDetailsComponent, data: { headerType: 'mainHeader' }},
  {path: 'alljobs', component: AllJobs,  },
  { path: 'jobs/:id', component: JobDetailsComponent, },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
