import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RegistrationUser } from './components/jobseeker/registration-user/registration-user';
import { LoginUser } from './components/jobseeker/login-user/login-user';
import { ProfileUser } from './components/jobseeker/profile-user/profile-user';
import { DashboardUser } from './components/jobseeker/dashboard-user/dashboard-user';
import { RegistrationEmp } from './components/employer/registration-emp/registration-emp';
import { LoginEmp } from './components/employer/login-emp/login-emp';
import { ProfileEmp } from './components/employer/profile-emp/profile-emp';
import { DashboardEmp } from './components/employer/dashboard-emp/dashboard-emp';
import { Home } from './components/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddJob } from './components/job/add-job/add-job';
import { ViewAllJob } from './components/job/view-all-job/view-all-job';
import { UpdateJob } from './components/job/update-job/update-job';
import { JobDetails } from './components/job/job-details/job-details';
import { ViewAllJobSeeker } from './components/job/view-all-job-seeker/view-all-job-seeker';
import { ViewAllEmployer } from './components/job/view-all-employer/view-all-employer';
import { AddJobDetails } from './components/job/add-job-details/add-job-details';
import { Updatejobdetails } from './components/job/updatejobdetails/updatejobdetails';

@NgModule({
  declarations: [
    App,
    RegistrationUser,
    LoginUser,
    ProfileUser,
    DashboardUser,
    RegistrationEmp,
    LoginEmp,
    ProfileEmp,
    DashboardEmp,
    Home,
    AddJob,
    ViewAllJob,
    UpdateJob,
    JobDetails,
    ViewAllJobSeeker,
    ViewAllEmployer,
    AddJobDetails,
    Updatejobdetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
