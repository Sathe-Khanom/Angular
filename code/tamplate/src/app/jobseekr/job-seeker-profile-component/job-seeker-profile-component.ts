import { ChangeDetectorRef, Component } from '@angular/core';

import { JobseekerService } from '../../service/jobseeker.service';
import { Education } from '../../model/education.model';
import { Experience } from '../../model/experience.model';
import { Extracurricular } from '../../model/extracurricular.model';
import { EducationService } from '../../service/education.service';
import { ExperienceService } from '../../service/experience.service';
import { ExtracurricularService } from '../../service/extracurricular.service';

@Component({
  selector: 'app-job-seeker-profile-component',
  standalone: false,
  templateUrl: './job-seeker-profile-component.html',
  styleUrl: './job-seeker-profile-component.css'
})
export class JobSeekerProfileComponent {

  jobSeeker: any;

  educations: Education[] = [];

  experiences: Experience[] = [];

  newExperience: Experience = { company: '', position: '', fromDate: '' };

  extracurriculars: Extracurricular[] = [];
  newExtracurricular: Extracurricular = { title: '', role: '', description: '' };

  newEducation = {
    level: '',
    institute: '',
    result: '',
    year: ''
  };

  constructor(private jobSeekerService: JobseekerService,
    private cdr: ChangeDetectorRef,
    private educationService: EducationService,
    private expService: ExperienceService,
    private extracurricularService: ExtracurricularService
  ) { }

   ngOnInit(): void {
    this.getProfile();
    this.loadEducations();
    this.loadExperiences();
     this.loadExtracurriculars(); 
  }


   // ✅ Load extracurriculars
  loadExtracurriculars(): void {
    this.extracurricularService.getAllExtracurriculars().subscribe({
      next: (data) => {
        this.extracurriculars = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load extracurriculars', err)
    });
  }


  // ✅ Add extracurricular
  addExtracurricular(): void {
    this.extracurricularService.addExtracurricular(this.newExtracurricular).subscribe({
      next: () => {
        this.newExtracurricular = { title: '', role: '', description: '' };
        this.loadExtracurriculars();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add extracurricular', err)
    });
  }

   // ✅ Delete extracurricular
  deleteExtracurricular(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this extracurricular?')) return;

    this.extracurricularService.deleteExtracurricular(id).subscribe({
      next: () => {
        this.loadExtracurriculars();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete extracurricular:', err)
    });
  }

  loadEducations(): void {
    this.educationService.getEducations().subscribe({
      next: (data) => {
        this.educations = data;

        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load educations', err);
      }
    });
  }

  getProfile() {

    this.jobSeekerService.getProfile().subscribe({
      next: (data) => {
        this.jobSeeker = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }



  addEducation(): void {
    this.educationService.addEducation(this.newEducation).subscribe({
      next: async (addedEdu: any) => {
        if (!this.jobSeeker.educations) {
          this.jobSeeker.educations = [];
        }
        this.jobSeeker.educations.push(addedEdu);
        this.newEducation = { level: '', institute: '', result: '', year: '' };


      },
      error: (err) => {
        console.error('Failed to add education', err);
      }
    });
  }


  deleteEducation(id: number): void {
    if (!confirm('Are you sure you want to delete this education?')) {
      return;
    }

    this.educationService.deleteEducation(id).subscribe({
      next: () => {
        // ✅ Remove from UI
        this.loadEducations();
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to delete education:', err);
        alert('Failed to delete education.');
      }
    });
  }



  loadExperiences(): void {
    this.expService.getAllExperiences().subscribe(data => {
      this.experiences = data;
      this.cdr.markForCheck();
    });
  }

  addExperience(): void {
    this.expService.addExperience(this.newExperience).subscribe(() => {
      this.newExperience = { company: '', position: '', fromDate: '' };
      this.loadExperiences();
      this.cdr.markForCheck();
    });
  }

  deleteExperience(id: number | undefined): void {
    if (!id) return;
    this.expService.deleteExperience(id).subscribe(() => {
      this.loadExperiences();
      this.cdr.markForCheck();
    });
  }

}
