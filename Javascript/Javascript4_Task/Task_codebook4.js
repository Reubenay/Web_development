// Task 1
function createMovie(title, director, releaseYear, rating) {
    return {
    title,
    director,
    releaseYear,
    rating,
    isWatched: false,
    getSummary() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  };
}
let movieCollection = [
  createMovie("Inception", "Christopher Nolan", 2010, 9),
  createMovie("Fighting Tiger", "Reuben Mulero", 2056, 8.6),
  createMovie("Lakatabu", "Mr Badru", 2010, 4.5),
  createMovie("Fighting giant", "Mr Badru", 2026, 9.9)
];

for (let movie of movieCollection) {
  movie.isWatched = true;
}

// Excercise 2
function createCartItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    getTotal() {
      return this.price * this.quantity;
    }
  };
}
let cart = [
  createCartItem("Rice", 1200, 1),
  createCartItem("Mangoes", 150, 2),
  createCartItem("Egg", 40, 3)
];

function getCartTotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.getTotal();
  }
  return total;
}

// exercise 3
let member = {
  name: "Reuben Mulero",
  membershipType: "premium", 
  borrowedBooks: [],

  borrowBook(book) {
    this.borrowedBooks.push(book);
  },
  getBorrowedCount() {
    return this.borrowedBooks.length;
  },
  getMembershipInfo() {
    if (this.membershipType === "premium") {
      return `${this.name} has a Premium membership hence borrowing is Unlimited`;
    } else if (this.membershipType === "basic") {
      return `${this.name} has a Basic membership with limit of 5books`;
    } else {
      return `${this.name} has an unknown membership type.`;
    }
  }
}

