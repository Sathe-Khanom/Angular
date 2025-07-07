import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { LogIn } from './USER/log-in/log-in';
import { Registration } from './USER/registration/registration';
import { Profile } from './USER/profile/profile';

const routes: Routes = [
  {path:'', component:Home},
  {path:'login', component:LogIn},
  {path: 'reg', component: Registration},
  {path:'profile', component: Profile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
