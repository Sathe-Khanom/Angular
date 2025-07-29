import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { AddjobseekerComponent } from './jobseekr/addjobseeker.component/addjobseeker.component';

const routes: Routes = [
  {path: 'allUser' , component:AlluserComponent},
  {path: '' , component:AddjobseekerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
