import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RegistrationUser } from './components/jobseeker/registration-user/registration-user';
import { RegistrationEmp } from './components/employer/registration-emp/registration-emp';
import { LoginUser } from './components/jobseeker/login-user/login-user';
import { LoginEmp } from './components/employer/login-emp/login-emp';
import { ProfileUser } from './components/jobseeker/profile-user/profile-user';
import { ProfileEmp } from './components/employer/profile-emp/profile-emp';
import { DashboardEmp } from './components/employer/dashboard-emp/dashboard-emp';
import { DashboardUser } from './components/jobseeker/dashboard-user/dashboard-user';
import { AddJob } from './components/job/add-job/add-job';
import { ViewAllJob } from './components/job/view-all-job/view-all-job';
import { UpdateJob } from './components/job/update-job/update-job';

const routes: Routes = [
{path:'', component: Home},
{path:'reguser', component: RegistrationUser},
{path:'regemp', component: RegistrationEmp},
{path:'loginuser', component: LoginUser},
{path:'loginemp', component: LoginEmp},
{path:'profileuser', component: ProfileUser},
{path:'profileemp', component: ProfileEmp},
{path:'dashemp', component: DashboardEmp},
{path:'dashuser', component: DashboardUser},
{path:'addjob', component: AddJob},
{path:'alljob', component: ViewAllJob},
{path:'updatejob', component: UpdateJob}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
