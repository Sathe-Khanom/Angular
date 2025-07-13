import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ViewJob } from './components/view-job/view-job';

const routes: Routes = [
  {path:'home', component: Home},
  {path:'viewjob', component: ViewJob}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
