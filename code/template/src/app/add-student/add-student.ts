import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student';
import { Student } from '../../model/student.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent implements OnInit {

  formGroup !: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      fee: ['']


    })
  }

  addStudent(): void {

    const student: Student = { ...this.formGroup.value };

    this.studentService.saveStudent(student).subscribe({

      next: (res) => {

        console.log("Student Saved", res);
        this.formGroup.reset();
        this.router.navigate(['allstu']);
      },

      error: (error) => {

        console.log(error);

      }



    })


  }


}
