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
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
