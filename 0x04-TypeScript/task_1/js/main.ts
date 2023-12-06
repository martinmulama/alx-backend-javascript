// task_1/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Index signature to allow any additional attributes
}

// Function to create a Teacher object with initial properties
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes: Record<string, any> = {}
): Teacher {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes,
  };
}
