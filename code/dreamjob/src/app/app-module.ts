import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,  provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { Joblist } from './components/jobs/joblist/joblist';
import { Jobdetails } from './components/jobs/jobdetails/jobdetails';
import { Addjob } from './components/jobs/addjob/addjob';
import { Dashboard } from './components/admin/dashboard/dashboard';
import { Managejobs } from './components/admin/managejobs/managejobs';
import { Profile } from './components/user/profile/profile';
import { Appliedjobs } from './components/user/appliedjobs/appliedjobs';



@NgModule({
  declarations: [
    App,    
    Header,
    Footer,
    Login,
    Register,
    Joblist,
    Jobdetails,
    Addjob,
    Dashboard,
    Managejobs,
    Profile,
    Appliedjobs
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
