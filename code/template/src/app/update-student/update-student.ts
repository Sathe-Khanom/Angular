import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-student',
  standalone: false,
  templateUrl: './update-student.html',
  styleUrl: './update-student.css'
})
export class UpdateStudent implements OnInit {

  id: string = '';
  student: Student = new Student();


  constructor(

    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.loadStudentById();
  }

  loadStudentById() {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe({
      next: (res) => {
        this.student = res;
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  updateStudent(): void {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe({
        next: () => this.router.navigate(['/allstu']),
        error: err => console.error('Update failed', err)
      });
  }


}
