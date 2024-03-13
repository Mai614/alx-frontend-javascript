interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "saad",
  lastName: "Mina",
  age: 42,
  location: "cairo",
};

const studentTwo: Student = {
  firstName: "Mero",
  lastName: "tala",
  age: 25,
  location: "eg",
};

const studentsList: Array<Student> = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement("table");
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tBody.insertRow();
  const rowFirstName: HTMLTableCellElement = row.insertCell();
  const rowLocation: HTMLTableCellElement = row.insertCell();
  rowFirstName.innerHTML = student.firstName;
  rowLocation.innerHTML = student.location;
});

document.body.appendChild(table);
