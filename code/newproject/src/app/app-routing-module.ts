import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jobs } from './components/jobs/jobs';
import { Home } from './components/home/home';
import { Addjob } from './components/addjob/addjob';
import { Editjob } from './components/editjob/editjob';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Jobseemore } from './components/jobseemore/jobseemore';
import { Jobapplicationlist } from './components/jobapplicationlist/jobapplicationlist';
import { Employer } from './components/employer/employer';
import { Viewalljob } from './components/viewalljob/viewalljob';
import { Userprofile } from './components/userprofile/userprofile';
import { Useredit } from './components/useredit/useredit';
import { Uploadfile } from './components/uploadfile/uploadfile';
import { Showcv } from './components/showcv/showcv';

const routes: Routes = [

 { path: 'userHomeViewpage', component: Jobs },
  { path: 'jobs', component: Jobs },
  { path: 'homecomp', component: Home },
  { path: 'addjob', component: Addjob },
  { path: 'editJob/:id', component: Editjob},
  {path:'signup', component:Signup},
  {path:'login', component:Login},
  {path:'seemorejobdetails/:id', component:Jobseemore},
  {path:'jobApplicantList/:jobId', component:Jobapplicationlist},
  {path:'employer', component:Employer},
  {path:'viewalljob', component:Viewalljob},
  {path:'userprofile', component:Userprofile},
  {path:'useredit',component:Useredit},
   {path:'uploadfile', component: Uploadfile},
   {path:'showcv', component: Showcv},
   {path:'**', redirectTo:"/homecomp" , pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
