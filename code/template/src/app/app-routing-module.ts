import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { AddStudent } from './add-student/add-student';
import { UpdateStudent } from './update-student/update-student';
import { Addlocation } from './location/addlocation/addlocation';

const routes: Routes = [
  {path:'',component:Home},
  {path:'allstu', component:ViewAllStudent},
  {path:'addstu', component:AddStudent},
  {path:'upstu/:id', component: UpdateStudent},
  {path: 'allloc', component: Addlocation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
