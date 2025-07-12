import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
{path:'header', component: Header},
{path:'footer', component: Footer},
{path:'login', component: Login},
{path:'reg', component: Register},
{path:'joblist', component: Joblist},
{path:'jobdetails', component: Jobdetails},
{path:'addjob', component: Addjob},
{path:'dash', component: Dashboard},
{path:'manage', component: Managejobs},
{path:'profile', component: Profile},
{path:'applied', component: Appliedjobs}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
