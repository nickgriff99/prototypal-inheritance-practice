function Student(name, age) {
  this.name = name;
  this.age = age;
  this.grades = [];
}

Student.prototype.addGrade = function(grade) {
  if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
    this.grades.push(grade);
    return `Grade ${grade} added for ${this.name}.`;
  } else {
    return 'Grade must be between 0 and 100.';
  }
}

Student.prototype.calculateAverageGrade = function() {
  if (this.grades.length === 0) {
    return 'No grades available.';
  } else {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return `Average grade for ${this.name} is ${(total / this.grades.length).toFixed(2)}.`;
  }
}

Student.prototype.hasPassed = function() {
  const average = this.calculateAverageGrade();
  if (typeof average === 'string') {
    return average;
  } else{
    return average >= 60 ? `${this.name} has passed.` : `${this.name} has not passed.`;
  } 
}

Student.prototype.getName = function() {
  return this.name;
}

Student.prototype.getAge = function() {
  return this.age;
}

function Course(title, students) {
  this.title = title;
  this.students = students || [];
}

Course.prototype.enrollStudent = function(student) {
  this.students.push(student);
  return `${student.getName()}) has been enrolled in ${this.title}.`;
}

Course.prototype.listStudents = function() {
  if (this.students.length === 0) {
    return `No students enrolled in ${this.title}.`;
  } else {
    return `Students enrolled in ${this.title}: ${this.students.map(student => student.getName()).join(', ')}`;
  }
}

const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
const student3 = new Student("Charlie", 21);
const student4 = new Student("Diana", 19);
const student5 = new Student("Ethan", 23);
const course1 = new Course("Mathematics");
console.log(student1.addGrade(85)); // "Grade 85 added for Alice."
console.log(student1.addGrade(90)); // "Grade 90 added for Alice."console.log(course1.enrollStudent(student1)); // "Alice has been enrolled in Mathematics."
console.log(course1.enrollStudent(student2)); // "Bob has been enrolled in Mathematics."
console.log(course1.enrollStudent(student5)); // "Ethan has been enrolled in Mathematics."
console.log(course1.listStudents()); // "Students enrolled