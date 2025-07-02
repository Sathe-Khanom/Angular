import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddStudent } from './add-student/add-student';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudent } from './update-student/update-student';
import { Addlocation } from './location/addlocation/addlocation';
import { Updatelocation } from './location/updatelocation/updatelocation';
import { Viewalllocation } from './location/viewalllocation/viewalllocation';

@NgModule({
  declarations: [
    App,
    Home,
    ViewAllStudent,
    AddStudent,
    UpdateStudent,
    Addlocation,
    Updatelocation,
    Viewalllocation
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
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
