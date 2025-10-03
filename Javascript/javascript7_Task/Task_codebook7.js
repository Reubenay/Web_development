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

// Excercise 3
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
    console.log("Year: " + this.year);
  }

  isOld() {
    let now = new Date().getFullYear();
    return now - this.year > 10;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year);
    this.fuelType = fuelType;
  }

  getInfo() {
    super.getInfo();
    console.log("Fuel Type: " + this.fuelType);
  }
}

let Cr1 = new Car("Honda", "Civic", 2012, "Petrol");
Cr1.getInfo();
console.log("Is old? " + Cr1.isOld());

// Excersie 4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity) {
    this.items.push({ product: product, quantity: quantity });
  }

  removeProduct(name) {
    this.items = this.items.filter(item => item.product.name !== name);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].product.price * this.items[i].quantity;
    }
    if (total > 100) {
      return "Free Shipping";
    }
    return "Total: N" + total;
  }
}
let p1 = new Product("Bread", 40);
let p2 = new Product("Milk", 70);

let cart = new Cart();
cart.addProduct(p1, 1); 
cart.addProduct(p2, 1); 

console.log(cart.getTotal()); 
cart.removeProduct("Bread");
console.log(cart.getTotal()); 
