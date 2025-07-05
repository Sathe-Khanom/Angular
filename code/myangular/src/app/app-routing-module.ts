import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { LogIn } from './USER/log-in/log-in';

const routes: Routes = [
  {path:'', component:Home},
  {path:'login', component:LogIn}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
