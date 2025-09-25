function isStrongPassword(password) {
    if (password.length < 8) {
        return `Password too short, minimum of 8 characters are required`
    }
    let numberIncluded = false;
    let specialCharacters = "_-=+!@#$%^&*(),.?\":{}|<>'/[]";
    let specialPresent = false;
    for (char of password) {
        if (!isNaN(char)) {
            numberIncluded = true;
        }
        if (specialCharacters.includes(char)) {
            specialPresent = true;
        }
        if (numberIncluded && specialPresent) {
            break;
        }
    }
    if (numberIncluded === false && specialPresent === false) {
        console.log("Weak Password! Your Password must have at least a number and special character")
    }
    else if (numberIncluded === false) {
        console.log("Weak Password, Your password must contain at least number")
    }
    else if (specialPresent === false) {
        console.log("Your Password must contain at least a special character")
    }
    else {
        console.log("Strong Password!! Welcome.")
    }
}



// formatPercentage

function formatPercentage(value) {
    console.log(`${value.toFixed(1)}%`)
}

// Calculator function
function calculateCompoundInterest(principal, rate, year) {
    console.log(`Amount: ${principal * (1 + rate) ** year}`)
}

// cangraduate function
function canGraduate(credits, gpa) {
    if (isNaN(credits) || isNaN(gpa)) {
        console.log("Please input valid numbers for credits and GPA.");
    } else if (credits < 120 || gpa < 2.0) {
        console.log("Unfortunately, you don't meet the requirements to graduate.");
    } else {
        console.log(`Congratulations, you finally escaped Uni! Your credits are ${credits} and your GPA is ${gpa}.`);
    }
}

//  reverseWord()

function reverseWord(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.reverse();
    let reversedSentence = reversedWords.join(" ");
    console.log(reversedSentence);
}
