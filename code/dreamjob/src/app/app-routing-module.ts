import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ViewJob } from './components/view-job/view-job';
import { AddJob } from './components/add-job/add-job';
import { UpdateJob } from './components/update-job/update-job';
import { JobDetails } from './components/job-details/job-details';
import { Registration } from './components/registration/registration';
import { UserProfile } from './components/user-profile/user-profile';
import { LoginUser } from './components/login-user/login-user';
import { EmployerProfile } from './components/employer-profile/employer-profile';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'viewjob', component: ViewJob },
  { path: 'addjob', component: AddJob },
  { path: 'update/:id', component: UpdateJob },
  {path: 'jobdetails/:id', component: JobDetails},
  {path: 'reg', component: Registration},
  {path: 'userprofile', component:UserProfile},
  {path:'loginuser', component: LoginUser},
  {path: 'emprofile', component: EmployerProfile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
