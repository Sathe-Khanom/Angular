import { ChangeDetectorRef, Component } from '@angular/core';

import { JobseekerService } from '../../service/jobseeker.service';
import { Education } from '../../model/education.model';
import { Experience } from '../../model/experience.model';
import { Extracurricular } from '../../model/extracurricular.model';
import { EducationService } from '../../service/education.service';
import { ExperienceService } from '../../service/experience.service';
import { ExtracurricularService } from '../../service/extracurricular.service';
import { Skill } from '../../model/skill.model';
import { Training } from '../../model/training.model';
import { Refference } from '../../model/refference.model';
import { Language } from '../../model/language.model';
import { Hobby } from '../../model/hobby.model';
import { SkillService } from '../../service/skill.service';
import { TrainingService } from '../../service/training.service';
import { RefferenceService } from '../../service/refference.service';
import { LanguageService } from '../../service/language.service';
import { HobbyService } from '../../service/hobby.service';

@Component({
  selector: 'app-job-seeker-profile-component',
  standalone: false,
  templateUrl: './job-seeker-profile-component.html',
  styleUrl: './job-seeker-profile-component.css'
})
export class JobSeekerProfileComponent {

  jobSeeker: any;

  educations: Education[] = [];

   newEducation = {
    level: '',
    institute: '',
    result: '',
    year: ''
  };

  experiences: Experience[] = [];

  newExperience: Experience = {
     company: '',
     position: '',
     fromDate: ''
       };

  extracurriculars: Extracurricular[] = [];
  newExtracurricular: Extracurricular = { 
    title: '',
    role: '',
    description: ''
     };

       skills: Skill[] = [];

  newSkill: Skill = {
    name: '',
    level: ''
  };

  trainings: Training[] = [];

  newTraining: Training = {
    title: '',
    institute: '',
    duration: '',
    description: ''
  }; 

    references: Refference[] = [];

  newReference: Refference = {
    name: '',
    contact: '',
    relation: ''
  };

    languages: Language[] = [];

  newLanguage: Language = {
    name: '',
    proficiency: ''
  };

   hobbies: Hobby[] = [];

  newHobby: Hobby = {
    name: ''
  }; 


 

  constructor(
    private jobSeekerService: JobseekerService,
    private cdr: ChangeDetectorRef,
    private educationService: EducationService,
    private expService: ExperienceService,
    private extracurricularService: ExtracurricularService,
    private skillService: SkillService,
    private trainingService: TrainingService,
    private refferenceService: RefferenceService,
    private languageService: LanguageService,
    private hobbyService: HobbyService,
  ) { }

   ngOnInit(): void {
    this.getProfile();
    this.loadEducations();
    this.loadExperiences();
    this.loadExtracurriculars();
    this.loadSkills();
    this.loadTrainings();
    this.loadReferences();
    this.loadLanguages();
    this.loadHobbies();
 
  }


   loadHobbies(): void {
    this.hobbyService.getAllHobbies().subscribe({
      next: (data) => {
        this.hobbies = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load hobbies', err)
    });
  }

  addHobby(): void {
    this.hobbyService.addHobby(this.newHobby).subscribe({
      next: () => {
        this.newHobby = { name: '' };
        this.loadHobbies();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add hobby', err)
    });
  }

  deleteHobby(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this hobby?')) return;

    this.hobbyService.deleteHobby(id).subscribe({
      next: () => {
        this.loadHobbies();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete hobby:', err)
    });
  }

  loadLanguages(): void {
    this.languageService.getAllLanguages().subscribe({
      next: (data) => {
        this.languages = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load languages', err)
    });
  }

  addLanguage(): void {
    this.languageService.addLanguage(this.newLanguage).subscribe({
      next: () => {
        this.newLanguage = { name: '', proficiency: '' };
        this.loadLanguages();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add language', err)
    });
  }

  deleteLanguage(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this language?')) return;

    this.languageService.deleteLanguage(id).subscribe({
      next: () => {
        this.loadLanguages();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete language:', err)
    });
  }


  loadReferences(): void {
    this.refferenceService.getAllReferences().subscribe({
      next: (data) => {
        this.references = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load references', err)
    });
  }

  addReference(): void {
    this.refferenceService.addReference(this.newReference).subscribe({
      next: () => {
        this.newReference = { name: '', contact: '', relation: '' };
        this.loadReferences();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add reference', err)
    });
  }

  deleteReference(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this reference?')) return;

    this.refferenceService.deleteReference(id).subscribe({
      next: () => {
        this.loadReferences();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete reference:', err)
    });
  }


  loadTrainings(): void {
    this.trainingService.getAllTrainings().subscribe({
      next: (data) => {
        this.trainings = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load trainings', err)
    });
  }

  addTraining(): void {
    this.trainingService.addTraining(this.newTraining).subscribe({
      next: () => {
        this.newTraining = { title: '', institute: '', duration: '', description: '' };
        this.loadTrainings();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add training', err)
    });
  }

  deleteTraining(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this training?')) return;

    this.trainingService.deleteTraining(id).subscribe({
      next: () => {
        this.loadTrainings();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete training:', err)
    });
  }


  loadSkills(): void {
    this.skillService.getAllSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to load skills', err)
    });
  }

  // Add a new skill
  addSkill(): void {
    this.skillService.addSkill(this.newSkill).subscribe({
      next: () => {
        this.newSkill = { name: '', level: '' }; // Reset form
        this.loadSkills();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to add skill', err)
    });
  }

  // Delete a skill by ID
  deleteSkill(id: number | undefined): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this skill?')) return;

    this.skillService.deleteSkill(id).subscribe({
      next: () => {
        this.loadSkills();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Failed to delete skill:', err)
    });
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
