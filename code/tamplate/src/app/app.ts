import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'tamplate';



  showSidebar = true;
  showNavbar = true;
  showJobsHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const jobsRoutes = event.url.startsWith('/alljobs') || event.url.startsWith('/jobs/');
        this.showSidebar = !jobsRoutes; // hide sidebar for jobs routes
        this.showNavbar = !jobsRoutes; // hide main navbar for jobs routes
        this.showJobsHeader = jobsRoutes; // show custom jobs header
      }
    });
  }
  


}
