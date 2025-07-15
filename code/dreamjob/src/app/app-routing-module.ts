import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ViewJob } from './components/view-job/view-job';
import { AddJob } from './components/add-job/add-job';
import { UpdateJob } from './components/update-job/update-job';
import { JobDetails } from './components/job-details/job-details';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'viewjob', component: ViewJob },
  { path: 'addjob', component: AddJob },
  { path: 'update/:id', component: UpdateJob },
  {path: 'jobdetails/:id', component: JobDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
