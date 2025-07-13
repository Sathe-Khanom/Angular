import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
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

@NgModule({
  declarations: [
    App,
    ProfileUser,
    DashboardUser,
    RegistrationEmp,
    LoginEmp,
    ProfileEmp,
    DashboardEmp,
    Home,
    AddJob,
    ViewAllJob,
    UpdateJob   
    
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
