export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  qualification?: string;
  cellNo?: string;
  gender?: string;
  role?: string;
  dob?: Date;
  image?: string;
  cvFileName?: string;
  cvContentType?: string;
  cvData?: string;
  isEnable: boolean;
  jobApplications: JobApplication[];

  // Index signature to allow indexing by string keys
  [key: string]: any;
}
export interface JobApplication {
  // Define properties of the JobApplication model if needed
}