import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JobModelModule { 

  id !: string;
  title !: string;
  description !: string;
  category !: string;
  jobtype !: string;
  requirement !: string;
  location !: string;
  pdate !: Date;
  deadlinedate !: Date;





}
