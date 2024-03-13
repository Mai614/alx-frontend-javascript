export interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

export class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Alice", "Smith");
console.log(student.workOnHomework());
console.log(student.displayName());
