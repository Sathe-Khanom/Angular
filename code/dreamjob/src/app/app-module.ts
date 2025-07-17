import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { ViewJob } from './components/view-job/view-job';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddJob } from './components/add-job/add-job';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateJob } from './components/update-job/update-job';
import { JobDetails } from './components/job-details/job-details';
import { Registration } from './components/registration/registration';
import { UserProfile } from './components/user-profile/user-profile';
import { LoginUser } from './components/login-user/login-user';

@NgModule({
  declarations: [
    App,
    Home,
    ViewJob,
    AddJob,
    UpdateJob,
    JobDetails,
    Registration,
    UserProfile,
    LoginUser
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
