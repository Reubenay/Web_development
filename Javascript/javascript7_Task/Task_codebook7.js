class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;

    }
    getSummary() {
        let borrowed = this.isBorrowed ? "This book has been borrowed" : "This book is available";
        return `Book: ${this.title} by ${this.author} (${this.year}).  ${borrowed} `
    }

    borrowBook() {
        this.isBorrowed = true;
        return `This book ${this.title} by ${this.author} (${this.year}) has been borrowed.`
    }
}

let book1 = new Book("Things fall APart", "Reuben AMorin", 2025);
let book2 = new Book("Lagos Tour", "Tony Stark", 2020);

console.log(book1.getSummary());
console.log(book2.getSummary());
book1.borrowBook();
book2.borrowBook();

console.log(book1.getSummary());
console.log(book2.getSummary());

// Excersie 2
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverage() {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  }

  getDetails() {
    let avg = this.calculateAverage();
    let status = avg < 50 ? "Failed" : " Passed";
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Average: " + avg);
    console.log("Status: " + status);
  }
}

let newStudent = new Student("Ayo", 18, [40, 50, 60]);
newStudent.getDetails();


