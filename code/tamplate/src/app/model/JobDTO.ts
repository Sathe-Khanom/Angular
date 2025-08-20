export interface JobDTO {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: number;
  jobType: string;
  postedDate: string;

  // Employer info
  employerId: number;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  companyWebsite: string;
  logo: string
}