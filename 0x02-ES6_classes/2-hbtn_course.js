class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    // Verifying the types of attributes during object creation
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(this._students) || !this._students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for length attribute
  get length() {
    return this._length;
  }
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for students attribute
  get students() {
    return this._students;
  }
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

export default HolbertonCourse;
