import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

categories = [
    { name: 'IT & Software', jobs: 120 },
    { name: 'Marketing', jobs: 80 },
    { name: 'Finance', jobs: 60 },
    { name: 'Education', jobs: 45 }
  ];

  recentJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Dhaka' },
    { id: 2, title: 'Digital Marketer', company: 'AdWorld', location: 'Chittagong' },
    { id: 3, title: 'Accountant', company: 'FinancePro', location: 'Sylhet' },
    { id: 4, title: 'School Teacher', company: 'EduCare', location: 'Rajshahi' }
  ];

}

