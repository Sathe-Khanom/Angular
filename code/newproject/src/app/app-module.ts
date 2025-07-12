import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Addjob } from './components/addjob/addjob';
import { Applicantlist } from './components/applicantlist/applicantlist';
import { Editjob } from './components/editjob/editjob';
import { Employer } from './components/employer/employer';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Jobapplicationlist } from './components/jobapplicationlist/jobapplicationlist';
import { Jobseemore } from './components/jobseemore/jobseemore';
import { Jobs } from './components/jobs/jobs';
import { Login } from './components/login/login';
import { Showcv } from './components/showcv/showcv';
import { Uploadfile } from './components/uploadfile/uploadfile';
import { Useredit } from './components/useredit/useredit';
import { Userprofile } from './components/userprofile/userprofile';
import { User } from './components/user/user';
import { Viewalljob } from './components/viewalljob/viewalljob';
import { Signup } from './components/signup/signup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Addjob,
    Applicantlist,
    Editjob,
    Employer,
    Header,
    Footer,
    Home,
    Jobapplicationlist,
    Jobseemore,
    Jobs,
    Login,
    Showcv,
    Uploadfile,
    Useredit,
    Userprofile,
    User,
    Viewalljob,
    Signup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
    
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
