
let shoppingList = ["goat", "cow","biro", "pencil"]
shoppingList.push("ruler")
console.log(shoppingList)

shoppingList.shift();
console.log(shoppingList.length());

for( let i = 0; i < shoppingList.length; i++) {
    console.log (`shoppingList ${ i + 1}: ${shoppingList[1]}`);

    // Excersie 2


let grades = [85, 42, 7, 45, 77, 56, 24, 90, 66, 38, 59, 49, 73, 100];

function getAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}
function getHighest(grades) {
  let highest = grades[0];
  for (let grade of grades) {
    if (grade > highest) {
      highest = grade;
    }
  }
  return highest;
}

function getLowest(grades) {
  let lowest = grades[0];
  for (let grade of grades) {
    if (grade < lowest) {
      lowest = grade;
    }
  }
  return lowest;
}
function getPassRate(grades) {
  let passCount = 0;
  for (let grade of grades) {
    if (grade >= 50) {
      passCount++;
    }
  }
  return (passCount / grades.length) * 100;
}

}
// excercise 3
let movies = ["anaconda", "George of the jungle", "lakatabu", "iron fist"];
let ratings = [5.2, 8.5, 5.0, 9.2];

function addMovie(movie, rating) {
  movies.push("The Karate Kid");
  ratings.push(9.8);
}

function getAverageRating() {
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  return sum / ratings.length;
}
function getTopMovie() {
  let highestRating = ratings[0];
  let topIndex = 0;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > highestRating) {
      highestRating = ratings[i];
      topIndex = i;
    }
  }
  return `${movies[topIndex]} (${highestRating})`;
}

function printSummary() {
  console.log("Movie Ratings Summary:");
  for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i]}: ${ratings[i]}`);
  }
}

// excercise 4
let studentNames = [];
let studentGrades = [];

function addStudent(name, grade) {
  if (typeof grade !== "number" || grade < 0 || grade > 100) {
    console.log(`Invalid grade,  Must be between 0 and 100.`);
    return;
  }
  studentNames.push(name);
  studentGrades.push(grade);
}

function getClassAverage() {
  let sum = 0;
  for (let grade of studentGrades) {
    sum += grade;
  }
  return (sum / studentGrades.length);
}
function getTopStudent() {
  let maxGrade = Math.max(...studentGrades);
  let index = studentGrades.indexOf(maxGrade);
  return { name: studentNames[index], grade: maxGrade };
}

function getBottomStudent() {
  let minGrade = Math.min(...studentGrades);
  let index = studentGrades.indexOf(minGrade);
  return { name: studentNames[index], grade: minGrade };
}

// 4. Grade categorizer
function getLetterGrade(grade) {
  if (grade >= 90) return "A";
  else if (grade >= 80) return "B";
  else if (grade >= 70) return "C";
  else if (grade >= 60) return "D";
  else return "F";
}

function generateReport() {
  let students = [];
  for (let i = 0; i < studentNames.length; i++) {
    students.push({
      name: studentNames[i],
      grade: studentGrades[i],
      letter: getLetterGrade(studentGrades[i])
    });
  }
}

