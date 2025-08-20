import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { AddjobseekerComponent } from './jobseekr/addjobseeker.component/addjobseeker.component';
import { JobSeekerProfileComponent } from './jobseekr/job-seeker-profile-component/job-seeker-profile-component';
import { LoginComponent } from './auth/login.component/login.component';
import { AddEmployerComponent } from './employer/add-employer.component/add-employer.component';
import { EmployerProfileComponent } from './employer/employer-profile.component/employer-profile.component';
import { AddJobComponent } from './jobs/add-job.component/add-job.component';
import { JobDetailsComponent } from './jobs/job-details.component/job-details.component';
import { AllJobs } from './jobs/all-jobs/all-jobs';
import { JobsHeader } from './layout/jobs-header/jobs-header';

@NgModule({
  declarations: [
    App,
    Sidebar,
    Navbar,
    Footer,
    Dashboard,
    AlluserComponent,
    AddjobseekerComponent,
    JobSeekerProfileComponent,
    LoginComponent,
    AddEmployerComponent,
    EmployerProfileComponent,
    AddJobComponent,
    JobDetailsComponent,
    AllJobs,
    JobsHeader
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
    provideHttpClient(
      withFetch()
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
